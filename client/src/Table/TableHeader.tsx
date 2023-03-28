
import { ColumnDefinitionType } from "./types";
import styled from "styled-components";

type TableHeaderProps<T, K extends keyof T> = {
    columns: Array<ColumnDefinitionType<T, K>>;
}


const TableHead = styled.thead`
font-size: 3vh;
font-weight: bold;
text-align: center;
padding 2;
}
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