import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import layer1 from "../../../img/softdev/Software-Development.png";
import layer2 from "../../../img/softdev/Technologies-we-serve.png";
import { TabTitle } from "../../../utils/GeneralFunctions";

const Software = () => {
  TabTitle("Software Development | Skeletos");
  return (
    <div>
      <div className="container my-5">
        <div className="row py-4 align-items-center">
          <div className="col-md-6">
            <h2>Software Development</h2>
            <h6>Driving Busniness</h6>
          </div>
          <div className="col-md-6">
            <img src={layer1} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="row text-center py-4">
          <div className="col">
            <h2>Client oriented engagement models</h2>
            <h5>
              Skeletos is your buddy in full stack application Software
              development, may it be web-based, or mobile, native or across
              platforms. We can also be counted on for your existing product
              maintenance and support.
            </h5>
            <p>
              Skeletos’ techno-functional expertise in varied tools and
              technologies ascertains the cost effective, robust, scalable
              software services.
            </p>
          </div>
        </div>

        <div className="row gy-2 text-center">
          <div className="col mx-2 border rounded pt-2">
            <FontAwesomeIcon icon={faFingerprint} size="2xl" />
            <p>ERP, CRM, HRMS</p>
          </div>
          <div className="col mx-2 border rounded pt-2">
            <FontAwesomeIcon icon={faHandshakeAngle} size="2xl" />
            <p>Lead Management Solutions</p>
          </div>
          <div className="col mx-2 border rounded pt-2">
            <FontAwesomeIcon icon={faChartLine} size="2xl" />
            <p>Business Process Automation</p>
          </div>
          <div className="col mx-2 border rounded pt-2">
            <FontAwesomeIcon icon={faRotate} size="2xl"/>
            <p>Enterprise Integration</p>
          </div>
        </div>

        <div className="row text-center py-4">
          <h2 className="pb-4">Technologies we serve</h2>
          <div className="col py-3">
            <img
              src={layer2}
              alt="technologies-We-serve"
              className="img-fluid"
            />
            <p>Software Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
