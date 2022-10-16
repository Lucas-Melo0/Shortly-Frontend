import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  row-gap: 25px;
  flex-direction: column;
`;

const ShortnerContainer = styled.div`
  display: flex;
`;

const LinkForm = styled.form`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 90%;
  flex-direction: row;
  column-gap: 15px;
  input {
    padding: 10px;
    width: 70%;
    background: #ffffff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    height: 50px;
  }
  h5 {
    display: flex;
    justify-content: center;
    color: crimson;
  }
`;

const UserLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  row-gap: 25px;
  width: 90%;
`;

const ShortnedLink = styled.div`
  display: flex;
  width: 100%;
  padding-left: 5px;
  justify-content: space-between;
  align-items: center;
  background: #80cc74;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  height: 60px;
  p {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
  }
`;
const Trash = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18%;
  height: 60px;

  background-color: #ffffff;
`;

export {
  HomeContainer,
  ShortnerContainer,
  LinkForm,
  UserLinks,
  ShortnedLink,
  Trash,
};
