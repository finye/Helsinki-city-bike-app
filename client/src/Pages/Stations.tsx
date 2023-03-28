import Table from "../table/Table"
import { ColumnDefinitionType, CityBikeStation } from "../table/types"

const dummyData = [{ "station_id": 501, "name": "Hanasaari", "address": "Hanaholmsstranden 1", "city": "Espoo", "operator": "CityBike Finland", "capacity": 10, "x": "24.840319", "y": "60.16582" }, { "station_id": 503, "name": "Keilalahti", "address": "Kägelviksvägen 2", "city": "Espoo", "operator": "CityBike Finland", "capacity": 28, "x": "24.827467", "y": "60.171524" }, { "station_id": 505, "name": "Westendinasema", "address": "Westendvägen 1", "city": "Espoo", "operator": "CityBike Finland", "capacity": 16, "x": "24.805758", "y": "60.168266" }, { "station_id": 507, "name": "Golfpolku", "address": "Golfstigen 3", "city": "Espoo", "operator": "CityBike Finland", "capacity": 16, "x": "24.796136", "y": "60.168143" }, { "station_id": 509, "name": "Revontulentie", "address": "Norrskensvägen 10", "city": "Espoo", "operator": "CityBike Finland", "capacity": 30, "x": "24.802938", "y": "60.171551" }, { "station_id": 511, "name": "Sateentie", "address": "Regnvägen 2", "city": "Espoo", "operator": "CityBike Finland", "capacity": 18, "x": "24.810688", "y": "60.173424" }, { "station_id": 513, "name": "Hakalehto", "address": "Havsvindsvägen 18", "city": "Espoo", "operator": "CityBike Finland", "capacity": 24, "x": "24.79139", "y": "60.173567" }, { "station_id": 515, "name": "Oravannahkatori", "address": "Gråskinnstorget 1", "city": "Espoo", "operator": "CityBike Finland", "capacity": 16, "x": "24.792559", "y": "60.175769" }, { "station_id": 517, "name": "Länsituuli", "address": "Västanvindsgränden 3", "city": "Espoo", "operator": "CityBike Finland", "capacity": 24, "x": "24.802049", "y": "60.175358" }, { "station_id": 518, "name": "Tuulimäki", "address": "Östanvindsgränden 11", "city": "Espoo", "operator": "CityBike Finland", "capacity": 18, "x": "24.806051", "y": "60.174144" }]
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
            <h2> Stations list </h2>
            <Table data={dummyData} columns={columns} />
        </>
    )
}