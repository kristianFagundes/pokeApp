import { Box, Typography, Button } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Typecard from "./Typecard";

export default function SlotEquipe(props) {
    return (
        <Box>
            {props.pokemon ? (
                // Pokémon capturado
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "justify",
                        border: ".3em solid #0A1D37",
                        boxShadow: ".1em .1em .5em #0A1D37",
                        borderRadius: "5rem",
                        backgroundColor: "#ffffff88",
                        margin: " 1rem",

                    }}
                >
                    <Box
                        component="img"
                        src={props.pokemon.sprites}
                        alt={props.pokemon.name}
                        sx={{
                            width: "5rem",
                            height: "5rem",
                            objectFit: "contain",
                        }}
                    />

                    <Box sx={{ flex: 1 }}>
                        <Typography
                            sx={{
                                color: "#0A1D37",
                                fontSize: "0.75rem",
                                fontWeight: 800,
                            }}
                        >
                            SLOT #{props.numeroSlot} • #{String(props.pokemon.id).padStart(3, "0")}
                        </Typography>

                        <Typography
                            sx={{
                                color: "#0A1D37",
                                fontWeight: 800,
                                textTransform: "capitalize",
                            }}
                        >
                            {props.pokemon.name}
                        </Typography>
                        <Box
                            sx={{

                                display: "flex",
                                gap: "0.4rem",
                                marginTop: "0.5rem",
                            }}
                        >

                            {props.pokemon.types?.map((item) => (
                                <Typecard

                                    key={item.slot}
                                    type={item.type}
                                    somenteIcone
                                />
                            ))}
                        </Box>
                    </Box>
                    <Button
                        onClick={props.excluir}
                        size="small"
                        sx={{

                            minHeight: 0,
                            minWidth: 0,
                            backgroundColor: "transparent",
                            color: "#a7aaad91",
                            border: ".2em solid #a7aaad91",
                            borderRadius: "50%",
                            marginRight: "1em",

                            "&:hover": {
                                backgroundColor: "#a7aaad91",
                                color: "#fff",
                                border: ".2em solid #fff",
                            }
                        }}><DeleteOutlinedIcon /></Button>

                </Box>
            ) : (
                // Slot vazio
                <Box
                    sx={{

                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        border: "2px dashed #a7aaad91",
                        borderRadius: "5rem",
                        backgroundColor: "#ffffff",
                        gap: ".5rem",
                        margin: " 1rem",
                        paddingLeft: "1rem"


                    }}
                >
                    <img
                        src="/Pokebola.svg"
                        alt="Pokébola"
                        style={{
                            width: "2rem",
                            height: "2rem",

                        }}
                    />
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        padding: "1rem",
                    }}>
                        <Typography
                            sx={{

                                color: "#0A1D37",
                                fontWeight: 800,
                                fontSize: "0.7rem",
                            }}
                        >
                            Slot #{props.numeroSlot} Disponível
                        </Typography>

                        <Typography
                            sx={{
                                color: "#0A1D37",
                                fontSize: "0.5rem",
                            }}
                        >
                            Clique em "Capturar para Equipe" em qualquer Pokémon
                        </Typography>
                    </Box>
                </Box>
            )
            }
        </Box >
    );
}