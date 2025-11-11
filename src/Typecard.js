import { Typography } from "@mui/material";

export default function Typecard(props) {
  let color = `red`;
  switch (props.text.toLowerCase()) {
    case "planta":
      color = "#0b882aff";
      break;
    case "fogo":
      color = "#cc4f06ff";
      break;
    case "anfíbio":
      color = "#06a4ccff";
      break;
    case "poison":
      color = "#cc06a1ff";
      break;
  }

  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        color: "white",
        backgroundColor: color,
        fontSize: "1rem",
        textAlign: "center",
        padding: "0px 16px",
        borderRadius: "7px",
        boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.5)",
      }}
    >
      {props.text}
    </Typography>
  );
}
