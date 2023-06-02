import React from "react";
import Apply from "../../../components/Apply";
import { TabTitle } from "../../../utils/GeneralFunctions";

const ScrumMaster = () => {
  TabTitle("Scrum Master | Skeletos IT Services");
  return (
    <>
      <div className="container my-5">
        <div className="row py-5">
          <div className="col-12 my-3">
            <h2>Scrum Master</h2>
            <h6>Job Description</h6>
            <div className="card">
              <div className="card-body">
                <div className="card-text">
                  The Tools and Automation Scrum Master is responsible for
                  acting as the Scrum Master across our automation platforms and
                  applications, including full-stack developments and
                  ServiceNow. The candidate will work within a global team,
                  liaising between Product Owners, Agile Team Members and
                  development teams ensuring that our development activities are
                  defined, planned and completed to schedule. The candidate
                  should have proven prior experience in a Scrum Master role
                  within a SAFe Agile environment. Roles & Responsibilities Work
                  with internal stakeholders, RTE/Product Owners/Managers to
                  define and deliver automated software platforms
                </div>
                <div className="card-text">
                  <ul>
                    <li>
                      Plan deliverables with the Agile Team and stakeholders,
                      ensuring that those deliverables remain on track
                    </li>
                    <li>
                      Facilitate daily stand-up meetings, decision making, and
                      resolve conflicts
                    </li>
                    <li>Manage the flow of work across multiple initiatives</li>
                    <li>Ensure that SAFe Agile principles are followed</li>
                    <li>
                      Manage multiple highly visible initiatives in parallel
                    </li>
                    <li>
                      Work within a SAFe Agile framework to deliver value to our
                      internal and external stakeholders
                    </li>
                    <li>
                      Create initiative status reporting to the Director level
                    </li>
                  </ul>
                  <p>Competencies</p>
                  <ul>
                    <li>Fluent in the English language</li>
                    <li>Excellent written and verbal communication skills</li>
                    <li>
                      Ability to thrive under pressure and “think on your feet”
                    </li>
                    <li>Strong coordination and organization skills</li>
                    <li>
                      At least 6+ years of experience in a Scrum Master role
                    </li>
                    <li>
                      Preferred Scrum Master qualification such as SAFe Scrum
                      Master, SAFe Advanced Scrum Master or equivalent
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Apply />
        </div>
      </div>
    </>
  );
};

export default ScrumMaster;
