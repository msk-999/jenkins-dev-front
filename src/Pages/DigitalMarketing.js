import React from "react";
import layer1 from "../img/DigitalMarketing.png";
import layer2 from "../img/DigitalMarketing1.png";
import layer3 from "../img/Upload-Download.png";
import layer4 from "../img/MobileEnterprise.png";
import layer5 from "../img/DesigningServices.png";
import layer6 from "../img/Digital-Marketing-01-768x768.png";
import layer7 from "../img/Digital-Marketing-02-768x581.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import TechStack from "../components/TechStack";
import { TabTitle } from "../utils/GeneralFunctions";

const DigitalMarketing = () => {
  TabTitle("Digital Marketing | Skeletos IT Services");
  return (
    <div>
      <div className="container text-center my-5">
        <div className="row align-items-center py-4">
          <div className="col-md-6">
            <h3 className="fw-bold py-2">Digital Marketing</h3>
            <h6>Digital footprint that your customers follow, literally</h6>
          </div>
          <div className="col-md-6">
            <div className="row justify-content-center">
              <div className="col-10">
                <img src={layer1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4 className="fw-bold">Where's your attention</h4>
            <h5 className="fw-normal">
              Whether we like it or not, people are more dependent on social
              media than social visits. To look at the greener side, you can
              deploy marketing on social media easier than on print media or
              even an office or commercial infrastructure.
            </h5>
            <div className="row gy-3 my-4">
              <div className="col mx-2 border ">
                <FontAwesomeIcon icon={faGoogle} size="2xl" className="py-2" />
                <p>Let’s google it!</p>
              </div>
              <div className="col mx-2 border ">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2xl"
                  className="py-2"
                />
                <p>Did you see that ad on insta?</p>
              </div>
              <div className="col mx-2 border ">
                <FontAwesomeIcon icon={faYoutube} size="2xl" className="py-2" />
                <p>Hey, just visit our youtube channel, here’s the link</p>
              </div>
              <div className="col mx-2 border ">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2xl"
                  className="py-2"
                />
                <p>I found my big customer in the US, on LinkedIn</p>
              </div>
              <div className="col mx-2 border ">
                <FontAwesomeIcon
                  icon={faPinterest}
                  size="2xl"
                  className="py-2"
                />
                <p>Oh, why don’t you promote on Pinterest?</p>
              </div>
              <div className="col mx-2 border ">
                <FontAwesomeIcon icon={faTwitter} size="2xl" className="py-2" />
                <p>Just Tweet It</p>
              </div>
            </div>
            <h5 className="fw-bold">WHAT A CHAOS!</h5>
            <h6 className="fw-normal">
              The current generation doesn’t think so. Right from shopping to
              ordering meals, they are loving it! It’s a matter of establishing
              a strong brand and creating true value to the customer.
            </h6>
            <div className="row align-items-center mb-4">
              <div className="col-md-6">
                <div className="row">
                  <div className="col">
                    <img src={layer3} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-start">
                <h5 className="fw-bold">All Social Isn’t Bad</h5>
                <h6 className="fw-normal py-4">
                  Latest survey conducted by the Content Marketing Institute
                  found that 82% of manufacturing companies used Social Media
                  Marketing and 77% of companies used Email Marketing for
                  successful customer reach-out.
                </h6>
                <h6 className="fw-bold">
                  That’s huge!!! provided you do it in the right way.
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-4">
          <div className="col">
            <h3 className="fw-bold">What's Right in Digital Marketing?</h3>
            <h5 className="fw-normal pb-5">
              Over a decade of experience in this field, we have identified a
              few rights, among a lot of wrongs that are easily available.
            </h5>
          </div>
        </div>

        <div className="row my-4">
          <div className="col">
            <h3 className="fw-bold">
              Skeletos’ Strategic Approach For Digital Marketing
            </h3>
            <h5 className="py-2">
              An organization needs to have a long-term approach, and keep a
              budget for it, regardless of it’s current size. Skeletos helps in
              strategic planning for, domain research, competitor analysis,
              differentiation, story unveiling approach, observing customer
              behaviour and optimization. Thus standing out in the crowd.
            </h5>
          </div>
          <div className="row align-items-center py-4">
            <div className="col-md-6">
              <div className="row justify-content-center">
                <div className="col-8">
                  <img src={layer4} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-md-6 text-start">
              <h5 className="fw-bold">
                Choose Platform/S Where Your Customers Are
              </h5>
              <h6 className="py-4">
                If you are a B2C customer, and your TG is youth, you need to
                choose a platform where they spend most of their time e.g.
                social media platforms like Instagram / Facebook. For a B2B
                customer, a Corporate Client or Vendor or to establish as a
                thought leader , use of social networking sites like LinkedIn,
                which are designed for the business community is recommended.
                With Skeletos choosing the right platform is cinch act, hence
                reaching out to the precise customer base becomes easy.
              </h6>
            </div>
          </div>

          <div className="row align-items-center my-4">
            <div className="col-md-6 text-start">
              <h5 className="fw-bold">
                Not Too Much, But Consistency Is The Key
              </h5>
              <h6 className="py-4">
                Any customer engagement is always a current affair rather than a
                one-time activity. The greatest pitfall in a customer engagement
                is to post the content and forget about it. The key is to
                observe and optimize the performance of the post, thus adding a
                value to the service to achieve a successful customer engagement
                Team Skeletos is always on tip of the toes ensuring the most
                effective use of the content post
              </h6>
            </div>
            <div className="col-md-6">
              <div className="row justify-content-center">
                <div className="col-8">
                  <img src={layer2} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center py-4">
            <div className="col-md-6">
              <div className="row justify-content-center">
                <div className="col">
                  <img src={layer5} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-md-6 text-start">
              <h5 className="fw-bold">
                Organic Growth Is A Cut Above The Rest
              </h5>
              <h6 className="py-4">
                To establish the trust and brand loyalty, recommendations and
                references work better than paid promotions.. Budget generously,
                but spend smartly. Skeletos praxis of lead generation, and brand
                development is utterly organic and thus effective over the paid
                promotions.
              </h6>
            </div>
          </div>

          <div className="row my-3">
            <div className="col">
              <button type="button" className="btn btn-outline-dark">
                Tell us about your project
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col my-4">
            <h3 className="fw-bold">Meeting Specs into Digital Marketing</h3>
            <div className="row align-items-center py-4">
              <div className="col-md-6">
                <div className="row justify-content-center">
                  <div className="col">
                    <img src={layer6} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-start">
                <p>
                  Every platform recommends certain protocol, code-of-conduct
                  and format. One needs to understand the right ways of
                  designing assets so that the platform finds it easier to
                  market your post, rather than disqualify it.
                </p>
                <h6 className="fw-normal py-4">
                  Sounds overwhelming? So do 66% of enterprises according to the
                  Content Marketing Institute Survey; and therefore, they
                  outsource these areas to experts in the field, while focusing
                  on their core business.
                </h6>
                <h5 className="fw-normal">
                  We are marketers more than just designers. We understand the
                  relevance of domain knowledge and its role in creating the
                  right content.
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center my-5">
          <div className="col py-5">
            <img src={layer7} alt="" className="img-fluid" />
          </div>
        </div>

        <TechStack />
      </div>
    </div>
  );
};

export default DigitalMarketing;
