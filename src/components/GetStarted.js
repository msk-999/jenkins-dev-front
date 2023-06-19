import React from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import contacting from "../img/contact-us.png";
import discussing from "../img/discuss-experts.png";
import evaluating from "../img/evaluate-cost.png";
import kickStarting from "../img/kick-off.png";

const GetStarted = () => {
  const location = useLocation();
  const isAboutUsPage = location.pathname === "/about";

  return (
    <div className="get-started-section">
      <div className="row">
        <div className="col text-center py-5">
          <h2 className="pb-3">GET STARTED TODAY WITH US</h2>
          <div className="row justify-content-around text-center">
            <div className="col-md-3 mb-4 p-3">
              {isAboutUsPage ? (
                <Link to="/contact" className="text-decoration-none text-dark">
                  <div className="shadow border rounded zoom-on-hover">
                    <img src={contacting} alt="" className="img-fluid" />
                    <h6 className="py-2">Contact us</h6>
                    <p className="px-2">
                      Fill up the details and schedule a call from our experts.
                      Don't worry, your data is safe with us.
                    </p>{" "}
                    <br />
                  </div>
                </Link>
              ) : (
                <div className="shadow border rounded zoom-on-hover">
                  <img src={contacting} alt="" className="img-fluid" />
                  <h6 className="py-2">Contact us</h6>
                  <p className="px-2">
                    Fill up the details and schedule a call from our experts.
                    Don't worry, your data is safe with us.
                  </p>{" "}
                  <br />
                </div>
              )}
            </div>
            <div className="col-md-3 mb-4 p-3">
              {isAboutUsPage ? (
                <Link to="/contact" className="text-decoration-none text-dark">
                  <div className="shadow border rounded zoom-on-hover">
                    <img src={discussing} alt="" className="img-fluid" />
                    <h6 className="py-2">Discuss with Experts</h6>
                    <p className="px-2">
                      Discuss your project with our experts to understand and
                      get the best IT solutions to enhance your project.
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="shadow border rounded zoom-on-hover">
                  <img src={discussing} alt="" className="img-fluid" />
                  <h6 className="py-2">Discuss with Experts</h6>
                  <p className="px-2">
                    Discuss your project with our experts to understand and get
                    the best IT solutions to enhance your project.
                  </p>
                </div>
              )}
            </div>
            <div className="col-md-3 mb-4 p-3">
              {isAboutUsPage ? (
                <Link to="/contact" className="text-decoration-none text-dark">
                  <div className="shadow border rounded zoom-on-hover">
                    <img src={evaluating} alt="" className="img-fluid" />
                    <h6 className="py-2">Evaluate Cost</h6>
                    <p>
                      Based on the solutions, we will share a project proposal
                      with budget and time regulations.
                    </p>{" "}
                    <br />
                  </div>
                </Link>
              ) : (
                <div className="shadow border rounded zoom-on-hover">
                  <img src={evaluating} alt="" className="img-fluid" />
                  <h6 className="py-2">Evaluate Cost</h6>
                  <p>
                    Based on the solutions, we will share a project proposal
                    with budget and time regulations.
                  </p>{" "}
                  <br />
                </div>
              )}
            </div>
            <div className="col-md-3 mb-4 p-3">
              {isAboutUsPage ? (
                <Link to="/contact" className="text-decoration-none text-dark">
                  <div className="shadow border rounded zoom-on-hover">
                    <img src={kickStarting} alt="" className="img-fluid" />
                    <h6 className="py-2">Kick-off project</h6>
                    <p className="px-2">
                      Once we sign the project, our experts will come together
                      and kick off the project with their expertise and
                      discipline.
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="shadow border rounded zoom-on-hover">
                  <img src={kickStarting} alt="" className="img-fluid" />
                  <h6 className="py-2">Kick-off project</h6>
                  <p className="px-2">
                    Once we sign the project, our experts will come together and
                    kick off the project with their expertise and discipline.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

// ...

// const GetStarted = () => {
//   const location = useLocation();

//   return (
//     <div className="row">
//       <div className="col text-center py-5">
//         <h2 className="pb-3">GET STARTED TODAY WITH US</h2>
//         <div className="row justify-content-around text-center">
//           {location.pathname === "/about" && ( // Render only on /about route
//             <div className="col-md-3 mb-4 p-3">
//               <div className="shadow border rounded zoom-on-hover">
//                 <div
//                   className="d-flex justify-content-center"
//                   style={{ width: "100%" }}
//                 >
//                   <div
//                     className="d-flex align-items-center"
//                     style={{ width: "50%" }}
//                   >
//                     <Lottie loop={true} animationData={ContactUS} />
//                   </div>
//                 </div>
//                 <h6 className="py-2">Contact us</h6>
//                 <p className="px-2">
//                   Fill up the details and schedule a call from our experts.
//                   Don't worry, your data is safe with us.
//                 </p>{" "}
//                 <br />
//               </div>
//             </div>
//           )}
//           <div className="col-md-3 mb-4 p-3">
//             <div className="shadow border rounded zoom-on-hover">
//               <div
//                 className="d-flex justify-content-center"
//                 style={{ width: "100%" }}
//               >
//                 <div
//                   className="d-flex align-items-center"
//                   style={{ width: "50%" }}
//                 >
//                   <Lottie loop={true} animationData={Discussion} />
//                 </div>
//               </div>
//               <h6 className="py-2">Discuss with Experts</h6>
//               <p className="px-2">
//                 Discuss your project with our experts to understand and get the
//                 best IT solutions to enhance your project.
//               </p>
//             </div>
//           </div>
//           <div className="col-md-3 mb-4 p-3">
//             <div className="shadow border rounded zoom-on-hover">
//               <div
//                 className="d-flex justify-content-center"
//                 style={{ width: "100%" }}
//               >
//                 <div
//                   className="d-flex align-items-center"
//                   style={{ width: "50%" }}
//                 >
//                   <Lottie loop={true} animationData={Evaluate} />
//                 </div>
//               </div>
//               <h6 className="py-2">Evaluate Cost</h6>
//               <p>
//                 Based on the solutions, we will share a project proposal with
//                 budget and time regulations.
//               </p>{" "}
//               <br />
//             </div>
//           </div>
//           <div className="col-md-3 mb-4 p-3">
//             <div className="shadow border rounded zoom-on-hover">
//               <div
//                 className="d-flex justify-content-center"
//                 style={{ width: "100%" }}
//               >
//                 <div
//                   className="d-flex align-items-center"
//                   style={{ width: "70%" }}
//                 >
//                   <Lottie loop={true} animationData={Kickoff} />
//                 </div>
//               </div>
//               <h6 className="py-2">Kick-off project</h6>
//               <p className="px-2">
//                 Once we sign the project, our experts will come together and
//                 kick off the project with their expertise and discipline.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetStarted;
