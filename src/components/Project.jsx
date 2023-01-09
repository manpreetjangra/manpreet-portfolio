import "../index.css";

export default function Project() {
  return (
    <>
      <h1 className="project-title">&lt;Projects/&gt;</h1>
      <div className="project">
        <div className="projectcard">
          <div className="projectcardspacing">
            <h1 className="projectname">Vault Password Lock</h1>
            <p className="projectlanguages">C, VS Code, GitLab</p>
            <ul style={{ listStyleType: "disc" }} className="projectnotes">
              <li>
                Utilized rotary encoder, single seven-segment display, and
                coloured LED to create a three-digit code vault lock.
              </li>
              <li>
                Leveraged the STM32Cube HAL API with a Nucleo-F401RE development
                board.
              </li>
              <li>
                Programmed project in C using PlatformIO IDE for VS Code and
                utilized GitLab to manage revision history.
              </li>
            </ul>
          </div>
        </div>
        <div className="projectcard">
          <div className="projectcardspacing">
            <h1 className="projectname">ConnectLocal</h1>
            <p className="projectlanguages">
              HTML/CSS, Javascript, Django, Figma
            </p>
            <ul style={{ listStyleType: "disc" }} className="projectnotes">
              <li>
                Created an web application using HTML/CSS and Javascript that
                connects farmers and restaurants to exchange goods and services
                during COVID-19.
              </li>
              <li>
                Designed wireframes and prototypes using Figma to optimize user
                experience and functionality.
              </li>
            </ul>
          </div>
        </div>
        <div className="projectcard">
          <div className="projectcardspacing">
            <h1 className="projectname">Portfolio Website</h1>
            <p className="projectlanguages">React, React Fiber, Three.js</p>
            <ul style={{ listStyleType: "disc" }} className="projectnotes">
              <li>
                Developed a web application using React and Three.js to showcase
                skills/abilities within 3D animation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
