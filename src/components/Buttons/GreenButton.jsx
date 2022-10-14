import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function Button({ Name }) {
  return (
    <ButtonContainer>
      <GreenButton>{Name}</GreenButton>
    </ButtonContainer>
  );
}

const GreenButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Lexend Deca";
  font-weight: 700;
  font-size: 14px;
  width: 182px;
  height: 60px;
  text-align: center;
  background: #5d9040;
  border-radius: 12px;
  color: #ffffff;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Button };
