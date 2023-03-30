import { useState, useEffect } from "react"
import styled from "styled-components"
import { PAGE_SIZE } from "../constants"
import Table from "../table/Table"
import { ColumnDefinitionType, CityBikeStation } from "../table/types"

const ButtonWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`
const StyledP = styled.p`
margin-left: 20px;
`
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

const Stations = () => {
    const [stations, setStations] = useState<CityBikeStation[]>([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchStations = async () => {
            const response = await fetch(`/stations?pageSize=${PAGE_SIZE}&page=${page}`)
            const data = await response.json()

            setStations(data)
        }
        void fetchStations()
    }, [page])

    return (
        <>
            <StyledP> Station list </StyledP>
            <Table data={stations} columns={columns} setSortedData={setStations} isRowWithLink />
            <ButtonWrapper>
                <button disabled={page === 1} onClick={() => setPage((prevState) => prevState - 1)}>Prev page</button>
                <button onClick={() => setPage((prevState) => prevState + 1)}>Next page</button>
            </ButtonWrapper>
        </>
    )
}

export default Stations