import React from "react";
import Layer1 from "../../../img/blogs/blog28.png";
import Layer2 from "../../../img/blogs/blog28_img.png";
import { Link } from "react-router-dom";
import ShareThisPost from "../../../components/ShareThisPost";

const TimeManagementTechnique = () => {
  return (
    <div>
      <div className="container my-5 text-center">
        <div className="row py-4">
          <div className="col">
            <h1>
              Do You Get Tired At The End Of Day Without Being Efficient On
              Workplace?
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
              Once in a lifetime, we all make our timetable to achieve our goal
              and try to be more productive, While making a timetable we
              understood that we spend most of the time on unwanted things. I
              was in 10th standard when I made my first timetable and divide all
              the subjects into days and time while making the timetable I was
              so enthusiastic about a study that I have almost believed that I
              am going to get above 90%. But while executing that timetable I
              faced so many challenges and within a few days, I stopped
              following that routine. We all are enthusiastic and ready to do
              hard work to achieve our goals and we all try hard, but sometimes
              we get failed and that’s because of wrong guidance. We all can
              utilize our time and enhance our personal and professional life by
              managing our time in the right way. <br />
              According to the University of ST Augustine, Here are a few proven
              time management methods that we are following in Skeletos to be
              more productive and to maintain the satisfying life of employees.
            </p>
            <div className="row justify-content-center">
              <div className="col-6 text-center">
                <img src={Layer2} alt="" className="img-fluid" />
              </div>
            </div>
            <ol>
              <li className="h5 fw-bold text-primary">
                Pareto Analysis (a.k.a., the 80/20 rule)
              </li>
              80\20 rule is invited by the Italian economist Vilfredo Pareto{" "}
              <br />
              In any task, 20% of your efforts are responsible for 80% of your
              achievement. The main goal behind this method is to prioritize
              your work depending upon the deadline and importance. You can this
              rule in your lifestyle as well, for example, If you are willing to
              lose weight then you can avoid 20% unhealthy food like pizza,
              pasta, burger and without any exercise or any extra efforts you
              will lose weight <br />
              <br />
              <span className="h6 fw-bold">
                What Type of people will get benefits from this?
              </span>
              <br /> If your love to solve problems <br />
              If Your Analytical Thinker <br />
              <br />
              <li className="h5 fw-bold text-primary">Pomodoro Technique</li>If
              you love to divide your task and then do them one by one then this
              technique is perfectly suitable for you. The Pomodoro Technique
              was created by entrepreneur and author Francesco Cirillo. <br />
              This method is very easy, you have to divide your task to achieve
              a particular goal once you have done, distribute them and set a
              particular time to complete them. Each task is called Pomodoro.
              Make sure that you avoid all distractions like your phone calls,
              social media, etc and once you complete one task, then only move
              to another task. Before moving to another task make sure you recap
              the previous task and once you are done with the current task
              revise it to check the quality and to avoid mistakes <br />
              <br />
              <span className="h6 fw-bold">
                What Type of people will get benefits from this?
              </span>
              <br /> If your creative Thinker
              <br />
              If you feel burned out from Work
              <br />
              <br />
              <li className="h5 fw-bold text-primary">Parkinson’s Law </li>If
              you love to complete your work under pressure or if you like to
              complete the task before the deadline then unknowingly you are
              following Parkinson’s law. Parkinson’s law is all about time
              blocking. This law is created by British historian Cyril
              Northcote. <br />
              “work expands so as to fill the time available for its
              completion.” In simple words, if you give more time you give it to
              complete the task you will need more time to complete a task. For
              example, if you decide to make ppt in 3 hours then you will
              complete that in 3 hours but if decide it to make in one hour then
              you will be able to complete that in one hour. <br /><br />
              <span className="h6 fw-bold">
                What Type of people will get benefits from this?
              </span>
              <br /> If you are Procrastinators
              <br />
              If you like to work well under pressure
              <br />
              <br />
              <li className="h5 fw-bold text-primary">
                Getting Things Done (GTD) Method
              </li>
              GTD method is designed by author David Allen. In this method, you
              can simply note down all the things on paper and divide them in
              sequence. First, you have to decide actionable task and a
              Nonactionable task. Remove all nonactionable tasks and then put it
              in sequences according to the priority. Once you made the perfect
              list start doing immediately. <br />
              It’s a very easy and simple method to complete all your small
              tasks. <br /><br />
              <span className="h6 fw-bold">
                What Type of people will get benefits from this?
              </span>
              <br /> If You’re struggling to focus on the thing
              If Your Analytical Thinker <br />
              <br />
              If you feel overwhelmed
              <li className="h5 fw-bold text-primary">Eat that Frog</li>If you
              like to think from the long-term point of view then it’s a perfect
              method to manage your time. This method is created after Mark
              Twin’s quote “Eat a live frog the first thing in the morning and
              nothing worse will happen to you the rest of the day.” <br />
              Start your day by doing the most difficult task. With your morning
              motivation and willingness, you can complete the difficult task
              easily and be the tense free whole day. <br /><br />
              <span className="h6 fw-bold">
                What Type of people will get benefits from this?
              </span>
              <br />
              If you think from Long term point of view
              <br />
              If you’re Abstract thinkers
              <br />
              <br />
            </ol>
            <p>
              So these are a few methods which we follow to maintain our
              professional and personal lifestyle at skeletos. It’s not
              mandatory for you to follow them all but according to your
              personality, you can pick up one method and follow that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeManagementTechnique;
