import Button from "@mui/material/Button";

export default function CustomButton({
  text,
  clickHandler,
  isBgTransparent,
  isFullWidth,
}) {
  return (
    <Button
      style={{
        backgroundColor: isBgTransparent ? "transparent" : "#155DFF",
        border: isBgTransparent ? "1px solid #8B909A" : "1px solid #155DFF",
        color: isBgTransparent ? "#8B909A" : "white",
        fontSize: 15,
        // paddingRight: 15,
        // paddingLeft: 15,
        width: isFullWidth ? "100%" : "auto",
      }}
      onClick={clickHandler}
    >
      {text}
    </Button>
  );
}
