import { axiosBase } from "./axiosBase";

const signup = (data) => axiosBase.post("/signup", data);
const signin = (data) => axiosBase.post("/signin", data);
const getInfo = () => axiosBase.get("/ranking");
const LinkShortner = (data, token) =>
  axiosBase.post("/urls/shorten", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
const getUserData = (token) =>
  axiosBase.get("/users/me", { headers: { Authorization: `Bearer ${token}` } });

export { signup, signin, getInfo, LinkShortner, getUserData };
