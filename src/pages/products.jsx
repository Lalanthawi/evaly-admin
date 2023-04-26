import Grid from "@mui/material/Grid";
import ProductsList from "components/product-components/product-list";
import DashboardCard from "components/dashboard-card";
import SearchInput from "../components/@extended/search-input";
import StyledSelectBox from "./selectbox-filter";

export default function Product() {
  return (
    <>
      <Grid container style={{ paddingBottom: 20 }}>
        <Grid item sm={3} xs={5.2}>
          <SearchInput />
        </Grid>
        <Grid item sm={3} xs={0.2}></Grid>
        <Grid item sm={3} xs={0.2}></Grid>
        <Grid item sm={3} xs={6.3}>
          <StyledSelectBox />
        </Grid>
      </Grid>
      <DashboardCard isAutoHeight padding={0}>
        <ProductsList />
      </DashboardCard>
    </>
  );
}
