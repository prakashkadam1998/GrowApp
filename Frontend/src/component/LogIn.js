import React, { useState, useEffect } from 'react'
import './../App.css'
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import BrandNavbar from './BrandNavbar';

export default function LogIn() {
  const navigate = useNavigate();
  const intialValues = { email: "", password: ""};
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);

      Axios.post("http://localhost:4500/users/login", {
        email: formValues.email,
        password: formValues.password,
      }).then((response) => {
        console.log("in response of LogIn");
        console.log(response.data.data);
        console.log(response.data.status);
            localStorage.setItem("user", JSON.stringify(response.data.data));
            localStorage.setItem("name",(response.data.data.completeName));
            localStorage.setItem("email",(response.data.data.email));
            localStorage.setItem("id",(response.data.data._id));
          
        if (response.data.status === "success") {
          alert("Login Successfull");
          console.log(response.data.data + "in login response");
          navigate('/home');
          window.location.reload();
        } else {
          alert(response.data.data);
          navigate('/');
        }
      });
    }

  }, [formErrors]);

  const validate = (values) => {
    console.log(values);
    const errors = {};
    const emailregx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    
    if (!values.email) {
      errors.email = "Please enter your email."
    }
    else if (!emailregx.test(values.email))
      errors.email = "This is not a valid email format.";

    if (!values.password) {
      errors.password = "Please enter password."
    }
    else if (!strongRegex.test(values.password))
      errors.password = "Passwords must be atleast 8 characters long,contain atleast 1 smallcap letter,largecap letter,special characters and number.";

    return errors;
  }


  return (

    <div>
      <BrandNavbar></BrandNavbar>
      <div class="card  m-auto mt-5" style={{ width: "22rem" }}>
        <form className='p-4' onSubmit={handleRegister}>
          <h4 class="card-title">Sign In</h4>

          <div id="emailHelp" class=" pb-4 text-bold ">Stay updated on your professional world</div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" name='email' value={formValues.email} onChange={handleChange} placeholder="name@example.com"></input>
            <label for="floatingInput">Email address</label>

            <p style={{ color: 'red' }}>{formErrors.email}</p>
          </div>
          <div class="form-floating mb-4">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name='password' value={formValues.password} onChange={handleChange}></input>
            <label for="floatingPassword">Password</label>
            <p style={{ color: 'red' }}>{formErrors.password}</p>
          </div>
          
          <button type="submit" class="btn btn-primary mb-3" >Submit</button>
        <div className=''><span>New User?</span>&nbsp;&nbsp;<a href='/signup'> Sign Up</a></div>
        </form>

      </div>

      <footer><div class="ps-4 mt-5"><span class="" style={{ color: "#787677" }}>Copyright © 2023 Grow LookedIn [P] Ltd.   All Rights Reserved</span></div></footer>
    </div>

  )
}
