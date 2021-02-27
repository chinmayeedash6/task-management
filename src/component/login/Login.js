import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault(event);

    const dataValue = {
      email: email,
      password: password,
    };

    fetch("http://task-mgmt-api.herokuapp.com/api/employee/login", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataValue),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Login  Details", response);
        localStorage.setItem("User Info", JSON.stringify(response));
        if (response.status === "success") {
          history.push("/dashboard");
        } else {
          console.log("Error Response");
        }
      })

      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="card">
        <form
          onSubmit={handleSubmit}
          className="formStyle"
          style={{ width: "300px", margin: "0 auto" }}
        >
          <h3 style={{ textAlign: "center", margin: "10px" }}>Log in</h3>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label
                className="custom-control-label"
                htmlFor="customCheck1"
                onChange={(e) => setRememberMe(e.target.value)}
              >
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Sign in
          </button>
          <p className="forgot-password text-right">
            Don't Have an Account<a href="/register"> Sign Up</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
