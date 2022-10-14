/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalCss";
import { Login } from "./routes/Login";
import { Signup } from "./routes/Signup";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
