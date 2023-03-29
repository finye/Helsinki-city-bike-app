import db from './db/db-config'
import express, { Request, Response } from 'express'

const app = express();

app.get('/journeys', (req, res) => getDataFromTable(req, res, 'city-bikes-journey'));

app.get('/stations', async (req, res) => getDataFromTable(req, res, 'city_bikes_station'));

app.get('/station/:station_id', async (req, res) => {
    const stationId = parseInt(req.params.station_id, 10);

    const query = {
        text: `SELECT s.station_id , s.name , s.address , s.x, s.y, COUNT (j.departure_station_id) AS journey_count
        FROM \"city_bikes_station\" s
        LEFT JOIN \"city-bikes-journey\" j ON j.departure_station_id = $1
        GROUP BY s.station_id, s.name , s.address , s.x, s.y
        ORDER BY journey_count DESC`,

        values: [stationId],
    };

    const result = await db.query(query)

    return res.json(result.rows[0])
})

const getDataFromTable = async (req: Request, res: Response, tableName: string) => {
    const page = parseInt(req.query.page as string) || 1; // default to page 1
    const pageSize = parseInt(req.query.pageSize as string) || 10; // default to 10 items per page
    const offset = (page - 1) * pageSize;

    try {
        const { rows } = await db.query(
            `SELECT * FROM \"${tableName}\" LIMIT $1 OFFSET $2`,
            [pageSize, offset]
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