import { Stack, Typography } from "@mui/material";
import LastTransactionsList from "./last-transactions-list";
import headingStyle, { viewAllStyle } from "./styles";

export default function LastTransaction() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5" style={headingStyle}>
          Last Transactions
        </Typography>
        <Typography variant="h5" style={viewAllStyle}>
          View All
        </Typography>
      </Stack>
      <LastTransactionsList />
    </>
  );
}
