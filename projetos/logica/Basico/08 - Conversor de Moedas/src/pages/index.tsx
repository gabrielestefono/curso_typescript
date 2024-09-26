import Fields from "@/components/Fields";
import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface Moeda {
  cotacao: string | number;
  valor: string;
}

export default function Home() {
  const [valorAtual, setValorAtual] = useState(0);

  const { control, handleSubmit } = useForm<Moeda>();

  const handleSubmitForm = () => {
    handleSubmit((data) => {
      setValorAtual(parseFloat(String(data.cotacao)) * parseFloat(data.valor));
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
      <Grid2 container size={3} gap={2}>
        <Fields control={control} name="cotacao" label="Cotação da Moeda" />
        <Fields control={control} name="valor" label="Valor a Converter" />
        <Grid2 size={12} display={"flex"} justifyContent={"center"}>
          <Button variant="contained" onClick={handleSubmitForm}>
            Calcular
          </Button>
        </Grid2>
        <Grid2 size={12} display={"flex"} justifyContent={"center"}>
          <Typography>
            O valor na cotação atual é de: R$ {valorAtual.toFixed(2)}
          </Typography>
        </Grid2>
      </Grid2>
    </Stack>
  );
}
