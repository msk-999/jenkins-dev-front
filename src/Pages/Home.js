import React from "react";
import heroImg from "../img/hero.jpg";
import layer1 from "../img/IP Protection Img.svg";
import layer2 from "../img/Rectangle 235.svg";
import layer3 from "../img/Business Community.svg";
import layer4 from "../img/Technology Transformation.svg";
import layer5 from "../img/Accessability.svg";
import layer6 from "../img/ImsRectangle 237.svg";
import layer7 from "../img/ImsRectangle 239.svg";
import layer8 from "../img/ImsRectangle 238.svg";
import layer9 from "../img/DevOps-Group.svg";
import layer10 from "../img/Web Enterprise.svg";
import layer11 from "../img/Mobile Enterprise.svg";
import layer12 from "../img/Rectangle 228_brand.svg";
import layer13 from "../img/brand1Rectangle 229.svg";
import layer14 from "../img/brand2Rectangle 230.svg";
import layer15 from "../img/brand3Rectangle 231.svg";
import layer16 from "../img/Rectangle 236StaffAug.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing-page my-3">
      <section className="hero-section">
        <div className="container my-5">
          <div className="row pt-5">
            <div className="col-md-6 hero-content d-flex flex-column justify-content-center">
              <h2 className="pb-3">
                A Framework of Digital Solutions for you, All under One Cloud at
                Skeletos
              </h2>
              <p className="py-3">
                Infrastructure Management, DevOps, Enterprise Applications, Web,
                Mobile & Talent
              </p>
              <div className="row">
                <div className="col">
                  <Link to="/contact">
                    <button type="button" className="btn btn-outline-dark">
                      Let's get started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" col-md-6 hero-img text-end ">
              <img src={heroImg} alt="Hero section" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container my-5">
          <div className="row text-center justify-content-around pb-5">
            <h2 className="text-primary pt-5">Total Technology Solutions</h2>
            <h5 className="py-5 px-3">
              Skeletos provides customized IT solutions and services, by
              leveraging its expertise in the field of Cloud technology, DevOps,
              Datacenter & infrastructure management, Enterprise software
              development, mobile app development, and digital sustainability to
              help you establish leadership in your industry
            </h5>
            <div className="row gap-2 justify-content-center">
              <div className="col-sm-2 border rounded">
                <img
                  src={layer1}
                  alt="Corporate IP Protection"
                  className="img-fluid"
                />
                <h6>Corporate IP Protection</h6>
              </div>
              <div className="col-sm-2 border rounded">
                <img
                  src={layer2}
                  alt="Crisis-Agnostic Enterprise"
                  className="img-fluid"
                />
                <h6>Crisis-Agnostic Enterprise</h6>
              </div>
              <div className="col-sm-2 border rounded">
                <img
                  src={layer3}
                  alt="Business Continuity & Sustainability"
                  className="img-fluid"
                />
                <h6>Business Continuity & Sustainability</h6>
              </div>
              <div className="col-sm-2 border rounded">
                <img
                  src={layer4}
                  alt="Technology Transformation"
                  className="img-fluid"
                />
                <h6>Technology Transformation</h6>
              </div>
              <div className="col-sm-2 border rounded border rounded">
                <img
                  src={layer5}
                  alt="Accessibility, Reliability, Scalability "
                  className="img-fluid"
                />
                <h6>Accessibility, Reliability, Scalability </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="IMS-section">
        <div className="container my-5">
          <div className="row text-center pb-4">
            <h2 className="text-secondary pb-4">
              Infrastructure Management & Cloud
            </h2>
            <h6 className="p-2">
              Experience highest ROI-quotient with an ensemble of IMS expertise!
              With Skeletos, you experience the transparency of an in-house IT
              team and expertise of a result-oriented team.
            </h6>
            <p>
              It’s a crime to reduce the importance of in-house IT team to that
              of a firefighter. If your core business is not technology, your
              existing IT department can significantly help you achieve
              company’s strategic objectives, quickly.
            </p>
            <div className="row justify-content-center pt-5 gap-5">
              <div className="col-sm-3 p-3 card border-0 shadow p-3 mb-5 bg-white rounded">
                <img src={layer6} alt="ims1" className="img-fluid" />
                <h6>Hassle-free management of IT infrastructure</h6>
                <div className="card-text pb-2">
                  Total handholding throughout your IT transformation journey
                </div>
                <div className="card-text">
                  Cost-effective and professional managed services
                </div>
              </div>
              <div className="col-sm-3 p-3 card border-0 shadow p-3 mb-5 bg-white rounded">
                <img src={layer7} alt="ims2" className="img-fluid" />
                <h6>Consultative approach with customized solutions</h6>
                <p>
                  Total handholding throughout your IT transformation journey
                </p>
                <p>Cost-effective and professional managed services</p>
              </div>
              <div className="col-sm-3 p-3 card border-0 shadow p-3 mb-5 bg-white rounded">
                <img src={layer8} alt="ims3" className="img-fluid" />
                <h6 className="pt-2">
                  Boost your IT ROI and reduce technical debt
                </h6>
                <p className="card-text">True value for your IT Investment</p>
                <div className="card-text"></div>
                Futuristic solutions to cater to IoT, DevOps, AI, ML, Mobility
                Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="DevOps-section">
        <div className="container my-5">
          <div className="row text-center pb-4">
            <h2 className="text-secondary pb-4">Skeletos DevOps</h2>
            <div className="col text-center">
              <h6>
                Collaborative innovation & consistent delivery. DevOps is a
                mindset that's based on Continuous Integration, Continuous
                Delivery, and is represented with an infinity symbol denoting
                that innovation is a journey and not a destination.
              </h6>
              <p>
                Our Skeletos Pentagon Framework for DevOps helps you achieve the
                five-point agenda of the modern enterprises.
              </p>
              <div className="row justify-content-center">
                <div className="col-10 p-4">
                  <img src={layer9} alt="devops" className="img-fluid" />
                </div>
              </div>
              <p>
                Skeletos DevOps administrators & engineers work closely with
                your team to ensure an efficient and smooth integration and
                deployment, by employing a suite of tools to monitor and improve
                the deployment process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="Enterprise-Section">
        <div className="container my-5">
          <div className="row text-center pb-4">
            <h2 className="text-secondary pb-4">
              Enterprise Software Development
            </h2>
            <div className="col">
              <h6>
                Skeletos understands that technology is just a tool. People buy
                tools, but do not necessarily re-engineer the business cycle.
                Our team of techno-functional engineers help you build
                customized enterprise software such as ERP, CRM, HRMS, lead
                management solutions, business process automation, mobile
                applications, and enterprise integration platform.
              </h6>
              <div className="row">
                <div className="col-6">
                  <img
                    src={layer10}
                    alt="Web-encterprise"
                    className="img-fluid"
                  />
                  <p>Web-based Enterprise Applications</p>
                </div>
                <div className="col-6">
                  <img
                    src={layer11}
                    alt="Mobile-enterprise"
                    className="img-fluid"
                  />
                  <p>Enterprise Mobile Applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Branding-web Solutions">
        <div className="container my-5">
          <div className="row text-center pb-4">
            <h2 className="text-secondary pb-4">Branding & Web Solutions</h2>
            <div className="col">
              <img src={layer12} alt="brandingImg" className="img-fluid" />
              <h6>
                From Web Presence to Web Influence. Skeletos provides a perfect
                platform to create market influence through its end-to-end
                branding and web solutions. We adopt a top-down strategic
                approach ensuring sustainability, and bottom-up implementations
                to help you achieve your business objectives..
              </h6>
              <h5>
                Customized Solutions with strategic approach & industry-specific
                design strategy​
              </h5>
              <div className="row py-4">
                <div className="col-4">
                  <img
                    src={layer13}
                    alt="WebConsulting"
                    className="img-fluid"
                  />
                  <p>Web Consulting</p>
                </div>
                <div className="col-4">
                  <img
                    src={layer14}
                    alt="Website Development"
                    className="img-fluid"
                  />
                  <p>Website Development</p>
                </div>
                <div className="col-4">
                  <img
                    src={layer15}
                    alt="Ecommerce Platform Optimization"
                    className="img-fluid"
                  />
                  <p>Ecommerce Platform Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Staff Augmentation">
        <div className="container my-5">
          <div className="row text-center">
            <h2 className="text-secondary pb-4">Skeletos Staff Augmentation</h2>
            <div className="col">
              <h6>
                Regain Business Momentum. Skeletos helps you hire certified and
                trained IT professionals so you become quickly effective.
                Reliability, domain-expertise, performance and strong ethics are
                the innate qualities they all possess. We collaboratively work
                with you to ensure their effectiveness.
              </h6>
              <img
                src={layer16}
                alt="Staff Augmentation"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
