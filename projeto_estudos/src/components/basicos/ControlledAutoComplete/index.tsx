import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

interface OptionProp {
  label: string;
  value: string | number;
}

interface ControlledAutoCompleteProps<CustomType extends FieldValues> {
  control: Control<CustomType>;
  name: Path<CustomType>;
  label: string;
  options: OptionProp[];
  required?: boolean;
  disabled?: boolean;
}

export default function ControlledAutoComplete<CustomType extends FieldValues>({
  control,
  name,
  label,
  options,
  required = false,
  disabled = false,
}: Readonly<ControlledAutoCompleteProps<CustomType>>) {
  const { field } = useController({
    control,
    name,
  });

  const handleChange = (
    _: SyntheticEvent,
    value: OptionProp | OptionProp[] | null
  ) => {
    if (!value) {
      field.onChange("");
      return;
    }
    field.onChange(value);
  };

  return (
    <Autocomplete
      options={options}
      value={field.value}
      disabled={disabled}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          onBlur={field.onBlur}
          name={field.name}
          required={required}
        />
      )}
    />
  );
}
