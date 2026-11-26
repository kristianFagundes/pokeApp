import Card from "./card";
import { Box, TextField, Button, Snackbar } from "@mui/material";
import { useState, useEffect } from "react";
import DrawerEquipe from "./DrawerEquipe";

const tipos = [
  { nome: "Normal", valor: "normal", icone: "" },
  { nome: "Fogo", valor: "fire", icone: "" },
  { nome: "Água", valor: "water", icone: "" },
  { nome: "Elétrico", valor: "electric", icone: "" },
  { nome: "Grama", valor: "grass", icone: "" },
  { nome: "Gelo", valor: "ice", icone: "" },
  { nome: "Lutador", valor: "fighting", icone: "" },
  { nome: "Veneno", valor: "poison", icone: "" },
  { nome: "Terrestre", valor: "ground", icone: "" },
  { nome: "Voador", valor: "flying", icone: "" },
  { nome: "Psíquico", valor: "psychic", icone: "" },
  { nome: "Inseto", valor: "bug", icone: "" },
  { nome: "Pedra", valor: "rock", icone: "" },
  { nome: "Fantasma", valor: "ghost", icone: "" },
  { nome: "Dragão", valor: "dragon", icone: "" },
  { nome: "Sombrio", valor: "dark", icone: "" },
  { nome: "Aço", valor: "steel", icone: "" },
  { nome: "Fada", valor: "fairy", icone: "" },
];

export default function PokeTela() {
  const [text, setText] = useState();
  const [pokemons, setPokemons] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const [equipeAberta, setEquipeAberta] = useState(false);
  const [equipe, setEquipe] = useState([]);
  const [notificacaoAberta, setNotificacaoAberta] = useState(false);
  const [mensagemNotificacao, setMensagemNotificacao] = useState("");



  const [tiposAtualizados, setTiposAtualizados] = useState(tipos);

  useEffect(() => {
    //useEffect: executa o código quando text muda.
    async function buscaPokemon(pokeName) {


      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
      let body = await response.json()
      if (!response.ok) {
        return;
      }

      console.log(body);
      let pokemon = {
        "name": body.name,
        "id": body.id,
        "weight": body.weight,
        "sprites": body.sprites.front_shiny,
        "status": body.stats,
        "types": body.types,
        "abilities": body.abilities



      }
     
      setPokemons((p) => [pokemon, ...p]);
    }

    const timer = setTimeout(() => {
      if (text?.trim()) {
        buscaPokemon(text.trim());
      }
    }, 600);
    //setTimeout: aguarda 600 milissegundos antes de executar uma ação.

    return () => clearTimeout(timer);
    //clearTimeout: cancela o temporizador anterior se o usuário continuar digitando.
  }, [text]);
  //[text]: informa ao React que esse efeito deve ser executado novamente quando text mudar.


  useEffect(() => {
    async function carregaTipos() {
      const response = await fetch("https://pokeapi.co/api/v2/type");
      const body = await response.json();

      const tiposComIcones = await Promise.all(
        tipos.map(async (tipo) => {
          const dadosTipo = body.results.find(
            (item) => item.name === tipo.valor
          );

          const responseTipo = await fetch(dadosTipo.url);
          const dadosCompletos = await responseTipo.json();

          return {
            ...tipo,
            icone:
              dadosCompletos.sprites["generation-ix"]["scarlet-violet"].symbol_icon,
          };
        })
      );

      setTiposAtualizados(tiposComIcones);
    }

    carregaTipos();
  }, []);

  function capturarPokemon(pokemon) {
    if (equipe.length >= 6) return;

    setEquipe([...equipe, pokemon]);

    setMensagemNotificacao(
      `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} foi adicionado à sua equipe!`
    );

    setNotificacaoAberta(true);
  }



  return (
    <Box sx={{
      backgroundColor: "white",
      minHeight: "100vh",
      width: "100%",
      padding: "1.5rem",
      boxSizing: "border-box",


    }} >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
          padding: "1rem 3%",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "0.5rem",

            transition: "all 0.3s ease",

            "&:hover": {
              transform: "translateY(-4px) scale(1.05)",
              filter: "drop-shadow(0px 5px 2px #FFD21F)",
            },
          }}
        >
          <img
            src="/LogoFINAL.svg"
            alt="PokeApp"
            style={{
              width: "10rem",
              height: "auto",
            }}
          />
        </Box>

        {/* Pesquisa */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            minWidth: "min(100%, 18rem)",
            transition: "all 0.3s ease",

            "&:hover": {
              transform: "translateY(-4px) scale(1.05)",
              filter: "drop-shadow(0px 5px 3px #FFD21F)",


            },
          }}
        >
          <TextField
            sx={{
              width: "100%",
              maxWidth: "32rem",
              backgroundColor: "#FFFFFF",
              borderRadius: "0.75rem",

              "& .MuiOutlinedInput-root": {
                borderRadius: "0.75rem",


                "& fieldset": {
                  border: ".2rem solid #0A1D37",

                },

                "&.Mui-focused fieldset": {
                  borderColor: "#EE2424",
                  borderWidth: ".2em",


                },
              },
            }}
            placeholder="Buscar Pokémon por nome ou número (#001, Pikachu)..."
            onChange={(v) => {
              setText(v.target.value);
            }}
          />
        </Box>
        {/* botão equipe */}
        <Button
          onClick={() => setEquipeAberta(true)}
          sx={{
            display: "flex",
            gap: ".4rem",
            backgroundColor: "#0A1D37",
            color: "#FFD21F",
            padding: "0.9rem 1rem",
            borderRadius: "0.75rem",
            fontWeight: 700,
            whiteSpace: "nowrap",
            border: "2px solid #0A1D37",
            transition: "all 0.3s ease",
            fontFamily: "Fredoka",

            "&:hover": {
              backgroundColor: "#FFD21F",
              color: "#0A1D37",
              borderColor: "#0A1D37",
              transform: "translateY(-3px)",
              boxShadow: "0 4px 8px rgba(10, 29, 55, 0.25)",
            },
          }}
        >
          <img
            src="/Pokebola.svg"
            alt="Pokébola"
            style={{
              width: "1.5rem",
              height: "1.5rem",

            }}
          />
          Minha equipe
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "1rem 3%",
          width: "100%",
          boxSizing: "border-box",
          overflowX: "auto",
          overflowY: "hidden",
          flexWrap: "nowrap",
          justifyContent: "flex-start",

          "& > button": {
            flexShrink: 0,
            //flexShrink: 0: impede que os botões sejam espremidos para caber.
          },
        }}
      >
        {tiposAtualizados.map((tipo) => (
          <Button
            key={tipo.valor}
            onClick={() => setTipoSelecionado(tipo.valor)}
            sx={{
              flexShrink: 0,
              backgroundColor: "#f3f8ff",
              color: "#0A1D37",
              borderRadius: "2rem",
              border: ".2rem solid #0A1D37 ",
              fontWeight: 700,
              whiteSpace: "nowrap",
              fontFamily: "Fredoka",

              "&:hover": {
                backgroundColor: "#ddeafc",
                color: "#0A1D37",

              },
            }}
          >
            <img
              src={tipo.icone}
              alt=""
              style={{
                borderRadius: "50%",
                width: "1.25rem",
                height: "1.25rem",
                objectFit: "contain",

              }}
            />
            {tipo.nome}
          </Button>
        ))}
      </Box>

      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {pokemons.map((pokemon) => {
          return (
            <Card
              img={pokemon.sprites}
              name={pokemon.name}
              types={pokemon.types}
              abilities={pokemon.abilities}
              health={"HP: " + pokemon.status[0].base_stat}
              attak={"Ataque: " + pokemon.status[1].base_stat}
              defense={"Defesa: " + pokemon.status[2].base_stat}
              sp_atk={"Sp. Atk: " + pokemon.status[3].base_stat}
              sp_def={"Sp. Def: " + pokemon.status[4].base_stat}
              speed={"Speed: " + pokemon.status[5].base_stat}
              weight={"Peso: " + pokemon.weight}
              capturar={() => capturarPokemon(pokemon)}
            />
          );
        })}
      </Box>
      <DrawerEquipe
        aberto={equipeAberta}
        fechar={() => setEquipeAberta(false)}
        equipe={equipe}
      />
      <Snackbar
        open={notificacaoAberta}
        autoHideDuration={2000}
        onClose={() => setNotificacaoAberta(false)}
        message={mensagemNotificacao}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      />
    </Box>
  );
}
