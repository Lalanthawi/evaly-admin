import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import CustomizedPagination from "components/pagination";
import StyledTableCell from "components/@extended/global-styles";

function createData(
  price,
  category,
  brand,
  addBy,
  createdAt,
  totalStock,
  publishedAt,
  status
) {
  return {
    price,
    category,
    brand,
    addBy,
    createdAt,
    totalStock,
    publishedAt,
    status,
  };
}

const rows = [
  createData(
    "$400",
    "Kids & toys",
    "Acer",
    "William",
    "6 April 2023",
    "5000",
    "6 April 2023",
    "Published"
  ),
  createData(
    "$400",
    "Kids & toys",
    "Acer",
    "William",
    "6 April 2023",
    "5000",
    "6 April 2023",
    "Published"
  ),
  createData(
    "$400",
    "Kids & toys",
    "Acer",
    "William",
    "6 April 2023",
    0,
    "6 April 2023",
    "Published"
  ),
  createData(
    "$400",
    "Kids & toys",
    "Acer",
    "William",
    "6 April 2023",
    "5000",
    "6 April 2023",
    "Published"
  ),
  createData(
    "$400",
    "Kids & toys",
    "Acer",
    "William",
    "6 April 2023",
    "5000",
    "6 April 2023",
    "Published"
  ),
  createData(
    "$400",
    "Kids & toys",
    "Acer",
    "William",
    "6 April 2023",
    "5000",
    "6 April 2023",
    "Published"
  ),
  createData(
    "$400",
    "Kids & toys",
    "Acer",
    "William",
    "6 April 2023",
    "5000",
    "6 April 2023",
    "Published"
  ),
  createData(
    "$400",
    "Kids & toys",
    "Acer",
    "William",
    "6 April 2023",
    "5000",
    "6 April 2023",
    "Published"
  ),
  createData(
    "$400",
    "Kids & toys",
    "Acer",
    "William",
    "6 April 2023",
    "5000",
    "6 April 2023",
    "Published"
  ),
  createData(
    "$400",
    "Kids & toys",
    "Acer",
    "William",
    "6 April 2023",
    "5000",
    "6 April 2023",
    "Published"
  ),
];

const tableHeads = [
  "IMAGE",
  "NAME",
  "PRICE",
  "CATEGORY",
  "BRAND",
  "ADDED BY",
  "CREATED AT",
  "TOTAL STOCK",
  "PUBLISHED",
  "STATUS",
  "ACTION",
];

export default function ProductsList() {
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
                    borderTopLeftRadius: el === "IMAGE" && 10,
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
                  <img
                    src="https://demo.activeitzone.com/ecommerce/public/uploads/all/kPXokXNCgX8TcdsX01h9T4Xxt617kU7JiYkfSj4P.png"
                    style={{ width: 50 }}
                    alt={`product${index}`}
                  />
                </StyledTableCell>
                <StyledTableCell>Apple iPhone 14 Pro</StyledTableCell>
                <StyledTableCell>{row.price}</StyledTableCell>
                <StyledTableCell>{row.category}</StyledTableCell>
                <StyledTableCell>{row.brand}</StyledTableCell>
                <StyledTableCell>{row.addBy}</StyledTableCell>
                <StyledTableCell>{row.createdAt}</StyledTableCell>
                <StyledTableCell
                  className={
                    row.totalStock === 0
                      ? "custom-canceled-color"
                      : "custom-completed-color"
                  }
                >
                  {row.totalStock}
                </StyledTableCell>
                <StyledTableCell>{row.publishedAt}</StyledTableCell>
                <StyledTableCell>{row.status}</StyledTableCell>
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
