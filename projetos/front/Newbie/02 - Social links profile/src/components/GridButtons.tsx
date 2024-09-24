import Button from "./Button";

export default function GridButtons() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
    >
      <Button text="GitHub" />
      <Button text="Frontend Mentor" />
      <Button text="LinkedIn" />
      <Button text="Twitter" />
      <Button text="Instagram" />
    </div>
  );
}
