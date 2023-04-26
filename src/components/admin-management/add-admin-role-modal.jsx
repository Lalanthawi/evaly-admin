import { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CustomButton from "components/@extended/button";
import { CloseOutlined } from "@ant-design/icons";
import { transactionHeadings } from "pages/styles";
import { TextField, Grid, FormControlLabel, Checkbox } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseOutlined />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function AddAdminRoleModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CustomButton text="Add Admin Roles" clickHandler={handleClickOpen} />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="sm"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={transactionHeadings}
        >
          Add Admin Roles
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField placeholder="Name" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Admin Management"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Roles Management"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Coupon"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Category Management"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Brands Management"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Products"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Colors"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Varients"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="All Orders"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Pending Orders"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Confirmed Orders"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Processing Orders"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Picked Orders"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Shipped Orders"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Delivered Orders"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Cancelled Orders"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Transactions"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Invoice"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions style={{ paddingTop: 13, paddingBottom: 13 }}>
          <CustomButton text="Cancel" isBgTransparent />
          <CustomButton text="Submut" />
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
