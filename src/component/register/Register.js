import React, {  useState } from "react";
import { useHistory } from 'react-router-dom';

export default function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const history = useHistory()

  const handleSubmit = (event) => {
        event.preventDefault(event);
    
        const dataValue = {
          fname: fname,
          lname: lname,
          email: email,
          mobile: mobile,
          password: password,
        };
    
        fetch("http://task-mgmt-api.herokuapp.com/api/employee/register", {
          method: "POST",
          headers: {
    
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataValue),
        })
          .then((response) => response.json())
          .then((response) => {
            console.log("All  Details", response);   
            history.push("/");
          })
    
          .catch((error) => console.log(error));
      };

  return (
    <>
    <div className="card">

    <form onSubmit={handleSubmit} style={{ width: "300px", margin: "0 auto" }} >
      <h3 style={{ textAlign: "center", margin: "10px" }} >Register</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

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
        <label>Mobile</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
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

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Register
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="/">log in?</a>
      </p>
    </form>
    </div>
     
    </>
   
  );
}
