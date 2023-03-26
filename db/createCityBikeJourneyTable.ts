import createTableIfNotExists from "./createTable";

const createCityBikeJourneyTable = async () => {
    const createCityBikeJourneyTableQuery = `
        CREATE TABLE \"city-bikes-journey\" (
            departure TIMESTAMP,
            return_time TIMESTAMP,
            departure_station_id INTEGER,
            departure_station_name VARCHAR(255),
            return_station_id INTEGER,
            return_station_name VARCHAR(255),
            covered_distance_in_meters NUMERIC,
            duration_in_seconds INTEGER
        );
    `;

    await createTableIfNotExists('city-bikes-journey', createCityBikeJourneyTableQuery);
}

(async () => await createCityBikeJourneyTable())();