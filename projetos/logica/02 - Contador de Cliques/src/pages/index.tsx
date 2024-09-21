import {
  Button,
  Grid2 as MuiGrid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [cliques, setCliques] = useState<number>(0);

  const handleClick = () => {
    setCliques((prev) => prev + 1);
  };
  return (
    <Stack
      width={"100%"}
      height={"80vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid container size={8}>
        <Grid size={12}>
          <Typography textAlign={"center"}>
            Você clicou {cliques} vezes
          </Typography>
        </Grid>
        <Grid size={12}>
          <Button onClick={handleClick} variant="contained">
            Acrescentar
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}

const Grid = styled(MuiGrid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",
}));
