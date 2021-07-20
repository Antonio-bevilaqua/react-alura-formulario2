import React, { useState } from "react";

function useErros(validacoes) {
  const [erros, setErros] = useState(criarEstadoInicial(validacoes));

  //valida um campo
  function validaCampo(event) {
    const { name, value } = event.target;
    let newErrors = {
      ...erros,
      [name]: validacoes[name](value),
    };

    setErros(newErrors);
  }

  //Validador do formulário
  function validaForm(event) {
    let newErrors = {};
    let validado = true;
    for (let key in erros) {
      if (typeof event.target.elements[key] === "undefined") continue;
      const actualValue = event.target.elements[key].value;
      newErrors[key] = validacoes[key](actualValue);
      validado = validado ? newErrors[key].valido : validado;
    }
    setErros(newErrors);
    return validado;
  }

  return [erros, validaCampo, validaForm];
}

//cria o estado inicial
function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  const defaultParameters = { valido: true, texto: "" };
  for (let key in validacoes) {
    estadoInicial[key] = defaultParameters;
  }
  return estadoInicial;
}

export default useErros;
