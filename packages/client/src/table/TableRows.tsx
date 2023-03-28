import { CityBikeStation, TableRowsProps } from "./types"
import { ReactNode } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const TableData = styled.td`
    font-size: 1rem;
    border: 1px solid lightgrey;
    text-align: center;
    vertical-align: middle;
`;

const StyledTr = styled.tr`
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightgrey;
  }
`

const StyledLink = styled(Link)`
    display: contents;
`

const TableRows = <T, K extends keyof T>({ data, columns }: TableRowsProps<T, K>): JSX.Element => {
    const rows = data.map((row, index) => {
        return (
            <StyledLink key={`row-${index} `} to={`/station/${(row as CityBikeStation).station_id}`}>
                <StyledTr>
                    {columns.map((column, index2) => {
                        return (
                            <TableData key={`cell - ${index2} `} >
                                {row[column.key] as ReactNode}
                            </TableData>
                        );
                    }
                    )}
                </StyledTr>
            </StyledLink>
        );
    });

    return (
        <tbody>
            {rows}
        </tbody>
    );
};

export default TableRows;