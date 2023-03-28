import Table from "../table/Table"
import { ColumnDefinitionType, CityBikeStation } from "../table/types"

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
        header: 'Longitude'
    },
    {
        key: 'y',
        header: 'Latitude'
    }
]

interface StationsProps {
    data: CityBikeStation[]
}

const Stations = ({ data }: StationsProps) => {
    return (
        <>
            <p> Station list </p>
            <Table data={data} columns={columns} />
        </>
    )
}

export default Stations