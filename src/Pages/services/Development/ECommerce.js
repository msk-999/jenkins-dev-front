import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGifts,
  faHouseChimneyCrack,
  faIndianRupeeSign,
  faBagShopping,
  faMagnifyingGlassLocation,
} from "@fortawesome/free-solid-svg-icons";
import layer1 from "../../../img/softdev/e-commerce.png";
import layer2 from "../../../img/softdev/STRATEGY-1.png";
import DigiMarketing from "../../../components/DigiMarketing";

const ECommerce = () => {
  return (
    <div>
      <div className="container text-center my-5">
        <div className="row py-4 align-items-center">
          <div className="col-md-6">
            <h3>E-Commerce Development</h3>
            <h5 className="py-2">E-Commerce Development</h5>
          </div>
          <div className="col-md-6">
            <img src={layer1} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h5 className="fw-normal">
              E-Commerce Development is a game-changer in the past few years.
              The internet technologies have matured and so have the people
              using it. This was very clear during Pandemic-2020.
            </h5>
            <h5 className="fw-bold">Reasons...</h5>
            <div className="row my-5">
              <div className="col mx-2 border py-2">
                <FontAwesomeIcon
                  icon={faGifts}
                  size="2xl"
                  className="py-2"
                  style={{ color: "#e96d51" }}
                />
                <p>Range of products & services, Friendly return policies</p>
              </div>
              <div className="col mx-2 border py-2">
                <FontAwesomeIcon
                  icon={faMagnifyingGlassLocation}
                  size="2xl"
                  className="py-2"
                  style={{ color: "#e96d51" }}
                />
                <p>Location agnostic shopping</p>
              </div>
              <div className="col mx-2 border py-2">
                <FontAwesomeIcon
                  icon={faHouseChimneyCrack}
                  size="2xl"
                  className="py-2"
                  style={{ color: "#e96d51" }}
                />
                <p>Improved logistics & Doorstep delivery</p>
              </div>
              <div className="col mx-2 border py-2">
                <FontAwesomeIcon
                  icon={faIndianRupeeSign}
                  size="2xl"
                  className="py-2"
                  style={{ color: "#e96d51" }}
                />
                <p>Financial facilities & discounts, Competitive analyses</p>
              </div>
              <div className="col mx-2 border py-2">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  size="2xl"
                  className="py-2"
                  style={{ color: "#e96d51" }}
                />
                <p>Trusted shopping platforms, Smooth interaction</p>
              </div>
            </div>
            <h5 className="fw-normal">
              On the positive side, the world has become a local market. But on
              the negative side, companies need to be more vigilant of their
              competition. Product, Business-model, Quality innovation has
              become mandatory.
            </h5>
          </div>
        </div>

        <div className="row my-5">
          <h3 className="fw-bold">How to rule the customer's market</h3>
          <div className="col">
            <h5>when selling cheap is an expensive affair</h5>
            <div className="row justify-content-center">
              <div className="col p-4">
                <img src={layer2} alt="" />
              </div>
              <h5>
                We, at Skeletos, guide your customers to reach your product/s in
                an easy flow.
              </h5>
            </div>
          </div>
        </div>

        <DigiMarketing />
      </div>
    </div>
  );
};

export default ECommerce;
