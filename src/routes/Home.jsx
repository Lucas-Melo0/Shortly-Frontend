import { BsTrashFill } from "react-icons/bs";
import { Button } from "../components/Buttons/GreenButton";
import {
  HomeContainer,
  ShortnedLink,
  LinkForm,
  ShortnerContainer,
  UserLinks,
  Trash,
} from "../components/Containers/homeContainer";
import { Header } from "../components/Header";

function Home() {
  return (
    <>
      <Header isLoggedIn />
      <HomeContainer>
        <ShortnerContainer>
          <LinkForm>
            <input placeholder="Links que cabem no bolso" />
            <Button Name="Encurtar Link" />
          </LinkForm>
        </ShortnerContainer>
        <UserLinks>
          <ShortnedLink>
            <p>htttp.globo.com.br</p>
            <p>34e23af</p>
            <p>Quantidade de visitante</p>
            <Trash>
              <BsTrashFill size="25px" fill="red" />
            </Trash>
          </ShortnedLink>
        </UserLinks>
      </HomeContainer>
    </>
  );
}

export { Home };
