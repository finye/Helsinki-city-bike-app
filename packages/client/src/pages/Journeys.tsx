import { useState, useEffect } from "react"
import styled from "styled-components"
import { PAGE_SIZE } from "../constants"
import Table from "../table/Table"
import { ColumnDefinitionType, CityBikesJourney } from "../table/types"

const ButtonWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`

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

const Journeys = () => {
    const [journeys, setJourneys] = useState<CityBikesJourney[]>([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchjourneys = async () => {
            const response = await fetch(`/journeys?pageSize=${PAGE_SIZE}&page=${page}`)
            const data = await response.json()

            setJourneys(data)
        }

        void fetchjourneys()
    }, [page])

    const mappedData = journeys.map((journey) => {
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

            <ButtonWrapper>
                <button disabled={page === 1} onClick={() => setPage((prevState) => prevState - 1)}>Prev page</button>
                <button onClick={() => setPage((prevState) => prevState + 1)}>Next page</button>
            </ButtonWrapper>
        </>
    )
}

export default Journeys