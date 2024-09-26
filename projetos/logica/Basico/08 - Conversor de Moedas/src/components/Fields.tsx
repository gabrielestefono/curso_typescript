import { Moeda } from "@/pages";
import { Grid2, TextField } from "@mui/material";
import { Control, Path, useController } from "react-hook-form";

type Campo = "Cotação da Moeda" | "Valor a Converter";

interface FieldsProps {
  control: Control<Moeda>;
  name: Path<Moeda>;
  label: Campo;
}

export default function Fields({
  control,
  name,
  label,
}: Readonly<FieldsProps>) {
  const { field } = useController<Moeda>({
    control,
    name,
  });

  return (
    <Grid2 size={12}>
      <TextField
        fullWidth
        disabled={field.disabled}
        name={field.name}
        onBlur={field.onBlur}
        onChange={field.onChange}
        ref={field.ref}
        value={field.value}
        label={label}
      ></TextField>
    </Grid2>
  );
}
