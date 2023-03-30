import { TableProps } from "./types";
import TableRows from "./TableRows"
import styled from 'styled-components';
import { useEffect, useState } from "react";

const StyledTable = styled.table`
width: 95%;
margin: 20px;
border-spacing: 0;
border-collapse: collapse;
`;

const TableHead = styled.thead`
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    background-color: #c2c2c2;
`;

const Table = <T, K extends keyof T>({ data, columns, isRowWithLink, setSortedData }: TableProps<T, K>): JSX.Element => {
    const [sortConfig, setSortConfig] = useState<{ key: keyof T, direction: string }>();

    const sortTable = () => {
        const sortedData = [...data]

        // @ts-ignore
        sortedData.sort((a, b) => {
            if (!sortConfig?.key) return
            if (a[sortConfig?.key] < b[sortConfig?.key]) {
                return sortConfig?.direction === 'ascending' ? -1 : 1
            }

            if (a[sortConfig?.key] > b[sortConfig?.key]) {
                return sortConfig?.direction === 'ascending' ? 1 : -1
            }

            return 0
        })

        if (setSortedData) {
            setSortedData(sortedData)
        }
    }

    useEffect(() => {
        if (sortConfig !== null) {
            sortTable()
        }
    }, [sortConfig])

    const requestSort = (key: K) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }

    const headers = columns.map((column, index) => {
        return (<th key={`headCell - ${index}`} onClick={() => requestSort(column.key)}> {column.header}</th >);
    });

    return (
        <StyledTable>
            <TableHead>
                <tr>{headers}</tr>
            </TableHead>

            <TableRows
                data={data}
                columns={columns}
                isRowWithLink={isRowWithLink}
            />
        </StyledTable>
    );
};

export default Table;