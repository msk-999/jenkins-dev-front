import React from "react";
import layer1 from "../../../img/data/Datacenter-Cockpit.png";
import layer2 from "../../../img/data/managed-service-info.png";
import layer3 from "../../../img/data/05-INTERNAL-MANAGED-SERVICES-02.png";
import layer4 from "../../../img/softdev/SoftwareManagement.png";
import layer5 from "../../../img/softdev/NetworkManagement.png";
import layer6 from "../../../img/softdev/BCP&DR.png";
import layer7 from "../../../img/data/05-INTERNAL-MANAGED-SERVICES-01-1.png";
import layer8 from "../../../img/DevOps-Group.svg";
import CloudPlatform from "../../../components/CloudPlatform";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const ManagedServices = () => {
  return (
    <div>
      <div className="container text-center my-5">
        <div className="row align-items-center py-4">
          <div className="col-md-6">
            <h2>Datacenter Cockpit</h2>
            <h5>Datacenter Managed Services</h5>
          </div>
          <div className="col-md-6">
            <img src={layer1} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="row justify-content-center py-5">
          <div className="col-7 py-3">
            <img src={layer2} alt="" className="img-fluid" />
          </div>
          <h4 className="fw-bold">
            Our Enterprise Datacentre Monitoring Services ensure
          </h4>
          <p>
            24 x 7 high availability, scalability and SLA adherence of
            on-premises and cloud services by
          </p>
          <div className="col-8 my-4">
            <img src={layer3} alt="" className="img-fluid" />
          </div>
          <CloudPlatform />
        </div>

        <div className="row">
          <div className="h3 fw-bold">MS Practice at Skeletos at a glance</div>
          <div className="row align-items-center py-4">
            <div className="col-md-6">
              <div className="row justify-content-center">
                <div className="col-8">
                  <img src={layer4} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h5 className="fw-bold">Software Management</h5>
              <h6>
                Skeletos undertakes software management with a client specific
                approach by identifying the key areas of operations, creating
                and maintaining SOPs for the same to carry out the IT
                operations. Thus ensuring efficient and smooth BAU for our
                clients
              </h6>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h5 className="fw-bold">Network Management</h5>
              <h6>
                Skeletos corroborates the quality of network services for the
                most critical applications with the use of right tools such as
                Software-Defined Wide Area Network (SD-WAN) and Bandwidth
                Aggregation tools to substantially boost network rates,
                effectively route the traffic from one point to the other.
                <br />
                <br />
                Also provides multi carrier environment to seamlessly optimize
                internet bandwidth management in collaboration with major
                operators in India to serve consistent and hi speed internet
                connections within agreed SLAs
              </h6>
            </div>
            <div className="col-md-6">
              <div className="row justify-content-center">
                <div className="col">
                  <img src={layer5} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center py-4">
            <div className="col-md-6">
              <div className="row">
                <div className="col-9">
                  <img src={layer6} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h5 className="fw-bold">BCP and DR Management</h5>
              <h6>
                Skeletos ensures BUSINESS CONTINUITY through the right Backup
                and DR solutions that are best suited for the nature of your
                business.
              </h6>
            </div>
          </div>
          <div className="row pb-4">
            <div className="col">
              <img src={layer7} alt="" className="img-fluid" />
            </div>
            <h6>
              With advanced technologies mushrooming, the enterprise should
              continuously update their systems to reduce their vulnerabilities,
              re-evaluate DR strategies and upgrade them to ensure data and
              applications are responsive, available and safe at all times.
              <br />
              Skeletos works as your long-term partner in building agile DR
              systems, and proactively resolving issues so that they don’t shoot
              up into disasters.
            </h6>
          </div>

          <div className="row py-4">
            <div className="col">
              <h3 className="fw-bold">Offline Backup / DR Technologies</h3>
              <h6>
                Hardware Storage – Blu-ray | DLT & LTO tape drives | External
                hard drives
                <br />
                Network Storage – NAS Box | SAN set-up
              </h6>
            </div>
          </div>

          <div className="row py-4">
            <div className="col-12">
              <h3 className="fw-bold">Cloud backup / DR Strategies</h3>
              <h6>
                Quick, highly secure and cost-efficient as you only have to pay
                for the volume of storage used, post-covid, enterprises are
                switching to cloud technologies for their entire IT eco-system.
              </h6>
            </div>
            <div className="col py-5">
              <div className="row gy-3">
                <div className="col mx-2 border rounded pt-2">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    style={{ color: "red" }}
                    size="2xl"
                  />
                  <p>Low Maintenance</p>
                </div>
                <div className="col mx-2 border rounded pt-2">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "red" }}
                    size="2xl"
                  />
                  <p>Mulit-tier security</p>
                </div>
                <div className="col mx-2 border rounded pt-2">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    style={{ color: "red" }}
                    size="2xl"
                  />
                  <p>Product Reliability</p>
                </div>
                <div className="col mx-2 border rounded pt-2">
                  <FontAwesomeIcon icon={faRotate} style={{ color: "red" }} size="2xl" />
                  <p>Scalability</p>
                </div>
                <div className="col mx-2 border rounded pt-2">
                  <FontAwesomeIcon icon={faRocket} style={{ color: "red" }} size="2xl"/>
                  <p>Space Optimization</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <h5 className="fw-bold">Implementation & Monitoring</h5>
              <p>
                We conduct a backup-up restoration test to ensure the entire
                process runs smoothly. Our army of experienced engineers
                continuously monitor the backup process and also ensure
                data-integrity as per the schedule.{" "}
              </p>
              <br />
              <br />
              <h5 className="fw-bold">Vigilance & Pattern Identification</h5>
              <p>
                Skeletos engineers proactively envisage any future
                vulnerabilities and apply strategies to pre-emptively safe-guard
                the systems. With us, you are always ensured of network, systems
                and data availability with highest uptime.
              </p>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <h2 className="pt-5 fw-bold">Skeletos Crisis-Agnostic Approach</h2>
            <div className="col-10 py-5">
              <img src={layer8} alt="" className="img-fluid" />
            </div>
            <p>
              With advanced technologies mushrooming, the enterprise should
              continuously update their systems to reduce their vulnerabilities,
              re-evaluate DR strategies and upgrade them to ensure data and
              applications are responsive, available and safe at all times.{" "}
            </p>
            <br />
            <p>
              Skeletos works as your long-term partner in building agile DR
              systems, and proactively resolving issues so that they don’t shoot
              up into disasters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedServices;
