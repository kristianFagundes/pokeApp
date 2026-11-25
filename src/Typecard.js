
import { useEffect, useState } from "react"; import { Typography, Box } from "@mui/material";

export default function Typecard(props) {
  let typeColor = "#777777";
  let typeName = props.type.name.toLowerCase();
  const [typeIcon, setTypeIcon] = useState("");

  useEffect(() => {
    async function buscaTipo() {
      const response = await fetch(props.type.url);
      const body = await response.json();

      setTypeIcon(
        body.sprites["generation-ix"]["scarlet-violet"].symbol_icon
      );
      console.log(body.sprites);
    }

    buscaTipo();
  }, [props.type.url]);


  switch (typeName) {
    case "normal":
      typeColor = "#A8A77A";
      typeName = "Normal";
      break;

    case "fire":
    case "fogo":
      typeColor = "#EE8130";
      typeName = "Fogo";
      break;

    case "water":
    case "água":
      typeColor = "#6390F0";
      typeName = "Água";
      break;

    case "electric":
    case "elétrico":
      typeColor = "#F7D02C";
      typeName = "Elétrico";
      break;

    case "grass":
    case "planta":
      typeColor = "#7AC74C";
      typeName = "Planta";
      break;

    case "ice":
    case "gelo":
      typeColor = "#96D9D6";
      typeName = "Gelo";
      break;

    case "fighting":
    case "lutador":
      typeColor = "#C22E28";
      typeName = "Lutador";
      break;

    case "poison":
    case "veneno":
      typeColor = "#A33EA1";
      typeName = "Veneno";
      break;

    case "ground":
    case "terra":
      typeColor = "#E2BF65";
      typeName = "Terra";
      break;

    case "flying":
    case "voador":
      typeColor = "#A98FF3";
      typeName = "Voador";
      break;

    case "psychic":
    case "psíquico":
      typeColor = "#F95587";
      typeName = "Psíquico";
      break;

    case "bug":
    case "inseto":
      typeColor = "#A6B91A";
      typeName = "Inseto";
      break;

    case "rock":
    case "pedra":
      typeColor = "#B6A136";
      typeName = "Pedra";
      break;

    case "ghost":
    case "fantasma":
      typeColor = "#735797";
      typeName = "Fantasma";
      break;

    case "dragon":
    case "dragão":
      typeColor = "#6F35FC";
      typeName = "Dragão";
      break;

    case "dark":
    case "sombrio":
      typeColor = "#705746";
      typeName = "Sombrio";
      break;

    case "steel":
    case "aço":
      typeColor = "#B7B7CE";
      typeName = "Aço";
      break;

    case "fairy":
    case "fada":
      typeColor = "#D685AD";
      typeName = "Fada";
      break;

    default:
      typeName = props.type.name;
      break;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
      }}
    >
      <img
        src={typeIcon}
        alt={`Símbolo do tipo ${typeName}`}
        style={{
          width: "1.5rem",
          height: "1.5rem",
          objectFit: "contain",
        }}
      />

      {!props.somenteIcone && (
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "0.9rem",
            fontWeight: 600,
            fontFamily: "Fredoka",
          }}
        >
          {typeName}
        </Typography>
      )}
    </Box>
  );
}
