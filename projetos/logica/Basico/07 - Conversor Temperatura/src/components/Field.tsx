import { Form } from "@/pages";
import { Autocomplete, Grid2, TextField } from "@mui/material";
import { Control, Path, useController } from "react-hook-form";

interface FieldProps {
  control: Control<Form>;
  name: Path<Form>;
}

export default function Field({ control, name }: Readonly<FieldProps>) {
  const { field } = useController({
    control,
    name,
  });

  return (
    <Grid2 size={6} paddingTop={"1rem"}>
      <Autocomplete
        disabled={field.disabled}
        onBlur={field.onBlur}
        ref={field.ref}
        options={[1, 2]}
        onChange={(_, value) => field.onChange(value)}
        getOptionLabel={(option) => (option === 1 ? "Celcius" : "Fahrenheit")}
        value={field.value}
        renderInput={(params) => (
          <TextField
            {...params}
            name={field.name}
            onBlur={field.onBlur}
            inputRef={field.ref}
          />
        )}
      />
    </Grid2>
  );
}
