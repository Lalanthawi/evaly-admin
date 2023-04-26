import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CustomizedPagination from "components/pagination";
import customerName, { customerEmail } from "../customer-components/styles";
import StyledTableCell from "components/@extended/global-styles";

function createData(orderId, name, email, amount, createdAt) {
  return {
    orderId,
    name,
    email,
    amount,
    createdAt,
  };
}

const rows = [
  createData(
    "fd334f-34343fd",
    "Robert Fox",
    "robertfox@gmail.com",
    "30.00",
    "6 April 2023"
  ),
  createData(
    "fd334f-34343fd",
    "Robert Fox",
    "robertfox@gmail.com",
    "30.00",
    "6 April 2023"
  ),
  createData(
    "fd334f-34343fd",
    "Robert Fox",
    "robertfox@gmail.com",
    "30.00",
    "6 April 2023"
  ),
  createData(
    "fd334f-34343fd",
    "Robert Fox",
    "robertfox@gmail.com",
    "30.00",
    "6 April 2023"
  ),
  createData(
    "fd334f-34343fd",
    "Robert Fox",
    "robertfox@gmail.com",
    "30.00",
    "6 April 2023"
  ),
];

const tableHeads = ["ORDER ID", "CUSTOMER", "AMOUNT", "DATE"];

export default function CustomerCouponHistoryList() {
  return (
    <>
      <TableContainer style={{ overflowY: "hidden", marginTop: 15 }}>
        <Table
          sx={{ minWidth: 800, height: "auto" }}
          aria-label="collapsible table"
        >
          <TableHead>
            <TableRow>
              {tableHeads.map((el, index) => (
                <StyledTableCell
                  style={{
                    borderTopLeftRadius: el === "NAME" && 10,
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
                <StyledTableCell>{row.orderId}</StyledTableCell>
                <StyledTableCell>
                  <Stack direction="row" alignItems="center">
                    <img
                      src="https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU="
                      width="32px"
                      height="32"
                      alt={`user-profile${index}`}
                      style={{ borderRadius: "50%" }}
                    />
                    <div style={{ paddingLeft: 10 }}>
                      <Typography variant="h4" style={customerName}>
                        {row.name}
                      </Typography>
                      <Typography variant="h5" style={customerEmail}>
                        {row.email}
                      </Typography>
                    </div>
                  </Stack>
                </StyledTableCell>
                <StyledTableCell>{row.amount}</StyledTableCell>
                <StyledTableCell>{row.createdAt}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomizedPagination />
    </>
  );
}
