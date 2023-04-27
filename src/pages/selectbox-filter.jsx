import { useState } from "react";
import { styled, Select, Typography, MenuItem } from "@mui/material";
import { selectBoxSelectedValue } from "./styles";

const StyledSelect = styled(Select)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
  padding: theme.spacing(1),
  height: 40,
  "& .MuiSelect-root": {
    flex: 1,
    "&:focus": {
      backgroundColor: "transparent",
    },
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  "& .MuiSelect-icon": {
    color: theme.palette.grey[600],
    height: "100%",
    right: 0,
    top: 0,
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    marginTop: theme.spacing(1),
    borderRadius: "4px",
  },
  "& .MuiList-root": {
    paddingTop: 0,
    paddingBottom: 0,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    boxShadow: "0px 4px 16px rgb(30 30 30 / 9%)",
    borderWidth: 0,
  },
}));

function StyledSelectBox({ placeHolder }) {
  const [selectedOption, setSelectedOption] = useState(
    placeHolder ? placeHolder : "Filter by date range"
  );

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <StyledSelect
      value={selectedOption}
      onChange={handleChange}
      fullWidth
      IconComponent={() => <img src="/assets/chev-down.svg" alt="down-icon" />}
      renderValue={() => {
        if (!selectedOption) {
          return (
            <Typography style={selectBoxSelectedValue} variant="body2">
              Select an option
            </Typography>
          );
        }
        return (
          <Typography style={selectBoxSelectedValue} variant="body2">
            {selectedOption}
          </Typography>
        );
      }}
    >
      <MenuItem value={placeHolder ? placeHolder : "Filter by date range"}>
        Filter by date range
      </MenuItem>
      <MenuItem value={"option1"}>Option 1</MenuItem>
      <MenuItem value={"option2"}>Option 2</MenuItem>
    </StyledSelect>
  );
}

export default StyledSelectBox;
