export interface CityBikeStation {
    station_id: number;
    name: string;
    address: string;
    city: string;
    operator: string;
    capacity: number;
    x: string;
    y: string;
    departure_count?: number;
    return_count?: number;
}
export interface CityBikesJourney {
    departure: string;
    return_time: string;
    departure_station_id: number;
    departure_station_name: string;
    return_station_id: number;
    return_station_name: string;
    covered_distance_in_meters: number;
    duration_in_seconds: number;

}

export type ColumnDefinitionType<T, K extends keyof T> = {
    key: K;
    header: string;
    width?: number;
}

export type TableProps<T, K extends keyof T> = {
    data: Array<T>;
    columns: Array<ColumnDefinitionType<T, K>>;
}

export type TableRowsProps<T, K extends keyof T> = {
    data: Array<T>;
    columns: Array<ColumnDefinitionType<T, K>>;
}
