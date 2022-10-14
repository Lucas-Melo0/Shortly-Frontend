import { axiosBase } from "./axiosBase";

const signup = (data) => axiosBase.post("/signup", data);

export { signup };
