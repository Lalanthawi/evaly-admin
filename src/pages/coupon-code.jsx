import Grid from "@mui/material/Grid";
import DashboardCard from "components/dashboard-card";
import CouponList from "components/coupon-components/coupon-list";
import SearchInput from "components/@extended/search-input";
import StyledSelectBox from "./selectbox-filter";
import CustomButton from "components/@extended/button";
import { useNavigate } from "react-router-dom";

export default function CouponCode() {
  const navigate = useNavigate();

  return (
    <>
      <Grid container spacing={1} style={{ paddingBottom: 20 }}>
        <Grid item xs={12} sm={3} md={3}>
          <SearchInput />
        </Grid>
        <Grid item xs={12} sm={3} md={4}></Grid>
        <Grid item xs={6} sm={3} md={3}>
          <StyledSelectBox />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <CustomButton
            text="Create New Coupon"
            isFullWidth
            clickHandler={() => navigate("/create-coupon")}
          />
        </Grid>
      </Grid>
      <DashboardCard isAutoHeight padding={0}>
        <CouponList />
      </DashboardCard>
    </>
  );
}
