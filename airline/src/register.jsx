import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [phno, setPhno] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registration = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      dob: dob,
      address: address,
      email: email,
      phno: phno,
      password: password,
      userStatus: 1,
    };
    
    fetch("http://localhost:5001/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <form onSubmit={registration} className="form-group regform">
        <h2>Signup</h2>
        Name:
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        DOB:
        <input
          type="date"
          name="dob"
          className="form-control"
          onChange={(e) => setDob(e.target.value)}
        />
        <br />
        Address:
        <textarea
          type="address"
          name="address"
          placeholder="Enter your address"
          className="form-control"
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <br />
        Phone No:
        <input
          type="text"
          name="phno"
          className="form-control"
          onChange={(e) => setPhno(e.target.value)}
        />
        <br />
        Email:
        <input
          type="text"
          name="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        Password:
        <input
          type="text"
          name="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
    // <div>
    //   <h2>Signup Form</h2>
    //   <form onSubmit="">
    //     <div>
    //       <label htmlFor="firstName">First Name:</label>
    //       <input
    //         type="text"
    //         id="firstName"
    //         name="firstName"

    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="lastName">Last Name:</label>
    //       <input
    //         type="text"
    //         id="lastName"
    //         name="lastName"
    //         // value={formData.lastName}
    //         // onChange={handleChange}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         // value={formData.email}
    //         // onChange={handleChange}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         type="password"
    //         id="password"
    //         name="password"
    //         // value={formData.password}
    //         // onChange={handleChange}
    //       />
    //     </div>
    //     <button type="submit">Signup</button>
    //   </form>
    // </div>
  );
}

export default Register;
