import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import CustomizedPagination from "components/pagination";
import StyledTableCell from "components/@extended/global-styles";

function createData(
  couponName,
  couponCode,
  discount,
  startDate,
  eligibility,
  endDate,
  status
) {
  return {
    couponName,
    couponCode,
    discount,
    startDate,
    eligibility,
    endDate,
    status,
  };
}

const rows = [
  createData(
    "10% Discount",
    "2222",
    "10.000",
    "6 April 2023",
    "All",
    "8 April 2023",
    "Enabled"
  ),
  createData(
    "Free Shipping",
    "6749",
    "20.000",
    "6 April 2023",
    "Specific",
    "8 April 2023",
    "Disabled"
  ),
  createData(
    "10% Discount",
    "2222",
    "10.000",
    "6 April 2023",
    "All",
    "8 April 2023",
    "Enabled"
  ),
  createData(
    "Free Shipping",
    "6749",
    "20.000",
    "6 April 2023",
    "Specific",
    "8 April 2023",
    "Disabled"
  ),
  createData(
    "10% Discount",
    "2222",
    "10.000",
    "6 April 2023",
    "All",
    "8 April 2023",
    "Enabled"
  ),
  createData(
    "Free Shipping",
    "6749",
    "20.000",
    "6 April 2023",
    "Specific",
    "8 April 2023",
    "Disabled"
  ),
  createData(
    "10% Discount",
    "2222",
    "10.000",
    "6 April 2023",
    "All",
    "8 April 2023",
    "Enabled"
  ),
  createData(
    "Free Shipping",
    "6749",
    "20.000",
    "6 April 2023",
    "Specific",
    "8 April 2023",
    "Disabled"
  ),
  createData(
    "10% Discount",
    "2222",
    "10.000",
    "6 April 2023",
    "All",
    "8 April 2023",
    "Enabled"
  ),
  createData(
    "Free Shipping",
    "6749",
    "20.000",
    "6 April 2023",
    "Specific",
    "8 April 2023",
    "Disabled"
  ),
];

const tableHeads = [
  "COUPON NAME",
  "COUPON CODE",
  "DISCOUNT",
  "START DATE",
  "ELIGIBILITY",
  "END DATE",
  "STATUS",
  "ACTION",
];

export default function CouponList() {
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
                <StyledTableCell>{row.couponName}</StyledTableCell>
                <StyledTableCell>{row.couponCode}</StyledTableCell>
                <StyledTableCell>{row.discount}</StyledTableCell>
                <StyledTableCell>{row.startDate}</StyledTableCell>
                <StyledTableCell>{row.eligibility}</StyledTableCell>
                <StyledTableCell>{row.endDate}</StyledTableCell>
                <StyledTableCell
                  className={
                    row.status === "Enabled"
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
