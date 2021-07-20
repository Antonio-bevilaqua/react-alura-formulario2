import React, { useContext } from "react";
import {
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  FormControl,
  OutlinedInput,
  FormHelperText
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { mascaraCep } from "./mascaras";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import DadosCadastro from "../../context/DadosCadastro";
import getLocalizacaoCep from "../../models/getLocalizacaoCep";
import useErros from "../../hooks/useErros.js";
import useValues from "../../hooks/useValues.js";

function DadosEntrega({ aoEnviar, voltar }) {
  const validacoes = useContext(ValidacoesCadastro);
  const dadosCadastro = useContext(DadosCadastro);
  const {erros, validaCampo, validaCampoKeyValue, validaForm} = useErros(validacoes);
  const {dadosColetados, insereDado, insereDadoKeyValue, get} = useValues(dadosCadastro.dados);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (validaForm(event)) {
          dadosCadastro.setDados(dadosColetados);
          aoEnviar();
        }
      }}
    >
      <FormControl variant="outlined" margin="normal">
        <InputLabel htmlFor="cep">CEP</InputLabel>
        <OutlinedInput
          id="cep"
          name="cep"
          label="CEP"
          type={"text"}
          value={get("cep")}
          onChange={(event) => {
            insereDado(event, mascaraCep);
            validaCampo(event);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Buscar o cep" onClick={() => { getLocalizacaoCep(dadosColetados.cep, insereDadoKeyValue, validaCampoKeyValue ); }}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          error={!erros.cep.valido}
        />
        <FormHelperText id="erro-cep" error={!erros.cep.valido}>{erros.cep.texto}</FormHelperText>
      </FormControl>
      
      <TextField
        variant="outlined"
        margin="normal"
        id="endereco"
        name="endereco"
        label="Endereço"
        type="text"
        value={get("endereco")}
        onChange={(event) => {
          insereDado(event);
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
        value={get("numero")}
        onChange={(event) => {
          insereDado(event);
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
        value={get("cidade")}
        onChange={(event) => {
          insereDado(event);
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
        value={get("estado")}
        onChange={(event) => {
          insereDado(event);
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
