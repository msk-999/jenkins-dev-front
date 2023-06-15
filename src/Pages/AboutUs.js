import React, { useState } from "react";
import mainLogo from "../img/Skeletos_icon.svg";
import layer1 from "../img/whyHire.svg";
import layer25 from "../img/ContactUs.svg";
import layer26 from "../img/Discuss.svg";
import layer27 from "../img/Evaluate.svg";
import layer28 from "../img/KickStart.svg";
import { TabTitle } from "../utils/GeneralFunctions";
import { Link } from "react-router-dom";
import Hiring from "../components/Hiring.json";
import Lottie from "lottie-react";

const AboutUs = () => {
  TabTitle("About Us | Skeletos");

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageClasses = `rotate-effect img-fluid mr-3 ${
    isHovered ? "rotate-effect" : ""
  }`;
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col text-center pt-5 pb-3">
            <h2 className="pb-4">About Us</h2>
            <Link to="/">
              <img
                src={mainLogo}
                alt="Rotating Image"
                className={imageClasses}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col text-center p-3">
            <h5 className="fw-bold py-3">
              OUR MISSION IS TO HELP BUSINESSES TO GROW WITH MODERN TECHNOLOGY
              AND SIMPLIFY COMPLICATED WORK WITH OUR CUSTOMIZED SOFTWARE.
            </h5>
            <p className="py-3">
              Build all the digital solutions under one cloud at Skeletos in the
              minimum time and best price. Skeletos helps you to transform your
              business with strategic and innovative customized software. This
              customized software will help you to reduce operational costs and
              create a unique brand experience for you. Our mission is to help
              businesses to grow with modern technology and simplify complicated
              work with our software. We are providing these latest tools and
              techniques in E-commerce, Healthcare, Banking, Hospitality,
              Manufacturing and Agriculture.
            </p>
            <p className="py-3">
              Skeletos was founded in October 2017. It is one of the fastest,
              secure and reliable companies in Pune. Mr. Pramod Waikar is Chief
              Executive Officer and Founder of the company and has 21 years of
              experience in the IT field. Skeletos helps to build business ideas
              into reality with new techniques. Skeletos is helping businesses
              to build infrastructure management, DevOps, Enterprises
              applications, Web, mobile, and talent It is having two offices.
              One is located in Deccan, Pune and the Second one is in Middletown
              USA.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col text-center">
            <h3>Why You Should Hire Us?</h3>
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <div
                className="d-flex align-items-center"
                style={{ width: "50%" }}
              >
                <Lottie loop={true} animationData={Hiring} />
              </div>
            </div>
            <p>
              IT outsourcing will help you to build your Digital infrastructure
              with their specialized Team experts. When you redistribute then
              you don't have to invest money in Manpower, Cloud infrastructure
              and equipment. It is very flexible when it comes to taking on new
              projects. When you work with IT experts then you also redeem the
              amount which is an unnecessary spend of Software. According to
              Entrepreneur India, most companies prefer IT Outsourcing to build
              an in-house IT team. You can meet the demand of the market with
              advanced technology by investing less.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col text-center py-5">
            <h2 className="pb-3">GET STARTED TODAY WITH US</h2>
            <div className="row justify-content-around text-center">
              <div className="col-md-3 mb-4 p-3">
                <Link to="/contact" className="text-decoration-none text-dark">
                  <div className="shadow border rounded zoom-on-hover">
                    <img src={layer25} alt="" className=" img-fluid" />
                    <h6 className="py-2">Contact us</h6>
                    <p className="px-2">
                      Fill up the details and schedule a call from our experts.
                      Don't worry, your data is safe with us.
                    </p>{" "}
                    <br />
                  </div>
                </Link>
              </div>
              <div className="col-md-3 mb-4 p-3">
                <Link to="/contact" className="text-decoration-none text-dark">
                  <div className="shadow border rounded zoom-on-hover">
                    <img src={layer26} alt="" className=" img-fluid" />
                    <h6 className="py-2">Discuss with Experts</h6>
                    <p className="px-2">
                      Discuss your project with our experts to understand and
                      get the best IT solutions to enhance your project.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 mb-4 p-3">
                <Link to="/contact" className="text-decoration-none text-dark">
                  <div className="shadow border rounded zoom-on-hover">
                    <img src={layer27} alt="" className=" img-fluid" />
                    <h6 className="py-2">Evaluate Cost</h6>
                    <p>
                      Based on the solutions, we will share a project proposal
                      with budget and time regulations.
                    </p>{" "}
                    <br />
                  </div>
                </Link>
              </div>
              <div className="col-md-3 mb-4 p-3">
                <Link to="/contact" className="text-decoration-none text-dark">
                  <div className="shadow border rounded zoom-on-hover">
                    <img src={layer28} alt="" className=" img-fluid" />
                    <h6 className="py-2">Kick-off project</h6>
                    <p className="px-2">
                      Once we sign the project, our experts will come together
                      and kick off the project with their expertise and
                      discipline.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
