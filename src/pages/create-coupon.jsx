import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AddCouponPage from "components/coupon-components/add-coupon/add-coupon";
import tabsTitleSelected, { tabsTitleUnSelected } from "./styles";
import CustomerCouponHistoryList from "components/coupon-components/customer-coupon-history-list";
import DashboardCard from "components/dashboard-card";
import StyledSelectBox from "pages/selectbox-filter";
import SearchInput from "components/@extended/search-input";

const orderTabs = ["Add Coupon", "History"];

export default function CreateCoupon() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <>
      <Stack direction="row" borderBottom="1px solid #DBDADE">
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
      <div style={{ paddingTop: 20 }}>
        {currentTabIndex === 0 && (
          <DashboardCard>
            <AddCouponPage />
          </DashboardCard>
        )}
      </div>
      {currentTabIndex === 1 && (
        <>
          <Grid container>
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
            <CustomerCouponHistoryList />
          </DashboardCard>
        </>
      )}
    </>
  );
}
