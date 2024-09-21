import Numero from "@/components/numero";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const agora = new Date();
  const hora = agora.getHours().toString().padStart(2, "0");
  const [hora1, hora2] = [hora[0], hora[1]];
  const minuto = agora.getMinutes().toString().padStart(2, "0");
  const [minuto1, minuto2] = [minuto[0], minuto[1]];

  const [reload, setReload] = useState<boolean>(false);

  setInterval(() => {
    if (!reload) {
      setReload(!reload);
      return;
    }
    setReload(!reload);
  }, 1000);

  return (
    <Stack
      width={"100%"}
      height={"80vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"row"}
      gap={2}
    >
      <Stack flexDirection={"row"} gap={2}>
        <Numero numero={parseInt(hora1)} />
        <Numero numero={parseInt(hora2)} />
      </Stack>
      <Stack flexDirection={"column"} gap={2}>
        <Typography fontSize={70} color="red">
          :
        </Typography>
      </Stack>
      <Stack flexDirection={"row"} gap={2}>
        <Numero numero={parseInt(minuto1)} />
        <Numero numero={parseInt(minuto2)} />
      </Stack>
    </Stack>
  );
}
