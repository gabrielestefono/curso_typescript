import { SxProps, TextField, Theme } from "@mui/material";
import { ChangeEventHandler, ReactNode } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

interface ControlledTextFieldProps<CustomType extends FieldValues> {
  control: Control<CustomType>;
  name: Path<CustomType>;
  label: string;
  placeholder?: string;
  sx?: SxProps<Theme>;
  required?: boolean;
  actionOnChange?: (nome: string) => void;
  size?: "small" | "medium";
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

export default function ControlledTextField<CustomType extends FieldValues>({
  control,
  name,
  label,
  sx,
  required = false,
  actionOnChange,
  size,
  endAdornment,
  startAdornment,
  placeholder,
}: Readonly<ControlledTextFieldProps<CustomType>>) {
  const { field } = useController({
    control: control,
    name: name,
    rules: {
      required,
    },
  });

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    field.onChange(event);
    actionOnChange?.(String(event));
  };

  return (
    <TextField
      size={size}
      sx={sx}
      label={label}
      name={field.name}
      value={field.value}
      placeholder={placeholder}
      onChange={handleChange}
      inputRef={field.ref}
      onBlur={field.onBlur}
      required={required}
      slotProps={{
        input: {
          startAdornment: startAdornment,
          endAdornment: endAdornment,
        },
      }}
    />
  );
}
