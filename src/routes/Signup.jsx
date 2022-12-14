import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Buttons/GreenButton";
import { signup } from "../API/axiosRequests";
import { LoginContainer, Form } from "../components/Containers/loginContainer";
import { Header } from "../components/Header";

function Signup() {
  const [status, setStatus] = useState("idle");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const isLoading = status === "loading";
  const isSucess = status === "sucess";
  const isError = status === "error";

  useEffect(() => {
    if (query === "") return;
    setStatus("loading");
    signup(query)
      .then((response) => console.log(response))
      .then(() => {
        setStatus("sucess");
        navigate("/login");
      })
      .catch((error) => {
        setStatus("error");
        console.log(error);
      });
  }, [query]);

  const formHandler = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = e.target.elements;
    setQuery({
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });
  };

  return (
    <>
      <Header />
      <LoginContainer>
        <Form onSubmit={formHandler}>
          <input id="name" placeholder="Nome" required />
          <input id="email" placeholder="E-mail" required />
          <input type="password" id="password" placeholder="Senha" required />
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirmar senha"
            required
          />

          <Button
            type="submit"
            Name={
              isLoading ? <Oval color="white" height={40} /> : "Criar Conta"
            }
          />
        </Form>
      </LoginContainer>
    </>
  );
}

export { Signup };
