import { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import OutlinedInput from "@mui/material/OutlinedInput";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CustomButton from "components/@extended/button";
import { CloseOutlined } from "@ant-design/icons";
import { transactionHeadings } from "pages/styles";

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

export default function AddColorsModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CustomButton text="Add Color" clickHandler={handleClickOpen} />
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
          Add New Color
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="color-name">Color Name</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="color-name"
                  placeholder="Color Name"
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="color-code">Color Code</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="color-code"
                  placeholder="Color Code"
                />
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
