import React from "react";
import Apply from "../../../components/Apply";
import { TabTitle } from "../../../utils/GeneralFunctions";

const NetworkEngineer = () => {
  TabTitle("Network Engineer | Skeletos IT Services");
  return (
    <>
      <div className="container my-5">
        <div className="row py-5">
          <div className="col-12 my-3">
            <h1>Network Engineer</h1>
            <h6>Job Description</h6>
            <div className="card">
              <div className="card-body">
                <div className="card-text">
                  <h6>Mandatory Skills Required:</h6>
                  <p>
                    Minimum 5+ years with hands-on experience in troubleshooting
                    IT (including Capacity & Infrastructure) issues & ability to
                    manage OS/IT/EUS teams (End User Support) <br />
                    Manage a team of Server and Network administrators, Helpdesk
                    and Desktop Support teams <br />
                    Be responsible for the IT infrastructure consisting of
                    Servers, networks, Telephone, VC and IM systems, Desktops,
                    BCP/DR planning and Software Asset Management <br />
                    Manage projects that include setting up of IT Infrastructure
                    at new facilities, enhancements in the existing IT
                    infrastructure and its maintenance <br />
                    Support Software development teams in meeting their IT
                    Infrastructure needs <br />
                    Provide leadership and guidance to the team in defining and
                    effectively implementing policies and procedures. <br />
                    Recommend system/architecture improvement initiatives such
                    as alerts, H/W optimization techniques, virtualization etc.{" "}
                    <br />
                    Ensure continuous monitoring of servers through available
                    tools and report on stats. <br />
                    Track IT metrics (severity trends, MTTR, P1 RCAs, SLA
                    slippage, etc.) including weekly reporting and presentation
                    to ManagementTechnical Skills <br />
                  </p>
                  <ul>
                    <li>
                      Operating Systems: RHEL, Ubuntu, Ubuntu Server, Oracle
                      Linux
                    </li>
                    <li>
                      Server Configuration and Administration: Domain Users
                      Management configuration and Administration: OpenLDAP,
                      phpLDAPadmin, PWM ( self-service for password )
                    </li>
                    <li>
                      Web Server configurations and administration: Apache2,
                      Nginx, Installing SSL Certificates
                    </li>
                    <li>
                      Mail Server configuration and Administration: Postfix
                    </li>
                    <li>DNS Server: bind9</li>
                    <li>
                      VPN Server Configuration and Administration: L2TP, PPTP
                    </li>
                    <li>LVM configuration and administration.</li>
                    <li>
                      Database Installation and Administration: MySql,
                      PHPMyAdmin
                    </li>
                    <li>Scripting Language: Bash Scripting</li>
                    <li>
                      Issue Tracking Tool: Atlassian JIRA ( Configuration and
                      Administration )
                    </li>
                    <li>
                      Cloud Services Administration: Amazon Web Services,
                      InstaCompute, DigitalOcean, 1and1.
                    </li>
                    <li>Gitlab</li>
                    <li>Google Apps and Email domain administration</li>
                    <li>
                      SonicWall NSA 2600 Firewall Configuration and
                      Administration: Fundamental knowledge of Networking
                    </li>
                    <li>Virtualization: Oracle VirtualBox, Docker</li>
                    <li>
                      Working with the development team and deploying the
                      required applications on the server
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Apply/>
        </div>
      </div>
    </>
  );
};

export default NetworkEngineer;
