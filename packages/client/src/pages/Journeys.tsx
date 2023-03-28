import Table from "../table/Table"
import { ColumnDefinitionType, CityBikesJourney } from "../table/types"

const columns: ColumnDefinitionType<CityBikesJourney, keyof CityBikesJourney>[] = [
    {
        key: 'departure_station_name',
        header: 'Departure station',
    },
    {
        key: 'return_station_name',
        header: 'Return station',
    },
    {
        key: 'covered_distance_in_meters',
        header: 'Distance(km)',
    },
    {
        key: 'duration_in_seconds',
        header: 'Duration(min)',

    }
]

interface JourneysProps {
    data: CityBikesJourney[]
}

const Journeys = ({ data }: JourneysProps) => {
    const mappedData = data.map((journey) => {
        return {
            ...journey,
            covered_distance_in_meters: `${(Number(journey.covered_distance_in_meters) / 1000).toFixed(1)}`,
            duration_in_seconds: `${(journey.duration_in_seconds / 60).toFixed(1)}`

        };
    });

    return (
        <>
            <p> Journey list</p>
            <Table data={mappedData} columns={columns} />
        </>
    )
}

export default Journeys