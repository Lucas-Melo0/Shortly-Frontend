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
import {
  deleteLink,
  getUserData,
  goToUrl,
  LinkShortner,
} from "../API/axiosRequests";

function Home({ userData }) {
  const [query, setQuery] = useState(null);
  const [userLinks, setUserLinks] = useState([]);
  const [run, setRun] = useState(false);
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

  useEffect(() => {
    getUserData(token).then(
      (response) => {
        setUserLinks(response.data.shortenedUrls);
        setRun(!run);
      },
      (error) => console.log(error)
    );
  }, [token, query, run]);

  const handleForm = (e) => {
    e.preventDefault();
    const { url } = e.target.elements;
    setQuery({ url: url.value });
    url.value = null;
    getUserData(token).then(
      (response) => {
        setUserLinks(response.data.shortenedUrls);
      },
      (error) => console.log(error)
    );
  };
  const linkDeletion = (id) => {
    deleteLink(id, token).then(
      (response) =>
        getUserData(token).then(
          (response) => {
            setUserLinks(response.data.shortenedUrls);
          },
          (error) => console.log(error)
        ),
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <>
      <Header isLoggedIn />
      <HomeContainer>
        <ShortnerContainer>
          <LinkForm onSubmit={handleForm}>
            <input id="url" placeholder="Links que cabem no bolso" required />
            <Button type="submit" Name="Encurtar Link" />
          </LinkForm>
        </ShortnerContainer>
        <UserLinks>
          {userLinks.map((value) => (
            <ShortnedLink>
              <p>{value.url}</p>
              <a href={goToUrl(value.shortUrl)}>
                <p>{value.shortUrl}</p>
              </a>
              <p> Quantidade de visitante: {value.visitCount}</p>
              <Trash onClick={() => linkDeletion(value.id)}>
                <BsTrashFill size="25px" fill="red" />
              </Trash>
            </ShortnedLink>
          ))}
        </UserLinks>
      </HomeContainer>
    </>
  );
}

export { Home };
