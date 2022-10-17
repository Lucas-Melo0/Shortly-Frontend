/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./globalCss";
import { Ranking } from "./routes/Ranking";
import { Login } from "./routes/Login";
import { Signup } from "./routes/Signup";
import { Home } from "./routes/Home";

function App() {
  const [userData, setUserData] = useState({
    token: null,
    loggedIn: false,
    name: null,
  });
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Ranking userData={userData} />} />
        <Route
          path="/home"
          element={<Home userData={userData} setUserData={setUserData} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={<Login userData={userData} setUserData={setUserData} />}
        />
      </Routes>
    </>
  );
}

export default App;
