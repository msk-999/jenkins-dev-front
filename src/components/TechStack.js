import React from "react";
import layer1 from "../img/corosal/android.jpg";
import layer2 from "../img/corosal/angular-js.jpg";
import layer3 from "../img/corosal/blog.jpg";
import layer4 from "../img/corosal/css.jpg";
import layer5 from "../img/corosal/django.jpg";
import layer6 from "../img/corosal/express-js.jpg";
import layer7 from "../img/corosal/fastapl.jpg";
import layer8 from "../img/corosal/fb.jpg";
import layer9 from "../img/corosal/flask.jpg";
import layer10 from "../img/corosal/flutter.jpg";
import layer11 from "../img/corosal/graphql.jpg";
import layer12 from "../img/corosal/html.jpg";
import layer13 from "../img/corosal/instagram.jpg";
import layer14 from "../img/corosal/ios.jpg";
import layer15 from "../img/corosal/j-meter.jpg";
import layer16 from "../img/corosal/jawa-script.jpg";
import layer17 from "../img/corosal/laravel.jpg";
import layer18 from "../img/corosal/linkedin.jpg";
import layer19 from "../img/corosal/locust.jpg";
import layer20 from "../img/corosal/mvc.jpg";
import layer21 from "../img/corosal/mysql.jpg";
import layer22 from "../img/corosal/node.jpg";
import layer23 from "../img/corosal/oracle.jpg";
import layer24 from "../img/corosal/php.jpg";
import layer25 from "../img/corosal/pinterest.jpg";
import layer26 from "../img/corosal/python.jpg";
import layer27 from "../img/corosal/react.jpg";
import layer28 from "../img/corosal/rest.jpg";
import layer29 from "../img/corosal/selenium.jpg";
import layer30 from "../img/corosal/soap-ui.jpg";
import layer31 from "../img/corosal/sql-server.jpg";
import layer32 from "../img/corosal/twiter.jpg";
import layer33 from "../img/corosal/youtube.jpg";

const TechStack = () => {
  return (
    <div>
      <div className="card">
        <div className="row">
          <h3 className="fw-bold">Teck-Stack</h3>
          <div className="col">
            <h4 className="fw-bold">Technology, Frameworks, Architectures</h4>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row gy-3">
                    <div className="col mx-2">
                      <img src={layer1} className=" img-fluid" alt="" />
                    </div>
                    <div className="col mx-2">
                      <img src={layer2} className=" img-fluid" alt="" />
                    </div>
                    <div className="col mx-2">
                      <img src={layer3} className=" img-fluid" alt="" />
                    </div>
                    <div className="col mx-2">
                      <img src={layer4} className=" img-fluid" alt="" />
                    </div>
                    <div className="col mx-2">
                      <img src={layer5} className=" img-fluid" alt="" />
                    </div>
                    <div className="col mx-2">
                      <img src={layer6} className=" img-fluid" alt="" />
                    </div>
                    <div className="col mx-2">
                      <img src={layer7} className=" img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row gy-3">
                    <div className="col mx-2">
                      <img src={layer8} className=" img-fluid" alt="" />
                    </div>
                    <div className="col mx-2">
                      <img src={layer9} className=" img-fluid" alt="" />
                    </div>
                    <div className="col mx-2">
                      <img src={layer10} className=" img-fluid" alt="" />
                    </div>
                    <div className="col mx-2">
                      <img src={layer11} className=" img-fluid" alt="" />
                    </div>
                    <div className="col mx-2">
                      <img src={layer12} className=" img-fluid" alt="" />
                    </div>
                    <div className="col mx-2">
                      <img src={layer13} className=" img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={layer14} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
