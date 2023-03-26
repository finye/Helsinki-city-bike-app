import { CityBikeJourney, CityBikeStation } from "./types";

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
    if (hasEmptyValue(row)) {
        console.log('Row has empty value');
        return
    }

    return {
        departure: row['Departure'],
        returnTime: row['Return'],
        departureStationId: Number(row['Departure station id']),
        departureStationName: row['Departure station name'],
        returnStationId: Number(row['Return station id']),
        returnStationName: row['Return station name'],
        coveredDistanceInMeters: Number(row['Covered distance (m)']),
        durationInSeconds: Number(row['Duration (sec.)']),
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
