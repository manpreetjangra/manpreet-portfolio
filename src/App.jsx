import Galaxy from "./components/Galaxy";
import Name from "./components/Name";
import NavigationBar from "./components/NavigationBar";
import SocialMedia from "./components/SocialMedia";
import AboutMe from "./components/AboutMe";
import "./index.css";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";

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
        <ScrollControls pages={4}>
          <Scroll>
            <Name />
          </Scroll>
          <Scroll html style={{ width: "100%" }}>
            <AboutMe />
          </Scroll>
          <Galaxy />
        </ScrollControls>
      </Canvas>
      <NavigationBar />
      <SocialMedia />
    </>
  );
}
