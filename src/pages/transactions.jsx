import TransactionsList from "components/transaction-components/transactions-list";
import DashboardCard from "components/dashboard-card";
import SearchInput from "../components/@extended/search-input";
import StyledSelectBox from "./selectbox-filter";
import Grid from "@mui/material/Grid";

export default function Transactions() {
  return (
    <>
      <Grid spacing={1} container style={{ paddingTop: 20, paddingBottom: 20 }}>
        <Grid item sm={3} xs={6}>
          <SearchInput />
        </Grid>
        <Grid item sm={2} xs={6}>
          <StyledSelectBox placeHolder="Status: All" />
        </Grid>
        <Grid item sm={4} xs={12}></Grid>
        <Grid item sm={3} xs={12}>
          <StyledSelectBox />
        </Grid>
      </Grid>
      <DashboardCard isAutoHeight padding={0}>
        <TransactionsList />
      </DashboardCard>
    </>
  );
}
