import React from "react";
import layer1 from "../../../img/devops/DevOps-1.png";
import layer2 from "../../../img/devops/DevOps-2.png";
import layer3 from "../../../img/DevOps-Group.svg";
import layer4 from "../../../img/devops/Skeletos-provides-end-to-end-DevOps-solutions.png";
import layer5 from "../../../img/devops/04-INTERNAL-DevOps-06-1-768x286.png";

const devops = () => {
  return (
    <div>
      <div className="container text-center my-5">
        <div className="row align-items-center py-4">
          <div className="col-md-6">
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
                <img src={layer2} alt="" />
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
          <h3 className="fw-bold">
            Build Stronger Enterprise with Skeletos DevOps Framework
          </h3>
          <div className="col">
            <div className="row justify-content-center">
              <div className="col py-5">
                <img src={layer3} alt="devops" />
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
          <h3 className="fw-bold">CI/CD</h3>
          <div className="col">
            <h4>Skeletos provides end-to-end DevOps solutions.</h4>
            <img src={layer4} alt="" className="py-3"/>
          </div>
          <h5 className="py-3 fw-normal">
            This includes providing unbiased consultation on the right platforms
            and tools that cater to various processes under CI/CD.
          </h5>
        </div>

        <div className="row my-4">
          <h3 className="fw-bold">Tool Chain</h3>
          <p className="py-3">
            Right tools aren’t enough. Our experts undertake configuration
            management, automated continuous integration and deployment services
            that help you generate builds and deploy them quickly on the test
            and then the production server.
          </p>
          <div className="col">
            <img src={layer5} alt="" />
          </div>
          <p className="py-3">
            SKELETOS DevOps administrators & engineers work closely with your
            team to ensure efficient and smooth integration and deployment, by
            employing a suite of tools to monitor and improve the deployment
            process.
          </p>
        </div>

        <div className="row">
          <h2>Skeletos DevOps Features & Benefits</h2>
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default devops;
