import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ReactNode } from "react";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

type Row<T extends string> = {
  [K in T]: string;
};

type RowWithId<T extends string> = Row<T> & {
  id: number;
  actions?: ReactNode
};

interface BasicTableProps<T extends string> {
  columns: T[];
  rows: RowWithId<T>[];
}

export default function BasicTable<T extends string>({ columns, rows }: BasicTableProps<T>) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }}>
        <TableHead>
          <TableRow sx={{ border: '1px solid #00000030' }}>
            {columns.map((colTitle) => <TableCell align="center">{colTitle}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            const cells = Object.entries(row).filter(cell => cell[0] !== "id").map(cell => cell[1]);
            return (
              <TableRow key={row.id}>
                {cells.map((cell, index) => {
                  return <TableCell align="center" key={`${cell}${index}`}>{cell}</TableCell>
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
