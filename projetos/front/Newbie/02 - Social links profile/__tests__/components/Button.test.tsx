import Button from "@/components/Button";
import { render, screen } from "@testing-library/react";
import { describe, it, beforeEach } from "@jest/globals"; // Importando do Jest
import "@testing-library/jest-dom";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

function WrapperComponent() {
  return <Button link="http://192.168.0.53/sigweb-3" text="Link do Sigweb 3" />;
}

describe("Componente de Botão", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
  });

  it("Renderiza o botão", () => {
    render(<WrapperComponent />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Link do Sigweb 3");
  });
});
