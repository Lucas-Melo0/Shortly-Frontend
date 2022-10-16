/* eslint-disable react/prop-types */
import { BsTrashFill } from "react-icons/bs";
import { useState, useEffect } from "react";
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
import { LinkShortner } from "../API/axiosRequests";

function Home({ userData }) {
  const [query, setQuery] = useState(null);
  const { token } = userData;

  useEffect(() => {
    if (query === null) return;
    LinkShortner(query, token).then(
      (response) => console.log(response),
      (error) => {
        console.log(error);
      }
    );
  }, [query, token]);

  const handleForm = (e) => {
    e.preventDefault();
    const { url } = e.target.elements;
    setQuery({ url: url.value });
  };

  return (
    <>
      <Header isLoggedIn />
      <HomeContainer>
        <ShortnerContainer>
          <LinkForm onSubmit={handleForm}>
            <input id="url" placeholder="Links que cabem no bolso" />
            <Button type="submit" Name="Encurtar Link" />
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
