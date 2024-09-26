import { Form } from "@/pages";
import { Grid2, TextField } from "@mui/material";
import { Control, Path, useController } from "react-hook-form";

interface FieldProps {
  control: Control<Form>;
  name: Path<Form>;
}

export default function CustomTextField({
  control,
  name,
}: Readonly<FieldProps>) {
  const { field } = useController({
    control,
    name,
  });

  return (
    <Grid2 size={6} paddingTop={"1rem"}>
      <TextField
        sx={{
          width: "100%",
        }}
        disabled={field.disabled}
        name={field.name}
        onBlur={field.onBlur}
        onChange={field.onChange}
        ref={field.ref}
        value={field.value}
      />
    </Grid2>
  );
}
