import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reg.css";

function Register() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    if (result === true) {
      console.log(inputData);
      axios
        .post("http://localhost:8000/user/register", inputData)
        .then((res) => {
          alert("Registration Successful!");
          navigate("/login");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };

  const validateValues = (inputData) => {
    if (inputData.name.length === 0) {
      alert("Enter the name ");
      return false;
    } else if (inputData.email.length === 0) {
      alert("Enter Valid email ");
      return false;
    } else if (inputData.username.length === 0) {
      alert("Enter Valid username ");
      return false;
    } else if (inputData.password.length === 0) {
      alert("Enter Valid password ");
      return false;
    } else {
      return true;
    }
  };

  return (
    <div
      id="register"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h1>REGISTER</h1>
          <div>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              onChange={(e) => setInputData({ ...inputData, username: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={(e) => setInputData({ ...inputData, password: e.target.value })}
            />
          </div>

          <br />

          <button className="btn btn-info ">Submit</button>
          <button
            className="btn btn-secondary ml-2"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;