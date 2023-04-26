import DashboardCard from "components/dashboard-card";
import Grid from "@mui/material/Grid";
import SearchInput from "../components/@extended/search-input";
import { useMediaQuery } from "@mui/material";
import BrandsList from "../components/brands-components/brands-list";
import AddBrandsModal from "../components/brands-components/add-brands-modal";

export default function BrandsManagement() {
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
          <AddBrandsModal />
        </Grid>
      </Grid>
      <DashboardCard isAutoHeight padding={0}>
        <BrandsList />
      </DashboardCard>
    </>
  );
}
