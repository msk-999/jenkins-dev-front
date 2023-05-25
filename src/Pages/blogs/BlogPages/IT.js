import React from "react";
import ShareThisPost from "../../../components/ShareThisPost";
import Layer1 from "../../../img/blogs/blog22.jpg";
import { Link } from "react-router-dom";

const IT = () => {
  return (
    <div>
      <div className="container my-5 text-center">
        <div className="row py-4">
          <div className="col">
            <h1>
              3 Reasons Why Future Of Information Technology In India Is Booming
            </h1>
            <div className="row justify-content-center">
              <div className="col-6">
                <img src={Layer1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-5">
          <ShareThisPost />
          <div className="col text-start mx-5">
            <h5 className="fw-bold">Future of Information Technology in India</h5>
            <p>
              India’s contribution to the field of information technology.
              Information Technology in India is larger than that of any other
              country in the world. It is true that India has lost its edge
              after economic liberalization, but still, it has done some great
              stuff in the past. <br />
              Nowadays, India is the second-largest software exporter in the
              world, accounting for 20.5% of the global share. <br />
              Although it is still stereotyped as retail, India’s
              fastest-growing industry is software services, which accounts for
              $35 billion, or half of India’s technology exports. This software
              boom has had such a profound impact on the economy that today the
              country is considered a giant in the computer world. <br />
              As a stakeholder in an IT company, you must know the technology
              that will replace your current software in the next 5 to 10 years.
              If you do not know which upcoming technology or innovation will
              replace your current software, it is a major disadvantage for your
              business. With little time, effort and money consequently, you can
              modernize your company’s Information Technology infrastructure to
              drastically improve productivity and reduce the risk of expensive
              Information Technology problems.
            </p>
            <h5 className="fw-bold text-primary">
              Technology which will be changed in upcoming 20 years
            </h5>
            <p>
              <span className="h6 fw-bold text-danger">IOT</span>
              <br />
              The Internet of things (IoT) is actually a system with physical
              objects or ‘things’ that are directly connected to the internet
              without any human intervention. They can connect to each other,
              and they can be at any given location – be it your office, or
              factories, or in your homes. They enable data communication
              between these physical things using internet as the medium. <br />
              <br />
              <span className="h6 fw-bold text-danger">
                Artificial Intelligence and Robotics
              </span>
              <br />
              Artificial Intelligence and Robotics are two of the most
              fascinating fields to work in. They can be used in a variety of
              sectors and for a variety of tasks. Transport, manufacturing,
              health, education and even customer service – all of these can be
              solutions for automation using AI and robotics, which is why we
              are going to cover the basics of these breakthrough technologies
              along with their many applications. <br />
              <br />
              <span className="h6 fw-bold text-danger">Augmented Reality</span>
              <br />
              Augmented Reality is a live direct or indirect view of a physical
              real-world environment whose elements are augmented or merged with
              the aid of advanced computer technology. Augmented reality
              involves the integration of online computer-generated data with
              live real-world visual perception, in order to provide or enhance
              the user’s sense of presence and environment. The term was
              originally coined in 1990s to describe an evolving technology that
              combines real-world and computer-generated components, but its
              current manifestations have surfaced only recently. <br />
              <br />
              <span className="text-primary fw-bold h6">
                Where is India in this never-ending Information Technology race?{" "}
              </span>
              <br />
              Well, right at the top, of course. India is a country that
              produces over 1.5 million engineers year after year – a number
              that is only climbing. That’s why India is the best in the IT
              industry. And that’s not all. India is the leading sourcing
              destination in the world, accounting for over 55% of the market
              share of the United States and European business. The key success
              factors include the country’s cost competitiveness, skilled labor
              force, and supply base, a liberal system of doing business,
              English speaking and computer-savvy manpower, attractive trade
              policies, and tax incentives <br />
              From education to outsourcing, India is one country that is taking
              the world by storm. India is home to the largest IT industry in
              the world. With over 1.3 million people employed by this $87
              billion industry, India is aiming to achieve a $350 billion IT
              spend by 2020 that will propel it ahead of China in terms of
              revenue. <br />
              <br />
              <Link to="/contact" className="h6 text-decoration-none text-info">Click here</Link> to connect us to upgrade your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IT;
