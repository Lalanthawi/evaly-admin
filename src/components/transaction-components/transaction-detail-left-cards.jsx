import Grid from "@mui/material/Grid";
import DashboardCard from "components/dashboard-card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { transactionHeadings } from "pages/styles";
import {
  leftPersonalInfoHeadings,
  rightPersonalInfoHeadings,
} from "../customer-components/styles";
import OrderStatusSelector from "components/@extended/custom-selector";

const leftDesignChanged = { ...leftPersonalInfoHeadings, fontWeight: 600 };

export default function TransactionDetailLeftCard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <DashboardCard>
          <Typography
            variant="h5"
            style={{ ...transactionHeadings, paddingBottom: 10 }}
          >
            Transaction Details
          </Typography>
          <Stack direction="row" paddingBottom={1}>
            <Typography variant="h5" style={leftDesignChanged}>
              ID:
            </Typography>
            <Typography variant="h5" style={rightPersonalInfoHeadings}>
              #5089
            </Typography>
          </Stack>
          <Stack direction="row" paddingBottom={1}>
            <Typography variant="h5" style={leftDesignChanged}>
              Date:
            </Typography>
            <Typography variant="h5" style={rightPersonalInfoHeadings}>
              6 April, 2023
            </Typography>
          </Stack>
          <Stack direction="row" paddingBottom={1}>
            <Typography variant="h5" style={leftDesignChanged}>
              Status:
            </Typography>
            <Typography variant="h5" style={rightPersonalInfoHeadings}>
              <OrderStatusSelector />
            </Typography>
          </Stack>
        </DashboardCard>
      </Grid>
      <Grid item xs={12}>
        <DashboardCard>
          <Typography
            variant="h5"
            style={{ ...transactionHeadings, paddingBottom: 10 }}
          >
            Customer Details
          </Typography>
          <Stack direction="row" paddingBottom={1}>
            <Typography variant="h5" style={leftDesignChanged}>
              Name:
            </Typography>
            <Typography variant="h5" style={rightPersonalInfoHeadings}>
              Robert Fox
            </Typography>
          </Stack>
          <Stack direction="row" paddingBottom={1}>
            <Typography variant="h5" style={leftDesignChanged}>
              Email:
            </Typography>
            <Typography variant="h5" style={rightPersonalInfoHeadings}>
              robert@gmail.com
            </Typography>
          </Stack>
          <Stack direction="row" paddingBottom={1}>
            <Typography variant="h5" style={leftDesignChanged}>
              Number:
            </Typography>
            <Typography variant="h5" style={rightPersonalInfoHeadings}>
              (201) 666-0124
            </Typography>
          </Stack>
        </DashboardCard>
      </Grid>
      <Grid item xs={12}>
        <DashboardCard>
          <Typography
            variant="h5"
            style={{ ...transactionHeadings, paddingBottom: 10 }}
          >
            Payment Details
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            paddingBottom={1}
          >
            <Typography
              variant="h5"
              style={{ ...leftDesignChanged, width: "auto" }}
            >
              Payement Method:
            </Typography>
            <Typography variant="h5" style={rightPersonalInfoHeadings}>
              CC
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            paddingBottom={1}
          >
            <Typography
              variant="h5"
              style={{ ...leftDesignChanged, width: "auto" }}
            >
              Total Price (2 items):
            </Typography>
            <Typography variant="h5" style={rightPersonalInfoHeadings}>
              $686.33
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            paddingBottom={1}
          >
            <Typography
              variant="h5"
              style={{ ...leftDesignChanged, width: "auto" }}
            >
              Total Shipping Cost (800gr):
            </Typography>
            <Typography variant="h5" style={rightPersonalInfoHeadings}>
              $50
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            paddingBottom={1}
            paddingTop={1}
          >
            <Typography
              variant="h5"
              style={{ ...leftDesignChanged, width: "auto" }}
            >
              Total:
            </Typography>
            <Typography variant="h5" style={rightPersonalInfoHeadings}>
              $686.33
            </Typography>
          </Stack>
        </DashboardCard>
      </Grid>
      <Grid item xs={12}>
        <DashboardCard>
          <Typography variant="h5" style={transactionHeadings}>
            Shipping Information
          </Typography>
          <Stack direction="row" paddingBottom={1} paddingTop={1}>
            <Typography
              variant="h5"
              style={{ ...leftDesignChanged, width: "auto" }}
            >
              Courier:
            </Typography>
            <Typography
              variant="h5"
              style={{ ...rightPersonalInfoHeadings, paddingLeft: 3 }}
            >
              Leopard
            </Typography>
          </Stack>
          <Stack direction="row" paddingBottom={1} paddingTop={1}>
            <Typography
              variant="h5"
              style={{ ...leftDesignChanged, width: "auto" }}
            >
              Tracking Number:
            </Typography>
            <Typography
              variant="h5"
              style={{ ...rightPersonalInfoHeadings, paddingLeft: 3 }}
            >
              000555802
            </Typography>
          </Stack>
          <Stack direction="row" paddingBottom={1} paddingTop={1}>
            <Typography
              variant="h5"
              style={{ ...leftDesignChanged, width: "auto" }}
            >
              Address:
            </Typography>
            <Typography
              variant="h5"
              style={{ ...rightPersonalInfoHeadings, paddingLeft: 3 }}
            >
              3517 W. Gray St. Utica Pennsylvania 57867
            </Typography>
          </Stack>
        </DashboardCard>
      </Grid>
    </Grid>
  );
}
