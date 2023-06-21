import React from "react";
import heroImg from "../img/hero.jpg";
import layer1 from "../img/IP Protection Img.png";
import layer2 from "../img/Rectangle 235.png";
import layer3 from "../img/Business Community.png";
import layer4 from "../img/Technology Transformation.png";
import layer5 from "../img/Accessability.png";
import layer6 from "../img/Rectangle 237.png";
import layer7 from "../img/Rectangle 239.png";
import layer8 from "../img/Rectangle 238.png";
import layer9 from "../img/DevOps-Group.svg";
import layer10 from "../img/Web Enterprise.png";
import layer11 from "../img/Mobile Enterprise.png";
import layer12 from "../img/Rectangle 228.png";
import layer13 from "../img/Rectangle 229.png";
import layer15 from "../img/Rectangle 231.png";
import layer14 from "../img/Rectangle 230.png";
import layer16 from "../img/Rectangle 236.png";
import { Link } from "react-router-dom";
import { TabTitle } from "../utils/GeneralFunctions";
import orbit from "../img/home/Orbit.png";
import ellipse1 from "../img/home/Ellipse1.png";
import ellipse2 from "../img/home/Ellipse2.png";
import ellipse3 from "../img/home/Ellipse3.png";
import ellipse4 from "../img/home/Ellipse4.png";
import ellipse5 from "../img/home/Ellipse5.png";
import ellipse6 from "../img/home/Ellipse6.png";
import ellipse7 from "../img/home/Ellipse7.png";
import "../css/Homepage.css";

const Home = () => {
  TabTitle("Digital Solutions IT Services | Skeletos");
  return (
    <div className="landing-page my-3 justify-content-center">
      <section className="hero-section">
        <div className="container my-5">
          <div className="row vh-100">
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
            <div className=" col-md-6 hero-section text-end mt-5">
              <div class="orbit">
                <div class="center-image">
                  <img src={orbit} alt="" className="img-fluid" />
                </div>
                <div class="orbit-images">
                  <div class="orbit-image">
                    <Link to="/datacenter-migration">
                      <img
                        src={ellipse1}
                        alt=""
                        className="img-fluid zoom-on-hover"
                      />
                    </Link>
                  </div>
                  <div class="orbit-image">
                    <Link to="devops">
                      <img
                        src={ellipse2}
                        alt=""
                        className="img-fluid zoom-on-hover"
                      />
                    </Link>
                  </div>
                  <div class="orbit-image">
                    <Link to="/ecommerce-development">
                      <img
                        src={ellipse3}
                        alt=""
                        className="img-fluid zoom-on-hover"
                      />
                    </Link>
                  </div>
                  <div class="orbit-image">
                    <Link to="/cloud-solutions">
                      <img
                        src={ellipse4}
                        alt=""
                        className="img-fluid zoom-on-hover"
                      />
                    </Link>
                  </div>
                  <div class="orbit-image">
                    <Link to="/software-development">
                      <img
                        src={ellipse5}
                        alt=""
                        className="img-fluid zoom-on-hover"
                      />
                    </Link>
                  </div>
                  <div class="orbit-image">
                    <Link to="/website-development">
                      <img
                        src={ellipse6}
                        alt=""
                        className="img-fluid zoom-on-hover"
                      />
                    </Link>
                  </div>
                  <div class="orbit-image">
                    <Link to="/managed-services">
                      <img
                        src={ellipse7}
                        alt=""
                        className="img-fluid zoom-on-hover"
                      />
                    </Link>
                  </div>
                </div>
              </div>
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
            <div className="row gap-2 justify-content-center my-5">
              <div className="col-md-2 shadow border rounded zoom-on-hover">
                <img
                  src={layer1}
                  alt="Corporate IP Protection"
                  className="img-fluid"
                />
                <h6>Corporate IP Protection</h6>
              </div>
              <div className="col-md-2 shadow border rounded zoom-on-hover">
                <img
                  src={layer2}
                  alt="Crisis-Agnostic Enterprise"
                  className="img-fluid"
                />
                <h6>Crisis-Agnostic Enterprise</h6>
              </div>
              <div className="col-md-2 shadow border rounded zoom-on-hover">
                <img
                  src={layer3}
                  alt="Business Continuity & Sustainability"
                  className="img-fluid"
                />
                <h6>Business Continuity & Sustainability</h6>
              </div>
              <div className="col-md-2 shadow border rounded zoom-on-hover">
                <img
                  src={layer4}
                  alt="Technology Transformation"
                  className="img-fluid"
                />
                <h6>Technology Transformation</h6>
              </div>
              <div className="col-md-2 shadow border rounded zoom-on-hover">
                <img
                  src={layer5}
                  alt="Accessibility, Reliability, Scalability"
                  className="img-fluid"
                />
                <h6>Accessibility, Reliability, Scalability</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="IMS-section">
        <div className="container my-5">
          <div className="row text-center pb-4 justify-content-around">
            <h2 className="text-secondary pb-5">
              Infrastructure Management & Cloud
            </h2>
            <h6 className="p-2">
              Experience highest ROI-quotient with an ensemble of IMS expertise!
              With Skeletos, you experience the transparency of an in-house IT
              team and expertise of a result-oriented team.
            </h6>
            <p className="py-3">
              It’s a crime to reduce the importance of in-house IT team to that
              of a firefighter. If your core business is not technology, your
              existing IT department can significantly help you achieve
              company’s strategic objectives, quickly.
            </p>
            <div className="row justify-content-center pt-1 gap-5">
              <div className="col-md-3 border shadow p-3 mb-5 bg-white rounded">
                <img
                  src={layer6}
                  alt="ims1"
                  className="img-fluid mb-2 zoom-on-hover"
                />
                <h6 className="fw-bold">
                  Hassle-free management of IT infrastructure
                </h6>
                <p className="pb-2">
                  Total handholding throughout your IT transformation journey
                </p>
                <p>Cost-effective and professional managed services</p>
              </div>
              <div className="col-md-3 border shadow p-3 mb-5 bg-white rounded">
                <img
                  src={layer7}
                  alt="ims2"
                  className="img-fluid mb-2 zoom-on-hover"
                />
                <h6 className="fw-bold">
                  Consultative approach with customized solutions
                </h6>
                <p>
                  Total handholding throughout your IT transformation journey
                </p>
                <p>Cost-effective and professional managed services</p>
              </div>
              <div className="col-md-3 border shadow p-3 mb-5 bg-white rounded">
                <img
                  src={layer8}
                  alt="ims3"
                  className="img-fluid mb-2 zoom-on-hover"
                />
                <h6 className="fw-bold">
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
            <h2 className="text-secondary pb-5">Skeletos DevOps</h2>
            <div className="col text-center">
              <h6>
                Collaborative innovation & consistent delivery. DevOps is a
                mindset that's based on Continuous Integration, Continuous
                Delivery, and is represented with an infinity symbol denoting
                that innovation is a journey and not a destination.
              </h6>
              <p className="py-2">
                Our Skeletos Pentagon Framework for DevOps helps you achieve the
                five-point agenda of the modern enterprises.
              </p>
              <div className="row justify-content-center">
                <div className="col-10 p-4">
                  <Link to="/devops">
                    <img
                      src={layer9}
                      alt="devops"
                      className="img-fluid zoom-on-hover"
                    />
                  </Link>
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
          <div className="row text-center pb-5">
            <h2 className="text-secondary py-5">
              Enterprise Software Development
            </h2>
            <div className="col">
              <h6 className="py-3">
                Skeletos understands that technology is just a tool. People buy
                tools, but do not necessarily re-engineer the business cycle.
                Our team of techno-functional engineers help you build
                customized enterprise software such as ERP, CRM, HRMS, lead
                management solutions, business process automation, mobile
                applications, and enterprise integration platform.
              </h6>
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={layer10}
                    alt="Web-encterprise"
                    className="img-fluid zoom-on-hover"
                  />
                  <p>Web-based Enterprise Applications</p>
                </div>
                <div className="col-md-6">
                  <img
                    src={layer11}
                    alt="Mobile-enterprise"
                    className="img-fluid zoom-on-hover"
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
            <h2 className="text-secondary pb-5">Branding & Web Solutions</h2>
            <div className="col">
              <img src={layer12} alt="brandingImg" className="img-fluid" />
              <h6 className="py-3">
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
              <div className="row py-5">
                <div className="col-md-4">
                  <Link
                    to="/software-development"
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={layer13}
                      alt="WebConsulting"
                      className="img-fluid zoom-on-hover"
                    />
                    <p>Web Consulting</p>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link
                    to="/website-development"
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={layer14}
                      alt="Website Development"
                      className="img-fluid zoom-on-hover"
                    />
                    <p>Website Development</p>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link
                    to="/ecommerce-development"
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={layer15}
                      alt="Ecommerce Platform Optimization"
                      className="img-fluid zoom-on-hover"
                    />
                    <p>Ecommerce Platform Optimization</p>
                  </Link>
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
