import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import useErros from "../../hooks/useErros.js";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validaCampo, validaForm] = useErros(validacoes);

  return (
    <form
      noValidate="noValidate"
      onSubmit={(event) => {
        event.preventDefault();
        if (validaForm(event)) {
          aoEnviar({
            email: email,
            senha: senha,
          });
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
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
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
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
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
