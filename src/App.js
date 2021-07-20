import React from "react";
import { Container, Typography } from "@material-ui/core";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ValidacoesCadastro from "./context/ValidacoesCadastro";
import {
  validarRequired,
  validarCPF,
  validarSenha,
  validarEmail,
  validarCep,
  validarData,
  validarTelefone
} from "./models/cadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{
          email: validarEmail,
          senha: validarSenha,
          nome: validarRequired,
          nascimento: validarData,
          telefone: validarTelefone,
          sobrenome: validarRequired,
          cpf: validarCPF,
          cep: validarCep,
          endereco: validarRequired,
          numero: validarRequired,
          cidade: validarRequired,
          estado: validarRequired,
        }}
      >
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
