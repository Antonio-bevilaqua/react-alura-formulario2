import React, { useState, useContext } from "react";
import { TextField, Button, Box } from "@material-ui/core";
import { mascaraCep } from "./mascaras";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import useErros from "../../hooks/useErros.js";

function DadosEntrega({ aoEnviar, voltar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validaCampo, validaForm] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (validaForm(event)) {
          aoEnviar({
            cep: cep,
            endereco: endereco,
            numero: numero,
            cidade: cidade,
            estado: estado,
          });
        }
      }}
    >
      <TextField
        variant="outlined"
        margin="normal"
        id="cep"
        name="cep"
        label="CEP"
        type="text"
        value={cep}
        onChange={(event) => {
          setCep(mascaraCep(event.target.value));
          validaCampo(event);
        }}
        helperText={erros.cep.texto}
        error={!erros.cep.valido}
      />
      <TextField
        variant="outlined"
        margin="normal"
        id="endereco"
        name="endereco"
        label="Endereço"
        type="text"
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
          validaCampo(event);
        }}
        helperText={erros.endereco.texto}
        error={!erros.endereco.valido}
        fullWidth
      />
      <TextField
        variant="outlined"
        margin="normal"
        id="numero"
        label="Número"
        name="numero"
        type="number"
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
          validaCampo(event);
        }}
        helperText={erros.numero.texto}
        error={!erros.numero.valido}
      />
      <TextField
        variant="outlined"
        margin="normal"
        id="cidade"
        label="Cidade"
        type="text"
        name="cidade"
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
          validaCampo(event);
        }}
        helperText={erros.cidade.texto}
        error={!erros.cidade.valido}
      />
      <TextField
        variant="outlined"
        margin="normal"
        id="estado"
        label="Estado"
        type="text"
        name="estado"
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
          validaCampo(event);
        }}
        helperText={erros.estado.texto}
        error={!erros.estado.valido}
      />
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
          Finalizar Cadastro
        </Button>
      </Box>
    </form>
  );
}

export default DadosEntrega;
