import { axiosBase } from "./axiosBase";

const signup = (data) => axiosBase.post("/signup", data);
const signin = (data) => axiosBase.post("/signin", data);
const getInfo = () => axiosBase.get("/ranking");
export { signup, signin, getInfo };
