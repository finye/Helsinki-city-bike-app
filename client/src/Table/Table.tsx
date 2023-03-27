import TableHeader from "./TableHeader";
import { TableProps } from "./types";
import TableRows from "./TableRows"



const Table = <T, K extends keyof T>({ data, columns }: TableProps<T, K>): JSX.Element => {
    return (
        <table >
            <TableHeader columns={columns} />
            <TableRows
                data={data}
                columns={columns}
            />
        </table>
    );
};

export default Table;