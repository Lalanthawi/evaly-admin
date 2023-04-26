import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Stack from "@mui/material/Stack";
import TableRow from "@mui/material/TableRow";
import StyledTableCell, {
  StyledTableRow,
} from "components/@extended/global-styles";

const inStockDesign = {
  width: 8,
  height: 8,
  backgroundColor: "#1EB564",
  borderRadius: 50,
  marginRight: 8,
};

const outOfStockDesign = {
  width: 8,
  height: 8,
  backgroundColor: "#D02626",
  borderRadius: 50,
  marginRight: 8,
};

function createData(id, product, orders, status, price) {
  return { id, product, orders, status, price };
}

const rows = [
  createData(1, "Apple Iphone 13", 506, "Stock", "$120"),
  createData(2, "Nike Air Jordan", 506, "Stock", "$120"),
  createData(3, "Beats Studio 2", 506, "Stock", "$120"),
  createData(4, "Apple Watch series 5", 506, "Out", "$120"),
  createData(5, "Amazon echo dot", 506, "Stock", "$120"),
  createData(6, "Amazon echo dot", 506, "Stock", "$120"),
  createData(7, "Amazon echo dot", 506, "Stock", "$120"),
];

export default function BestSellingProductList() {
  return (
    <TableContainer style={{ paddingTop: 20 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>PRODUCT</StyledTableCell>
            <StyledTableCell>TOTAL ORDER</StyledTableCell>
            <StyledTableCell>STATUS</StyledTableCell>
            <StyledTableCell>PRICE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{row.product}</StyledTableCell>
              <StyledTableCell>{row.orders}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: row.status === "Stock" ? "#1EB564" : "#D02626",
                }}
              >
                <Stack direction="row" alignItems="center">
                  <div
                    style={
                      row.status === "Stock" ? inStockDesign : outOfStockDesign
                    }
                  />
                  {row.status}
                </Stack>
              </StyledTableCell>
              <StyledTableCell>{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
