import { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import CustomButton from "components/@extended/button";
import { CloseOutlined } from "@ant-design/icons";
import { transactionHeadings } from "pages/styles";
import { Button, Typography } from "@mui/material";
import inputTitle, { cancelIconButtonStyle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PlusOutlined from "@ant-design/icons/PlusOutlined";

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

export default function CategoriesModal() {
  const [open, setOpen] = useState(false);
  const [parentCategory, setParentCategory] = useState("spc");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CustomButton text="Add New Category" clickHandler={handleClickOpen} />
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
          Add New Category
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <FormControl sx={{ width: "100%" }}>
            <Select value={parentCategory} size="small">
              <MenuItem value="spc">Select Parent Category</MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
          <Typography style={inputTitle}>Sub Categories</Typography>
          {[0, 1, 2].map((el) => (
            <Stack
              key={el}
              direction="row"
              alignItems="center"
              paddingBottom={2}
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                style={{ border: "1px solid #8B909A", marginRight: 8 }}
              >
                <input hidden accept="image/*" type="file" />
                <FontAwesomeIcon icon={faImage} style={{ color: "#8B909A" }} />
              </IconButton>
              <OutlinedInput
                fullWidth
                size="small"
                placeholder="Category Name"
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                size="small"
                style={cancelIconButtonStyle}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ color: "#8B909A", fontSize: 10, fontWeight: "bold" }}
                />
              </IconButton>
            </Stack>
          ))}
          <Button startIcon={<PlusOutlined style={{ fontSize: 15 }} />}>
            Add New
          </Button>
        </DialogContent>
        <DialogActions style={{ paddingTop: 13, paddingBottom: 13 }}>
          <CustomButton text="Cancel" isBgTransparent />
          <CustomButton text="Submut" />
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
