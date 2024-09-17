import ControlledItemsList from "@/components/basicos/ControlledItemsList";
import { Grid2, styled } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "./header";

interface LayoutProps extends PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return (
    <Grid2 container size={12}>
      <StyledGrid size={12} padding={0}>
        <Header />
      </StyledGrid>
      <Grid2>
        <ControlledItemsList />
      </Grid2>
      <ResponsiveGrid>
        {children}
      </ResponsiveGrid>
    </Grid2>
  );
}

const StyledGrid = styled(Grid2)(() => ({
  padding: '0',
  paddingBottom: '2rem',
  ['> div']: {
    padding: "0",
  },
}));

const ResponsiveGrid = styled(Grid2)(({theme}) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: 'calc(100% - 300px)'
  }
}));
