import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import CadastroEnviado from "./CadastroEnviado";
import { Stepper, Step, StepLabel } from "@material-ui/core";

function FormularioCadastro({ aoEnviar }) {
  const [etapa, setEtapa] = useState(0);
  const [dadosColetados, setDados] = useState({});
  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} voltar={etapaAnterior} />,
    <DadosEntrega aoEnviar={coletarDados} voltar={etapaAnterior} />,
    <CadastroEnviado />
  ];
  
  useEffect(() => {
    if (etapa === formularios.length - 1) aoEnviar(dadosColetados);
  }, [dadosColetados, etapa, formularios.length, aoEnviar]);

  function coletarDados(dados) {
    setDados({...dadosColetados, ...dados});
    proximaEtapa();
  }

  function proximaEtapa() {
    setEtapa(etapa + 1);  
  }

  function etapaAnterior() {
    setEtapa(etapa - 1);
  }

  return <>
  <Stepper activeStep={etapa}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {formularios[etapa]}
  </>;
}

export default FormularioCadastro;
