import { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@mui/material/Grid";
import {
  IconButton,
  Stack,
  MenuItem,
  InputLabel,
  Select,
  OutlinedInput,
  InputAdornment,
  Box,
  Avatar,
} from "@mui/material";
import CustomButton from "components/@extended/button";
import { CloseOutlined } from "@ant-design/icons";
import { transactionHeadings } from "pages/styles";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import { useDropzone } from "react-dropzone";

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

export default function AddAdminModal() {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: handleDrop,
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CustomButton text="Add Admin" clickHandler={handleClickOpen} />
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
          Add Admin
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              {...getRootProps()}
              style={{ position: "absolute", zIndex: 1 }}
            >
              <input {...getInputProps()} />
              <IconButton
                style={{ padding: 50, borderRadius: "50%", marginTop: 7 }}
              >
                <CameraOutlined style={{ color: "white", fontSize: 30 }} />
              </IconButton>
            </div>
            <Avatar
              src={file ? URL.createObjectURL(file) : ""}
              sx={{ width: 100, height: 100, marginTop: 1 }}
            />
          </Box>
          <Grid container spacing={3} style={{ paddingTop: 30 }}>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="firstname-signup">First Name*</InputLabel>
                <OutlinedInput
                  id="firstname-signup"
                  placeholder="First Name"
                  fullWidth
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                <OutlinedInput
                  fullWidth
                  placeholder="Last Name"
                  id="lastname-signup"
                />
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                <OutlinedInput fullWidth id="email-login" placeholder="Email" />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="password-signup">Password</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="password-signup"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? (
                          <EyeOutlined />
                        ) : (
                          <EyeInvisibleOutlined />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="******"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="country">Country*</InputLabel>
                <OutlinedInput id="country" placeholder="Country" fullWidth />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="state">State*</InputLabel>
                <OutlinedInput fullWidth placeholder="State" id="state" />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel id="demo-simple-select-helper-label">
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label=""
                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="blocked">Blocked</MenuItem>
                </Select>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel id="demo-simple-select-helper-label">
                  Role
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label=""
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="superadmin">Super Admin</MenuItem>
                  <MenuItem value="manager">Manager</MenuItem>
                </Select>
              </Stack>
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
