import Login from "@/app/(auth)/login/page";
import { render, screen } from "@testing-library/react";

describe("Login", () => {
  test("should be load form sign up", async () => {
    render(<Login />);

    const emailInpt = screen.getByPlaceholderText("johndoe@email.com");
    const passwordInpt = screen.getByPlaceholderText("******");
    const buttonLogin = screen.getByText("Entrar");

    expect(emailInpt).toBeInTheDocument();
    expect(passwordInpt).toBeInTheDocument();
    expect(buttonLogin).toBeInTheDocument();
  });
});
