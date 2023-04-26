import {
  Stack,
  Typography,
  Grid,
  FormControlLabel,
  Switch,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import ImageDropzone from "components/image-dropzone/image-drop-zone";
import ProductInformationForm from "components/product-components/product-information-form";
import PriceStockForm from "components/product-components/price-stock-form";
import Editor from "components/editor";
import ProductVariantsForm from "components/product-components/product-variant-form";
import SpecificationForm from "components/product-components/specification-form";
import DashboardCard from "components/dashboard-card";
import CustomButton from "components/@extended/button";

const typographyStyle = {
  paddingBottom: 6,
};

const gridInsides = {
  marginBottom: 15,
};

export default function AddProducts() {
  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="flex-end"
        alignItems="center"
        marginBottom={2}
      >
        <CustomButton text="Save & Publish" />
        <CustomButton text="Save & Unpublish" />
      </Stack>
      <DashboardCard isAutoHeight>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <div style={gridInsides}>
              <Typography variant="h5" style={{ paddingBottom: 20 }}>
                Product Information
              </Typography>
              <ProductInformationForm />
            </div>
            <div style={gridInsides}>
              <Typography
                variant="h5"
                style={{ ...typographyStyle, paddingBottom: 20 }}
              >
                Product price + stock
              </Typography>
              <PriceStockForm />
            </div>
            <div style={gridInsides}>
              <Typography variant="h5" style={typographyStyle}>
                Product Variation
              </Typography>
              <ProductVariantsForm />
            </div>
            <div style={gridInsides}>
              <Typography variant="h5" style={{ ...typographyStyle }}>
                Description
              </Typography>
              <Editor />
            </div>
            <div style={gridInsides}>
              <Typography variant="h5" style={typographyStyle}>
                Product Specifications
              </Typography>
              <SpecificationForm />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={gridInsides}>
              <Typography variant="h5" style={typographyStyle}>
                Product Images
              </Typography>
              <ImageDropzone />
              <Stack paddingTop={2}>
                <Typography variant="h5" style={typographyStyle}>
                  Thumbnails
                </Typography>
              </Stack>
              <ImageDropzone />
            </div>
            <div style={gridInsides}>
              <Typography variant="h5">Shipping Configuration</Typography>
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="body1">Free Shipping</Typography>
                <FormControlLabel control={<Switch defaultChecked />} />
              </Stack>
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="body1">Flat Rate</Typography>
                <FormControlLabel control={<Switch defaultChecked />} />
              </Stack>
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="body1">Shipping cost</Typography>
                <OutlinedInput type="number" />
              </Stack>
              <Stack paddingTop={2} paddingBottom={1}>
                <Typography variant="h5">Low Stock Quantity Warning</Typography>
              </Stack>
              <Stack spacing={1}>
                <InputLabel htmlFor="quantity">Quantity</InputLabel>
                <OutlinedInput id="quantity" type="number" fullWidth />
              </Stack>
              <Stack paddingTop={2}>
                <Typography variant="h5">Featured</Typography>
              </Stack>
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="body1">Status</Typography>
                <FormControlLabel control={<Switch defaultChecked />} />
              </Stack>
              <Stack paddingTop={1} paddingBottom={1}>
                <Typography variant="h5">Estimate Shipping Time</Typography>
              </Stack>
              <Stack spacing={1}>
                <InputLabel htmlFor="quantity">Shipping Days</InputLabel>
                <OutlinedInput id="quantity" type="number" fullWidth />
              </Stack>
            </div>
          </Grid>
        </Grid>
      </DashboardCard>
    </>
  );
}
