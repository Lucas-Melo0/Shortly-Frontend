import { LoginContainer, Form } from "../components/Containers/loginContainer";
import { Button } from "../components/Buttons/GreenButton";
import { Header } from "../components/Header";

function Login() {
  return (
    <>
      <Header />
      <LoginContainer>
        <Form>
          <input id="email" placeholder="Email" required />
          <input id="password" placeholder="Senha" required />
          <Button type="submit" Name="Entrar" />
        </Form>
      </LoginContainer>
    </>
  );
}
export { Login };
