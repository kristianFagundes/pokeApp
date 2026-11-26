import { Drawer, Box, Typography, Button } from "@mui/material";
import SlotEquipe from "./SlotEquipe";

export default function DrawerEquipe(props) {
    return (
        <Drawer
            slotProps={{
                paper: {
                    sx: {
                        borderLeft: ".3rem solid #0A1D37",
                        backgroundColor: "#e8f0fa",
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                    },
                },
            }}

            anchor="right"
            open={props.aberto}
            onClose={props.fechar}>
            {/* CABEÇALHO */}
            <Box
                sx={{
                    width: "100%",
                    minHeight: "7rem",
                    padding: "1rem",
                    boxSizing: "border-box",
                    backgroundColor: "#0A1D37",
                    display: "flex",
                    gap: "1em",
                    justifyContent: "space-evenly",
                    borderBottom: ".3rem solid #ffd21f",
                    alignItems: "center",



                }}
            >
                <img
                    src="/Pokebola.svg"
                    alt="Pokébola"
                    style={{
                        width: "3rem",
                        height: "3rem",

                    }}
                />

                <Box>
                    <Typography
                        sx={{
                            fontFamily: "Fredoka",
                            color: "#ffd21f",
                            fontSize: "1.3rem",
                            fontWeight: 800,
                        }}
                    >
                        Minha equipe Pokémon
                    </Typography>
                    <Typography sx={{
                        fontFamily: "sans-serif",
                        fontSize: ".7rem",
                        color: "#FFFFFF"
                    }}>Selecione até 6 parceiros de batalha</Typography>
                </Box>
                <Button
                    onClick={props.fechar}
                    sx={{
                        width: "2.3rem",
                        height: "2.3rem",
                        borderRadius: "50%",
                        backgroundColor: "#112e57",
                        color: "#FFFFFF",
                        minWidth: 0,
                        padding: 0,
                        fontSize: "1.5rem",

                        "&:hover": {
                            backgroundColor: "#EE2424"
                        }

                    }}>x</Button>
            </Box >
            {/* CONTEÚDO */}
            <Box
                sx={{
                    flexGrow: 1,
                    overflowY: "auto",
                }}>

                {[1, 2, 3, 4, 5, 6].map((numero) => (
                    <SlotEquipe
                        key={numero}
                        numeroSlot={numero}
                        pokemon={props.equipe[numero - 1]}
                    />
                ))}
            </Box>
            <Box sx={{
                width: "100%",
                height: "5rem",
                padding: "1.5rem",
                boxSizing: "border-box",
                backgroundColor: "#F4F7FB",
                display: "flex",
                justifyContent: "space-between",
                borderTop: ".3rem solid #0A1D37",
                alignItems: "center",


            }}
            >
                <Button
                    sx={{
                        display: "flex",
                        gap: ".4rem",
                        color: "#d1d1d1",
                        borderRadius: "0.75rem",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        border: "1px solid #d1d1d1",
                        transition: "all 0.3s ease",
                        fontFamily: "Fredoka",
                    }}> Limpar</Button>
                <Button
                    sx={{
                        width: "14em",
                        backgroundColor: "#FFD21F",
                        color: "#0A1D37",
                        padding: ".2rem",
                        borderRadius: "1rem",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        border: "2px solid #0A1D37",
                        boxShadow: ".2em .2em .1em #0A1D37",
                        fontFamily: "Fredoka",
                        minWidth: 0,

                        "&:hover": {
                            backgroundColor: "#d1ac1a",
                            color: "#0A1D37",
                            borderColor: "#0A1D37",
                            transform: "translateY(-3px)",

                        },
                    }}> Concluir</Button>
            </Box>

        </Drawer >
    );
}