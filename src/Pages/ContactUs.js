import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import layer21 from "../img/profile_data.svg";
import layer22 from "../img/Location.svg";
import layer23 from "../img/Call.svg";
import layer24 from "../img/Mail.svg";
import { Form, Button } from "react-bootstrap";
import { API_ENDPOINT } from "../config";
import { TabTitle } from "../utils/GeneralFunctions";
import GetStarted from "../components/GetStarted";

const ContactUs = () => {
  TabTitle("Contact us | Skeletos");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [requirements, setRequirements] = useState("");
  const [requirementsError, setRequirementsError] = useState("");
  const [message, setMessage] = useState("");

  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const contactPhoneRegex = /^\+?\d{10,14}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !requirements) {
      alert("Please fill out all the fields");
      return;
    }

    // Show a loading state
    toast.info("Submitting data...");

    fetch(API_ENDPOINT + "/users/create", {
      method: "POST",
      body: JSON.stringify({ name, phone, email, requirements }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Update the toast notification with the final result
        toast.success(
          "Thanks for your interest, we have received your details"
        );
      })
      .catch((error) => {
        console.error(error);
        // Update the toast notification with an error message
        toast.error("An error occurred while submitting the data");
      });

    // Reset the form fields
    setName("");
    setPhone("");
    setEmail("");
    setRequirements("");
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

  const handleRequirementsChange = (e) => {
    setRequirements(e.target.value);
    if (!e.target.value) {
      setRequirementsError("Details are required to connect");
    } else {
      setRequirementsError("");
    }
  };

  return (
    <div>
      {message && <p>{message}</p>}
      <div className="container my-5">
        <div className="row d-flex justify-content-center ">
          <div className="card shadow col-9 m-5">
            <div className="row align-items-center p-2">
              <div className="col-md-6">
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
                      type="number"
                      className="no-spinner"
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

                  <Form.Group className="mb-2" controlId="formRequirements">
                    <Form.Label>Tell us your Requirements</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your requirements"
                      required
                      value={requirements}
                      onChange={handleRequirementsChange}
                      isInvalid={!!requirementsError}
                    />
                    <Form.Control.Feedback type="invalid">
                      {requirementsError}
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

              <div className="col-md-6">
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

        <GetStarted />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
