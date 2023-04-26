import {
  Stack,
  Grid,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

const ProductVariantsForm = () => {
  const [selectedAttribute, setSelectedAttribute] = useState([]);
  const [sizes, setSizes] = useState([]);

  return (
    <Grid container spacing={3} style={{ paddingTop: 10 }}>
      <Grid item xs={12}>
        <Stack spacing={1}>
          <InputLabel id="select-attribute">Select Attribute</InputLabel>
          <Select
            value={selectedAttribute}
            onChange={(event) => setSelectedAttribute(event.target.value)}
            labelId="select-attribute"
            id="select-attribute"
            multiple
          >
            <MenuItem value="size">Size</MenuItem>
            <MenuItem value="color">Color</MenuItem>
          </Select>
        </Stack>
      </Grid>
      {selectedAttribute.includes("size") && (
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel id="Size">Size</InputLabel>
            <Select
              value={sizes}
              onChange={(event) => setSizes(event.target.value)}
              labelId="Size"
              id="Size"
              multiple
            >
              <MenuItem value="">Select Size</MenuItem>
              <MenuItem value="m">M</MenuItem>
              <MenuItem value="l">L</MenuItem>
              <MenuItem value="xl">XL</MenuItem>
              <MenuItem value="xxl">XXL</MenuItem>
              <MenuItem value="S">S</MenuItem>
            </Select>
          </Stack>
        </Grid>
      )}
      {selectedAttribute.includes("color") && (
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel id="Size">Colors</InputLabel>
            <Select
              value={sizes}
              onChange={(event) => setSizes(event.target.value)}
              labelId="Size"
              id="Size"
              multiple
            >
              <MenuItem value="green">Green</MenuItem>
              <MenuItem value="yellow">Yellow</MenuItem>
              <MenuItem value="black">Black</MenuItem>
              <MenuItem value="purple">Purple</MenuItem>
              <MenuItem value="red">Red</MenuItem>
            </Select>
          </Stack>
        </Grid>
      )}
    </Grid>
  );
};

export default ProductVariantsForm;
