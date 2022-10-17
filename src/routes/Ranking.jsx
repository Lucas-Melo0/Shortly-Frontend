/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import {
  RankingHeader,
  RankingContainer,
  Wrapper,
} from "../components/Containers/rankingContainer";
import { Header } from "../components/Header";
import { getInfo } from "../API/axiosRequests";
import trophy from "../assets/trophy.png";

function Ranking({ userData }) {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);
  const { loggedIn } = userData;

  const isLoading = status === "loading";
  useEffect(() => {
    setStatus("loading");
    getInfo().then(
      (responseData) => {
        setData(responseData.data);
        setStatus("sucess");
      },
      (error) => {
        setStatus("error");
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      <Header userData={userData} isLoggedIn={loggedIn} />
      <Wrapper>
        {isLoading ? (
          <Oval />
        ) : (
          <>
            <RankingHeader>
              <img src={trophy} alt="trophy" />
              <p>Ranking</p>
            </RankingHeader>
            <RankingContainer>
              {data.map((value, index) => (
                <p key={value.id}>
                  {index + 1}. {value.name} - {value.linksCount} Links -{" "}
                  {value.visitCount} visualizações
                </p>
              ))}
            </RankingContainer>
          </>
        )}
        {loggedIn ? null : <h4>Crie sua conta para usar nosso serviço!</h4>}
      </Wrapper>
    </>
  );
}

export { Ranking };
