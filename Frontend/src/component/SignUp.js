import React, { useState, useEffect } from 'react'
import './../App.css'
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import BrandNavbar from './BrandNavbar';

export default function SignUp() {
  const navigate = useNavigate();
  const intialValues = { complete_name: "", contact: "", email: "", password: "" };
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

      Axios.post("http://localhost:4500/users/signup", {
        email: formValues.email,
        password: formValues.password,
        contact: formValues.contact,
        completeName: formValues.complete_name
      }).then((response) => {
        console.log("in response of signup");
        console.log(response.data.data);

        if (response.data.data === "success") {
          alert("SignUp Successfull");
          console.log(response.data.data + "in signup response");
          navigate('/');
          window.location.reload();
        } else {
          alert(response.data.data);
        }
      });
    }

  }, [formErrors]);

  const validate = (values) => {
    console.log(values);
    const errors = {};
    const emailregx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneregx = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if (!values.complete_name) {
      errors.complete_name = "Please enter your full name."
    }

    if (!values.contact) {
      errors.contact = "Please enter your contact number."
    }
    else if (!phoneregx.test(values.contact))
      errors.contact = "This is not a valid contact number.";

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
          <h4 class="card-title">Sign Up</h4>

          <div id="emailHelp" class=" pb-4 text-bold ">Stay updated on your professional world</div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" name='email' value={formValues.email} onChange={handleChange} placeholder="name@example.com"></input>
            <label for="floatingInput">Email address</label>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            <p style={{ color: 'red' }}>{formErrors.email}</p>
          </div>
          <div class="form-floating mb-4">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name='password' value={formValues.password} onChange={handleChange}></input>
            <label for="floatingPassword">Password</label>
            <p style={{ color: 'red' }}>{formErrors.password}</p>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingName" name='complete_name' placeholder="Name" value={formValues.complete_name} onChange={handleChange}></input>
            <label for="floatingInput">Name</label>
            <p style={{ color: 'red' }}>{formErrors.complete_name}</p>
          </div>
          <div class="form-floating mb-4">
            <input type='number' class="form-control" id="floatingPhone" name='contact' placeholder="Phone" value={formValues.contact} onChange={handleChange}></input>
            <label for="floatingPassword">Phone</label>
            <p style={{ color: 'red' }}>{formErrors.contact}</p>
          </div>
          <button type="submit " class="btn btn-primary" >Submit</button>
          <div className='mt-2'><span>Already User?</span>&nbsp;&nbsp;<a href='/'> Sign In</a></div>
        </form>
      </div>

      <footer><div class="ps-4 mt-5"><span style={{ color: "#787677" }}>Copyright © 2023 Grow LookedIn [P] Ltd.   All Rights Reserved</span></div></footer>
    </div>

  )
}
