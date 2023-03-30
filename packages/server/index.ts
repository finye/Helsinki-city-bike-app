import db from './db/db-config'
import express, { Request, Response } from 'express'

const app = express();

app.get('/journeys', (req, res) => getDataFromTable(req, res, 'city-bikes-journey'));

app.get('/stations', async (req, res) => getDataFromTable(req, res, 'city_bikes_station'));

app.get('/station/:station_id', async (req, res) => {
    const stationId = parseInt(req.params.station_id, 10);

    const query = {
        text: `
        SELECT 
            s.station_id,
            s.name,
            s.address,
            s.x,
            s.y,
            COALESCE(d.departure_count, 0) AS departure_count,
            COALESCE(r.return_count, 0) AS return_count
        FROM 
            "city_bikes_station" s
            LEFT JOIN 
                (SELECT 
                    departure_station_id, 
                    COUNT(*) AS departure_count
                FROM 
                    "city-bikes-journey"
                WHERE 
                    departure_station_id = $1
                GROUP BY 
                    departure_station_id
                ) d ON s.station_id = d.departure_station_id
            LEFT JOIN 
                (SELECT 
                    return_station_id, 
                    COUNT(*) AS return_count
                FROM 
                    "city-bikes-journey"
                WHERE 
                    return_station_id = $1
                GROUP BY 
                    return_station_id
                ) r ON s.station_id = r.return_station_id
        WHERE 
            s.station_id = $1;
        `,

        values: [stationId],
    };

    const result = await db.query(query)

    return res.json(result.rows[0])
})

const getDataFromTable = async (req: Request, res: Response, tableName: string) => {
    const page = parseInt(req.query.page as string) || 1; // default to page 1
    const pageSize = parseInt(req.query.pageSize as string) || 10; // default to 10 items per page
    const offset = (page - 1) * pageSize;
    const searchTerm = req.query.q

    try {
        let query = `SELECT * FROM \"${tableName}\"`

        if (searchTerm) {
            query += ` WHERE departure_station_name ILIKE $3 OR return_station_name ILIKE $3`
        }

        query += ` LIMIT $1 OFFSET $2`

        const { rows } = await db.query(
            query,
            searchTerm ? [pageSize, offset, `%${searchTerm}%`] : [pageSize, offset]
        );

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Internal Server Error: ${tableName}`);
    }
}

app.listen(3001, () => {
    console.log('Server is listening on port 3001');
});