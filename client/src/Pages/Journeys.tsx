import Table from "../table/Table"
import { ColumnDefinitionType, CityBikesJourney } from "../table/types"
import dummyJourneysData from "../data/journeys.json"


const columns: ColumnDefinitionType<CityBikesJourney, keyof CityBikesJourney>[] = [

    {
        key: 'departure_station_name',
        header: 'Departure station',
    },
    {
        key: 'return_station_name',
        header: 'Return station',
        width: 150
    },
    {
        key: 'covered_distance_in_meters',
        header: 'Distance(km)'
    },
    {
        key: 'duration_in_seconds',
        header: 'Duration(min)'
    }
]

export function Journeys() {
    return (
        <>
            <p> Journey list</p>
            <Table data={dummyJourneysData} columns={columns} />
        </>
    )
}