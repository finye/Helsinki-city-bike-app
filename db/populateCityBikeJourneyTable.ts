import db from './db-config'
import { mapCityBikeJourneyDataSet } from './mappers';
import { parseCityBikeJourneyDataset } from './parseDataset';
import { CityBikeJourney } from './types';

export const insertCityBikeJourney = async (cityBikeJourney: CityBikeJourney[]) => {
    const client = await db.connect();

    const insertQuery = `
          INSERT INTO "city-bikes-journey" (departure, return_time, departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance_in_meters, duration_in_seconds)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `;

    try {
        // Begin a transaction
        await client.query('BEGIN');

        const insertPromises = cityBikeJourney.map(async (cityBikeJourney) => {
            const { departure, returnTime, departureStationId, departureStationName, returnStationId, returnStationName, coveredDistanceInMeters, durationInSeconds } = cityBikeJourney;
            const res = await client.query(insertQuery, [departure, returnTime, departureStationId, departureStationName, returnStationId, returnStationName, coveredDistanceInMeters, durationInSeconds]);

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

/* const _sampleData = sampleData.map(e => mapCityBikeJourneyDataSet(e) as CityBikeJourney);
(async () => await insertCityBikeJourney(_sampleData))(); */

(async () => await insertCityBikeJourney(await parseCityBikeJourneyDataset('./dataset/2021-05.csv', mapCityBikeJourneyDataSet)))();
