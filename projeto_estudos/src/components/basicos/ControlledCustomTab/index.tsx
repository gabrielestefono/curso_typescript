import { Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState, ReactNode } from "react";

interface ControlledCustomTabProps {
  labels: string[];
  children: (props: { value: number }) => ReactNode;
}

export default function ControlledCustomTab({
  labels,
  children,
}: Readonly<ControlledCustomTabProps>) {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} sx={{ paddingBottom: "10px" }}>
        {labels.map((label, index) => (
          <Tab label={label} key={`${label}${index}`} />
        ))}
      </Tabs>
      {children({ value })}
    </>
  );
}
