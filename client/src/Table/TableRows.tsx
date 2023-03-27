import { TableRowsProps } from "./types"
import { ReactNode } from 'react';



const TableRows = <T, K extends keyof T>({ data, columns }: TableRowsProps<T, K>): JSX.Element => {
    const rows = data.map((row, index) => {
        return (
            <tr key={`row-${index}`}>
                {columns.map((column, index2) => {
                    return (
                        <td key={`cell-${index2}`}>
                            {row[column.key] as ReactNode}
                        </td>
                    );
                }
                )}
            </tr>
        );
    });

    return (
        <tbody>
            {rows}
        </tbody>
    );
};

export default TableRows;