import { ButtonBase } from "@mui/material";
import { PropsWithChildren } from "react";

interface IconButtonProps extends PropsWithChildren {
  onClick: () => void;
  disabled?: boolean;
}

export default function IconButton({
  children,
  onClick,
  disabled = false,
}: Readonly<IconButtonProps>) {
  return (
    <ButtonBase
      sx={{ padding: "0.5rem" }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonBase>
  );
}
