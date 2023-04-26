import { Grid, Typography, Stack } from "@mui/material";
import TotalSalesGraph from "./total-sales-graph";
import topHeadingStyle, {
  topSubHeadingStyle,
  cashNumberStyle,
  subCashNumberStyle,
  upwardCashStyle,
  vsLastDaysStyle,
  salesIndicator,
  costIndicator,
  indicatorsText,
} from "../styles";

export default function TotalSales() {
  return (
    <>
      <Grid container>
        <Grid
          item
          lg={5}
          md={6}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography variant="h4" style={topHeadingStyle}>
              Total Sales & Costs
            </Typography>
            <Typography variant="h5" style={topSubHeadingStyle}>
              Last 7 days
            </Typography>
          </div>
          <div style={{ paddingTop: 15 }}>
            <Typography
              variant="h4"
              style={{ ...cashNumberStyle, display: "inline-block" }}
            >
              $350K
            </Typography>
            <span style={subCashNumberStyle}>$235K</span>
            <br />
            <Typography
              variant="h5"
              style={{ ...upwardCashStyle, display: "inline-block" }}
            >
              <img
                src="/assets/downwar.svg"
                alt="downward"
                style={{ position: "relative", top: 2 }}
              />
              8.56K
            </Typography>
            <span style={vsLastDaysStyle}>vs last 7 days</span>
          </div>
        </Grid>
        <Grid item lg={7} md={6} xs={12} className="my-custom-chart-grid">
          <Stack direction="row">
            <Stack direction="row" alignItems="center">
              <div style={salesIndicator} />
              <Typography variant="h5" style={indicatorsText}>
                Sales
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <div style={costIndicator} />
              <Typography variant="h5" style={indicatorsText}>
                Costs
              </Typography>
            </Stack>
          </Stack>
          <TotalSalesGraph />
        </Grid>
      </Grid>
    </>
  );
}
