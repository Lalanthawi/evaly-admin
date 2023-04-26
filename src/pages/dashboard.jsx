import { Grid } from "@mui/material";
import DashboardCard from "components/dashboard-card";
import TotalSales from "components/dahsboard-components/total-sales/total-sales";
import Sessions from "components/dahsboard-components/sessions";
import TotalOrders from "components/dahsboard-components/total-orders";
import TotalProfit from "components/dahsboard-components/total-profit";
import DiscountedAmount from "components/dahsboard-components/dicounted-amount";
import Reports from "components/dahsboard-components/reports";
import UsersReports from "components/dahsboard-components/users-report";
import LastTransaction from "components/dahsboard-components/last-transactions";
import BestSellingProducts from "components/dahsboard-components/best-selling-product";
import RecentOrders from "components/dahsboard-components/recent-orders";
import TodayOrders from "components/dahsboard-components/today-orders";
import TrendingProducts from "components/dahsboard-components/trending-products";
import TopSellingCategories from "components/dahsboard-components/top-selling-categories";

export default function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item md={7} sm={6} xs={12}>
        <DashboardCard>
          <TotalSales />
        </DashboardCard>
      </Grid>
      <Grid item md={5} sm={6} xs={12}>
        <DashboardCard>
          <Sessions />
        </DashboardCard>
      </Grid>
      <Grid item lg={4} sm={6} xs={12}>
        <DashboardCard>
          <TotalOrders />
        </DashboardCard>
      </Grid>
      <Grid item lg={4} sm={6} xs={12}>
        <DashboardCard>
          <TotalProfit />
        </DashboardCard>
      </Grid>
      <Grid item lg={4} xs={12}>
        <DashboardCard>
          <DiscountedAmount />
        </DashboardCard>
      </Grid>
      <Grid item xs={12} md={7} sm={6}>
        <DashboardCard>
          <Reports />
        </DashboardCard>
      </Grid>
      <Grid item xs={12} md={5} sm={6}>
        <DashboardCard>
          <UsersReports />
        </DashboardCard>
      </Grid>
      <Grid item lg={4} sm={6} xs={12}>
        <DashboardCard>
          <TodayOrders />
        </DashboardCard>
      </Grid>
      <Grid item lg={8} sm={6} xs={12}>
        <DashboardCard>
          <RecentOrders />
        </DashboardCard>
      </Grid>
      <Grid item lg={8} sm={6} xs={12}>
        <DashboardCard>
          <BestSellingProducts />
        </DashboardCard>
      </Grid>
      <Grid item lg={4} sm={6} xs={12}>
        <DashboardCard>
          <TrendingProducts />
        </DashboardCard>
      </Grid>
      <Grid item lg={4} sm={4} xs={12} className="top-selling-cat">
        <DashboardCard>
          <TopSellingCategories />
        </DashboardCard>
      </Grid>
      <Grid item lg={8} sm={8} xs={12}>
        <DashboardCard>
          <LastTransaction />
        </DashboardCard>
      </Grid>
    </Grid>
  );
}
