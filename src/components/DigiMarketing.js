import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DigiMarketing = () => {
  return (
    <div>
      <div className="card">
        <div className="row align-items-center my-5">
          <div className="col text-start ps-4">
            <h4>Digital Marketing</h4>
            <h5 className="fw-normal">
              Digital footprint that your customers follow, literally
            </h5>
          </div>
          <div className="col text-center">
            <Link to="/digital-marketing">
              <button type="button" className="btn btn-outline-dark">
                Read more{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigiMarketing;
