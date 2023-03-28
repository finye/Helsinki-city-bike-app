import Table from "../table/Table"
import { ColumnDefinitionType, CityBikeStation } from "../table/types"
import dummyStationsData from "../data/stations.json"

const columns: ColumnDefinitionType<CityBikeStation, keyof CityBikeStation>[] = [

    {
        key: 'station_id',
        header: 'Station ID',
    },
    {
        key: 'name',
        header: 'Name',
        width: 150
    },
    {
        key: 'address',
        header: 'Address'
    },
    {
        key: 'city',
        header: 'City'
    },
    {
        key: 'operator',
        header: 'Operator'
    },
    {
        key: 'capacity',
        header: 'Capacity'
    },
    {
        key: 'x',
        header: 'X'
    },
    {
        key: 'y',
        header: 'Y'
    }
]
export function Stations() {
    return (
        <>
            <p> Station list </p>
            <Table data={dummyStationsData} columns={columns} />
        </>
    )
}