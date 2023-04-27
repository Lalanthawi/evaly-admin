import { getStatusColor } from "../themes/colors";

const tabsTitleSelected = (tab) => {
	return {
		borderBottom: `2px solid ${getStatusColor(tab).color}`,
		padding: "8px 20px",
		textAlign: "center",
		color: getStatusColor(tab).color,
		fontSize: 15,
		fontWeight: 400,
		margin: 0,
		cursor: "pointer",
	};
};

export const tabsTitleUnSelected = {
	padding: "8px 20px",
	textAlign: "center",
	color: "#8B909A",
	fontSize: 15,
	fontWeight: 400,
	margin: 0,
	cursor: "pointer",
};

export const selectBoxSelectedValue = {
	color: "#8B909A",
	fontSize: 15,
	margin: 0,
};

export const transactionHeadings = {
	color: "#23272E",
	fontSize: 18,
	margin: 0,
};

export default tabsTitleSelected;
