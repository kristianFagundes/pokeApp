import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import Typecard from "./Typecard";
import Typecard2 from "./Typecard2";
import pokemon from "./pokemon-vector-logo-seeklogo/pokemon-seeklogo.png";
export default function Card(props) {
  let typeList = ["Planta", "Poison", "Anfíbio", "fogo"];
  return (
    // card
    <Box
      sx={{
        height: " 65vh",
        width: "65vw",
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
            width: "30%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* logo */}
          <Box>
            <img
              style={{
                width: "100%",
                height: "100%",
                marginLeft: "20px",
                marginRight: "auto",
              }}
              src={pokemon}
            />
          </Box>
          {/* foto */}
          <Box
            sx={{
              marginLeft: "20px",
              marginRight: "auto",
              width: "100%",
              height: "100%",
              backgroundColor: "#6f48b8ff",
              border: "4px solid white",
              borderRadius: "50%",
              // IMAGEM NAO APARECE
              backgroundImage: "url{(props.sprites)}",
               

              backgroundSize: "cover",
            }}
          ></Box>
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
                  marginTop:"20px"
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
            {typeList.map((item) => {
              return <Typecard text={item} />;
            })}
          </Box>

          {/* descrição */}
          <Box
            sx={{
              backgroundColor: "#5b379eff",
              overflow: "auto",
              padding: "16px",
              margin: "0",
              width: "fit-content",
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                textShadow: "2px 2px 5px rgb(0, 0, 0)",
                alignItems: "center",
                textAlign: "justify",
                color: "white",
              }}
            >
              É um Pokémon inicial de Planta/Veneno, de coloração verde-água,
              com um bulbo de flor em suas costas que cresce com o tempo,
              fornecendo-lhe energia da luz solar e nutrientes. Ele se assemelha
              a um dinossauro ou sapo jovem e tem olhos vermelhos brilhantes. A
              relação simbiótica entre o Pokémon e o bulbo é fundamental para o
              seu crescimento e desenvolvimento.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
