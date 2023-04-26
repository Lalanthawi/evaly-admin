import { Stack, Typography } from "@mui/material";

export default function ProductsList() {
  return [0, 1, 2, 3, 4, 5].map((el) => (
    <Stack
      direction="row"
      paddingTop={2}
      key={el}
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid #DBDADE"
      paddingBottom={2}
    >
      <Stack direction="row" alignItems="center">
        <img
          src="https://media.istockphoto.com/id/1183532123/photo/trang-thailand-october-24-2019-customer-lay-down-new-macbook-pro-2019-and-iphone-11-pro-are.jpg?s=612x612&w=0&k=20&c=wNW3Xg3csEqgFORvQy_v8YeB8LLaYB82gSToI1caT08="
          width="46px"
          height="46px"
          alt={`img${el}`}
          style={{ borderRadius: "50%" }}
        />
        <Stack direction="column" paddingLeft={2}>
          <Typography
            variant="h4"
            style={{
              margin: 0,
              color: "#23272E",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            Apple Iphone 13
          </Typography>
          <Typography
            variant="h5"
            style={{
              margin: 0,
              color: "#8B909A",
              fontSize: 13,
              fontWeight: 400,
            }}
          >
            Item #FXZ-4567
          </Typography>
        </Stack>
      </Stack>
      <Typography
        variant="h5"
        style={{ fontSize: 15, fontWeight: 500, color: "#23272E" }}
      >
        $999.29
      </Typography>
    </Stack>
  ));
}
