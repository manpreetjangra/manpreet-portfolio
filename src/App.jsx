import Galaxy from "./components/Galaxy";
import Name from "./components/Name";
import NavigationBar from "./components/NavigationBar";
import "./index.css";

import { Canvas } from "@react-three/fiber";

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
        <Name />
        <NavigationBar />
        <Galaxy />
      </Canvas>
    </>
  );
}
