import { Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
export const DateRangePicker = () => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				columnGap={1}
			>
				<DatePicker
					sx={{
						"& .MuiInputBase-root": {
							"& .MuiOutlinedInput-notchedOutline": {
								border: "none",
								boxShadow: "0px 4px 16px rgb(30 30 30 / 9%)",
							},
						},
					}}
					label="From"
					slotProps={{
						textField: { size: "small" },
					}}
				/>

				<DatePicker
					sx={{
						"& .MuiInputBase-root": {
							"& .MuiOutlinedInput-notchedOutline": {
								border: "none",
								boxShadow: "0px 4px 16px rgb(30 30 30 / 9%)",
							},
						},
					}}
					label="To"
					slotProps={{ textField: { size: "small" } }}
				/>
			</Box>
		</LocalizationProvider>
	);
};
