import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/system";
import * as React from "react";

export default function OptionsDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <StyledBox>
      <IconButton onClick={toggleDrawer(true)} sx={{ paddingLeft: "2rem" }}>
        <MenuIcon />
      </IconButton>
      <StyledDrawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CodeIcon />
                </ListItemIcon>
                <ListItemText primary={"Linguagem"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </StyledDrawer>
    </StyledBox>
  );
}

const StyledBox = styled(Box)(({ theme }) => ({
  height: "4rem",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
