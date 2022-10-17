/* eslint-disable react/prop-types */
import { BsTrashFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
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

function Home({ userData, setUserData }) {
  const [query, setQuery] = useState(null);
  const [status, setStatus] = useState("idle");
  const [userLinks, setUserLinks] = useState([]);
  const { token } = userData;
  const isLoading = status === "loading";

  useEffect(() => {
    if (query === null) return;
    setStatus("loading");

    LinkShortner(query, token).then(
      () => {
        setStatus("sucess");
        setQuery({ url: null });
      },
      (error) => {
        console.log(error);
      }
    );
  }, [query, token]);

  useEffect(() => {
    getUserData(token).then(
      (response) => {
        setUserLinks(response.data.shortenedUrls);
        setUserData({ ...userData, name: response.data.name });
      },
      (error) => console.log(error)
    );
  }, [token, query, setUserData, userData]);

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
      () =>
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
      <Header userData={userData} isLoggedIn />
      <HomeContainer>
        <ShortnerContainer>
          <LinkForm onSubmit={handleForm}>
            <input id="url" placeholder="Links que cabem no bolso" required />
            <Button
              type="submit"
              Name={
                isLoading ? <Oval color="white" height={40} /> : "Encurtar Link"
              }
            />
          </LinkForm>
        </ShortnerContainer>
        <UserLinks>
          {userLinks.map((value) => (
            <ShortnedLink key={value.id}>
              <p>{value.url}</p>
              <a
                href={goToUrl(value.shortUrl)}
                target="_blank"
                rel="noopener noreferrer"
              >
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
