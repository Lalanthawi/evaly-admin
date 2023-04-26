import { Stack, Typography } from "@mui/material";
import ReportsGraph from "./reports-graph";
import {
  tabContainerSelected,
  tabHeading,
  tabSubHeading,
  tabContainerUnSelected,
} from "./styles";
import { useState } from "react";
import SimpleBar from "simplebar-react";

const tabs = [
  { title: "24k", name: "Customers" },
  { title: "3.5k", name: "Total Products" },
  { title: "2.5k", name: "Stock Products" },
  { title: "0.5k", name: "Out of Stock" },
  { title: "250k", name: "Revenue" },
];

export default function Tabs() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <>
      <SimpleBar>
        <Stack direction="row" justifyContent="space-between" paddingTop={1}>
          {tabs.map((el, index) => (
            <Stack
              width={125}
              minWidth={125}
              key={index}
              style={
                currentTabIndex === index
                  ? tabContainerSelected
                  : tabContainerUnSelected
              }
              direction="column"
              onClick={() => setCurrentTabIndex(index)}
            >
              <Typography variant="h5" style={tabHeading}>
                {el.title}
              </Typography>
              <Typography variant="h5" style={tabSubHeading}>
                {el.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </SimpleBar>
      <div className="custom-report-graph" style={{ paddingTop: 15 }}>
        <ReportsGraph />
      </div>
    </>
  );
}
