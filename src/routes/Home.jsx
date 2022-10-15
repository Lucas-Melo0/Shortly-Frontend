import {
  HomeHeader,
  RankingContainer,
  Wrapper,
} from "../components/Containers/homeContainer";
import { Header } from "../components/Header";
import trophy from "../assets/trophy.png";

function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <HomeHeader>
          <img src={trophy} alt="trophy" />
          <p>Ranking</p>
        </HomeHeader>
        <RankingContainer>
          <p>1. Fulaninha - 32 Links - 1.703.584 visualizações</p>
          <p>1. Fulaninha - 32 Links - 1.703.584 visualizações</p>
          <p>1. Fulaninha - 32 Links - 1.703.584 visualizações</p>
          <p>1. Fulaninha - 32 Links - 1.703.584 visualizações</p>
          <p>1. Fulaninha - 32 Links - 1.703.584 visualizações</p>
        </RankingContainer>
      </Wrapper>
    </>
  );
}

export { Home };
