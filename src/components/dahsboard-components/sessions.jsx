import { Grid, Typography } from "@mui/material";
import AreaGraph from "./oneLineChart";
import topHeadingStyle, {
  topSubHeadingStyle,
  cashNumberStyle,
  downWardCashStyle,
  vsLastDaysStyle,
} from "./styles";

export default function Sessions() {
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
              Sessions
            </Typography>
            <Typography variant="h5" style={topSubHeadingStyle}>
              Last 7 days
            </Typography>
          </div>
          <div style={{ paddingTop: 15 }}>
            <Typography variant="h4" style={cashNumberStyle}>
              $16.6K
            </Typography>
            <Typography
              variant="h5"
              style={{ ...downWardCashStyle, display: "inline-block" }}
            >
              <img
                src="/assets/upward.svg"
                alt="upward"
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
          <AreaGraph color="#D02626" gradient="#D0262614" />
        </Grid>
      </Grid>
    </>
  );
}
