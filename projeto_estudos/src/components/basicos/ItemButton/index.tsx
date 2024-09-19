import { ButtonBase } from "@mui/material";
import { PropsWithChildren } from "react";

interface IconButtonProps extends PropsWithChildren {
    onClick: () => void
}

export default function IconButton({ children, onClick }: IconButtonProps) {
    return <ButtonBase sx={{ padding: '0.5rem' }}
        onClick={onClick}
    >
        {children}
    </ButtonBase>
}