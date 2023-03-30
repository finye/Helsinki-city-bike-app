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

interface FormValues {
    searchTerm: string;
}


const Journeys = () => {
    const [journeys, setJourneys] = useState<CityBikesJourney[]>([])
    const [page, setPage] = useState(1)

    const [values, setValues] = useState<FormValues>({
        searchTerm: ''
    });

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {

        const fetchjourneys = async (_searchQuery = '') => {
            const response = await fetch(`/journeys?pageSize=${PAGE_SIZE}&page=${page}${_searchQuery}`)
            const data = await response.json()

            const mappedData = data.map((journey: CityBikesJourney) => {
                return {
                    ...journey,
                    covered_distance_in_meters: `${(Number(journey.covered_distance_in_meters) / 1000).toFixed(1)}`,
                    duration_in_seconds: Number(`${(journey.duration_in_seconds / 60).toFixed(1)}`)
                };
            })

            setJourneys(mappedData)
        }

        if (searchQuery === '') {

            void fetchjourneys()
        } else {
            void fetchjourneys(`&q=${searchQuery}`)
        }
    }, [searchQuery, page])

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setSearchQuery(values.searchTerm);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <>
            <p> Journey list</p>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" name="searchTerm" value={values.searchTerm}
                    onChange={handleChange} />
                <button type="submit">Search</button>
            </form>

            <Table data={journeys} columns={columns} />

            <ButtonWrapper>
                <button disabled={page === 1} onClick={() => setPage((prevState) => prevState - 1)}>Prev page</button>
                <button onClick={() => setPage((prevState) => prevState + 1)}>Next page</button>
            </ButtonWrapper>
        </>
    )
}

export default Journeys
