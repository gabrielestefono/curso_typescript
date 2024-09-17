import ControlledTextField from "@/components/basicos/ControlledTextField";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, styled } from "@mui/material";

export default function SearchMenu() {
  const { control } = useForm({
    defaultValues: {
      pesquisa: "",
    },
  });

  return (
    <StyledBox
      sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
    >
      <ControlledTextField
        control={control}
        label=""
        placeholder="Pesquisar"
        name="pesquisa"
        size="small"
        sx={{ width: "100%" }}
        endAdornment={
          <IconButton
            size="small"
            sx={{ padding: 0 }}
            onClick={() => console.log("Oi")}
          >
            <SearchIcon />
          </IconButton>
        }
      />
    </StyledBox>
  );
}

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
