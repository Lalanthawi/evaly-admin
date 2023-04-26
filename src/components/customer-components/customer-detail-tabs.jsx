import { useState } from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SimpleBar from "simplebar-react";
import { tabsTitleSelected, tabsTitleUnSelected } from "./styles";
import SearchInput from "components/@extended/search-input";
import StyledSelectBox from "pages/selectbox-filter";

const customerDetailTabs = ["All Orders", "Completed", "Canceled"];
export default function CustomerDetailTab() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <>
      <SimpleBar>
        <Stack
          direction="row"
          paddingTop={1}
          backgroundColor="white"
          borderTop="1px solid #DBDADE"
          style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
        >
          {customerDetailTabs.map((el, index) => (
            <div style={{ marginLeft: index === 0 ? 30 : 0 }}>
              <Typography
                key={index}
                onClick={() => setCurrentTabIndex(index)}
                variant="h5"
                style={
                  currentTabIndex === index
                    ? tabsTitleSelected
                    : tabsTitleUnSelected
                }
              >
                {el}
              </Typography>
            </div>
          ))}
        </Stack>
      </SimpleBar>
      <Grid container style={{ paddingTop: 20, paddingBottom: 20 }}>
        <Grid item sm={3} xs={5.2}>
          <SearchInput />
        </Grid>
        <Grid item sm={3} xs={0.2}></Grid>
        <Grid item sm={3} xs={0.2}></Grid>
        <Grid item sm={3} xs={6.3}>
          <StyledSelectBox />
        </Grid>
      </Grid>
    </>
  );
}
