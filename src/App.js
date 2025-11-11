import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {
  Box,
  TextField,
  Checkbox,
  Typography,
  Link,
  Button,
} from "@mui/material";
function App() {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [localizacao, setLocalizacao] = useState("");

  return (
    <Box class="pai">
      <h1> Add Discription</h1>
      <Box>
        
        <h2>cargo</h2>
        <TextField
          label="Cargo"
          onChange={(b) => {
            setCargo(b.target.value);
          }}
        />
      </Box>
      <Box>
        <h2>empresa</h2>
        <TextField
          label="empresa"
          onChange={(b) => {
            setEmpresa(b.target.value);
          }}
        />
      </Box>
      <Box>
          <h2>Localização</h2>

        <TextField
          label="localizacao"
          onChange={(b) => {
            setLocalizacao(b.target.value);
          }} />
      </Box>

      <Checkbox defaultChecked />

      <Button>SALVAR</Button>
    </Box>
  );
}

export default App;
