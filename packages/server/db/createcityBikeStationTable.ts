import createTableIfNotExists from "./createTable";

const createCityBikeStationTable = async () => {
    const createCityBikeStationTableQuery = `
        CREATE TABLE \"city_bikes_station\" (
            station_id INTEGER,
            name VARCHAR(255),
            address VARCHAR(255),
            city VARCHAR(255),
            operator VARCHAR(255),
            capacity INTEGER,
            x NUMERIC,
            y NUMERIC
        );
    `;

    await createTableIfNotExists('city_bikes_station', createCityBikeStationTableQuery);
}

(async () => await createCityBikeStationTable())();