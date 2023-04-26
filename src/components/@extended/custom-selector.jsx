import { useState } from "react";
import { styled, Select, MenuItem, Typography } from "@mui/material";

const selectBoxSelectedValue = {
  fontWeight: 600,
  fontSize: 13,
  color: "#FFC600",
  margin: 0,
};

const StyledSelect = styled(Select)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
  paddingRight: 8,
  height: 26,
  width: 97,
  backgroundColor: "rgba(255, 198, 0, 0.16)",
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
    borderWidth: 0,
  },
}));

function OrderStatusSelector() {
  const [selectedOption, setSelectedOption] = useState("Pending");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <StyledSelect
      value={selectedOption}
      onChange={handleChange}
      IconComponent={() => (
        <img src="/assets/status-down-arrow.svg" alt="down-icon" />
      )}
      renderValue={() => {
        if (!selectedOption) {
          return (
            <Typography style={selectBoxSelectedValue} variant="body2">
              Pending
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
      <MenuItem value={"Pending"}>Pending</MenuItem>
      <MenuItem value={"Confirmed"}>Confirmed</MenuItem>
    </StyledSelect>
  );
}

export default OrderStatusSelector;
