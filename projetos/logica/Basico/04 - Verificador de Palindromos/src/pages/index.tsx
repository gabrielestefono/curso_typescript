import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useController, useForm } from "react-hook-form";

export default function Home() {
  const [isPalindromo, setIsPalindromo] = useState<boolean | null>(null);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      palindromo: "",
    },
  });

  const { field } = useController({
    control,
    name: "palindromo",
  });

  const handleSubmitForm = () => {
    handleSubmit((data) => {
      const wordOrPhrase = data.palindromo
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "")
        .replace(/\s+/g, "");
      console.log(wordOrPhrase);

      const reverseWordOrPhrase = wordOrPhrase.split("").reverse().join("");

      if (wordOrPhrase === reverseWordOrPhrase) {
        setIsPalindromo(true);
        return;
      }
      setIsPalindromo(false);
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
      <Grid2 container size={4}>
        <Grid2 size={12} marginTop={2}>
          <Typography textAlign={"center"}>
            Verificador de Palindromos
          </Typography>
        </Grid2>
        <Grid2 marginTop={2} size={12}>
          <TextField
            label="Palavra ou frase"
            sx={{ width: "100%" }}
            disabled={field.disabled}
            name={field.name}
            onBlur={field.onBlur}
            onChange={field.onChange}
            ref={field.ref}
            value={field.value}
          />
        </Grid2>
        <Grid2 marginTop={2} size={12}>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={handleSubmitForm}
          >
            Verificar
          </Button>
        </Grid2>
        <Grid2 marginTop={4} size={12}>
          {isPalindromo !== null && isPalindromo ? (
            <Typography textAlign={"center"} color="green">
              É um palíndromo
            </Typography>
          ) : isPalindromo !== null ? (
            <Typography textAlign={"center"} color="red">
              Não é um palíndromo
            </Typography>
          ) : (
            <></>
          )}
        </Grid2>
      </Grid2>
    </Stack>
  );
}
