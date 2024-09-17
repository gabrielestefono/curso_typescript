import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountMenu from "./AccountMenu";
import NotificationMenu from "./NotificationMenu";
import SearchMenu from "./SearchMenu";
import OptionsDrawer from "./OptionsDrawer";

export default function Header() {
  return (
    <StyledBox>
      <Box>
        <StyledTitle>WeBest</StyledTitle>
        <OptionsDrawer />
      </Box>
      <StyledStack>
        <SearchMenu />
        <NotificationMenu />
        <AccountMenu />
      </StyledStack>
    </StyledBox>
  );
}

const StyledBox = styled(Box)(() => ({
  width: "100%",
  paddingInline: 6,
  paddingBlock: 4,
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  boxSizing: "border-box",
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  gap: "10px",
  flexDirection: "row",
  paddingInline: '2rem',
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  paddingInline: '1.5rem',
  fontSize: '1.25rem',
  lineHeight: '4rem',
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
