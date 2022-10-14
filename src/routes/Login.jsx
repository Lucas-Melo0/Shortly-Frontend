import { useEffect, useState } from "react";
import { LoginContainer, Form } from "../components/Containers/loginContainer";
import { Button } from "../components/Buttons/GreenButton";
import { signin } from "../API/axiosRequests";
import { Header } from "../components/Header";

function Login() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);

  const isLoading = status === "loading";
  const isSucess = status === "sucess";
  const isError = status === "error";

  useEffect(() => {
    if (query === "") return;
    setStatus("loading");
    signin(query).then(
      (response) => {
        setData(response.data);
        setStatus("sucess");
      },
      (error) => {
        console.log(error);
        setStatus("error");
      }
    );
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    setQuery({ email: email.value, password: password.value });
  };

  return (
    <>
      <Header />
      <LoginContainer>
        <Form onSubmit={handleSubmit}>
          <input id="email" placeholder="Email" required />
          <input id="password" placeholder="Senha" required />
          {isError && <h5>Dados incorretos</h5>}
          <Button type="submit" Name="Entrar" />
        </Form>
      </LoginContainer>
    </>
  );
}
export { Login };
