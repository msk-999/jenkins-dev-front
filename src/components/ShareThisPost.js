import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ShareThisPost = () => {
  return (
    <div>
      <div className="container my-3">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <h5>Share This Post</h5>
          </div>
          {/* <div className="col-md-6">
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#1a4ca2" }} />
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#00acee" }} />
              <FontAwesomeIcon icon={faLinkedIn} style={{ color: "#0a66c2" }} />
              <FontAwesomeIcon icon={faEnvelope} />
            </div> */}
          <div className="col-md-6">
            <div className="row justify-content-center">
              <div className="col-1">
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
              <div className="col-1">
                <a href="https://www.linkedin.com">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
              <div className="col-1">
                <a href="https://twitter.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
              <div className="col-1">
                <a href="mailto:example@example.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareThisPost;
