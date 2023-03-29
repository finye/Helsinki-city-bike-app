import { CityBikeJourney, CityBikeStation } from "./types";

const LIMIT = 10

const hasEmptyValue = (row: any): boolean => {
    for (const key in row) {
        if (row.hasOwnProperty(key)) {
            if (row[key] === '' || row[key] === null) {
                return true;
            }
        }
    }

    return false;
}

const mapCityBikeJourneyDataSet = (row: any): CityBikeJourney | undefined => {
    const mappedRow = {
        coveredDistanceInMeters: Number(row['Covered distance (m)']),
        durationInSeconds: Number(row['Duration (sec.)']),
    }
    const isJourneyLessThanTenSeconds = mappedRow.durationInSeconds < LIMIT
    const isCoveredDistanceLessThanTenMeters = mappedRow.coveredDistanceInMeters < LIMIT

    if (hasEmptyValue(row) || isCoveredDistanceLessThanTenMeters || isJourneyLessThanTenSeconds) {
        console.log('Row is invalid!');
        return
    }

    return {
        ...mappedRow,
        departure: row['Departure'],
        returnTime: row['Return'],
        departureStationId: Number(row['Departure station id']),
        departureStationName: row['Departure station name'],
        returnStationId: Number(row['Return station id']),
        returnStationName: row['Return station name'],
    }
}

const mapCityBikeStationDataSet = (row: any): CityBikeStation | undefined => {
    if (hasEmptyValue(row)) {
        console.log('Row has empty value');
        return
    }

    return {
        stationId: Number(row['ID']),
        name: row['Name'],
        address: row['Adress'],
        city: row['Kaupunki'],
        operator: row['Operaattor'],
        capacity: Number(row['Kapasiteet']),
        x: Number(row['x']),
        y: Number(row['y']),
    }
}

export {
    mapCityBikeStationDataSet,
    mapCityBikeJourneyDataSet
}
