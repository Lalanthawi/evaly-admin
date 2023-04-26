import dashboardCardContainer from "./styles";

export default function DashboardCard({ children, isAutoHeight, padding }) {
  return (
    <div
      style={{
        ...dashboardCardContainer,
        height: isAutoHeight ? "auto" : "100%",
        padding: padding || padding === 0 ? padding : 20,
      }}
    >
      {children}
    </div>
  );
}
