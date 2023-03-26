import db from './db/db-config'
import express, { Request, Response } from 'express'

const app = express();

app.get('/journeys', (req, res) => getDataFromTable(req, res, 'city-bikes-journey'));

app.get('/stations', async (req, res) => getDataFromTable(req, res, 'city_bikes_station'));

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

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});