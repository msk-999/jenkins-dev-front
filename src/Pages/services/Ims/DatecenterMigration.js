import React from "react";
import layer1 from "../../../img/datacenter/NEED-OF-THE-HOUR.png";
import layer2 from "../../../img/datacenter/Skeletos-On-Premise-Data-Centres-1-768x542.png";
import layer3 from "../../../img/datacenter/Fire-Fighters-1-768x654.png";
import layer4 from "../../../img/datacenter/03-INTERNAL-DATACENTRE-MIGRATION-01-768x197.png";
import layer5 from "../../../img/SaaS.png";
import layer6 from "../../../img/IaaS.png";
import layer7 from "../../../img/PaaS.png";
import CloudPlatform from "../../../components/CloudPlatform";
import { TabTitle } from "../../../utils/GeneralFunctions";

const DatecenterMigration = () => {
  TabTitle("Datacenter Migration | Skeletos");
  return (
    <div>
      <div className="container text-center my-5">
        <div className="row py-4 align-items-center">
          <div className="col-md-6">
            <h3 className="fw-bold">Datacenter Migration</h3>
            <h4>Cloud & Hybrid</h4>
            <h4>Need of the hour…</h4>
          </div>
          <div className="col-md-6">
            <img src={layer1} alt="hero-section" className="img-fluid" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3 className="fw-bold">The Pentagon is ready to serve</h3>
            <h5 className="fw-normal">
              Enterprises are taking a smart move about digital transformation
              by adopting the newer business models to stay ahead of their game.
            </h5>
            <br />
            <h5 className="fw-normal">
              Skeletos helps in raising your IT infrastructure to the next level
              by orchestrating software, hardware, cloud and a variety of other
              cutting-edge technologies.
            </h5>
          </div>
        </div>

        <div className="row my-4">
          <h3 className="fw-bold">Skeletos | On Premise Data Centers</h3>
          <div className="col">
            <div className="row py-4 align-items-center">
              <div className="col-md-6">
                <div className="row justify-content-center">
                  <div className="col-10">
                    <img src={layer2} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-start">
                <h6>
                  Skeletos can help you streamline your IT operations and make
                  it compliant to the best of the industry standards and
                  practices. We address your security concerns with a well
                  planned actions
                </h6>{" "}
                <hr />
                <h6>
                  Use of advanced tools such as firewalls, antivirus &
                  anti-malware, data loss prevention, email security, intrusion
                  prevention systems, VPN, web security, network access control
                  systems, and more for deployment and configuration Build
                  business continuity in your framework through our automated
                  backup and disaster recovery systems. Optimize system and
                  network performance by employing our Performance Optimizer
                  Service.
                </h6>
                <hr />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 text-start">
                <h5 className="fw-bold">Cloud Data Centers</h5>
                <h6 className="py-2">
                  When deploying your entire IT infrastructure to a Cloud,
                  there’s naturally an inherent fear associated with it. “Is my
                  data safe?” Cloud technology being a super-advanced platform,
                  not only keeps your applications and data safe, but also
                  improves the network throughput, establishes reliability,
                  scalability, provides extremely powerful backup and disaster
                  recovery methodologies, and a range of features that
                  significantly enhances your overall performance. Having said
                  that, since the cloud is external to the office premise, it is
                  exposed to vulnerabilities
                </h6>
                <h6>
                  A right IMS partner will always implement sophisticated tools
                  to proactively mitigate risks, protect critical information,
                  and safeguard your companies interests. Our strong
                  collaborations, enable access to time-tested technologies that
                  significantly reduce these threats.
                </h6>
              </div>
              <div className="col-md-6">
                <div className="row justify-content-center">
                  <div className="col-10">
                    <img src={layer3} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-12 py-3">
                <h4 className="fw-bold">
                  Skeletos supports a wide range of cloud platforms, and adopts
                  a phased approach to cloudify your IT infrastructure:
                </h4>
                <div className="row">
                  <div className="col py-3">
                    <img src={layer4} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h5>
                  This covers Data Center Migrations, Data Center
                  Consolidations, Migration of Servers, Software, Network and
                  other hardware, Databases, Storage Systems, Back-up systems,
                  Email, etc. and Hardware and OS upgrades.
                </h5>
                <h5 className="py-4 fw-bold">Three types of Cloud Models</h5>
                <div className="row gy-3">
                  <div className="col mx-2 border rounded shadow">
                    <div className="row justify-content-center">
                      <div className="col-6">
                        <img src={layer5} alt="" className="img-fluid" />
                      </div>
                    </div>
                    <h6 className="fw-bold">SaaS</h6>
                    <p>
                      Software as a Service, which allows users to access
                      software services through web
                    </p>
                  </div>
                  <div className="col mx-2 border rounded shadow">
                    <div className="row justify-content-center">
                      <div className="col-6">
                        <img src={layer6} alt="" className="img-fluid" />
                      </div>
                    </div>
                    <h6 className="fw-bold">IaaS</h6>
                    <p>
                      Infrastructure as a Service, which allows users to access
                      infrastructure on a per usage pay basis
                    </p>
                  </div>
                  <div className="col mx-2 border rounded shadow">
                    <div className="row justify-content-center">
                      <div className="col-6">
                        <img src={layer7} alt="" className="img-fluid" />
                      </div>
                    </div>
                    <h6 className="fw-bold">PaaS</h6>
                    <p>
                      Platform as a Service, which allows users to access third
                      party hardware and software over the internet
                    </p>
                  </div>
                </div>
                <h5 className="py-5">
                  With several years of experience working on various platforms
                  we provide unbiased consultancy for the right cloud platform
                  that suits your current and future needs.
                </h5>
                <CloudPlatform />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatecenterMigration;
