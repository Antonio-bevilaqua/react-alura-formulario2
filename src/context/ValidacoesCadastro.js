import React from "react";

const ValidacoesCadastro = React.createContext({
  email: semValidacao,
  senha: semValidacao,
  nome: semValidacao,
  sobrenome: semValidacao,
  cpf: semValidacao,
  cep: semValidacao,
  endereco: semValidacao,
  numero: semValidacao,
  cidade: semValidacao,
  estado: semValidacao,
});

function semValidacao() {
    return { valido: true, texto: "" }; 
}

export default ValidacoesCadastro;
