import { CityBikeStation, TableRowsProps } from "./types"
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const TableData = styled.td`
    font-size: 1rem;
    border: 1px solid lightgrey;
    text-align: center;
    vertical-align: middle;
`;

const StyledTr = styled.tr<{ isRowWithLink?: boolean }>`
    cursor: ${(props) => props.isRowWithLink ? 'pointer' : 'initial'};

    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightgrey;
  }
`

const TableRows = <T, K extends keyof T>({ data, columns, isRowWithLink }: TableRowsProps<T, K>): JSX.Element => {
    const navigate = useNavigate()

    const goRouteId = (route: string) => navigate(route)

    const rows = data.map((row, index) => {
        return (
            <StyledTr
                key={`row-${index} `}
                onClick={() => isRowWithLink && goRouteId(`/station/${(row as CityBikeStation).station_id}`)}
                isRowWithLink={isRowWithLink}
            >
                {columns.map((column, index2) => {
                    return (
                        <TableData key={`cell - ${index2} `} >
                            {row[column.key] as ReactNode}
                        </TableData>
                    );
                }
                )}
            </StyledTr>

        );
    });

    return (
        <tbody>
            {rows}
        </tbody>
    );
};

export default TableRows;