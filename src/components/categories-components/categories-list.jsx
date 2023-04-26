import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import CustomizedPagination from "components/pagination";
import StyledTableCell from "components/@extended/global-styles";

function createData(categoryName, subCategories, lastUpdated) {
  return {
    categoryName,
    subCategories,
    lastUpdated,
  };
}

const rows = [
  createData("Smart Phone & Tablet", "Samsung, Apple", "6 April 2023"),
  createData("Smart Phone & Tablet", "Samsung, Apple", "6 April 2023"),
  createData("Smart Phone & Tablet", "Samsung, Apple", "6 April 2023"),
  createData("Smart Phone & Tablet", "Samsung, Apple", "6 April 2023"),
  createData("Smart Phone & Tablet", "Samsung, Apple", "6 April 2023"),
  createData("Smart Phone & Tablet", "Samsung, Apple", "6 April 2023"),
  createData("Smart Phone & Tablet", "Samsung, Apple", "6 April 2023"),
  createData("Smart Phone & Tablet", "Samsung, Apple", "6 April 2023"),
  createData("Smart Phone & Tablet", "Samsung, Apple", "6 April 2023"),
  createData("Smart Phone & Tablet", "Samsung, Apple", "6 April 2023"),
];

const tableHeads = [
  "CATEGORY NAME",
  "SUB CATEGORIES",
  "LAST UPDATED",
  "ACTION",
];

export default function CategoriesList() {
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
                    borderTopLeftRadius: el === "CATEGORY NAME" && 10,
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
                <StyledTableCell>{row.categoryName}</StyledTableCell>
                <StyledTableCell>{row.subCategories}</StyledTableCell>
                <StyledTableCell>{row.lastUpdated}</StyledTableCell>
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
