import { TableRowsProps } from "./types"
import { ReactNode } from 'react';
import styled from 'styled-components';


const TableData = styled.td`
font-size: 3vh;
color: black;
border: 1px solid LightGrey;
text-align: center;
vertical-align: middle;
}
`;

const StyledTr = styled.tr`
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightgrey;
  }
`

const TableRows = <T, K extends keyof T>({ data, columns }: TableRowsProps<T, K>): JSX.Element => {

    const rows = data.map((row, index) => {
        return (
            <StyledTr key={`row-${index} `}>
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