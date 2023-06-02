import React from "react";
import layer1 from "../../../img/cloud/EXPERIENCE-HIGHEST-ROI.png";
import layer2 from "../../../img/cloud/02-INTERNAL-CLOUD-SOLUTIONS-01.jpg";
import layer3 from "../../../img/cloud/Fire-Fighters-768x654.png";
import layer4 from "../../../img/cloud/02-INTERNAL-CLOUD-SOLUTIONS-02-768x472.png";
import layer5 from "../../../img/cloud/Consultative.png";
import layer6 from "../../../img/cloud/Handholding.png";
import layer7 from "../../../img/cloud/Long-term.png";
import layer8 from "../../../img/cloud/Value-for-Money.png";
import layer9 from "../../../img/cloud/Futuristic.png";
import layer10 from "../../../img/cloud/02-INTERNAL-CLOUD-SOLUTIONS-04-768x321.png";
import CloudPlatform from "../../../components/CloudPlatform";
import { TabTitle } from "../../../utils/GeneralFunctions";

const CloudSolutions = () => {
  TabTitle("Cloud Solutions | Skeletos");
  return (
    <div>
      <div className="container my-5 text-center">
        <div className="row align-items-center py-4">
          <div className="col-md-6">
            <h2 className="fw-bold">CLOUD SOLUTION HIGHEST ROI</h2>
            <h5>
              with an ensemble of Infrastructure Management Solutions & Services
            </h5>
          </div>
          <div className="col-md-6">
            <img src={layer1} alt="hero-img" className="img-fluid" />
          </div>
        </div>

        <div className="row py-4">
          <div className="col-12">
            <h3 className="fw-bold">THE OVERWHELMING MUNDANITY</h3>
            <h5 className="fw-normal">
              Managing access control, monitoring employee bandwidth usage,
              updating security patches and software upgrades while ensuring it
              doesn’t affect the incumbent applications, backups, disaster
              recovery, maintain software licenses and renewing them before
              their expiry, troubleshooting issues, vendor co-ordination, issue
              escalations. Don't worry Our Cloud solutions are Here.
            </h5>
            <div className="row">
              <div className="col p-5">
                <img src={layer2} alt="" className="img-fluid" />
              </div>
            </div>
            <h5 className="fw-normal">
              A day in the life of an IT team can be very overwhelming. IT
              infrastructure, usually, has a substantial share in the annual
              expenses. This makes the IT cost-centric rather than profit
              centric. Further, if the network, servers and systems do not
              perform consistently and optimally, it is perceived as a
              dead-investment.
            </h5>
          </div>
        </div>

        <div className="row py-5 my-4 align-items-center">
          <h3 className="fw-bold">
            Strategic Contributors OR Just Fire-Fighters?
          </h3>
          <div className="col-md-6">
            <h6>
              It’s a crime to reduce the in-house IT expertise to the role of a
              firefighter. If your core business is not IT, your existing team
              equipped with the right skills can play an important role in
              effectively helping you achieve strategic objectives, quickly.
            </h6>
            <h5 className="fw-bold pt-3">
              Leave the routine to the BEST CLOUD SOLUTIONS.
            </h5>
          </div>
          <div className="col-md-6">
            <img src={layer3} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="row pb-5">
          <h3 className="fw-bold py-4">
            Skeletos: DIGITAL TRANSFORMATION at its best
          </h3>
          <div className="col-md-6">
            <img src={layer4} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">
              C O M F O R T of an in-house team, Expertise of a result-oriented
              team
            </h5>
            <br />
            <h6>
              At Skeletos we adopt a consultative approach to build a customized
              solution for you. We are meticulous, process-driven, and have
              hands-on expertise of building IT infrastructure for small to
              large enterprises across the world. Collaborate with us to
              maximize value from our IT Infrastructure Management Solutions.
            </h6>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col mb-3">
            <h3 className="fw-bold py-3">
              Sounds Complex? It's Not. Find out how.
            </h3>
            <h5 className="pb-3">THE ENSEMBLE</h5>
            <p className="pb-4">
              Skeletos leadership team has hands-on expertise in setting up and
              managing small, mid-size and large scale IT infrastructures across
              all aspects of set-up, migration and management. LAN, WAN,
              In-Premise Datacentres, Cloud Datacentres, Servers, Networks,
              Storage, Security, Databases, Backup, Disaster Recovery,
              Virtualization, Business Continuity, Multi-platform Accessibility,
              and much more.
            </p>
            <CloudPlatform />
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12">
            <h3 className="fw-bold">NO CLOUD? DON’T WORRY</h3>
            <h6 className="py-4">
              If you are not yet convinced about switching to the cloud, We will
              help you set up a robust & secure data center within your premise.
            </h6>
            <h5 className="fw-bold py-2">YOU MAY ASK “WHY CLOUD?”</h5>
            <h6 className="py-3">
              If you want to understand better and be more comfortable with
              Cloud, prior to the switch-over, we offer our chosen clients a
              Limited-Time Cloud Trial*. You can try a few applications on the
              cloud, so that you are cloud-ready, and then together we can plan
              your IT modernization
            </h6>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3 className="fw-bold">THE Skeletos APPROACH</h3>
            <h5 className="fw-normal py-3">
              Technology is just an enabler... the approach is what makes all
              the difference
            </h5>

            <div className="row justify-content-center gy-3 my-5">
              <div className="col-sm-2 mx-2">
                <img src={layer5} alt="Consultative" className="img-fluid" />
              </div>
              <div className="col-sm-2 mx-2">
                <img src={layer6} alt="Handholding" className="img-fluid" />
              </div>
              <div className="col-sm-2 mx-2">
                <img src={layer7} alt="Long-term" className="img-fluid" />
              </div>
              <div className="col-sm-2 mx-2">
                <img src={layer8} alt="Value-for-Money" className="img-fluid" />
              </div>
              <div className="col-sm-2 mx-2">
                <img src={layer9} alt="Futuristic" className="img-fluid" />
              </div>
            </div>
            <h5>
              It’s not just about technology, and definitely not about sales.
              Our approach is fair and straightforward.
            </h5>           
            <h3 className="fw-bold py-5">Benefits of Skeletos IMS</h3>
            <div className="col my-3">
              <img src={layer10} alt="cloud-solutions" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSolutions;
