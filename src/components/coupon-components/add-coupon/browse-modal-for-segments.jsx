import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import PlusOutlined from "@ant-design/icons/PlusOutlined";
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "@mui/material";
import borderDiv from "./styles.jsx";
import CustomButton from "components/@extended/button";

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        fontWeight: "bold",
        fontSize: 15,
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
      }}
      {...other}
    >
      {children}
    </DialogTitle>
  );
}

export default function BrowseModalForCustomerSegments() {
  const [open, setOpen] = useState(false);
  const isMobileView = useMediaQuery("(max-width:767px)");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        style={{ marginBottom: 10 }}
        variant="outlined"
        startIcon={<PlusOutlined style={{ fontSize: 15 }} />}
      >
        Browse Customer Segments
      </Button>
      <Dialog
        onClose={handleClose}
        open={open}
        fullScreen={isMobileView ? true : false}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Edit customer segments
        </BootstrapDialogTitle>
        <DialogContent dividers={"paper"}>
          <Grid container>
            <Grid item xs={12} style={{ paddingTop: 15 }}>
              <div style={borderDiv}>
                <Stack spacing={1}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" alignItems="center">
                      <Checkbox defaultChecked />
                      <Typography variant="body1">
                        Abandoned checkouts in the last 30 days
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </div>
              <div style={borderDiv}>
                <Stack spacing={1}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" alignItems="center">
                      <Checkbox defaultChecked />
                      <Typography variant="body1">Email subscribers</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </div>
              <div style={borderDiv}>
                <Stack spacing={1}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" alignItems="center">
                      <Checkbox defaultChecked />
                      <Typography variant="body1">
                        Customers who haven't purchased
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </div>
              <div style={borderDiv}>
                <Stack spacing={1}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" alignItems="center">
                      <Checkbox defaultChecked />
                      <Typography variant="body1">
                        Customers who have purchased more than once
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </div>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions style={{ paddingTop: 13, paddingBottom: 13 }}>
          <CustomButton
            text="Cancel"
            isBgTransparent
            clickHandler={handleClose}
          />
          <CustomButton text="Done" />
        </DialogActions>
      </Dialog>
    </>
  );
}
