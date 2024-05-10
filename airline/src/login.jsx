import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginForm = (e) => {
    e.preventDefault();
    const logData = {
      email: email,
      password: password,
    };

    fetch("http://localhost:5001/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logData),
    })
      .then((res) => res.json())
      .then((logRes) => {
        console.log("login",logRes);
        if (logRes !== "invalid") {
          localStorage.setItem("logRes", JSON.stringify(logRes));

          setTimeout(() => {
            navigate("/user");
            window.location.reload();
          }, 1000);
        } else {
          console.log("not Valid");
        }
        console.log(localStorage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={loginForm} className="form-control regform">
          <h2>Login </h2>
          Email
          <input
            type="text"
            name="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          Password
          <input
            type="text"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="btn btn-primary">submit</button>
          Cant login:<a href="/register">Signup</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
