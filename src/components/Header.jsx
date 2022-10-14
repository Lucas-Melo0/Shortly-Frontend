import {
  LeftDiv,
  LogoDiv,
  RightDiv,
  Wrapper,
} from "./Containers/headerContainer";
import logo from "../assets/logo.png";

// eslint-disable-next-line react/prop-types
function Header({ isLoggedIn = false }) {
  return (
    <Wrapper>
      <LogoDiv>
        <h1>Shortly</h1>
        <img src={logo} alt="logo" />
      </LogoDiv>
      {isLoggedIn ? (
        <LeftDiv>
          <p>Seja bem-vindo(a), Pessoa!</p>
        </LeftDiv>
      ) : null}

      <RightDiv>
        <div>{isLoggedIn ? <p>Home</p> : <p>Entrar</p>}</div>
        <div>{isLoggedIn ? <p>Ranking</p> : <p>Cadastrar-se</p>}</div>
        {isLoggedIn ? (
          <div>
            <p>Sair</p>
          </div>
        ) : null}
      </RightDiv>
    </Wrapper>
  );
}

export { Header };
