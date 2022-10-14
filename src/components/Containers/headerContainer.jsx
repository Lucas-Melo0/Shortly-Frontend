import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  position: relative;
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  h1 {
    font-family: "Lexend Deca";
    font-weight: 200;
    font-size: 64px;
  }
`;

const RightDiv = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 15px;
  position: absolute;
  right: 0;
  top: 20%;
  p {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 14px;
    color: #9c9c9c;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  justify-content: start;
  position: absolute;
  left: 0;
  top: 20%;
  p {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 14px;
    color: #5d9040;
  }
`;

export { Wrapper, LogoDiv, RightDiv, LeftDiv };
