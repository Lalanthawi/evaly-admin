import { useState } from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
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

export default function BrowseModalForCustomers() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobileView = useMediaQuery("(max-width:767px)");

  const setFontSize = {
    fontSize: "0.8rem",
    color: theme.palette.secondary.main,
    fontWeight: 400,
  };

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
        variant="outlined"
        style={{ marginBottom: 10 }}
        startIcon={<PlusOutlined style={{ fontSize: 15 }} />}
      >
        Browse Customers
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
          Add Customers
        </BootstrapDialogTitle>
        <DialogContent dividers={"paper"}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                placeholder="Search..."
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton aria-label="search">
                        <SearchOutlined />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 15 }}>
              {[0, 1, 2, 3, 4, 5].map((el) => (
                <div key={el} style={borderDiv}>
                  <Stack spacing={1}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Stack direction="row" alignItems="center">
                        <Checkbox defaultChecked />
                        <Stack
                          direction="column"
                          justifyContent="center"
                          paddingLeft={0.5}
                        >
                          <Typography variant="body1">James Thomas</Typography>
                          <Typography variant="body1" style={setFontSize}>
                            jamesthomas@gmail.com
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </div>
              ))}
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
