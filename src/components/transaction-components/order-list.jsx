import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import StyledTableCell, {
  StyledTableRow,
} from "components/@extended/global-styles";
import { useNavigate } from "react-router-dom";

function createData(sku, name, price, qty, disc, total) {
  return { sku, name, price, qty, disc, total };
}

const rows = [
  createData("#5940", "Apple iPhone 13", "$99.2", "x1", "5%", "$923.2"),
  createData("#5941", "Apple iPhone 13", "$99.2", "x1", "5%", "$923.2"),
  createData("#5942", "Apple iPhone 13", "$99.2", "x1", "5%", "$923.2"),
  createData("#5943", "Apple iPhone 13", "$99.2", "x1", "5%", "$923.2"),
  createData("#5944", "Apple iPhone 13", "$99.2", "x1", "5%", "$923.2"),
  createData("#5944", "Apple iPhone 13", "$99.2", "x1", "5%", "$923.2"),
  createData("#5944", "Apple iPhone 13", "$99.2", "x1", "5%", "$923.2"),
];

const tableHeads = ["#", "SKU", "NAME", "PRICE", "QTY", "DISC", "TOTAL"];

export default function OrderList() {
  const navigate = useNavigate();

  return (
    <TableContainer style={{ overflowY: "hidden" }}>
      <Table
        sx={{ minWidth: 800, height: "auto" }}
        aria-label="collapsible table"
      >
        <TableHead>
          <TableRow>
            {tableHeads.map((el, index) => (
              <StyledTableCell key={index} bgcolor="white" isnotborder="true">
                {el}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>
                <img
                  src="https://www.91-img.com/gallery_images_uploads/2/7/2736acf8e6adc92cf6970c457d2112c6a7a65767.JPG?tr=h-550,w-0,c-at_max"
                  width={42}
                  height={42}
                />
              </StyledTableCell>
              <StyledTableCell>{row.sku}</StyledTableCell>
              <StyledTableCell style={{ fontWeight: 700 }}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.price}</StyledTableCell>
              <StyledTableCell>{row.qty}</StyledTableCell>
              <StyledTableCell className="custom-canceled-color">
                {row.disc}
              </StyledTableCell>
              <StyledTableCell>{row.total}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
