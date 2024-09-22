import {
  Button,
  Divider,
  Grid2,
  InputLabel,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useController, useForm } from "react-hook-form";

interface ImcCalc {
  peso: number | string;
  altura: number | string;
}

export default function Home() {
  const [hasError, setHasError] = useState<boolean>(false);

  const [valueFinal, setValueFinal] = useState<string>("");

  const { control, handleSubmit } = useForm<ImcCalc>({
    defaultValues: {
      peso: "",
      altura: "",
    },
  });

  const { field: fieldPeso } = useController({
    control,
    name: "peso",
    rules: {
      minLength: 2,
      required: true,
      validate: {
        positive: (v) => parseFloat(String(v)) > 0,
      },
    },
  });

  const { field: fieldAltura } = useController({
    control,
    name: "altura",
    rules: {
      minLength: 1,
      required: true,
      validate: {
        positive: (v) => parseFloat(String(v)) > 0,
        lessthan3: (v) => parseFloat(String(v)) < 3,
      },
    },
  });

  const handleSubmitForm = () => {
    setHasError(false);
    handleSubmit(
      (data) => {
        const quadradoAltura: number =
          parseFloat(String(data.altura)) * parseFloat(String(data.altura));
        const imc: number = parseFloat(String(data.peso)) / quadradoAltura;
        setValueFinal(imc.toFixed(2));
      },
      (erro) => {
        setHasError(true);
        console.log(erro);
      }
    )();
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"} minHeight={"80vh"}>
      <StyledGrid2 container size={12}>
        <Grid2 size={12}>
          <InputLabel
            sx={{
              width: "100%",
              textAlign: "center",
            }}
          >
            Qual o seu peso?
          </InputLabel>
        </Grid2>
        <Grid2 size={12} marginTop={2}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Digite o seu peso"
            sx={{ fontSize: "10px" }}
            disabled={fieldPeso.disabled}
            name={fieldPeso.name}
            onBlur={fieldPeso.onBlur}
            onChange={fieldPeso.onChange}
            ref={fieldPeso.ref}
            value={fieldPeso.value}
            required
            error={hasError}
          ></TextField>
        </Grid2>
        <Grid2 size={12} marginTop={2}>
          <InputLabel
            sx={{
              width: "100%",
              textAlign: "center",
            }}
          >
            Qual a sua altura?
          </InputLabel>
        </Grid2>
        <Grid2 size={12} marginTop={2}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Digite a sua altura"
            sx={{ fontSize: "10px" }}
            disabled={fieldAltura.disabled}
            name={fieldAltura.name}
            onBlur={fieldAltura.onBlur}
            onChange={fieldAltura.onChange}
            ref={fieldAltura.ref}
            value={fieldAltura.value}
            error={hasError}
          ></TextField>
        </Grid2>
        <Grid2
          size={12}
          marginTop={2}
          justifyContent={"center"}
          display={"flex"}
        >
          <Button variant="contained" onClick={handleSubmitForm}>
            Calcular IMC
          </Button>
        </Grid2>
        <Grid2
          size={12}
          marginTop={2}
          justifyContent={"center"}
          display={"flex"}
        >
          <Divider />
        </Grid2>
        <Grid2
          size={12}
          marginTop={2}
          justifyContent={"center"}
          display={"flex"}
        >
          <Typography>{valueFinal}</Typography>
        </Grid2>
      </StyledGrid2>
    </Stack>
  );
}

const StyledGrid2 = styled(Grid2)(({ theme }) => ({
  width: "90%",
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "30%",
  },
}));
