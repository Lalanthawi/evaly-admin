import Grid from "@mui/material/Grid";
import PagesSelector from "./pages-selector";
import CustomPagination from "./custom-pagination";
import { useMediaQuery } from "@mui/material";
import { paginationGridsStyle } from "components/@extended/global-styles";

export default function CustomizePagination() {
  const isMobileView = useMediaQuery("(max-width:767px)");
  const gridStyleForSelector = {
    display: "flex",
    alignItems: "center",
    justifyContent: isMobileView ? "center" : "flex-start",
  };
  const gridStyleForPagination = {
    display: "flex",
    alignItems: "center",
    justifyContent: isMobileView ? "center" : "flex-end",
  };

  return (
    <Grid container spacing={2} style={paginationGridsStyle}>
      <Grid item xs={12} sm={6} style={gridStyleForSelector}>
        <PagesSelector />
      </Grid>
      <Grid item xs={12} sm={6} style={gridStyleForPagination}>
        <CustomPagination />
      </Grid>
    </Grid>
  );
}
