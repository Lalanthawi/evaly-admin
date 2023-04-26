import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import StyledTableCell from "components/@extended/global-styles";
import ExpandedRow from "./expanded-row";

function createData(orderId, createdAt, total, paymentMethod, status) {
  return {
    orderId,
    createdAt,
    total,
    paymentMethod,
    status,
  };
}

const rows = [
  createData("#6548", "2 min ago", "$675", "CC", "Pending"),
  createData("#6549", "2 min ago", "$675", "COD", "Completed"),
  createData("#6550", "2 min ago", "$675", "COD", "Pending"),
  createData("#6551", "2 min ago", "$675", "CC", "Canceled"),
  createData("#6545", "2 min ago", "$675", "CC", "Pending"),
];

const tableHeads = ["ORDER ID", "CREATED", "TOTAL", "PAYMENT", "STATUS"];

export default function OrderTable() {
  return (
    <TableContainer style={{ overflowY: "hidden" }}>
      <Table
        sx={{ minWidth: 800, height: "auto" }}
        aria-label="collapsible table"
      >
        <TableHead>
          <TableRow>
            {tableHeads.map((el, index) => (
              <StyledTableCell
                style={{ borderTopLeftRadius: el === "ORDER ID" && 16 }}
                key={index}
                bgcolor="white"
                isnotborder="true"
              >
                {el}
              </StyledTableCell>
            ))}
            <StyledTableCell
              style={{ borderTopRightRadius: 10 }}
              bgcolor="white"
              isnotborder="true"
            />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <ExpandedRow key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
