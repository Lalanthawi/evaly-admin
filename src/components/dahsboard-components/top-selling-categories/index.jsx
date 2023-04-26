import { Stack, Typography } from "@mui/material";
import headingStyle from "../last-transactions/styles";
import trendingSubHeading from "../trending-products/styles";
import categoryNameStyle, {
  cashStyle,
  perDayStyle,
  circleStyle,
} from "./styles";

export default function TopSellingCategories() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack>
          <Typography variant="h5" style={headingStyle}>
            Top Selling Category
          </Typography>
          <Typography variant="h5" style={trendingSubHeading}>
            Total 10.4k Visitors
          </Typography>
        </Stack>
        {/* <IconButton size="small">
          <MoreOutlined style={{ fontSize: 22 }} />
        </IconButton> */}
      </Stack>
      <div>
        <div className="circle-container">
          <div className="circle circle-1" style={circleStyle}>
            <Stack>
              <Typography
                className="cat-name"
                variant="h5"
                style={categoryNameStyle}
              >
                Electronics
              </Typography>
              <Typography className="cat-cash" variant="h4" style={cashStyle}>
                3.16
              </Typography>
              <Typography className="per-day" variant="h5" style={perDayStyle}>
                Per Day
              </Typography>
            </Stack>
          </div>
          <div className="circle circle-2" style={circleStyle}>
            <Stack>
              <Typography
                variant="h5"
                className="cat-name"
                style={categoryNameStyle}
              >
                Make-up
              </Typography>
              <Typography className="cat-cash" variant="h4" style={cashStyle}>
                1.86
              </Typography>
              <Typography className="per-day" variant="h5" style={perDayStyle}>
                Per Day
              </Typography>
            </Stack>
          </div>
          <div className="circle circle-3" style={circleStyle}>
            <Stack>
              <Typography
                className="cat-name"
                variant="h5"
                style={categoryNameStyle}
              >
                Fashion
              </Typography>
              <Typography className="cat-cash" variant="h4" style={cashStyle}>
                4.567
              </Typography>
              <Typography className="per-day" variant="h5" style={perDayStyle}>
                Per Day
              </Typography>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
