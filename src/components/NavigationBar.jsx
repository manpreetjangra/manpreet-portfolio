import { Html } from "@react-three/drei";
import "../index.css";

export default function NavigationBar() {
  return (
    <>
      <Html fullscreen className="navigation">
        <div className="links" onClick={Transformation}>
          Home
        </div>
        <div className="links">About Me</div>
        <div className="links">Experiences</div>
        <div className="links">Projects</div>
      </Html>
    </>
  );
}

const Transformation = () => {
  console.log("hello");
};
