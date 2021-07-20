import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Box, Typography } from "@material-ui/core";

function CadastroEnviado() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" justifyContent="center" marginTop="2rem" alignItems="center" fontSize="2rem">
        <CheckCircleIcon color="primary" fontSize="large" />
        <Typography variant="h4" color="primary">
          Sucesso!!
        </Typography>
      </Box>
      <p>Seu cadastro foi finalizado com sucesso!</p>
    </Box>
  );
}

export default CadastroEnviado;
