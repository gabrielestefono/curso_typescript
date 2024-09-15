import ControlledItemsList from "@/components/basicos/ControlledItemsList";
import { Grid2 } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "./header";

interface LayoutProps extends PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return (
    <Grid2 container size={12}>
      <Grid2 size={12} height={'6.25rem'}>
        <Header />
      </Grid2>
      <Grid2 size={2}>
        <ControlledItemsList />
      </Grid2>
      <Grid2 size={9}>
        {children}
      </Grid2>
    </Grid2>
  );
}
