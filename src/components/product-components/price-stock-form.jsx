import {
  Stack,
  Grid,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const PriceStockForm = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Stack spacing={1}>
          <InputLabel htmlFor="company-price">Company Buying Price</InputLabel>
          <OutlinedInput id="company-price" type="number" fullWidth value="0" />
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack spacing={1}>
          <InputLabel htmlFor="Unit-Price">Unit Price</InputLabel>
          <OutlinedInput id="Unit-Price" type="number" fullWidth value="0" />
        </Stack>
      </Grid>
      <Grid item xs={6} md={8}>
        <Stack spacing={1}>
          <InputLabel htmlFor="Unit-Price">Discount</InputLabel>
          <OutlinedInput id="Unit-Price" type="number" fullWidth value="0" />
        </Stack>
      </Grid>
      <Grid item xs={6} md={4}>
        <Stack spacing={1}>
          <InputLabel id="demo-select-small">Select Flat or Percent</InputLabel>
          <Select labelId="demo-select-small" id="demo-select-small">
            <MenuItem value={10}>Flat </MenuItem>
            <MenuItem value={20}>Percent </MenuItem>
          </Select>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack spacing={1}>
          <InputLabel htmlFor="Quantity">Quantity</InputLabel>
          <OutlinedInput id="Quantity" type="number" fullWidth />
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack spacing={1}>
          <InputLabel htmlFor="sku">SKU</InputLabel>
          <OutlinedInput id="sku" type="text" fullWidth />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PriceStockForm;
