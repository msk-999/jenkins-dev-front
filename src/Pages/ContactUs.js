import React, { useState } from "react";
import layer21 from "../img/profile_data.svg";
import layer22 from "../img/Location.svg";
import layer23 from "../img/Call.svg";
import layer24 from "../img/Mail.svg";
import layer25 from "../img/ContactUs.svg";
import layer26 from "../img/Discuss.svg";
import layer27 from "../img/Evaluate.svg";
import layer28 from "../img/KickStart.svg";
import { Form, Button } from "react-bootstrap";
import { API_ENDPOINT } from "../config";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const contactPhoneRegex = /^\+?\d{10,14}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      alert("Please fill out all the fields");
      return;
    }
    fetch(API_ENDPOINT + "/users/create", {
      method: "POST",
      body: JSON.stringify({ name, phone, email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Do something with the response data
      })
      .catch((error) => {
        console.error(error);
      });

    // Reset the form fields
    setName("");
    setPhone("");
    setEmail("");
    // handle form submission
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError("Name is required");
    } else if (!nameRegex.test(e.target.value)) {
      setNameError("Please enter a valid name");
    } else {
      setNameError("");
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (!e.target.value) {
      setPhoneError("Contact Number is required");
    } else if (!contactPhoneRegex.test(e.target.value)) {
      setPhoneError("Please enter a valid contact number");
    } else {
      setPhoneError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(e.target.value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="card col-9 m-5">
            <div className="row align-items-center p-2">
              <div className="col-6">
                <h2 className="pb-3">Get in Touch</h2>
                <Form onSubmit={handleSubmit} className="col-10">
                  <Form.Group className="mb-2" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={name}
                      onChange={handleNameChange}
                      isInvalid={!!nameError}
                    />
                    <Form.Control.Feedback type="invalid">
                      {nameError}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="contactNo">
                    <Form.Label>Contact Phone:</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      isInvalid={!!phoneError}
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      {phoneError}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                      isInvalid={!!emailError}
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      {emailError}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="outline-dark"
                    className="btn btn-outline-dark px-3"
                  >
                    Submit
                  </Button>
                </Form>
              </div>

              <div className="col-6">
                <div className="row">
                  <div className="col text-center">
                    <img
                      src={layer21}
                      alt="profileData"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col d-flex justify-content-start pt-3">
                    <div className="col-2">
                      <img src={layer22} alt="location" />
                    </div>
                    <div className="col-10">
                      <p>
                        Skeletos IT Services LLP Level 02, Shakuntal Complex,
                        Law College Road, Near Pastry Corner, Nal Stop,
                        Erandwane, Pune, Maharashtra 411004
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row pb-2">
                  <div className="col d-flex justify-content-center align-items-center">
                    <div className="col-2">
                      <img src={layer23} alt="call" />
                    </div>
                    <div className="col-10">
                      <p>+91 1234567890</p>
                    </div>
                  </div>
                </div>
                <div className="row pb-2">
                  <div className="col d-flex justify-content-center align-items-center">
                    <div className="col-2">
                      <img src={layer24} alt="mail" />
                    </div>
                    <div className="col-10">
                      <p>info@skeletos.io</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col text-center py-5">
            <h2 className="pb-3">GET STARTED TODAY WITH US</h2>
            <div className="col">
              <div className="row justify-content-around text-center gy-2">
                <div className="col mx-2 border round">
                  <img src={layer25} alt="" />
                  <h6>Contact us</h6>
                  <p>
                    Fill up the details and Schedule call from our experts.
                    Don't worry your data is safe with us
                  </p>
                </div>
                <div className="col mx-2 border round">
                  <img src={layer26} alt="" />
                  <h6>Discuss with Experts</h6>
                  <p>
                    Discuss about project with our experts to understand and Get
                    Best IT solution to enhance your project
                  </p>
                </div>
                <div className="col mx-2 border round">
                  <img src={layer27} alt="" />
                  <h6>Evaluate Cost</h6>
                  <p>
                    Based on solutions will share project proposal with budget
                    and Time Regulation
                  </p>
                </div>
                <div className="col mx-2 border round">
                  <img src={layer28} alt="" />
                  <h6>Kick-off project</h6>
                  <p>
                    Once we sing project. Experts will come together and Kick of
                    projects with their expertise and discipline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
