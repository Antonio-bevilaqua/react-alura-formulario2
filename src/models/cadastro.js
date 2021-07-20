import validadorCPF from "./validadorCpf";
import validadorEmail from "./validadorEmail";

function validadorRequired(text) {
  return text.length > 0;
}

function validarRequired(text) {
  if (!validadorRequired(text))
    return { valido: false, texto: "Este campo é obrigatório." };

  return { valido: true, texto: "" };
}

function validarCPF(text) {
  if (!validadorRequired(text))
    return { valido: false, texto: "Este campo é obrigatório." };

  if (!validadorCPF(text)) return { valido: false, texto: "CPF Inválido." };

  return { valido: true, texto: "" };
}

function validarEmail(text) {
  if (!validadorRequired(text))
    return { valido: false, texto: "Este campo é obrigatório." };

  if (!validadorEmail(text)) return { valido: false, texto: "Email Inválido." };

  return { valido: true, texto: "" };
}

function validarSenha(text) {
  if (text.length < 4 || text.length > 40)
    return { valido: false, texto: "Sua senha deve ter entre 4 e 72 dígitos." };

  return { valido: true, texto: "" };
}

function validarCep(text) {
    if (text.length < 9)
      return { valido: false, texto: "Seu cep deve ter 8 números." };
  
    return { valido: true, texto: "" };
  }

export { validarRequired, validarCPF, validarSenha, validarEmail, validarCep };
