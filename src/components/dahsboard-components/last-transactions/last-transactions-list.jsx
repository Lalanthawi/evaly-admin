import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import StyledTableCell, {
  StyledTableRow,
} from "components/@extended/global-styles";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { viewDetailForTable } from "./styles";
import { Typography } from "@mui/material";

function createData(id, issueDate, total) {
  return { id, issueDate, total };
}

const rows = [
  createData("#5089", "31 March 2023", "$120"),
  createData("#5049", "31 March 2023", "$120"),
  createData("#5029", "31 March 2023", "$120"),
  createData("#5019", "31 March 2023", "$120"),
  createData("#5009", "31 March 2023", "$120"),
];

export default function LastTransactionsList() {
  return (
    <TableContainer style={{ paddingTop: 20 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>ISSUE DATE</StyledTableCell>
            <StyledTableCell>TOTAL</StyledTableCell>
            <StyledTableCell>ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>
                <Typography variant="h5" style={viewDetailForTable}>
                  {row.id}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>{row.issueDate}</StyledTableCell>
              <StyledTableCell>{row.total}</StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5" style={viewDetailForTable}>
                  View Detail
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
