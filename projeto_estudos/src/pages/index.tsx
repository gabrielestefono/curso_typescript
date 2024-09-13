import { Autocomplete, Button, Checkbox, FormControl, Grid2, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from "@mui/material";
import React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Material UI", "Alpine.JS", "Driver.JS", "Swipper.JS"
];

export default function Home() {

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Grid2 container spacing={2}
      justifyContent={'center'}
      paddingTop={4}
      paddingInline={4}
    >
      <Grid2 size={12}>
        <TextField
          sx={{ width: '100%' }}
          label="Nome do Projeto"
        />
      </Grid2>
      <Grid2 size={6}>
        <Autocomplete
          sx={{ width: '100%' }}
          options={[
            { label: 'React', id: 1 },
            { label: 'Angular', id: 1 },
          ]}
          renderInput={(params) => <TextField {...params} label="Framework" />}
        />
      </Grid2>
      <Grid2 size={6}>
        <Autocomplete
          sx={{ width: '100%' }}
          options={[
            { label: '18.0', id: 1 },
            { label: '18.0', id: 1 },
          ]}
          renderInput={(params) => <TextField {...params} label="Versão" />}
        />
      </Grid2>
      <Grid2 size={12}>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id="demo-multiple-checkbox-label">Bibliotecas</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Biblioteca" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.includes(name)} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid2>
      <Grid2 size={6}>
        <Autocomplete
          sx={{ width: '100%' }}
          options={[
            { label: 'Node', id: 1 },
            { label: 'Dart', id: 1 },
          ]}
          renderInput={(params) => <TextField {...params} label="Linguagem" />}
        />
      </Grid2>
      <Grid2 size={6}>
        <Autocomplete
          sx={{ width: '100%' }}
          options={[
            { label: '18.0', id: 1 },
            { label: '3.0', id: 1 },
          ]}
          renderInput={(params) => <TextField {...params} label="Versão" />}
        />
      </Grid2>
      <Grid2 size={4}>
        <Button variant="contained" disableElevation sx={{width: '100%'}}>
          Gerar Docker
        </Button>
      </Grid2>
    </Grid2>
  );
}
