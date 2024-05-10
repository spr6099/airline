import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import "./App.css";
import { useState } from "react";

function App() {
  
  const [authenticated, setAuthenticated] = useState(
    JSON.parse(localStorage.getItem("logRes"))
  );

  return (
    <BrowserRouter>
      {authenticated == null ? (
        <>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </>
      ) : authenticated.userStatus == 0 ? (
        //admin
        <></>
      ) : authenticated.userStatus == 1 ? (
        <>//user</>
      ) : (
        //company
        <></>
      )}
    </BrowserRouter>
  );
}

export default App;
