import React from "react";
import { styled, TextField, InputAdornment } from "@mui/material";

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    height: 40,
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.04)",
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
    "&.Mui-focused": {
      backgroundColor: "#FFFFFF",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: 0,
    },
  },
});

function SearchInput() {
  return (
    <StyledTextField
      variant="outlined"
      placeholder="Search"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <img src="/assets/mingcute_search-line.svg" alt="search-icon" />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchInput;
