import TableHeader from "./TableHeader";
import { TableProps } from "./types";
import TableRows from "./TableRows"
import styled from 'styled-components';

const StyledTable = styled.table`
width: 95%;
margin: 20px;
border-spacing: 0;
border-collapse: collapse;
`;
const Table = <T, K extends keyof T>({ data, columns }: TableProps<T, K>): JSX.Element => {
    return (
        <StyledTable>
            <TableHeader columns={columns} />
            <TableRows
                data={data}
                columns={columns}
            />
        </StyledTable>
    );
};

export default Table;