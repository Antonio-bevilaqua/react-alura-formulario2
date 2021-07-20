import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import CadastroEnviado from "./CadastroEnviado";
import DadosCadastro from "../../context/DadosCadastro";
import { Stepper, Step, StepLabel } from "@material-ui/core";

function FormularioCadastro({ aoEnviar }) {
  const [etapa, setEtapa] = useState(0);
  const [dadosColetados, setDados] = useState({});

  const formularios = [
    <DadosUsuario aoEnviar={proximaEtapa} />,
    <DadosPessoais aoEnviar={proximaEtapa} voltar={etapaAnterior} />,
    <DadosEntrega aoEnviar={finalizar} voltar={etapaAnterior} />,
    <CadastroEnviado />,
  ];

  function finalizar() {
    proximaEtapa();
    aoEnviar(dadosColetados);
  }

  function proximaEtapa() {
    setEtapa(etapa + 1);
  }

  function etapaAnterior() {
    setEtapa(etapa - 1);
  }

  return (
    <>
      <Stepper activeStep={etapa}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      <DadosCadastro.Provider
        value={{ dados: dadosColetados, setDados: setDados }}
      >
        {formularios[etapa]}
      </DadosCadastro.Provider>
    </>
  );
}

export default FormularioCadastro;
