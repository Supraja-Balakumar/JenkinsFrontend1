import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/user/login", { username, password })
      .then((res) => {
        if (res.data.success) {
          alert("Login successful!");
          navigate("/");
        } else {
          alert("Invalid username or password");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      id="login"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info ">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;