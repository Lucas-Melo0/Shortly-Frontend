import { useState, useEffect } from "react";
import {
  HomeHeader,
  RankingContainer,
  Wrapper,
} from "../components/Containers/homeContainer";
import { Header } from "../components/Header";
import { getInfo } from "../API/axiosRequests";
import trophy from "../assets/trophy.png";

function Home() {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState("idle");

  useEffect(() => {
    setStatus("loading");
    getInfo().then((responseData) => {
      setData(responseData.data);
      setStatus("sucess");
    });
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <HomeHeader>
          <img src={trophy} alt="trophy" />
          <p>Ranking</p>
        </HomeHeader>
        <RankingContainer>
          {data.map((value, index) => (
            <p key={value.id}>
              {index + 1}. {value.name} - {value.linksCount} Links -{" "}
              {value.visitCount} visualizações
            </p>
          ))}
        </RankingContainer>
      </Wrapper>
    </>
  );
}

export { Home };
