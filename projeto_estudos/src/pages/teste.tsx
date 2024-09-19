import ControlledTextField from "@/components/basicos/ControlledTextField";
import { Grid2 } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Teste() {
  const { control } = useForm({
    defaultValues: {
      teste: "",
    },
  });

  return (
    <Grid2 container size={12} padding={'1rem'}>
      <Grid2 size={12}>
        <ControlledTextField control={control} label="Teste" name="teste" sx={{width: '100%'}} />
      </Grid2>
    </Grid2>
  );
}
