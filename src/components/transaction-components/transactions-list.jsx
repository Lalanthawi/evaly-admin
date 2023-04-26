import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import OrderStatusSelector from "components/@extended/custom-selector";
import CustomizedPagination from "components/pagination";
import StyledTableCell from "components/@extended/global-styles";

function createData(id, customer, date, total, method, status) {
  return {
    id,
    customer,
    date,
    total,
    method,
    status,
  };
}

const rows = [
  createData(
    "#5940",
    "Joseph Wheeler",
    "6 April 2023",
    "$234.5",
    "COD",
    "Completed"
  ),
  createData(
    "#5941",
    "Joseph Wheeler",
    "6 April 2023",
    "$234.5",
    "CC",
    "Pending"
  ),
  createData(
    "#5942",
    "Joseph Wheeler",
    "6 April 2023",
    "$234.5",
    "COD",
    "Pending"
  ),
  createData(
    "#5943",
    "Joseph Wheeler",
    "6 April 2023",
    "$234.5",
    "COD",
    "Completed"
  ),
  createData(
    "#5944",
    "Joseph Wheeler",
    "6 April 2023",
    "$234.5",
    "CC",
    "Pending"
  ),
  createData(
    "#5945",
    "Joseph Wheeler",
    "6 April 2023",
    "$234.5",
    "CC",
    "Pending"
  ),
];

const tableHeads = [
  "ID",
  "CUSTOMER",
  "DATE",
  "TOTAL",
  "METHOD",
  "STATUS",
  "ACTION",
];

export default function TransactionsList() {
  const navigate = useNavigate();

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
                  style={{
                    borderTopLeftRadius: el === "ID" && 10,
                    borderTopRightRadius: el === "ACTION" && 10,
                  }}
                  key={index}
                  bgcolor="white"
                  isnotborder="true"
                >
                  {el}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <StyledTableCell>{row.id}</StyledTableCell>
                <StyledTableCell>{row.customer}</StyledTableCell>
                <StyledTableCell>{row.date}</StyledTableCell>
                <StyledTableCell>{row.total}</StyledTableCell>
                <StyledTableCell>{row.method}</StyledTableCell>
                <StyledTableCell>
                  <OrderStatusSelector />
                </StyledTableCell>
                <StyledTableCell
                  style={{ color: "#0F60FF", cursor: "pointer" }}
                >
                  <span onClick={() => navigate("/transaction-detail")}>
                    View Details
                  </span>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomizedPagination />
    </>
  );
}
