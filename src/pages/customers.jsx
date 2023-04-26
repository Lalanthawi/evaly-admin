import { Grid } from "@mui/material";
import DashboardCard from "components/dashboard-card";
import SearchInput from "components/@extended/search-input";
import CustomerList from "components/customer-components/customer-list";

export default function Customers() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <SearchInput />
        </Grid>
      </Grid>
      <DashboardCard isAutoHeight padding={0}>
        <CustomerList />
      </DashboardCard>
    </>
  );
}
