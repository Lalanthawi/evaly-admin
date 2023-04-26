import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import StyledTableCell, {
  StyledTableRow,
} from "components/@extended/global-styles";

const pendingStatusDesign = {
  fontSize: 15,
  color: "#FFC600",
};

const completedStatusDesign = {
  fontSize: 15,
  color: "#1EB564",
};

function createData(id, customer, status, total) {
  return { id, customer, status, total };
}

const rows = [
  createData("#5089", "Joseph Wheeler", false, "$120"),
  createData("#5079", "Joseph Wheeler", true, "$120"),
  createData("#5069", "Joseph Wheeler", false, "$120"),
  createData("#5059", "Joseph Wheeler", false, "$120"),
  createData("#5049", "Joseph Wheeler", true, "$120"),
];

export default function RecentOrdersList() {
  return (
    <TableContainer style={{ paddingTop: 20 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>CUSTOMER</StyledTableCell>
            <StyledTableCell>STATUS</StyledTableCell>
            <StyledTableCell>TOTAL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>{row.customer}</StyledTableCell>
              <StyledTableCell
                style={row.status ? completedStatusDesign : pendingStatusDesign}
              >
                {row.status ? "Completed" : "Pending"}
              </StyledTableCell>
              <StyledTableCell>{row.total}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
