import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { MenuItem, Select, Typography, styled } from "@mui/material";
import { useState } from "react";
import { getStatusColor, statusColors } from "../../themes/colors";

const StyledSelect = styled(Select, {
	shouldForwardProp: (prop) => prop !== "statusColor",
})(({ statusColor, theme }) => ({
	display: "flex",
	alignItems: "center",
	borderRadius: "4px",
	paddingRight: 8,
	height: 26,
	width: 97,
	backgroundColor: statusColor.background,
	"& .MuiSelect-root": {
		flex: 1,
		"&:focus": {
			backgroundColor: "transparent",
		},
		"&:hover": {
			backgroundColor: theme.palette.grey[200],
		},
	},
	"& .MuiSelect-icon": {
		color: theme.palette.grey[600],
		height: "100%",
		right: 0,
		top: 0,
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		paddingRight: theme.spacing(1),
	},
	"& .MuiPaper-root": {
		marginTop: theme.spacing(1),
		borderRadius: "4px",
	},
	"& .MuiList-root": {
		paddingTop: 0,
		paddingBottom: 0,
	},
	"& .MuiOutlinedInput-notchedOutline": {
		borderWidth: 0,
	},
}));

function OrderStatusSelector() {
	const [selectedOption, setSelectedOption] = useState("Pending");

	const handleChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const statusColor = getStatusColor(selectedOption);

	return (
		<StyledSelect
			value={selectedOption}
			onChange={handleChange}
			statusColor={statusColor}
			MenuProps={{ MenuListProps: { disablePadding: true }, sx: {} }}
			IconComponent={() => (
				<KeyboardArrowDownRoundedIcon
					fontSize="12px"
					sx={{ color: statusColor.color }}
				/>
			)}
			renderValue={() => {
				if (!selectedOption) {
					return (
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: 13,
								color: statusColor.color,
								margin: 0,
							}}
							variant="body2"
						>
							Pending
						</Typography>
					);
				}
				return (
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: 13,
							color: statusColor.color,
							margin: 0,
						}}
						variant="body2"
					>
						{selectedOption}
					</Typography>
				);
			}}
		>
			<MenuItem
				sx={{
					color: statusColors.Pending.color,
				}}
				value={"Pending"}
			>
				Pending
			</MenuItem>
			<MenuItem
				sx={{
					color: statusColors.Delivered.color,
				}}
				value={"Delivered"}
			>
				Delivered
			</MenuItem>
			<MenuItem
				sx={{
					color: statusColors.Picked.color,
				}}
				value={"Picked"}
			>
				Picked
			</MenuItem>
			<MenuItem
				sx={{
					color: statusColors.Processing.color,
				}}
				value={"Processing"}
			>
				Processing
			</MenuItem>
			<MenuItem
				sx={{
					color: statusColors.Shipped.color,
				}}
				value={"Shipped"}
			>
				Shipped
			</MenuItem>
			<MenuItem
				sx={{
					color: statusColors.Cancelled.color,
				}}
				value={"Cancelled"}
			>
				Cancelled
			</MenuItem>
		</StyledSelect>
	);
}

export default OrderStatusSelector;
