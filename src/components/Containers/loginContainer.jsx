import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
`;

const Form = styled.form`
  display: flex;
  margin: 0 auto;
  margin-top: 80px;
  width: 80%;
  flex-direction: column;
  row-gap: 15px;
  input {
    padding: 10px;
    background: #ffffff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    height: 50px;
  }
`;

export { LoginContainer, Form };
