import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ProfitChip from "./profit-chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import OrderStatusSelector from "../@extended/custom-selector";
import StyledTableCell, {
  StyledTableRow,
} from "components/@extended/global-styles";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const receiptTextHead = {
  color: "#8B909A",
  fontSize: 15,
  fontWeight: 400,
  padding: "8px 20px",
};

const recipetText = {
  color: "#23272E",
  fontSize: 15,
  fontWeight: 400,
  padding: "8px 20px",
};

export default function ExpandedRow(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledTableRow
        sx={{
          "& > *": {
            backgroundColor: open ? "#F2F4F7" : "white",
          },
        }}
      >
        <StyledTableCell component="th" scope="row" style={{ fontWeight: 600 }}>
          {row.orderId}
        </StyledTableCell>
        <StyledTableCell>{row.createdAt}</StyledTableCell>
        <StyledTableCell>{row.customerName}</StyledTableCell>
        <StyledTableCell>{row.total}</StyledTableCell>
        <StyledTableCell>
          <Stack direction="row" alignItems="center">
            {row.profit}
            <ProfitChip />
          </Stack>
        </StyledTableCell>
        <StyledTableCell>
          <OrderStatusSelector />
        </StyledTableCell>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            style={{ borderRadius: "50%" }}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <img src="/assets/expand-up-icon.svg" alt="up-icon" />
            ) : (
              <img src="/assets/expand-down-icon.svg" alt="down-icon" />
            )}
          </IconButton>
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <TableCell style={{ padding: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                backgroundColor: "#FAFAFA",
                paddingRight: 5,
                paddingLeft: 5,
              }}
            >
              <Table size="small" aria-label="purchases">
                <TableHead style={{ backgroundColor: "#FAFAFA" }}>
                  <TableRow>
                    <StyledTableCell isnotborder="true">#</StyledTableCell>
                    <StyledTableCell isnotborder="true">SKU</StyledTableCell>
                    <StyledTableCell isnotborder="true">NAME</StyledTableCell>
                    <StyledTableCell isnotborder="true">PRICE</StyledTableCell>
                    <StyledTableCell isnotborder="true">QTY</StyledTableCell>
                    <StyledTableCell isnotborder="true">DISC</StyledTableCell>
                    <StyledTableCell isnotborder="true">TOTAL</StyledTableCell>
                    <StyledTableCell isnotborder="true">
                      <Stack direction="row" alignItems="center">
                        <img
                          src="/assets/print.svg"
                          alt="print"
                          style={{ paddingRight: 5 }}
                        />{" "}
                        PRINT
                      </Stack>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ backgroundColor: "#FAFAFA" }}>
                  {[0, 1, 2].map((el) => (
                    <TableRow key={el}>
                      <StyledTableCell component="th" scope="row" />
                      <StyledTableCell component="th" scope="row">
                        #6548
                      </StyledTableCell>
                      <StyledTableCell style={{ fontWeight: 600 }}>
                        Apple iPhone 13
                      </StyledTableCell>
                      <StyledTableCell>$999.29</StyledTableCell>
                      <StyledTableCell>x1</StyledTableCell>
                      <StyledTableCell style={{ color: "#EA5455" }}>
                        5%
                      </StyledTableCell>
                      <StyledTableCell>$949.32</StyledTableCell>
                      <StyledTableCell component="th" scope="row" />
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell colSpan={4} />
                    <TableCell style={receiptTextHead} colSpan={2}>
                      Subtotal
                    </TableCell>
                    <TableCell style={recipetText}>$2,847.29</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={4} />
                    <TableCell style={receiptTextHead} colSpan={2}>
                      Shipping
                    </TableCell>
                    <TableCell style={recipetText}>$5.50</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={4} />
                    <TableCell style={receiptTextHead} colSpan={2}>
                      Discount
                    </TableCell>
                    <TableCell style={{ ...recipetText, color: "#EA5455" }}>
                      $150.32
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={4} />
                    <TableCell
                      colSpan={2}
                      style={{ ...receiptTextHead, paddingBottom: 20 }}
                    >
                      Total
                    </TableCell>
                    <TableCell
                      style={{
                        ...recipetText,
                        paddingBottom: 20,
                        fontWeight: 600,
                      }}
                    >
                      $150.32
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </StyledTableRow>
    </>
  );
}
