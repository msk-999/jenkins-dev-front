import React from "react";
import career from "../img/careers.png";
import JobRoles from "../components/JobRoles";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div>
      <Container className="my-5">
        <div className="row text-center align-items-center">
          <div className="col-sm-6">
            <h1>Careers</h1>
          </div>
          <div className="col-sm-6">
            <img src={career} alt="my-career" className="img-fluid" />
          </div>
        </div>

        <Row className="py-5">
          <Row className="d-flex justify-content-center">
            <Col xs={12} md={4}>
              <Card className="mb-3 shadow p-2 text-center">
                <JobRoles
                  title="Dot Net Developer"
                  expericence="Experience: 4+ years"
                  jobtype="Job Type: Full Time"
                  location="Job Location: Pune"
                />
                <div className="col">
                  <Link to="/dot-net-developer">
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded"
                    >
                      Apply here <FaArrowCircleRight className="ms-1" />
                    </button>
                  </Link>
                </div>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="mb-3 shadow p-2 text-center">
                <JobRoles
                  title="Cloud Architecture"
                  expericence="Experience: Any experience"
                  jobtype="Job Type: Full Time"
                  location="Job Location: Pune"
                />
                <div className="col">
                  <Link to="/cloud-architecture">
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded"
                    >
                      Apply here <FaArrowCircleRight className="ms-1" />
                    </button>
                  </Link>
                </div>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="mb-3 shadow p-2 text-center">
                <JobRoles
                  title="Scrum Master"
                  expericence="Experience: 6+ years"
                  jobtype="Job Type: Full Time"
                  location="Job Location: Pune"
                />
                <div className="col">
                  <Link to="/scrum-master">
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded"
                    >
                      Apply here <FaArrowCircleRight className="ms-1" />
                    </button>
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center">
            <Col xs={12} md={4}>
              <Card className="mb-3 shadow p-2 text-center">
                <JobRoles
                  title="Python & REST APIs"
                  expericence="Experience: 6-9 years"
                  jobtype="Job Type: Full Time"
                  location="Job Location: Pune"
                />
                <div className="col">
                  <Link to="/python">
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded"
                    >
                      Apply here <FaArrowCircleRight className="ms-1" />
                    </button>
                  </Link>
                </div>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="mb-3 shadow p-2 text-center">
                <JobRoles
                  title="Network Engineer"
                  expericence="Experience: 5+ years"
                  jobtype="Job Type: Full Time"
                  location="Job Location: Pune"
                />
                <div className="col">
                  <Link to="/network-engineer">
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded"
                    >
                      Apply here <FaArrowCircleRight className="ms-1" />
                    </button>
                  </Link>
                </div>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="mb-3 shadow p-2 text-center">
                <JobRoles
                  title="Service Desk Manager"
                  expericence="Experience: Any experience"
                  jobtype="Job Type: Full Time"
                  location="Job Location: Pune"
                />
                <div className="col">
                  <Link to="/service-desk-manager">
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded"
                    >
                      Apply here <FaArrowCircleRight className="ms-1" />
                    </button>
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center">
            <Col xs={12} md={4}>
              <Card className="mb-3 shadow p-2 text-center">
                <JobRoles
                  title="Sales & Marketing Executive"
                  expericence="Experience: 5+ years"
                  jobtype="Job Type: Full Time"
                  location="Job Location: Pune"
                />
                <div className="col">
                  <Link to="/sales-marketing">
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded"
                    >
                      Apply here <FaArrowCircleRight className="ms-1" />
                    </button>
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Careers;
