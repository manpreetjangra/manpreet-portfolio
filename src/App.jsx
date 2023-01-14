import Galaxy from "./components/Galaxy";
import Name from "./components/Name";
import SocialMedia from "./components/SocialMedia";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Project from "./components/Project";
import "./index.css";

import { Canvas, useThree } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";

const ScrollBar = () => {
  const viewport = useThree((state) => state.viewport);

  return (
    <ScrollControls pages={viewport.width < 12 ? 5 : 4}>
      <Scroll>
        <Name />
      </Scroll>
      <Scroll html style={{ width: "100%" }}>
        <AboutMe />
        <Experience />
        <Project />
      </Scroll>
      <Galaxy />
    </ScrollControls>
  );
};

export default function App() {
  return (
    <>
      <Canvas
        className="bg-black"
        camera={{
          fov: 75,
          near: 0.1,
          far: 100,
          position: [0, 1, 7.5],
        }}
      >
        <ScrollBar />
      </Canvas>
      <SocialMedia />
    </>
  );
}
