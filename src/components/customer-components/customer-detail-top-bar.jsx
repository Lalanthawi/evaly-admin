import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  customerDetailTopBar,
  customerNameStyleForInfo,
  customerEmailtyle,
  personalInfoHeading,
  leftPersonalInfoHeadings,
  rightPersonalInfoHeadings,
  addressCustomer,
  shippingAnalyticsHeading,
  shippingAnalyticsSubHeading,
} from "./styles";
import { useMediaQuery } from "@mui/material";

export default function CustomerDetailTopBar() {
  const isMobileView = useMediaQuery("(max-width:767px)");

  return (
    <div style={customerDetailTopBar}>
      <Grid container>
        <Grid
          item
          md={4}
          sm={6}
          xs={12}
          style={{
            borderRight: isMobileView ? "none" : "1px solid #DBDADE",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack direction="row" alignItems="center">
            <img
              src="https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU="
              width="72px"
              height="72px"
              alt="user-profile"
              style={{ borderRadius: "50%" }}
            />
            <div style={{ paddingLeft: 15 }}>
              <Typography variant="h5" style={customerNameStyleForInfo}>
                Rober Fox
              </Typography>
              <Typography variant="h5" style={customerEmailtyle}>
                roberfox@gmail.com
              </Typography>
            </div>
          </Stack>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={12}
          style={{
            borderRight: isMobileView ? "none" : "1px solid #DBDADE",
            paddingLeft: isMobileView ? 0 : 20,
            display: "flex",
            justifyContent: isMobileView ? "center" : "left",
            paddingTop: isMobileView ? 20 : 0,
          }}
        >
          <div>
            <Typography variant="h5" style={personalInfoHeading}>
              PERSONAL INFORMATION
            </Typography>
            <Stack direction="row" paddingBottom={1}>
              <Typography variant="h5" style={leftPersonalInfoHeadings}>
                Contact Number
              </Typography>
              <Typography variant="h5" style={rightPersonalInfoHeadings}>
                (201 555-0124)
              </Typography>
            </Stack>
            <Stack direction="row" paddingBottom={1}>
              <Typography variant="h5" style={leftPersonalInfoHeadings}>
                Gender
              </Typography>
              <Typography variant="h5" style={rightPersonalInfoHeadings}>
                Male
              </Typography>
            </Stack>
            <Stack direction="row" paddingBottom={1}>
              <Typography variant="h5" style={leftPersonalInfoHeadings}>
                Date of Birth
              </Typography>
              <Typography variant="h5" style={rightPersonalInfoHeadings}>
                1 Jan, 1985
              </Typography>
            </Stack>
            <Stack direction="row" paddingBottom={1}>
              <Typography variant="h5" style={leftPersonalInfoHeadings}>
                Member Since
              </Typography>
              <Typography variant="h5" style={rightPersonalInfoHeadings}>
                3 Jan, 2021
              </Typography>
            </Stack>
          </div>
        </Grid>
        <Grid
          item
          md={4}
          sm={12}
          xs={12}
          style={{
            paddingLeft: 20,
            display: isMobileView ? "flex" : "block",
            justifyContent: isMobileView ? "center" : "left",
          }}
        >
          <div>
            <Typography variant="h5" style={personalInfoHeading}>
              SHIPPING ADDRESS
            </Typography>
            <Typography variant="h5" style={addressCustomer}>
              3517 W. Gray St. Utica, Pennsylvania 57867
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              paddingTop={2}
            >
              <Stack direction="column">
                <Typography variant="h4" style={shippingAnalyticsHeading}>
                  150
                </Typography>
                <Typography variant="h5" style={shippingAnalyticsSubHeading}>
                  Total Order
                </Typography>
              </Stack>
              <Stack direction="column">
                <Typography variant="h4" style={shippingAnalyticsHeading}>
                  140
                </Typography>
                <Typography variant="h5" style={shippingAnalyticsSubHeading}>
                  Completed
                </Typography>
              </Stack>
              <Stack direction="column">
                <Typography variant="h4" style={shippingAnalyticsHeading}>
                  10
                </Typography>
                <Typography variant="h5" style={shippingAnalyticsSubHeading}>
                  Canceled
                </Typography>
              </Stack>
            </Stack>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
