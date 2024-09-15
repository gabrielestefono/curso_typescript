import { SxProps, TextField, Theme } from "@mui/material";
import { ChangeEventHandler } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

interface ControlledTextFieldProps<CustomType extends FieldValues> {
  control: Control<CustomType>;
  name: Path<CustomType>;
  label: string;
  sx?: SxProps<Theme>;
  required?: boolean;
  actionOnChange?: (nome: string) => void;
}

export default function ControlledTextField<CustomType extends FieldValues>({
  control,
  name,
  label,
  sx,
  required = false,
  actionOnChange,
}: Readonly<ControlledTextFieldProps<CustomType>>) {
  const { field } = useController({
    control: control,
    name: name,
  });

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    field.onChange(event);
    actionOnChange?.(event.target.value);
  };

  return (
    <TextField
      sx={sx}
      label={label}
      name={field.name}
      value={field.value}
      onChange={handleChange}
      inputRef={field.ref}
      onBlur={field.onBlur}
      required={required}
    />
  );
}
