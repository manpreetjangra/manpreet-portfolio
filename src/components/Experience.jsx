import { useState } from "react";
import "../index.css";

export default function Experience() {
  const [isActiveVTS, setIsActiveVTS] = useState(true);
  const [isActiveMetrix, setIsActiveMetrix] = useState(false);
  const [isActiveToronto, setIsActiveToronto] = useState(false);

  const handleClickVTS = () => {
    setIsActiveVTS(true);
    setIsActiveMetrix(false);
    setIsActiveToronto(false);
  };

  const handleClickMetrix = () => {
    setIsActiveVTS(false);
    setIsActiveMetrix(true);
    setIsActiveToronto(false);
  };

  const handleClickToronto = () => {
    setIsActiveVTS(false);
    setIsActiveMetrix(false);
    setIsActiveToronto(true);
  };

  return (
    <>
      <h1 className="experience-title">&lt;Experience/&gt;</h1>
      <div className="experience">
        <div className="names">
          <h1 className="button" onClick={handleClickVTS}>
            Software Engineer Intern @ VTS
          </h1>
          <h1 className="button" onClick={handleClickMetrix}>
            Front End Developer Intern @ Metrix
          </h1>
          <h1 className="button" onClick={handleClickToronto}>
            Researcher @ University of Toronto
          </h1>
        </div>
        <div className="card">
          <div
            style={{
              display: !isActiveVTS ? "none" : "",
            }}
          >
            <h1 className="jobtitle">Software Engineer Intern @ VTS</h1>
            <p className="date">SEPT 2022 - DEC 2022</p>
            <ul style={{ listStyleType: "disc" }} className="jobnotes">
              <li>
                Built and deployed company’s maintenance page under a feature
                flag to complete database upgrade on all environments.
              </li>
              <li>
                Developed a GraphQL mutation that authorizes a user to revert
                the deletion of their account and automates two emails to be
                sent to the end user and the VTS support team.
              </li>
              <li>
                Integrated an analytics tool using a cron job to track users and
                events for over a million users.
              </li>
              <li>
                Presented and answered questions in front of 100 developers to
                showcase a feature my team had developed.
              </li>
              <li>
                Collaborated with senior engineers while following best
                practices for the full software development life cycle.
              </li>
            </ul>
          </div>

          <div
            style={{
              display: !isActiveMetrix ? "none" : "",
            }}
          >
            <h1 className="jobtitle">Front End Developer Intern @ Metrix</h1>
            <p className="date">JAN 2022 - APR 2022</p>
            <ul style={{ listStyleType: "disc" }} className="jobnotes">
              <li>
                Developed the complete front end of two career development
                websites using the Gatsby.js framework.
              </li>
              <li>
                Designed a UML Class Diagram and ER Diagram to model objects and
                relationships among entities to achieve the desired
                functionality of the website.
              </li>
              <li>
                Collaborated closely with senior developers and designers to
                ensure diagrams and wireframes were translated to high-quality
                code while utilizing best practices.
              </li>
              <li>
                Created accessible, responsive, and functional user interfaces
                on all browser and device types.
              </li>
              <li>
                Automated continuous deployment to Netlify and integrated a
                content management system using NetlifyCMS.
              </li>
            </ul>
          </div>

          <div
            style={{
              display: !isActiveToronto ? "none" : "",
            }}
          >
            <h1 className="jobtitle">Researcher @ University of Toronto</h1>
            <p className="date">AUG 2021 - DEC 2021</p>
            <ul style={{ listStyleType: "disc" }} className="jobnotes">
              <li>
                Developed real-life simulations of the environment and the human
                body using the Java-based COBWEB software under the supervision
                of Nobel Prize winning professor, Dr. Brad Bass.
              </li>
              <li>
                Performed quantitative analysis and observed behavioural
                patterns in complex systems using simulated data.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
