import React, { useContext } from "react";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import { mascaraCPF, mascaraData, mascaraTelefone } from "./mascaras.js";
import DadosCadastro from "../../context/DadosCadastro";
import useValues from "../../hooks/useValues.js";
import useErros from "../../hooks/useErros.js";

import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Box,
} from "@material-ui/core";

function DadosPessoais({ aoEnviar, voltar }) {
  const validacoes = useContext(ValidacoesCadastro);
  const dadosCadastro = useContext(DadosCadastro);
  const {erros, validaCampo, validaForm} = useErros(validacoes);
  const {dadosColetados, insereDado, get} = useValues(dadosCadastro.dados);

  return (
    <form
      noValidate="noValidate"
      onSubmit={(event) => {
        event.preventDefault();
        if (validaForm(event)) {
          dadosCadastro.setDados(dadosColetados);
          aoEnviar();
        }
      }}
    >
      <TextField
        value={get("nome")}
        onChange={(event) => {
          insereDado(event);
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
        value={get("sobrenome")}
        onChange={(event) => {
          insereDado(event);
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
        value={get("nascimento")}
        onChange={(event) => {
          insereDado(event, mascaraData);
          validaCampo(event);
        }}
        id="nascimento"
        name="nascimento"
        label="Data de nascimento:"
        variant="outlined"
        margin="normal"
        helperText={erros.nascimento.texto}
        error={!erros.nascimento.valido}
        fullWidth
      />

      <TextField
        value={get("cpf")}
        onChange={(event) => {
          insereDado(event, mascaraCPF);
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

      <TextField
        value={get("telefone")}
        onChange={(event) => {
          insereDado(event, mascaraTelefone);
          validaCampo(event);
        }}
        id="telefone"
        name="telefone"
        label="Telefone:"
        variant="outlined"
        margin="normal"
        helperText={erros.telefone.texto}
        error={!erros.telefone.valido}
        fullWidth
      />

      <Box component="div" display="flex" justifyContent="space-between">
        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              checked={get("promocoes", true)}
              onChange={(event) => {
                insereDado(event);
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
              checked={get("novidades", true)}
              onChange={(event) => {
                insereDado(event);
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
