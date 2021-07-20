import React, { useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import DadosCadastro from "../../context/DadosCadastro";
import useValues from "../../hooks/useValues.js";
import useErros from "../../hooks/useErros.js";

function DadosUsuario({ aoEnviar }) {
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
        variant="outlined"
        margin="normal"
        name="email"
        id="email"
        label="Email"
        required
        type="email"
        value={get("email")}
        onChange={(event) => {
          insereDado(event);
          validaCampo(event);
        }}
        helperText={erros.email.texto}
        error={!erros.email.valido}
        fullWidth
      />
      <TextField
        variant="outlined"
        margin="normal"
        id="senha"
        name="senha"
        label="Senha"
        required
        value={get("senha")}
        onChange={(event) => {
          insereDado(event);
          validaCampo(event);
        }}
        helperText={erros.senha.texto}
        error={!erros.senha.valido}
        type="password"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Prosseguir
      </Button>
    </form>
  );
}

export default DadosUsuario;
