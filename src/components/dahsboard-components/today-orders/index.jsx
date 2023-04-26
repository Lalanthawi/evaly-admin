import { Stack, Typography } from "@mui/material";
import headingStyle from "../last-transactions/styles";
import TodayOrderGraph from "./today-orders-graph";
import ordersCash, { ordersOverTime, vsLastDays, percentage } from "./styles";

export default function TodayOrders() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" style={headingStyle}>
          Today Orders
        </Typography>
        {/* <IconButton size="small">
          <MoreOutlined style={{ fontSize: 22 }} />
        </IconButton> */}
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        paddingTop={2}
        paddingBottom={2}
      >
        <Typography variant="h4" style={ordersCash}>
          16.5K
        </Typography>
        <Stack direction="row">
          <Typography variant="h5" style={percentage}>
            <img
              src="/assets/downwar.svg"
              alt="downward"
              style={{ position: "relative", top: 2 }}
            />
            6%
          </Typography>
          <span style={vsLastDays}>vs last 7 days</span>
        </Stack>
      </Stack>
      <Typography variant="h5" style={ordersOverTime}>
        Orders Over Time
      </Typography>
      <TodayOrderGraph />
    </>
  );
}
