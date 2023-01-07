import "../index.css";

export default function AboutMe() {
  return (
    <>
      <h1 className="title">&lt;About Me/&gt;</h1>
      <h1 className="body">
        Hey there, thanks for dropping by! 👋 I'm Manpreet :&#41;
        <br></br>
        <br></br>Ever since I could remember, I loved to create and build things
        that require creativity and critical thinking. I've always wanted the
        opportunity to build and design projects that demarcate new boundaries
        about the possibilities within innovation. To pursue these passions, I
        am currently a second-year computer engineering student at the
        University of Waterloo.
        <br></br>
        <br></br>So far in my career, I've had the privilege to intern at two
        companies where I focused on software and web development. I am always
        learning and diving deep into technologies/frameworks that are
        interesting to me. Currently, I am super interested in 3D graphics &
        animations using Three.js & React Fiber :&#41; I am also a very big
        space enthusiast &#129680;
      </h1>
      <img
        src="/manpreet-picture.jpg"
        alt="a picture of me"
        className="image"
      />
      <div className="square">
        <div className="languages">
          C &nbsp; &nbsp; C++ &nbsp; &nbsp;Python&nbsp; &nbsp;Bash &nbsp;&nbsp;
          HTML &nbsp;&nbsp;CSS &nbsp;&nbsp; SQL &nbsp;&nbsp; GraphQL
          &nbsp;&nbsp; Three.js &nbsp;&nbsp; JavaScript &nbsp;&nbsp; TypeScript
          &nbsp;&nbsp; React &nbsp;&nbsp;
        </div>
      </div>
    </>
  );
}
