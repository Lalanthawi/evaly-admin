import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import CustomizedPagination from "components/pagination";
import StyledTableCell from "components/@extended/global-styles";
import { Chip } from "@mui/material";

function createData(no, name, colorCode) {
  return { no, name, colorCode };
}

const rows = [
  createData(1, "AntiqueWhite", "#faebd7"),
  createData(2, "Silver", "#c0c0c0"),
  createData(3, "DarkGray", "#a9a9a9"),
  createData(4, "MistyRose", "#ffe4e1"),
  createData(5, "LightGrey", "#d3d3d3"),
  createData(6, "CornflowerBlue", "#6495ed"),
];

const tableHeads = ["NO", "NAME", "COLOR CODE", "ACTION"];

export default function ColorsList() {
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
                    borderTopLeftRadius: el === "NO" && 10,
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
                <StyledTableCell>{row.no}</StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>
                  <Stack direction="row" alignItems="center">
                    <Chip
                      style={{
                        backgroundColor: row.colorCode,
                        width: 20,
                        height: 20,
                        marginRight: 5,
                      }}
                    />
                    {row.colorCode}
                  </Stack>
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
