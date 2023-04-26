import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ExpandedRow from "./expanded-row";
import CustomizedPagination from "components/pagination";
import StyledTableCell from "components/@extended/global-styles";

function createData(orderId, createdAt, customerName, total, profit, status) {
  return {
    orderId,
    createdAt,
    customerName,
    total,
    profit,
    status,
  };
}

const rows = [
  createData("#6548", "2 min ago", "Joseph wheeler", "$654", "$154", "Pending"),
  createData("#6549", "2 min ago", "Joseph wheeler", "$654", "$154", "Pending"),
  createData("#6543", "2 min ago", "Joseph wheeler", "$654", "$154", "Pending"),
  createData("#6544", "2 min ago", "Joseph wheeler", "$654", "$154", "Pending"),
  createData("#6546", "2 min ago", "Joseph wheeler", "$654", "$154", "Pending"),
  createData("#6533", "2 min ago", "Joseph wheeler", "$654", "$154", "Pending"),
  createData("#6540", "2 min ago", "Joseph wheeler", "$654", "$154", "Pending"),
];

const tableHeads = [
  "ORDER ID",
  "CREATED",
  "CUSTOMER",
  "TOTAL",
  "PROFIT",
  "STATUS",
];

export default function OrderTable() {
  return (
    <>
      <TableContainer style={{ overflowY: "hidden" }}>
        <Table
          sx={{ minWidth: 800, height: "auto" }}
          aria-label="collapsible table"
        >
          <TableHead>
            <TableRow>
              {tableHeads.map((el, index) => (
                <StyledTableCell
                  style={{ borderTopLeftRadius: el === "ORDER ID" && 10 }}
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
      <CustomizedPagination />
    </>
  );
}
