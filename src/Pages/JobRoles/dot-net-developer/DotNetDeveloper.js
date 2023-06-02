import React from "react";
import Apply from "../../../components/Apply";
import { TabTitle } from "../../../utils/GeneralFunctions";

const DotNetDeveloper = () => {
  TabTitle("Dot Net Developer | Skeletos IT Services");
  return (
    <>
      <div className="container my-5">
        <div className="row py-5">
          <div className="col-12 my-3">
            <h2>Dot Net Developer</h2>
            <h6>Job Description</h6>
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  The developer should have at least 4 years of experience in
                  Microsoft .NET technologies. The person will be responsible
                  for programming the backend (microservice using .NET
                  6)Technical Skills <br />{" "}
                </p>
                <ul>
                  <li>4+ years of experience in .NET technologies </li>
                  <li>2+ years of experience in .NET core/.NET 5/.NET 6 </li>
                  <li>
                    Strong expertise with .NET core-based microservices using
                    Web APIs
                  </li>
                  <li>Expertise with Asp.NET and MVC with Razor </li>
                  <li>Experience in EF core or LINQ </li>
                  <li>
                    Experience in automated unit testing using frameworks like
                    MS-Test, N-Unit
                  </li>
                  <li>Experience in JavaScript, JQuery </li>
                  <li>Experience in using NPM Experiences in configuration</li>
                  <li>management tools like Microsoft Azure DevOps or GIT </li>
                  <li>
                    Experience in working with RDBMS database like MS-SQL{" "}
                  </li>
                  <li>Knowledge of Agile software development methodology </li>
                </ul>
                <br />
                <p>Nice to have</p> <br />
                <br />
                <ul>
                  <li>Experience in Azure Service Bus</li>
                  <li>Agriculture insurance or any other insurance domain</li>
                  <li>Experience of designing the software systems</li>
                  <li>Experience in hosting Microservices on Azure</li>
                  <li>Experience in containerization like Docker</li>
                </ul>
              </div>
            </div>
          </div>
          <Apply />
        </div>
      </div>
    </>
  );
};

export default DotNetDeveloper;
