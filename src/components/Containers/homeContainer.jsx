import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
`;

const HomeHeader = styled.div`
  display: flex;
  margin-top: 50px;
  width: 90%;
  justify-content: center;
  column-gap: 15px;
  align-items: center;
  p {
    font-family: "Lexend Deca";
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
  }
`;
const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-top: 20px;
  padding: 15px;
  width: 100%;
  height: 250px;
  background: #ffffff;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
  p {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #000000;
  }
`;

export { Wrapper, HomeHeader, RankingContainer };
