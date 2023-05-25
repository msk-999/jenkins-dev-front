import React from "react";
import logo1 from "../img/data/microsoft-azure.jpg";
import logo2 from "../img/data/google-cloud.jpg";
import logo3 from "../img/data/yotta.jpg";
import logo4 from "../img/data/amazon.jpg";
import logo5 from "../img/data/e2e.jpg";

const CloudPlatform = () => {
  return (
    <div>
      <h4 className="fw-bold py-2">Cloud Platforms</h4>
      <div className="card">
        <div className="row gy-4 justify-content-center">
          <div className="col mx-2">
            <img src={logo1} alt="microsoftLogo" className="img-fluid" />
          </div>
          <div className="col mx-2">
            <img src={logo2} alt="GoogleCloud" className="img-fluid" />
          </div>
          <div className="col mx-2">
            <img src={logo3} alt="Yotta" className="img-fluid" />
          </div>
          <div className="col mx-2">
            <img src={logo4} alt="AmazonWebServices" className="img-fluid" />
          </div>
          <div className="col mx-2">
            <img src={logo5} alt="Networks" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudPlatform;
