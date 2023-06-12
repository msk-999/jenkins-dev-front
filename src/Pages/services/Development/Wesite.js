import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import layer1 from "../../../img/softdev/Website-Development-Management.png";
import layer2 from "../../../img/softdev/WPthemeDev.jpg";
import layer3 from "../../../img/softdev/MobileFirst.png";
import layer4 from "../../../img/softdev/content1.png";
import layer5 from "../../../img/softdev/webInfluence.png";
import { TabTitle } from "../../../utils/GeneralFunctions";
import { Link } from "react-router-dom";

const Wesite = () => {
  TabTitle("Website Development | Skeletos");
  return (
    <div>
      <div className="container my-5">
        <div className="row py-4 align-items-center">
          <div className="col-md-7">
            <h2>Website Development & Management</h2>
            <h6 className="py-2">From web presence to web influence</h6>
            <div className="row mt-3">
              <div className="col">
                <Link to="/contact">
                  <button type="button" className="btn btn-outline-dark">
                    Tell us about your project
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-5 p-5">
            <img src={layer1} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <h2 className="py-2">Customized Solutions</h2>
            <h5>
              Creating an engaging website, and influencing your prospects to
              connect with you, requires a deep understanding of your domain and
              your target group behaviour. We adopt a top-down strategic
              approach ensuring sustainability, and bottom-up implementations to
              help you achieve your business objectives.
            </h5>
            <div className="row gy-3 my-5">
              <div className="col mx-3 border rounded py-2">
                <FontAwesomeIcon icon={faShieldHalved} size="2xl" />
                <h6 className="py-2">Web Consulting</h6>
                <p>
                  Skeletos helps you take the right decision for your digital
                  footprint, with an unbiased approach
                </p>
              </div>
              <div className="col mx-3 border rounded pt-2">
                <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
                <h6 className="py-2">Website Development</h6>
                <p>
                  Leverage the power of web for collaborations and to better
                  serve your customers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <h2>Skeletos Offerings</h2>
          <div className="col">
            <h5>
              Customized Solutions with strategic approach & industry-specific
              design strategy for Website Development
            </h5>
            <div className="row gy-2 py-4">
              <div className="col mx-2 border rounded">
                <div className="row">
                  <div className="col-6">
                    <img src={layer2} alt="" className="img-fluid" />
                  </div>
                </div>
                <h6>WordPress Themes Development</h6>
                <p>
                  Custom website development of themes that suit your industry,
                  attract your clients and ensure effective reach. Our
                  web-engineers and artists help you with the right
                  functionality and user experience features – Pagebuilders:
                  Elementor, Oxygen, Beaver – that makes your website stand-out
                  among the competition herd.
                </p>
              </div>
              <div className="col mx-2 border rounded">
                <div className="row">
                  <div className="col-6">
                    <img src={layer3} alt="" className="img-fluid" />
                  </div>
                </div>
                <h6>Mobile-First Methodology</h6>
                <p>
                  Today’s decision-makers carry their work in their pocket.
                  Mobile phones have revolutionized the way people take
                  decisions. To deliver consistently rich web experience across
                  multiple devices and platforms we deploy Mobile-First
                  approach,
                </p>
              </div>
              <div className="col mx-2 border">
                <div className="row">
                  <div className="col-4 p-4">
                    <img src={layer4} alt="" className="img-fluid" />
                  </div>
                </div>
                <h6>Content Management</h6>
                <p>
                  An easy-to-use dashboard for updating content regularly. We
                  help you maintain your website with the latest content,
                  plug-ins, features, and functionality
                </p>
              </div>
            </div>
            <div className="row gy-3 my-4">
              <div className="col mx-2 border">
                <div className="row">
                  <div className="col-6">
                    <img src={layer5} alt="" className="img-fluid" />
                  </div>
                </div>
                <h6>Web Influence</h6>
                <p>
                  In-page as well as Technical SEO that empowers your website to
                  be reachable to your customers quickly. Highly relevant blogs
                  with Title, Comments, H1, H2, H3, Table of Content,
                  Categorization, Star Ratings, Price, Image/video, Title
                  mapping on Share, Keywords, Density, Meta Description, ensures
                  effective influence.
                </p>
              </div>
              <div className="col mx-2 border">
                <div className="row">
                  <div className="col-6">
                    <img src={layer5} alt="" className="img-fluid" />
                  </div>
                </div>
                <h6>Website Optimization</h6>
                <p>
                  Smart analytics to monitor and improve website reach.
                  Evaluating customer behaviour on the website, identifying
                  scope for improvement, implementing strategies to enhance
                  customer engagement and service, functional enhancements to
                  help them find their matter-of-interest within least possible
                  clicks.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col text-center">
            <Link to="/contact">
              <button type="button" className="btn btn-outline-dark">
                Tell us about your project{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wesite;
