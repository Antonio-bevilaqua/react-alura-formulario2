import { useState } from "react";

function useValues(dados) {
  const [dadosColetados, setDados] = useState(dados);

  //Insere um campo pelo evento
  function insereDado(
    event,
    maskValue = (value) => {
      return value;
    }
  ) {
    const { name, value, type, checked } = event.target;
    let newDados = {
      ...dadosColetados,
      [name]:
        type !== "checkbox" && type !== "radio" ? maskValue(value) : checked,
    };

    setDados(newDados);
  }

  //Insere um campo pelo evento
  function insereDadoKeyValue(dados) {
    let newDados = {
      ...dadosColetados,
      ...dados
    };

    setDados(newDados);
  }

  //Recebe um campo
  function get(name, boolean = false) {
    if (!boolean)
      return typeof dadosColetados[name] !== "undefined"
        ? dadosColetados[name]
        : "";

    return typeof dadosColetados[name] !== "undefined"
      ? dadosColetados[name]
      : false;
  }

  return { dadosColetados, insereDado, insereDadoKeyValue, get };
}

export default useValues;
