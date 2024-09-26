import CustomTextField from "@/components/CustomTextField";
import Field from "@/components/Field";
import { Button, Grid2, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

type ValoresForm = number | string | null;

export interface Form {
  entrada?: ValoresForm;
  saida?: ValoresForm;
  temperatura?: ValoresForm;
}

export default function Home() {
  const { control, handleSubmit } = useForm<Form>({
    defaultValues: {
      entrada: "",
      saida: "",
    },
  });

  const [value, setValue] = useState<string | null>(null);

  const handleSubmitForm = () => {
    handleSubmit((data) => {
      const entrada = data.entrada;
      const saida = data.saida;
      const temperatura = data.temperatura;
      if (
        typeof entrada !== "number" ||
        typeof saida !== "number" ||
        typeof temperatura !== "string" ||
        entrada === saida
      ) {
        return;
      }
      if (entrada === 1 && saida === 2) {
        setValue(`${temperatura}ºC em ºF é ${parseInt(temperatura) * 1.8 + 32}`);
        return;
      }
      setValue(`${temperatura}ºF em ºC é ${(parseInt(temperatura) - 32) / 1.8}`);
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
      <Grid2 container size={7}>
        <Grid2 size={12}>
          <Typography textAlign={"center"}>
            Escolha as temperaturas de entrada e saída
          </Typography>
        </Grid2>
        <Stack gap={2} width={"100%"} flexDirection={"row"}>
          <Field control={control} name="entrada" />
          <Field control={control} name="saida" />
        </Stack>
        <Grid2
          size={12}
          display={"flex"}
          justifyContent={"center"}
          paddingTop={"1rem"}
        >
          <CustomTextField control={control} name="temperatura" />
        </Grid2>
        <Grid2
          size={12}
          display={"flex"}
          justifyContent={"center"}
          paddingTop={"1rem"}
        >
          <Button
            onClick={handleSubmitForm}
            variant="contained"
            sx={{ width: "50%" }}
          >
            Converter
          </Button>
        </Grid2>
        {value && (
          <Grid2
            size={12}
            display={"flex"}
            justifyContent={"center"}
            paddingTop={"1rem"}
          >
            <Typography>{value}</Typography>
          </Grid2>
        )}
      </Grid2>
    </Stack>
  );
}
