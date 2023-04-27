import React from "react";
import mainLogo from "../img/Skeletos_icon.svg";
import layer1 from "../img/whyHire.svg";
import layer25 from "../img/ContactUs.svg";
import layer26 from "../img/Discuss.svg";
import layer27 from "../img/Evaluate.svg";
import layer28 from "../img/KickStart.svg";

const AboutUs = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col text-center pt-5 pb-3">
            <h2 className="pb-4">About Us</h2>
            <img src={mainLogo} alt="mainLogo" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h5>
              OUR MISSION IS TO HELP BUSINESSES TO GROW WITH MODERN TECHNOLOGY
              AND SIMPLIFY COMPLICATED WORK WITH OUR CUSTOMIZED SOFTWARE.
            </h5>
            <p>
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
            <p>
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
        <div className="row">
          <div className="col text-center">
            <h3>Why You Should Hire Us?</h3>
            <img src={layer1} alt="whyHire" className="img-fluid" />
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
            <div className="col">
              <div className="row justify-content-around text-center gy-2">
                <div className="col mx-2 border round">
                  <img src={layer25} alt="" />
                  <h6>Contact us</h6>
                  <p>
                    Fill up the details and Schedule call from our experts.
                    Don't worry your data is safe with us
                  </p>
                </div>
                <div className="col mx-2 border round">
                  <img src={layer26} alt="" />
                  <h6>Discuss with Experts</h6>
                  <p>
                    Discuss about project with our experts to understand and Get
                    Best IT solution to enhance your project
                  </p>
                </div>
                <div className="col mx-2 border round">
                  <img src={layer27} alt="" />
                  <h6>Evaluate Cost</h6>
                  <p>
                    Based on solutions will share project proposal with budget
                    and Time Regulation
                  </p>
                </div>
                <div className="col mx-2 border round">
                  <img src={layer28} alt="" />
                  <h6>Kick-off project</h6>
                  <p>
                    Once we sing project. Experts will come together and Kick of
                    projects with their expertise and discipline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
