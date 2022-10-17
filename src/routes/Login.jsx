import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { LoginContainer, Form } from "../components/Containers/loginContainer";
import { Button } from "../components/Buttons/GreenButton";
import { signin } from "../API/axiosRequests";
import { Header } from "../components/Header";

// eslint-disable-next-line react/prop-types
function Login({ setUserData, userData }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  const isLoading = status === "loading";
  const isError = status === "error";

  useEffect(() => {
    if (query === "") return;
    setStatus("loading");
    signin(query).then(
      (response) => {
        setUserData({
          ...userData,
          token: response.data.token,
          loggedIn: true,
        });
        setStatus("sucess");
        navigate("/home");
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
          <input id="password" type="password" placeholder="Senha" required />
          {isError && <h5>Dados incorretos</h5>}
          <Button
            type="submit"
            Name={isLoading ? <Oval color="white" height={40} /> : "Entrar"}
          />
        </Form>
      </LoginContainer>
    </>
  );
}
export { Login };
