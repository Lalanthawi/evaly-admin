import { Stack, Typography } from "@mui/material";
import headingStyle from "../last-transactions/styles";
import BestSellingProductList from "./best-selling-product-list";

export default function BestSellingProducts() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" style={headingStyle}>
          Best Selling Products
        </Typography>
        {/* <IconButton size="small">
          <MoreOutlined style={{ fontSize: 22 }} />
        </IconButton> */}
      </Stack>
      <BestSellingProductList />
    </>
  );
}
