import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import {
  useTheme,
  FormControl,
  RadioGroup,
  Radio,
  Checkbox,
  FormGroup,
} from "@mui/material";
import BrowseModalForProducts from "./browse-modal-for-products";
import BrowseModalForCustomers from "./browse-modal-for-customer";
import BrowseModalForCustomerSegments from "./browse-modal-for-segments";
import borderDiv from "./styles.jsx";

const AddCouponPage = () => {
  const theme = useTheme();
  const [customerEligibility, setCustomerEligibilty] =
    useState("all-customers");

  const bottomShortMessageStyle = {
    color: theme.palette.secondary.main,
    fontSize: 11,
    margin: 2,
  };

  const setFontSize = {
    fontSize: "0.8rem",
    color: theme.palette.secondary.main,
    fontWeight: 400,
  };

  const gridInsides = {
    marginBottom: 15,
  };

  return (
    <>
      <Grid container spacing={3} style={{ paddingBottom: 20 }}>
        <Grid item xs={12} md={8}>
          <div style={gridInsides}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="coupon-name">Coupon Name</InputLabel>
                  <OutlinedInput
                    id="coupon-name"
                    placeholder="Coupon Name"
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="coupon-name">Coupon Code</InputLabel>
                  <OutlinedInput
                    id="coupon-code"
                    placeholder="Coupon Code"
                    fullWidth
                  />
                  <Typography variant="body1" style={bottomShortMessageStyle}>
                    The code the customer enters to get the discount.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="coupon-type">Coupon Type</InputLabel>
                  <Select
                    id="coupon-type"
                    label=""
                    defaultValue="percentage"
                    fullWidth
                  >
                    <MenuItem value="percentage">Percentage</MenuItem>
                    <MenuItem value="fixed-amount">Fixed Amount</MenuItem>
                  </Select>
                  <Typography variant="body1" style={bottomShortMessageStyle}>
                    Percentage or Fixed Amount.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="discount">Discount</InputLabel>
                  <OutlinedInput
                    id="discount"
                    placeholder="Discount"
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="total-amount">Total Amount</InputLabel>
                  <OutlinedInput
                    id="total-amount"
                    placeholder="Total Amount"
                    fullWidth
                  />
                  <Typography variant="body1" style={bottomShortMessageStyle}>
                    The total amount that must be reached before the coupon is
                    valid.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </div>
          <div style={gridInsides}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <BrowseModalForProducts />
                <Typography
                  variant="body1"
                  style={{ ...bottomShortMessageStyle, paddingBottom: 10 }}
                >
                  Choose specific products the coupon will apply to. Select no
                  products to apply coupon to entire cart.
                </Typography>
                {[0, 1, 2].map((el) => (
                  <div key={el} style={borderDiv}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      spacing={2}
                      // paddingTop={1}
                      alignItems="center"
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={2}
                        alignItems="center"
                      >
                        <img
                          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
                          width="50px"
                          height="50px"
                          style={{ borderRadius: 5 }}
                          alt={`custom${el}`}
                        />
                        <Typography variant="body1">
                          Zays Leather Sandle Shoes for Men - Black - A14
                        </Typography>
                      </Stack>
                      <IconButton size="small">
                        <img
                          src="/assets/trash.svg"
                          width="24px"
                          height="24px"
                          alt="trash-icon"
                        />
                      </IconButton>
                    </Stack>
                  </div>
                ))}
              </Grid>
            </Grid>
          </div>
          <div style={gridInsides}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" style={{ paddingBottom: 20 }}>
                  Customer eligibility
                </Typography>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={customerEligibility}
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="all-customers"
                      control={<Radio />}
                      onChange={() => setCustomerEligibilty("all-customers")}
                      label="All customers"
                    />
                    <FormControlLabel
                      value="segments"
                      control={<Radio />}
                      onChange={() => setCustomerEligibilty("segments")}
                      label="Specific customer segments"
                    />
                    <FormControlLabel
                      value="specific-customer"
                      control={<Radio />}
                      onChange={() =>
                        setCustomerEligibilty("specific-customer")
                      }
                      label="Specific customers"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {customerEligibility === "segments" && (
                <Grid item xs={12}>
                  <BrowseModalForCustomerSegments />
                  {[
                    {
                      id: 1,
                      segment: "Abandoned checkouts in the last 30 days",
                    },
                    {
                      id: 2,
                      segment: "Email subscribers",
                    },
                    {
                      id: 3,
                      segment: "Customers who haven't purchased",
                    },
                  ].map((el) => (
                    <div key={el} style={borderDiv}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={2}
                        alignItems="center"
                      >
                        <Typography variant="body1">{el.segment}</Typography>
                        <IconButton size="small">
                          <img
                            src="/assets/trash.svg"
                            width="24px"
                            height="24px"
                            alt="trash-icon"
                          />
                        </IconButton>
                      </Stack>
                    </div>
                  ))}
                </Grid>
              )}
              {customerEligibility === "specific-customer" && (
                <Grid item xs={12}>
                  <BrowseModalForCustomers />
                  {[0, 1, 2].map((el) => (
                    <div key={el} style={borderDiv}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={2}
                        alignItems="center"
                      >
                        <Stack
                          direction="column"
                          // justifyContent="space-between"
                          spacing={2}
                          justifyContent="center"
                        >
                          <Typography variant="body1">
                            James Anderson
                          </Typography>
                          <Typography
                            variant="body1"
                            style={{ marginTop: 0, ...setFontSize }}
                          >
                            jamesanderson@gmail.com
                          </Typography>
                        </Stack>
                        <IconButton size="small">
                          <img
                            src="/assets/trash.svg"
                            width="24px"
                            height="24px"
                            alt="trash-icon"
                          />
                        </IconButton>
                      </Stack>
                    </div>
                  ))}
                </Grid>
              )}
            </Grid>
          </div>
          <div style={gridInsides}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" style={{ paddingBottom: 20 }}>
                  Maximum discount uses
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Limit number of times this discount can be used in total"
                  />
                  <OutlinedInput type="number" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Limit to one use per customer"
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={gridInsides}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Customer Login"
                />
                <Typography variant="body1" style={bottomShortMessageStyle}>
                  Customer must be logged in to use the coupon.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Free Shipping"
                />
              </Grid>
            </Grid>
          </div>
          <div style={gridInsides}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="date-start">Date Start</InputLabel>
                  <OutlinedInput id="date-start" type="date" fullWidth />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="date-end">Date End</InputLabel>
                  <OutlinedInput id="date-end" type="date" fullWidth />
                </Stack>
              </Grid>
            </Grid>
          </div>
          <div style={gridInsides}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="coupon-status">Status</InputLabel>
                  <Select
                    id="coupon-status"
                    label=""
                    defaultValue="enabled"
                    fullWidth
                  >
                    <MenuItem value="enabled">Enabled</MenuItem>
                    <MenuItem value="disabled">Disabled</MenuItem>
                  </Select>
                </Stack>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default AddCouponPage;
