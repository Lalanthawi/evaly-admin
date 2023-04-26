import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(
  ({ theme, bgcolor, isnotborder }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: bgcolor ? bgcolor : "#F8F9FA",
      color: "#8B909A",
      fontSize: 13,
      fontWeight: 500,
      borderBottom: isnotborder === "true" ? "" : "2px solid #DBDADE",
    },
    paddingTop: 12,
    paddingBottom: 12,
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
      fontWeight: 400,
    },
    borderBottom: "1px solid #E9E7FD",
  })
);

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const paginationGridsStyle = {
  paddingLeft: 11,
  paddingRight: 11,
  paddingTop: 15,
  paddingBottom: 15,
};

export default StyledTableCell;
