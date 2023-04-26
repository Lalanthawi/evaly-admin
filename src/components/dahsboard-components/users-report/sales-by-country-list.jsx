import {
  Stack,
  Typography,
  linearProgressClasses,
  LinearProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  countrySaleCash,
  countrySaleCashSub,
  upperPercentage,
  lowerPercentage,
} from "./styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  width: "48%",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#E9E7FD",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#0F60FF",
  },
}));

export default function SaleByCountryList() {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        paddingTop={3}
      >
        <Stack direction="row" alignItems="center">
          <img src="/assets/Flagpack.svg" width={34} height={34} alt="br" />
          <Stack paddingLeft={1.5}>
            <Typography variant="h4" style={countrySaleCash}>
              30k
            </Typography>
            <Typography variant="h5" style={countrySaleCashSub}>
              United States
            </Typography>
          </Stack>
        </Stack>
        <BorderLinearProgress variant="determinate" value={50} />
        <Typography variant="h5" style={upperPercentage}>
          <img
            src="/assets/chevron-up.svg"
            alt="chevron-up"
            style={{ position: "relative", bottom: 0.9 }}
          />
          16.2%
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        paddingTop={3}
      >
        <Stack direction="row" alignItems="center">
          <img src="/assets/br.svg" width={34} height={34} alt="br-1" />
          <Stack paddingLeft={1.5}>
            <Typography variant="h4" style={countrySaleCash}>
              30k
            </Typography>
            <Typography variant="h5" style={countrySaleCashSub}>
              Brazil
            </Typography>
          </Stack>
        </Stack>
        <BorderLinearProgress variant="determinate" value={50} />
        <Typography variant="h5" style={lowerPercentage}>
          <img
            src="/assets/chevron-down.svg"
            alt="chevron-down"
            style={{ position: "relative", bottom: 0.9 }}
          />
          16.2%
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        paddingTop={3}
      >
        <Stack direction="row" alignItems="center">
          <img src="/assets/br.svg" width={34} height={34} alt="br-1" />
          <Stack paddingLeft={1.5}>
            <Typography variant="h4" style={countrySaleCash}>
              30k
            </Typography>
            <Typography variant="h5" style={countrySaleCashSub}>
              Brazil
            </Typography>
          </Stack>
        </Stack>
        <BorderLinearProgress variant="determinate" value={50} />
        <Typography variant="h5" style={lowerPercentage}>
          <img
            src="/assets/chevron-down.svg"
            alt="chevron-down"
            style={{ position: "relative", bottom: 0.9 }}
          />
          16.2%
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        paddingTop={3}
      >
        <Stack direction="row" alignItems="center">
          <img src="/assets/br.svg" width={34} height={34} alt="br" />
          <Stack paddingLeft={1.5}>
            <Typography variant="h4" style={countrySaleCash}>
              30k
            </Typography>
            <Typography variant="h5" style={countrySaleCashSub}>
              Brazil
            </Typography>
          </Stack>
        </Stack>
        <BorderLinearProgress variant="determinate" value={50} />
        <Typography variant="h5" style={upperPercentage}>
          <img
            src="/assets/chevron-up.svg"
            alt="chevron-up"
            style={{ position: "relative", bottom: 0.9 }}
          />
          16.2%
        </Typography>
      </Stack>
    </>
  );
}
