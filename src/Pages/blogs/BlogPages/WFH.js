import React from "react";
import Layer1 from "../../../img/blogs/blog25.png";
import { Link } from "react-router-dom";
import ShareThisPost from "../../../components/ShareThisPost";
import { TabTitle } from "../../../utils/GeneralFunctions";

const WFH = () => {
  TabTitle(
    "Are You In Battle Of Work From Home And Work From Office? Here Are 5 Pros And Cons | Skeletos IT Services"
  );
  return (
    <div>
      <div className="container my-5 text-center">
        <div className="row py-4">
          <div className="col">
            <h1>
              Are You In Battle Of Work From Home And Work From Office? Here Are
              5 Pros And Cons
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
            <p>
              Before covid 19 work from home was just an imagination for many of
              employees, but in 2020 it has become a part of a system because in
              covid 19 it was recommended by the government to avoid human
              contact, while doing Work . Now (2021, December) many employees
              are a bit confused about whether they should be working from home
              or working from the office. Let’s understand the pros and cons of
              working from home and working from the office. <br />
              <br />
              <span className="h5">
                What is work from home and Work from Office?
              </span>
              <br />
              <br />
              Working from home means completing your assigned task from home or
              any other comfort zone. It will require a few things like a
              laptop, internet connection, a comfortable place to sit and work,
              and a mobile phone for telecommunication. <br />
              meanwhile, in work from the office, you have to come to the office
              to complete your task, wear formal and you can sit and complete
              all your task by seating cubicles with your colleagues. <br />
              Now, let’s understand the Procs and Cons of work from home and
              office. <br />
              <br />
              <ol>
                <li className="fw-bold">Independence</li>When your working from
                home you get independence. It can be in any formate like seating
                on the bed and working or it can be seating on beach and attend
                the meeting. <br />
                In work from the office you won’t get independency, you were
                supposed to follow some basic rules like office timings and
                other things which comes in a basic culture of the office.{" "}
                <br />
                Note- If you’re independent then you should be self-disciplined
                and you should be good at time management. <br /> <br />
                <li className="fw-bold">Save Money</li>
                Working from home can save money for the organization as well as
                for employees. The organization can save infrastructure costs
                and maintenance costs and employees can save transportation,
                food cost, and even childcare if they are parents. <br />
                Meanwhile, organizations have to invest the amount in hybrid
                work model and employees have to invest in home office costs
                like internet connection, table, and chair, electricity. <br />
                <br />
                <li className="fw-bold">Complete focus no distraction</li>
                When your work from home you are completely focused on work and
                you don’t have any distractions from co-workers. Office
                distraction can be also like running equipment noise or ringing
                a phone. <br />
                But there are many chances that you might feel isolated because
                you working alone there is no one in your room to have a
                conversation or sometimes you might get distracted by family
                issues. <br />
                <br />
                <li className="fw-bold">Flexible</li>
                If your working from home then you will have more flexible
                timings as compared to the work from an office. You can easily
                balance your work life and personal life by spending more time
                with your family. <br />
                Well, you might have a flexible hour but that might covert into
                overworking hours. As you working at flexible timings you might
                overwork unknowingly. Time management techniques can help.{" "}
                <br />
                <br />
                <li className="fw-bold">Reduction in leaves</li>
                Yes, When you work flexibly there are very less chances that you
                will take leaves. Whether you are sick or you have any other
                family function, you will be able to manage both at one time.{" "}
                <br />
                This might cause less focus on a scheduled task.
              </ol>
              <br />
              <ul>
                <h5>Facts about Work From Home</h5>
                <li>
                  A study by Standford shows that work from home can increase
                  13% of productivity in employees.
                </li>
                <li>
                  A study conducted in 2012 shows that Employees are being
                  better and faster at working from home.
                </li>
                <li>
                  According to researchers who work remotely at least a few
                  times per month, 77 percent reported greater productivity
                  while working offsite; 30 percent said they accomplished more
                  in less time and 24 percent said they accomplished more in the
                  same amount of time.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WFH;
