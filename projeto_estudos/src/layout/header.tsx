import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountMenu from "./AccountMenu";
import NotificationMenu from "./NotificationMenu";
import SearchMenu from "./SearchMenu";

export default function Header() {
  return (
    <StyledBox>
      <Box>
        <StyledTitle variant="h4">WeBest</StyledTitle>
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

const StyledStack = styled(Stack)(() => ({
  alignItems: "center",
  display: "flex",
  gap: "20px",
  flexDirection: "row",
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
