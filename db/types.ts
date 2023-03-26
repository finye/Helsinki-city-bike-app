export interface CityBikeJourney {
    [key: string]: string | number; // used to index the object
    departure: string;
    returnTime: string;
    departureStationId: number;
    departureStationName: string;
    returnStationId: number;
    returnStationName: string;
    coveredDistanceInMeters: number;
    durationInSeconds: number;
}

export interface CityBikeStation {
    [key: string]: string | number; // used to index the object
    stationId: number;
    name: string;
    address: string;
    city: string;
    operator: string;
    capacity: number;
    x: number;  // longitude
    y: number;  // latitude
}

export type CityBikeMapper = CityBikeJourney | CityBikeJourney
