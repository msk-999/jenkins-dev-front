import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { API_ENDPOINT } from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Styles.css"

function Apply() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [documents, setDocuments] = useState(null);
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [documentsError, setDocumentsError] = useState("");
  // const [coverLetterError, setCoverLetterError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !documents) {
    toast.error("Please fill out all the fields");
    return;
  }
    setIsSubmitting(true);
    let formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("coverLetter", coverLetter);
    formData.append("files", documents);
    fetch(API_ENDPOINT + "/job-application", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success("Application submitted successfully");
        setTimeout(() => {
          setIsSubmitting(false);
          setName("");
          setPhone("");
          setEmail("");
          setCoverLetter("");
          setDocuments(null);
          if (fileInputRef.current) {
            fileInputRef.current.value = null;
          }
        }, 1500); // Delay clearing the fields by 1.5 seconds (adjust as needed)
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred while submitting the application");
        setIsSubmitting(false);
      });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (!e.target.validity.valid) {
      setPhoneError("Please enter a valid 10-digit phone number");
    } else {
      setPhoneError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.validity.valid) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleCoverLetterChange = (e) => {
    setCoverLetter(e.target.value);
  };

  const handleDocumentsChange = (e) => {
    setDocuments(e.target.files[0]);
    if (
      e.target.files[0] &&
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(e.target.files[0].type)
    ) {
      setDocumentsError("Please upload a PDF, DOC, or DOCX file");
    } else {
      setDocumentsError("");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row pb-3">
          <div className="col-12 text-center">
            <h6 className="py-2">
              Kindly send your resume at talent@skeletos.io or fill up the
              application form given below.
            </h6>
          </div>

          <div className="col-12 text-center">
            <Link to="/careers">
              <button type="button" className="btn btn-outline-dark">
                Back to Careers
              </button>
            </Link>
          </div>
        </div>

        <div className="card my-4 p-4">
          <Container>
            <div className="row">
              <div className="col-10">
                <Form onSubmit={handleSubmit}>
                  <h1 className="pb-3">Apply for this position</h1>
                  <Form.Group controlId="formName">
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

                  <Form.Group className="mb-3" controlId="contactNo">
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

                  <Form.Group className="mb-3" controlId="email">
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

                  <Form.Group controlId="formCoverLetter">
                    <Form.Label>Cover Letter</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your cover letter"
                      value={coverLetter}
                      onChange={handleCoverLetterChange}
                    />
                    {/* <Form.Control.Feedback type="invalid">
                      {coverLetterError}
                    </Form.Control.Feedback> */}
                  </Form.Group>

                  <Form.Group controlId="formDocuments" className="mb-3">
                    <Form.Label>Upload Documents</Form.Label>
                    <Form.Control
                      ref={fileInputRef} // Attach the ref to the file input field
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleDocumentsChange}
                      isInvalid={!!documentsError}
                    />
                    <Form.Control.Feedback type="invalid">
                      {documentsError}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="outline-dark"
                    className="btn btn-outline-dark px-3"
                    disabled={isSubmitting} // Disable the button while submitting
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </Form>
              </div>
            </div>
          </Container>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Apply;
