import { Stack, Typography } from "@mui/material";
import topHeading, { secondHeading, subHeading } from "./styles";
import TotalUsersChart from "./users-report-graph";
import SaleByCountryList from "./sales-by-country-list";

export default function UsersReport() {
  return (
    <>
      <Typography variant="h5" style={topHeading}>
        Users in last 30 minutes
      </Typography>
      <Typography variant="h5" style={secondHeading}>
        16.5K
      </Typography>
      <Typography variant="h5" style={subHeading}>
        Users per minute
      </Typography>
      <div className="custom-total-users-graph">
        <TotalUsersChart />
      </div>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5" style={topHeading}>
          Sales by Country
        </Typography>
        <Typography variant="h5" style={topHeading}>
          Sales
        </Typography>
      </Stack>
      <SaleByCountryList />
    </>
  );
}
