import { axiosBase } from "./axiosBase";

const BASE_URL = "http://localhost:4000";
const signup = (data) => axiosBase.post("/signup", data);
const signin = (data) => axiosBase.post("/signin", data);
const getInfo = () => axiosBase.get("/ranking");
const LinkShortner = (data, token) =>
  axiosBase.post("/urls/shorten", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
const getUserData = (token) =>
  axiosBase.get("/users/me", { headers: { Authorization: `Bearer ${token}` } });

const deleteLink = (id, token) =>
  axiosBase.delete(`/urls/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

const goToUrl = (shortUrl) => `${BASE_URL}/urls/open/${shortUrl}`;
export {
  signup,
  signin,
  getInfo,
  LinkShortner,
  getUserData,
  deleteLink,
  goToUrl,
};
