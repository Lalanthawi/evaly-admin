import CategoriesList from "components/categories-components/categories-list";
import DashboardCard from "components/dashboard-card";
import Grid from "@mui/material/Grid";
import SearchInput from "../components/@extended/search-input";
import { useMediaQuery } from "@mui/material";
import CategoryModal from "components/categories-components/category-modal";

export default function Categories() {
  const isMobileView = useMediaQuery("(max-width:767px)");

  return (
    <>
      <Grid container spacing={1} style={{ paddingBottom: 20 }}>
        <Grid item sm={3} xs={6}>
          <SearchInput />
        </Grid>
        {!isMobileView && (
          <>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}></Grid>
          </>
        )}
        <Grid
          item
          sm={3}
          xs={6}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <CategoryModal />
        </Grid>
      </Grid>
      <DashboardCard isAutoHeight padding={0}>
        <CategoriesList />
      </DashboardCard>
    </>
  );
}
