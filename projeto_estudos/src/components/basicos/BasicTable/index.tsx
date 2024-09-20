import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "../ItemButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CheckBox } from "@mui/icons-material";

interface FixedRowProps {
  id: number;
}

interface BasicTableProps<CustomTable extends FixedRowProps> {
  columns: Partial<Record<keyof Omit<CustomTable, "id">, string>>;
  rows: CustomTable[];
  actions?: boolean;
  canDelete?: boolean;
  canEdit?: boolean;
}

export default function BasicTable<CustomTable extends FixedRowProps>({
  columns,
  rows,
  actions = true,
  canDelete = true,
  canEdit = true,
}: Readonly<BasicTableProps<CustomTable>>) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell align="center" width={50}>
              <CheckBox />
            </TableCell>
            {Object.values(columns).map((column) => (
              <TableCell align="center" key={String(column)}>
                {String(column)}
              </TableCell>
            ))}
            {actions && (
              <TableCell align="center" width={100}>
                Ações
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">
                <CheckBox />
              </TableCell>
              {Object.entries(row)
                .filter((cell) => cell[0] !== "id")
                .map((cell) => (
                  <TableCell align="center" key={cell[0]}>
                    {cell[1]}
                  </TableCell>
                ))}
              {actions && (
                <TableCell align="center">
                  <IconButton onClick={() => {}} disabled={!canEdit}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => {}} disabled={!canDelete}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
