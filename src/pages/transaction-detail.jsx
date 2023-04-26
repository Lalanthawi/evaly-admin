import OrderList from "components/transaction-components/order-list";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DashboardCard from "components/dashboard-card";
import { transactionHeadings } from "./styles";
import TransactionDetailLeftCard from "components/transaction-components/transaction-detail-left-cards";
import CustomButton from "components/@extended/button";

export default function TransactionDetail() {
  return (
    <>
      <Grid container spacing={2} style={{ paddingBottom: 20 }}>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <CustomButton text="Print" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={8} sm={7} xs={12}>
          <DashboardCard isAutoHeight padding={0}>
            <Typography
              variant="h5"
              style={{ ...transactionHeadings, padding: 20, paddingTop: 20 }}
            >
              Order Details
            </Typography>
            <OrderList />
          </DashboardCard>
        </Grid>
        <Grid item md={4} sm={5} xs={12}>
          <TransactionDetailLeftCard />
        </Grid>
      </Grid>
    </>
  );
}
