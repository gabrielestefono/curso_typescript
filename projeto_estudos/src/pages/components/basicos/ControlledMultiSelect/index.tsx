import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";
import { Control, FieldValues, Path, useController } from "react-hook-form";

interface ControlledMultiSelectProps<CustomType extends FieldValues> {
  control: Control<CustomType>;
  name: Path<CustomType>;
  label: string;
  names: string[];
  sx?: SxProps<Theme>;
  disabled?: boolean;
  required?: boolean;
}

export default function ControlledMultiSelect<CustomType extends FieldValues>({
  control,
  name,
  sx,
  label,
  names,
  disabled = false,
  required = false,
}: Readonly<ControlledMultiSelectProps<CustomType>>) {
  const { field } = useController({
    control,
    name,
  });

  const handleChange = (event: SelectChangeEvent<typeof names>) => {
    const {
      target: { value },
    } = event;
    field.onChange(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={sx}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={field.value}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={field.value.includes(name)} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};
