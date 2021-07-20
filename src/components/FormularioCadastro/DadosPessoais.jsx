import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import { mascaraCPF } from "./mascaras.js";
import useErros from "../../hooks/useErros.js";
import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Box,
} from "@material-ui/core";

function DadosPessoais({ aoEnviar, voltar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validaCampo, validaForm] = useErros(validacoes);

  return (
    <form
      noValidate="noValidate"
      onSubmit={(event) => {
        event.preventDefault();
        if (validaForm(event)) {
          aoEnviar({
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            promocoes: promocoes,
            novidades: novidades,
          });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
          validaCampo(event);
        }}
        id="nome"
        label="Nome"
        name="nome"
        variant="outlined"
        margin="normal"
        helperText={erros.nome.texto}
        error={!erros.nome.valido}
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
          validaCampo(event);
        }}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        helperText={erros.sobrenome.texto}
        error={!erros.sobrenome.valido}
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(mascaraCPF(event.target.value));
          validaCampo(event);
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Box component="div" display="flex" justifyContent="space-between">
        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              checked={promocoes}
              onChange={(event) => {
                setPromocoes(event.target.checked);
              }}
              name="promocoes"
              color="primary"
            />
          }
        />

        <FormControlLabel
          label="Novidades"
          control={
            <Switch
              checked={novidades}
              onChange={(event) => {
                setNovidades(event.target.checked);
              }}
              name="novidades"
              color="primary"
            />
          }
        />
      </Box>

      <Box component="div" display="flex" justifyContent="space-between">
        <Button
          type="button"
          onClick={voltar}
          variant="contained"
          color="secondary"
          style={{ width: "calc(50% - 0.5rem)" }}
        >
          Voltar
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ width: "calc(50% - 0.5rem)" }}
        >
          Prosseguir
        </Button>
      </Box>
    </form>
  );
}

export default DadosPessoais;
