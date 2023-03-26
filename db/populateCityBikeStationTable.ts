import db from './db-config'
import { mapCityBikeStationDataSet } from "./mappers";
import { parseCityBikeStationDataset } from "./parseDataset";
import { CityBikeStation } from './types';

const insertCityBikeStations = async (cityBikeStations: CityBikeStation[]) => {
    const client = await db.connect();

    const insertQuery = `
          INSERT INTO "city_bikes_station" (station_id, name, address, city, operator, capacity, x, y)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `;

    try {
        // Begin a transaction
        await client.query('BEGIN');

        const insertPromises = cityBikeStations.map(async (cityBikeStation) => {
            const { stationId, name, address, city, operator, capacity, x, y } = cityBikeStation;
            const res = await client.query(insertQuery, [stationId, name, address, city, operator, capacity, x, y]);

            console.log('Data inserted successfully:', res.rowCount);
        })

        await Promise.all(insertPromises);

        // Commit the transaction
        await client.query('COMMIT');
        console.log('All data inserted successfully');
    } catch (err) {
        // Roll back the transaction if an error occurs
        await client.query('ROLLBACK');
        console.error('Error inserting data:', err);
    } finally {
        client.release();
    }

}

(async () => await insertCityBikeStations(await parseCityBikeStationDataset('./dataset/city_bike_stations.csv', mapCityBikeStationDataSet)))();

