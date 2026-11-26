import { Box, Button, Typography } from "@mui/material";
import Typecard from "./Typecard";
import pokemon from "./pokemon-vector-logo-seeklogo/pokemon-seeklogo.png";
export default function Card(props) {
  //O parâmetro props recebe todas as propriedades que o componente pai envia para o componente Card.
  //No nosso projeto, o componente pai é o PokeTela.js.
  console.log(props.types);
  return (
    // card
    <Box
      sx={{
        height: "55vh",
        width: "90%",
        maxWidth: "750px",
        margin: "auto auto 32px",
        background: "linear-gradient( to bottom, #5728adff, #a17fddff)",
      }}
    >
      <Box
        sx={{
          width: "90hw",
          height: "65vh",
          display: "flex",
          fontFamily: "fantasy",
          margin: "auto ",
        }}
      >
        {/* div-foto */}
        <Box
          sx={{
            width: "100rem",
            height: "80%",
            display: "flex",
            flexDirection: "column",

          }}
        >
          {/* logo */}
          <Box>
            <img
              style={{
                width: "15rem",
                marginLeft: "20px",
                marginRight: "auto",
                overflow: "hidden"
              }}
              src={pokemon}
              alt="Logo Pokémon"
            />
            <img
              style={{
                marginLeft: "20px",
                marginRight: "auto",
                height: "100%",
                backgroundColor: "#6f48b8ff",
                border: "4px solid white",
                borderRadius: "50%",

              }}
              src={props.img}
              alt="Logo Pokémon"
            />
          </Box>
          {/* foto */}

        </Box>

        {/* div-infos */}
        <Box
          sx={{
            width: "60%",
            maxHeight: "450px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {/* informação*/}
          <Box
            sx={{
              width: "80%",
              margin: "0px 10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {/* nome */}
            <Box
              sx={{
                margin: "0px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  width: "100%",
                  texttransform: "uppercase",
                  letterSpacing: "2",
                  fontFamily: "verdana",
                  textShadow: "4px 4px 6px  rgb(18, 80, 23) ",
                  borderBottom: "1px solid",
                  marginBottom: "10px",
                  fontSize: "4.5rem",
                }}
              >
                {props.name}
              </Typography>
              {/* status */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  color: "white",
                  marginTop: "20px"
                }}
              >
                <Typography
                  sx={{
                    height: " 100%",
                    width: "20%",
                    marginTop: "0px",
                    padding: "0px 6px",
                    border: "1px solid #9878d4",
                  }}
                >
                  <b>{props.health}</b>
                </Typography>

                <Typography
                  sx={{
                    height: " 100%",
                    width: "20%",

                    margin: "0",
                    padding: "0px 6px",
                    border: "1px solid #9878d4",
                  }}
                >
                  <b>{props.attak}</b>
                </Typography>
                <Typography
                  sx={{
                    height: " 100%",
                    width: "20%",

                    margin: "0px",
                    padding: "0px 6px",
                    border: "1px solid #9878d4",
                  }}
                >
                  <b>{props.defense}</b>
                </Typography>
                <Typography
                  sx={{
                    height: " 100%",
                    width: "20%",
                    margin: "0px",
                    padding: "0px 6px",
                    border: "1px solid #9878d4",
                  }}
                >
                  <b>{props.sp_atk}</b>
                </Typography>
                <Typography
                  sx={{
                    height: " 100%",
                    width: "20%",
                    margin: "0px",
                    padding: "0px 6px",
                    border: "1px solid #9878d4",
                  }}
                >
                  <b>{props.sp_def}</b>
                </Typography>
                <Typography
                  sx={{
                    height: " 100%",
                    width: "20%",
                    margin: "0px",
                    padding: "0px 6px",
                    border: "1px solid #9878d4",
                  }}
                >
                  <b>{props.weight}</b>
                </Typography>
                <Typography
                  sx={{
                    height: " 100%",
                    width: "20%",
                    margin: "0px",
                    padding: "0px 6px",
                    border: "1px solid #9878d4",
                  }}
                >
                  <b>{props.speed}</b>
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* tipo */}
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              alignItems: "center",

            }}
          >
            {props.types?.map((item) => (
              <Typecard
                key={item.slot}
                //A propriedade key serve para o React identificar individualmente cada elemento de uma lista.
                type={item.type}
              />
            ))}
          </Box>

          {/* descrição */}
          <Box
            sx={{
              backgroundColor: "#5b379eff",
              // overflow: "auto",
              padding: "16px",
              margin: "0",
              width: "fit-content",
            }}
          >
            {props.abilities?.map((item) => (
              <Typography
                key={item.slot}
                sx={{
                  fontSize: "1rem",
                  textShadow: "2px 2px 5px rgb(0, 0, 0)",
                  alignItems: "center",
                  textAlign: "justify",
                  color: "white",
                }}
              >
                {item.ability.name}
              </Typography>
            ))}


          </Box>
        </Box>
      </Box>
      <Button onClick={props.capturar}>
        Capturar para Equipe
      </Button>
    </Box>
  );
}
