import { useState } from "react";
import { Stack, Typography, Grid } from "@mui/material";
import SimpleBar from "simplebar-react";
import StyledSelectBox from "./selectbox-filter";
import SearchInput from "../components/@extended/search-input";
import DashboardCard from "components/dashboard-card";
import tabsTitleSelected, { tabsTitleUnSelected } from "./styles";
import OrderTable from "components/order-management/table";

const orderTabs = [
  "Pending",
  "Confirmed",
  "Processing",
  "Picked",
  "Shipped",
  "Delivered",
  "Cancelled",
];

export default function OrderManamgement() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <>
      <SimpleBar>
        <Stack direction="row" paddingTop={1} borderBottom="1px solid #DBDADE">
          {orderTabs.map((el, index) => (
            <Typography
              key={index}
              onClick={() => setCurrentTabIndex(index)}
              variant="h5"
              style={
                currentTabIndex === index
                  ? tabsTitleSelected
                  : tabsTitleUnSelected
              }
            >
              {el}
            </Typography>
          ))}
        </Stack>
      </SimpleBar>
      <Grid container style={{ paddingTop: 20, paddingBottom: 20 }}>
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
        <OrderTable />
      </DashboardCard>
    </>
  );
}
