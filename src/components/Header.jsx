/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  LeftDiv,
  LogoDiv,
  RightDiv,
  Wrapper,
} from "./Containers/headerContainer";
import logo from "../assets/logo.png";

// eslint-disable-next-line react/prop-types
function Header({ isLoggedIn, userData }) {
  return (
    <Wrapper>
      <LogoDiv>
        <h1>Shortly</h1>
        <img src={logo} alt="logo" />
      </LogoDiv>
      {isLoggedIn ? (
        <LeftDiv>
          <p>Seja bem-vindo(a), {userData?.name}!</p>
        </LeftDiv>
      ) : null}

      <RightDiv>
        {isLoggedIn ? (
          <>
            <div>
              <Link to="/home">
                <p>Home</p>
              </Link>
            </div>
            <div>
              <Link to="/">
                <p>Ranking</p>
              </Link>
            </div>
            <div>
              <Link to="/login">
                <p>Sair</p>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="/login">
                <p>Entrar</p>
              </Link>
            </div>
            <div>
              <Link to="/signup">
                <p>Cadastrar-se</p>
              </Link>
            </div>
          </>
        )}
      </RightDiv>
    </Wrapper>
  );
}

export { Header };
