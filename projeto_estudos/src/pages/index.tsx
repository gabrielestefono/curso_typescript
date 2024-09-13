import { Autocomplete, Grid, Grid2, TextField } from "@mui/material";

export default function Home() {
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
    </Grid2>
  );
}
