const chipContainer = {
  width: "34px",
  backgroundColor: "rgba(40, 199, 111, 0.16)",
  height: "22px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 13,
  fontWeight: 600,
  color: "#28C76F",
  borderRadius: 4,
  marginLeft: 10,
};
export default function ProfitChip() {
  return (
    <div style={chipContainer}>
      <span style={{ position: "relative", top: 1 }}>16%</span>
    </div>
  );
}
