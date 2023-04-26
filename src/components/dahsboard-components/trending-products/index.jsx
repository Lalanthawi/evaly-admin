import { Stack, Typography } from "@mui/material";
import headingStyle from "../last-transactions/styles";
import trendingSubHeading from "./styles";
import ProductsList from "./products-list";

export default function TrendingProducts() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack>
          <Typography variant="h5" style={headingStyle}>
            Trending Products
          </Typography>
          <Typography variant="h5" style={trendingSubHeading}>
            Total 10.4k Visitors
          </Typography>
        </Stack>
        {/* <IconButton size="small">
          <MoreOutlined style={{ fontSize: 22 }} />
        </IconButton> */}
      </Stack>
      <ProductsList />
    </>
  );
}
