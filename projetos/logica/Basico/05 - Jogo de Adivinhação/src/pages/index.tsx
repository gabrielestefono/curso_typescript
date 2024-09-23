import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useController, useForm } from "react-hook-form";

export default function Home() {
  const [numero, setNumero] = useState<number>(
    parseInt(String(Math.random() * 10))
  );

  const [tentou, setTentou] = useState<boolean>(false);

  const [invalido, setInvalido] = useState<boolean>(false);

  const [acertou, setAcertou] = useState<boolean>(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      numero: "",
    },
  });

  const { field } = useController({
    control,
    name: "numero",
  });

  const handleSubmitForm = () => {
    handleSubmit((data) => {
      if (isNaN(parseInt(data.numero))) {
        setTentou(false);
        setInvalido(true);
        return;
      }
      setInvalido(false);
      if (numero === parseInt(data.numero)) {
        setTentou(true);
        setAcertou(true);
        return;
      }
      setTentou(true);
      setAcertou(false);
    })();
  };
  return (
    <Stack
      width={"100%"}
      height={"80vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid2
        container
        size={4}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
      >
        <Grid2
          size={12}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          marginTop={2}
        >
          <Typography variant="h5" textAlign={"center"}>
            Jogo da Adivinhação
          </Typography>
          <Typography textAlign={"center"}>Tente adivinhar o numero</Typography>
        </Grid2>
        <Grid2 size={12} display={"flex"} justifyContent={"center"}>
          <TextField
            disabled={field.disabled}
            name={field.name}
            onBlur={field.onBlur}
            onChange={field.onChange}
            ref={field.ref}
            value={field.value}
            placeholder="Digite o numero"
            sx={{ width: "100%", textAlign: "center" }}
          />
        </Grid2>
        <Grid2 size={12} display={"flex"} justifyContent={"center"}>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={handleSubmitForm}
          >
            Adivinhar
          </Button>
        </Grid2>
        <Grid2
          size={12}
          display={"flex"}
          justifyContent={"center"}
          marginTop={2}
        >
          {tentou && acertou && (
            <Typography color="green">Você acertou!</Typography>
          )}
          {tentou && !acertou && (
            <Typography color="red">Você errou!</Typography>
          )}
        </Grid2>
        <Grid2
          size={12}
          display={"flex"}
          justifyContent={"center"}
          marginTop={2}
        >
          {invalido && <Typography color="red">Numero inválido!!!</Typography>}
        </Grid2>
      </Grid2>
    </Stack>
  );
}
