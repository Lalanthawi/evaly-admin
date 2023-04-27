import { Grid, Stack, Typography } from "@mui/material";
import DashboardCard from "components/dashboard-card";
import OrderTable from "components/order-management/table";
import { useState } from "react";
import SimpleBar from "simplebar-react";
import SearchInput from "../components/@extended/search-input";
import { DateRangePicker } from "./dateRangePicker";
import tabsTitleSelected, { tabsTitleUnSelected } from "./styles";

const orderTabs = [
	"Pending",
	"Confirmed",
	"Processing",
	"Picked",
	"Shipped",
	"Delivered",
	"Cancelled",
];

export default function OrderManagement() {
	const [currentTabIndex, setCurrentTabIndex] = useState(0);
	return (
		<>
			<SimpleBar>
				<Stack direction="row" paddingTop={1} borderBottom="1px solid #DBDADE">
					{orderTabs.map((el, index) => (
						<Typography
							key={index}
							onClick={() => setCurrentTabIndex(index)}
							variant="h5"
							style={
								currentTabIndex === index
									? tabsTitleSelected(el)
									: tabsTitleUnSelected
							}
						>
							{el}
						</Typography>
					))}
				</Stack>
			</SimpleBar>
			<Grid
				container
				style={{ paddingTop: 20, paddingBottom: 20 }}
				justifyContent="space-between"
			>
				<Grid item sm={3} xs={5.2}>
					<SearchInput />
				</Grid>

				<Grid item sm={3} xs={6.3}>
					<DateRangePicker />
				</Grid>
			</Grid>
			<DashboardCard isAutoHeight padding={0}>
				<OrderTable />
			</DashboardCard>
		</>
	);
}
