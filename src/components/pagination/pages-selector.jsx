import { useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import pagesSelectorHeadings from "./styes";

export default function PagesSelector() {
  const [perPage, setPerPage] = useState(10);

  return (
    <Stack direction="row" alignItems="center">
      <Typography variant="h5" style={pagesSelectorHeadings}>
        Shwoing
      </Typography>
      <FormControl sx={{ pl: 1, pr: 1 }}>
        <Select
          value={perPage}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          size="small"
          style={{ width: 78 }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h5" style={pagesSelectorHeadings}>
        of 50
      </Typography>
    </Stack>
  );
}
