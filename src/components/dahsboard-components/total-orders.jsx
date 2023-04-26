import { Grid, Typography } from "@mui/material";
import AreaGraph from "./oneLineChart";
import topHeadingStyle, {
  topSubHeadingStyle,
  cashNumberStyle,
  upwardCashStyle,
  vsLastDaysStyle,
} from "./styles";

export default function TotalOrders() {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={5}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography variant="h4" style={topHeadingStyle}>
              Total Orders
            </Typography>
            <Typography variant="h5" style={topSubHeadingStyle}>
              Last 7 days
            </Typography>
          </div>
          <div style={{ paddingTop: 15 }}>
            <Typography variant="h4" style={cashNumberStyle}>
              $25.7K
            </Typography>
            <Typography
              variant="h5"
              style={{ ...upwardCashStyle, display: "inline-block" }}
            >
              <img
                src="/assets/downwar.svg"
                alt="downward"
                style={{ position: "relative", top: 2 }}
              />
              6%
            </Typography>
            <span style={vsLastDaysStyle} className="vs-last-responsiveness">
              vs last 7 days
            </span>
          </div>
        </Grid>
        <Grid item xs={7} className="my-custom-chart-grid">
          <AreaGraph color="#1EB564" gradient="#1EB56414" />
        </Grid>
      </Grid>
    </>
  );
}
