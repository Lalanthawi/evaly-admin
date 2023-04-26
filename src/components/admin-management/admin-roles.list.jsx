import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CustomizedPagination from "components/pagination";
import StyledTableCell from "components/@extended/global-styles";
import { Chip } from "@mui/material";

function createData(roleName, roles) {
  return {
    roleName,
    roles,
  };
}

const rows = [
  createData("Super Admin", [
    "Roles Management",
    "Coupon",
    "Brands Management",
  ]),
  createData("Admin", ["Variants", "Confirmed Orders", "Invoice"]),
];

const tableHeads = ["ROLE NAME", "ROLES", "ACTION"];

export default function AdminRolesList() {
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
                <StyledTableCell>{row.roleName}</StyledTableCell>
                <StyledTableCell>
                  {row.roles.map((el) => (
                    <Chip
                      label={el}
                      style={{
                        marginRight: 4,
                      }}
                    />
                  ))}
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
