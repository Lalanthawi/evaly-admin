import {
  Stack,
  Grid,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  FormControlLabel,
  Switch,
} from "@mui/material";

const ProductInformationForm = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack spacing={1}>
          <InputLabel htmlFor="product-name">Product Name</InputLabel>
          <OutlinedInput
            id="product-name"
            placeholder="Product Name"
            fullWidth
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <InputLabel id="demo-select-small">Parent Category</InputLabel>
          <Select labelId="demo-select-small" id="demo-select-small">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Women Clothing & Fashion </MenuItem>
            <MenuItem value={20}>Men Clothing & Fashion </MenuItem>
            <MenuItem value={30}>Computer & Accessories </MenuItem>
          </Select>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <InputLabel id="demo-select-small">Select Sub Category</InputLabel>
          <Select labelId="demo-select-small" id="demo-select-small">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Women Clothing & Fashion </MenuItem>
            <MenuItem value={20}>Men Clothing & Fashion </MenuItem>
            <MenuItem value={30}>Computer & Accessories </MenuItem>
          </Select>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <InputLabel id="demo-select-small">Brand</InputLabel>
          <Select labelId="demo-select-small" id="demo-select-small">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Women Clothing & Fashion </MenuItem>
            <MenuItem value={20}>Men Clothing & Fashion </MenuItem>
            <MenuItem value={30}>Computer & Accessories </MenuItem>
          </Select>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <InputLabel htmlFor="weight">Weight</InputLabel>
          <OutlinedInput id="weight" type="number" fullWidth />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={1}>
          <InputLabel htmlFor="purchase-quantity">
            Minimum Purchase Qty
          </InputLabel>
          <OutlinedInput id="purchase-quantity" type="number" fullWidth />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Refundable ?"
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProductInformationForm;
