export const statusColors = {
	Pending: {
		color: "#FFC600",
		background: "rgba(255, 198, 0, 0.16)",
	},
	Confirmed: {
		color: "#FF5733",
		background: "rgba(255, 87, 51, 0.16)",
	},
	Processing: {
		color: "#1E90FF",
		background: "rgba(30, 144, 255, 0.16)",
	},
	Picked: {
		color: "#1E90FF",
		background: "rgba(30, 144, 255, 0.16)",
	},
	Shipped: {
		color: "#20B2AA",
		background: "rgba(32, 178, 170, 0.16)",
	},
	Delivered: {
		color: "#228B22",
		background: "rgba(34, 139, 34, 0.16)",
	},
	Cancelled: {
		color: "#DC143C",
		background: "rgba(220, 20, 60, 0.16)",
	},
};

export const getStatusColor = (status) => {
	switch (status) {
		case "Pending":
			return statusColors.Pending;
		case "Confirmed":
			return statusColors.Confirmed;
		case "Processing":
			return statusColors.Processing;
		case "Picked":
			return statusColors.Picked;
		case "Shipped":
			return statusColors.Shipped;
		case "Delivered":
			return statusColors.Delivered;
		case "Cancelled":
			return statusColors.Cancelled;
		default:
			break;
	}
};
