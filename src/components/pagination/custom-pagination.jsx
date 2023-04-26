import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";

const PaginationStyle = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: "#8B909A",
    backgroundColor: "#F1F2F6",
    borderRadius: 4,
    border: "none",
    padding: "4px 8px",
    fontWeight: "bold",
    "&:hover": {
      color: "black",
      background: theme.palette.secondary.lighter,
    },
  },
  "& .MuiPaginationItem-ellipsis": {
    backgroundColor: "transparent",
    fontWeight: "bold",
    color: "black",
  },
  "& .Mui-selected": {
    "&:hover": {
      color: "white",
    },
    color: "white",
    backgroundColor: `#0F60FF !important`,
  },
}));

export default function CustomPagination() {
  return (
    <PaginationStyle
      count={10}
      variant="outlined"
      shape="rounded"
      siblingCount={0}
    />
  );
}
