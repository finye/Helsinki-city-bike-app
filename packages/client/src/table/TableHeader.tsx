
import { ColumnDefinitionType } from "./types";
import styled from "styled-components";

type TableHeaderProps<T, K extends keyof T> = {
    columns: Array<ColumnDefinitionType<T, K>>;
}


const TableHead = styled.thead`
font-size: 1rem;
font-weight: bold;
text-align: center;
background-color: #c2c2c2;
`;



const TableHeader = <T, K extends keyof T>({ columns }: TableHeaderProps<T, K>): JSX.Element => {
    const headers = columns.map((column, index) => {

        return (
            <th
                key={`headCell-${index}`}
            >
                {column.header}
            </th>
        );
    });

    return (
        <TableHead>
            <tr>{headers}</tr>
        </TableHead>
    );
};

export default TableHeader;