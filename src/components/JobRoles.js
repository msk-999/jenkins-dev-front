import React from "react";
import { Card } from "react-bootstrap";
import { FaRegClock } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";

function JobRoles(props) {
  return (
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        <FaRegClock className="me-2" />
        {props.expericence}
      </Card.Text>
      <Card.Text>
        <GiSuitcase className="me-2" />
        {props.jobtype}
      </Card.Text>
      <Card.Text>
        <FaMapMarkerAlt className="me-2" />
        {props.location}
      </Card.Text>
    </Card.Body>
  );
}

export default JobRoles;
