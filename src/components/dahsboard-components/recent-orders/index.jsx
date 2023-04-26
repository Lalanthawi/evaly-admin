import { Stack, Typography } from "@mui/material";
import headingStyle from "../last-transactions/styles";
import RecentOrdersList from "./recent-orders-list";

export default function RecentOrders() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" style={headingStyle}>
          Recent Orders
        </Typography>
        {/* <IconButton size="small">
          <MoreOutlined style={{ fontSize: 22 }} />
        </IconButton> */}
      </Stack>
      <RecentOrdersList />
    </>
  );
}
