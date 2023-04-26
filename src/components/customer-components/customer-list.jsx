import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import CustomizedPagination from "components/pagination";
import customerName, { customerEmail } from "./styles";
import StyledTableCell from "components/@extended/global-styles";

function createData(name, email, phone, createdAt) {
  return {
    name,
    email,
    phone,
    createdAt,
  };
}

const rows = [
  createData(
    "Robert Fox",
    "robertfox@gmail.com",
    "(201) 555-0124",
    "6 April 2023"
  ),
  createData(
    "Robert Fox",
    "robertfox@gmail.com",
    "(201) 555-0124",
    "6 April 2023"
  ),
  createData(
    "Robert Fox",
    "robertfox@gmail.com",
    "(201) 555-0124",
    "6 April 2023"
  ),
  createData(
    "Robert Fox",
    "robertfox@gmail.com",
    "(201) 555-0124",
    "6 April 2023"
  ),
  createData(
    "Robert Fox",
    "robertfox@gmail.com",
    "(201) 555-0124",
    "6 April 2023"
  ),
];

const tableHeads = ["NAME", "PHONE NUMBER", "CREATED", "ACTION"];

export default function CustomerList() {
  const navigate = useNavigate();

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
                <StyledTableCell>{row.phone}</StyledTableCell>
                <StyledTableCell>{row.createdAt}</StyledTableCell>
                <StyledTableCell>
                  <Stack direction="row">
                    <img
                      src="/assets/edit.svg"
                      width="24px"
                      height="24px"
                      alt="edit-icon"
                      className="cursor-pointer-custom"
                      onClick={() => navigate("/customer-detail")}
                    />
                    <img
                      src="/assets/lock.svg"
                      width="24px"
                      height="24px"
                      alt="lock-icon"
                    />
                    <img
                      src="/assets/trash.svg"
                      width="24px"
                      height="24px"
                      alt="trash-icon"
                    />
                  </Stack>
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
