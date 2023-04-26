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
import { Chip } from "@mui/material";

function createData(name, email, roles, status) {
  return {
    name,
    email,
    roles,
    status,
  };
}

const rows = [
  createData(
    "Robert Fox",
    "robertfox@gmail.com",
    ["Admin", "Manager", "Super Admin"],
    "Active"
  ),
  createData(
    "Robert Fox",
    "robertfox@gmail.com",
    ["Admin", "Super Admin"],
    "Blocked"
  ),
  createData(
    "Robert Fox",
    "robertfox@gmail.com",
    ["Admin", "Manager"],
    "Active"
  ),
  createData("Robert Fox", "robertfox@gmail.com", ["Admin"], "Active"),
  createData(
    "Robert Fox",
    "robertfox@gmail.com",
    ["Admin", "Manager", "Super Admin"],
    "Blocked"
  ),
];

const rolesColors = (key) => {
  switch (key) {
    case "Admin":
      return "#DAFBFB";
    case "Manager":
      return "#FEF1D7";
    default:
      return "#DADEFB";
  }
};

const tableHeads = ["NAME", "USER ROLE", "STATUS", "ACTION"];

export default function AdminList() {
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
                <StyledTableCell>
                  {row.roles.map((el) => (
                    <Chip
                      label={el}
                      style={{
                        marginRight: 4,
                        backgroundColor: rolesColors(el),
                      }}
                    />
                  ))}
                </StyledTableCell>
                <StyledTableCell
                  className={
                    row.status === "Active"
                      ? "custom-completed-color"
                      : "custom-canceled-color"
                  }
                >
                  {row.status}
                </StyledTableCell>
                <StyledTableCell>
                  <Stack direction="row">
                    <img
                      src="/assets/edit.svg"
                      width="24px"
                      height="24px"
                      alt="edit-icon"
                      className="cursor-pointer-custom"
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
