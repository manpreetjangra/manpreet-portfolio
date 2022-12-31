import Galaxy from "./components/Galaxy";
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
          position: [3.5, 3, 7.5],
        }}
      >
        <Galaxy />
      </Canvas>
    </>
  );
}
