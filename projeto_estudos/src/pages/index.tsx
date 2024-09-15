import { Button, Grid2 } from "@mui/material";
import { Path, useForm } from "react-hook-form";
import ControlledAutoComplete from "./components/basicos/ControlledAutoComplete";
import ControlledMultiSelect from "./components/basicos/ControlledMultiSelect";
import ControlledTextField from "./components/basicos/ControlledTextField";
import { useEffect, useState } from "react";
import { Framework, Versao } from "@/types/linguagem";

interface AutocompleteResult {
  label: string;
  value: string | number;
}

interface Projeto {
  nome: string;
  framework: AutocompleteResult;
  versao_framework: AutocompleteResult;
  complementos: string[];
  tecnologia: AutocompleteResult;
  versao_linguagem: AutocompleteResult;
  container: string;
  comida: string;
}

const names = [
  "Typescript",
  "ES-Lint",
  "Tailwind",
  "src/ Directory",
  "App-Router",
  "Import-Alias",
];

export default function Home() {
  const [frameworks, setFrameworks] = useState<Framework[]>([]);

  const [versaoFramework, setVersaoFramework] = useState<Versao[]>([]);

  const { control, handleSubmit, setValue, watch } = useForm<Projeto>({
    defaultValues: {
      nome: "",
      framework: { label: "", value: "" },
      versao_framework: { label: "", value: "" },
      versao_linguagem: { label: "", value: "" },
      complementos: [],
      tecnologia: { label: "", value: "" },
      container: "",
    },
  });

  const handleSubmitForm = () => {
    handleSubmit((data) => {
      console.log(data);
    })();
  };

  const handleChangeName = (nome: string) => {
    const sanitizedName = nome
      .replace(/[^a-zA-Z0-9_ ]+/g, "")
      .replace(/ /g, "_")
      .toLowerCase();

    setValue("container", sanitizedName);
  };

  useEffect(() => {
    fetch("http://localhost:3001/docker/framework/frontend/")
      .then((res) => res.json())
      .then((data: Framework[] | null | undefined) => {
        if (!data) {
          return;
        }
        setFrameworks(data);
      });
  }, []);

  return (
    <Grid2
      container
      spacing={2}
      justifyContent={"center"}
      paddingTop={4}
      paddingInline={4}
    >
      <Grid2 size={12}>
        <ControlledTextField
          control={control}
          label="Nome do Projeto"
          name="nome"
          sx={{ width: "100%" }}
          required
          actionOnChange={handleChangeName}
        />
      </Grid2>
      <Grid2 size={6}>
        <ControlledAutoComplete
          control={control}
          label="Framework"
          name="framework"
          options={frameworks.map((el) => ({
            label: el.nome,
            value: el.id,
          }))}
          required
        />
      </Grid2>
      <Grid2 size={6}>
        <ControlledAutoComplete
          control={control}
          label="Versão"
          name="versao_framework"
          disabled={watch("framework").value === ""}
          options={versaoFramework.map((el) => ({
            label: String(el.versao),
            value: el.id,
          }))}
          required
        />
      </Grid2>
      <Grid2 size={12}>
        <ControlledMultiSelect
          control={control}
          label="Complementos"
          disabled={watch("versao_framework").value === ""}
          required
          name="complementos"
          names={names}
          sx={{ width: "100%" }}
        />
      </Grid2>
      <Grid2 size={6}>
        <ControlledAutoComplete
          control={control}
          label="Linguagem"
          disabled={watch("versao_framework").value === ""}
          name="tecnologia"
          options={[
            { label: "Node", value: 1 },
            { label: "Dart", value: 2 },
          ]}
          required
        />
      </Grid2>
      <Grid2 size={6}>
        <ControlledAutoComplete
          control={control}
          label="Versão"
          name="versao_linguagem"
          disabled={watch("tecnologia").value === ""}
          options={[
            { label: "18.0", value: 1 },
            { label: "3.0", value: 2 },
          ]}
          required
        />
      </Grid2>
      <Grid2 size={12}>
        <ControlledTextField
          control={control}
          label="Nome do Container"
          name="container"
          required
          sx={{ width: "100%" }}
          actionOnChange={handleChangeName}
        />
      </Grid2>
      <Grid2 size={4}>
        <Button
          variant="contained"
          disableElevation
          sx={{ width: "100%" }}
          onClick={handleSubmitForm}
        >
          Gerar Docker
        </Button>
      </Grid2>
    </Grid2>
  );
}
