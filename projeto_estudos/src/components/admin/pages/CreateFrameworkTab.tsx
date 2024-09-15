import ControlledTextField from "@/components/basicos/ControlledTextField";
import { Button, Grid2 } from "@mui/material";
import { useForm } from "react-hook-form";

interface CreateFrameworkTabProps {
  index: number;
  value: number;
}

export default function CreateFrameworkTab({
  index,
  value,
}: Readonly<CreateFrameworkTabProps>) {
  const { control, handleSubmit } = useForm<{ nome: string }>({
    defaultValues: {
      nome: "",
    },
  });

  const handleSubmitForm = () => {
    handleSubmit(
      (data) => {
        fetch("http://localhost:3001/docker/framework/frontend/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      },
      () => console.error("Formulário inválido!")
    )();
  };

  if (index !== value) {
    return <></>;
  }
  return (
    <Grid2 container size={12} gap={2} justifyContent={"center"}>
      <Grid2 size={12}>
        <ControlledTextField
          control={control}
          label="Nome"
          name="nome"
          sx={{ width: "100%" }}
          required
        />
      </Grid2>
      <Grid2 size={4}>
        <Button variant="contained" fullWidth onClick={handleSubmitForm}>
          Salvar
        </Button>
      </Grid2>
    </Grid2>
  );
}
