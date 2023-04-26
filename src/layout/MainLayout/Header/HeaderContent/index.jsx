import { Box } from "@mui/material";
import Profile from "./Profile";
// import Notification from "./Notification";

const HeaderContent = () => {
  return (
    <>
      <Box sx={{ width: "100%", ml: 1 }} />
      {/* <Notification /> */}
      <Profile />
    </>
  );
};

export default HeaderContent;
