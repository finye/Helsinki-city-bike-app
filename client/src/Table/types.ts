export interface CityBikeStation {
    station_id: number;
    name: string;
    address: string;
    city: string;
    operator: string;
    capacity: number;
    x: string;
    y: string;
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
