import { Stack, Typography } from "@mui/material";
import Tabs from "./tabs";
import reportHeading, { reportSubHeading } from "./styles";

export default function Reports() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <div>
          <Typography variant="h4" style={reportHeading}>
            Reports
          </Typography>
          <Typography variant="h5" style={reportSubHeading}>
            Last 7 Days
          </Typography>
        </div>
      </Stack>
      <div>
        <Tabs />
      </div>
    </>
  );
}
