import React from "react";
import layer1 from "../../../img/devops/DevOps-1.png";
import layer2 from "../../../img/devops/DevOps-2.png";
import layer3 from "../../../img/DevOps-Group.svg";
import layer4 from "../../../img/devops/Skeletos-provides-end-to-end-DevOps-solutions.png";
import layer5 from "../../../img/devops/04-INTERNAL-DevOps-06-1-768x286.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faBezierCurve } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faUsersGear } from "@fortawesome/free-solid-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";

const devops = () => {
  return (
    <div>
      <div className="container text-center my-5">
        <div className="row align-items-center py-4">
          <div className="col-md-6 text-start">
            <h2 className="fw-bold">DevOps</h2>
            <h5>Synergystically Building Sustainable Enterprises</h5>
          </div>
          <div className="col-md-6">
            <img src={layer1} alt="" />
          </div>
        </div>

        <div className="row">
          <h5 className="fw-normal py-4">
            Fulfill Gap between Development and Operations with DevOps. DevOps
            is a combination of Development and Operations that promotes better
            communication and Operations between these two departments.
            Companies can achieve expertise in Customer Services. Stronger
            economies are built on a framework of Greater Customer Experience,
            Top-Notch Quality, Enterprises’ Agility Quotient, Crises Agnostic
            Business Model and Collaborative Innovation
          </h5>
          <p>
            DevOps is a concept that allows enterprises to create an ecosystem
            where teams across departments work in tandem so that product
            ownership is spread evenly within the enterprise. DevOps not only
            boost sales but also improve the Productivity of the Organisation
          </p>
          <div className="col">
            <div className="row my-3">
              <row className="col">
                <img src={layer2} alt="" className="img-fluid"/>
              </row>
            </div>
          </div>
          <p className="py-4">
            It works on the philosophy that the operations team can review the
            development work early on and provide critical feedback for the
            development team to work on, so as to avoid failures towards the
            end. In turn, the development team can better understand the actual
            issues before building the final product, Due to better
            communication between teams unnecessary conflict can be avoided and
            Time will be saved
          </p>
        </div>

        <div className="row my-4">
          <h3 className="fw-bold text-secondary">
            Build Stronger Enterprise with Skeletos DevOps Framework
          </h3>
          <div className="col">
            <div className="row justify-content-center py-5">
              <div className="col-10">
                <img src={layer3} alt="devops" className="img-fluid" />
              </div>
            </div>
          </div>
          <h5 className="fw-normal py-3">
            DevOps is a mindset that’s based on Continuous Integration,
            Continuous Delivery, and is represented with an infinity symbol
            denoting that innovation is a journey and not a destination.
          </h5>
        </div>

        <div className="row my-4">
          <h3 className="fw-bold text-secondary">CI/CD</h3>
          <div className="col">
            <h4>Skeletos provides end-to-end DevOps solutions.</h4>
            <div className="row justify-content-center">
              <div className="co-10">
                <img src={layer4} alt="" className="py-3 img-fluid" />
              </div>
            </div>
          </div>
          <h5 className="py-3 fw-normal">
            This includes providing unbiased consultation on the right platforms
            and tools that cater to various processes under CI/CD.
          </h5>
        </div>

        <div className="row my-4">
          <h3 className="fw-bold text-secondary">Tool Chain</h3>
          <p className="py-3">
            Right tools aren’t enough. Our experts undertake configuration
            management, automated continuous integration and deployment services
            that help you generate builds and deploy them quickly on the test
            and then the production server.
          </p>
          <div className="col">
            <div className="row justify-content-center">
              <div className="col">
                <img src={layer5} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <p className="py-3">
            SKELETOS DevOps administrators & engineers work closely with your
            team to ensure efficient and smooth integration and deployment, by
            employing a suite of tools to monitor and improve the deployment
            process.
          </p>
        </div>

        <h2 className="text-secondary py-3">Skeletos DevOps Features & Benefits</h2>
        <div className="row justify-content-center border shadow rounded p-2">
          <div className="col-md-6">
            <div className="row text-start">
              <div className="col-1">
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  size="xl"
                  className="text-success"
                />
              </div>
              <div className="col-9">
                <p>Proven Expertise with successful DevOps Projects</p>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-1">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="text-info"
                  size="xl"
                />
              </div>
              <div className="col-9">
                <p>Better Accountability & Total Transparency</p>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-1">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "#a88bbc" }}
                  size="xl"
                />
              </div>
              <div className="col-9">
                <p>Proactive Issue Resolution</p>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-1">
                <FontAwesomeIcon
                  icon={faChartColumn}
                  className="text-warning"
                  size="xl"
                />
              </div>
              <div className="col-9">
                <p>Root-cause Analysis rather than quick-fix approach</p>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-1">
                <FontAwesomeIcon
                  icon={faFileContract}
                  className="text-danger"
                  size="xl"
                />
              </div>
              <div className="col-9">
                <p>Weekly, Monthly, Quarterly and Annual reports</p>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-1">
                <FontAwesomeIcon
                  icon={faDesktop}
                  size="xl"
                  className="text-success"
                />
              </div>
              <div className="col-9">
                <p>Annual 24x7 Monitoring with 100% SLA fulfilment</p>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-1">
                <FontAwesomeIcon
                  icon={faWaveSquare}
                  className="text-info"
                  size="xl"
                />
              </div>
              <div className="col-9">
                <p>Automation for quick, consistent and reliable builds</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row text-start">
              <div className="col-1">
                <FontAwesomeIcon
                  icon={faBug}
                  style={{ color: "#a88bbc" }}
                  size="xl"
                />
              </div>
              <div className="col-9">
                <p>Early bug detection</p>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-1">
                <FontAwesomeIcon
                  icon={faBezierCurve}
                  size="xl"
                  className="text-warning"
                />
              </div>
              <div className="col">
                <p>Continuous deployment for better TTM</p>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-1">
                <FontAwesomeIcon
                  icon={faChartLine}
                  size="xl"
                  className="text-danger"
                />
              </div>
              <div className="col-9">
                <p>Improved Scalability</p>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-1">
                <FontAwesomeIcon
                  icon={faUserAstronaut}
                  className="text-success"
                  size="xl"
                />
              </div>
              <div className="col-9">
                <p>Response Automation</p>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-1">
                <FontAwesomeIcon
                  icon={faForward}
                  size="xl"
                  className="text-info"
                />
              </div>
              <div className="col-9">
                <p>Faster Product Maturity</p>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-1">
                <FontAwesomeIcon
                  icon={faUsersGear}
                  size="xl"
                  style={{ color: "#a88bbc" }}
                />
              </div>
              <div className="col-9">
                <p>Seamless upgradation for end-users</p>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-1">
                <FontAwesomeIcon
                  icon={faPiggyBank}
                  className="text-warning"
                  size="xl"
                />
              </div>
              <div className="col-9">
                <p>Substantially reduces cost and time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default devops;
