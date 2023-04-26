import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import CustomizedPagination from "components/pagination";
import StyledTableCell from "components/@extended/global-styles";

function createData(no, name, logo) {
  return { no, name, logo };
}

const rows = [
  createData(
    1,
    "Acer",
    "https://demo.activeitzone.com/ecommerce/public/uploads/all/LmrJgWHPBmx3JSvR9aw5pA38TLxH5ilidX3PCaHD.jpg"
  ),
  createData(
    2,
    "Addidas",
    "https://demo.activeitzone.com/ecommerce/public/uploads/all/e3tZctFJ6es65oGghS6D6RfXpUvQxf462DztXXc0.jpg"
  ),
  createData(
    3,
    "Aigner",
    "https://demo.activeitzone.com/ecommerce/public/uploads/all/B17ScMFebOK8x0MYM3WVAHeIUz8XgoX5JRxbEbH6.jpg"
  ),
  createData(
    4,
    "Alosa",
    "https://demo.activeitzone.com/ecommerce/public/uploads/all/WJBdI8ruL06tYFHNyuhCUoSSmp0fwLY0THnzmeht.jpg"
  ),
];

const tableHeads = ["NO", "LOGO", "NAME", "ACTION"];

export default function BrandsList() {
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
                <StyledTableCell>
                  <img
                    src={row.logo}
                    style={{ width: 50, height: 50 }}
                    alt={`i-${index}`}
                  />
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
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
