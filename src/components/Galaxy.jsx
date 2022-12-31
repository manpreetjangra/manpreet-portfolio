import React from "react";
import * as THREE from "three";
import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { GradientTexture } from "@react-three/drei";

const parameters = {};
parameters.count = 225700;
parameters.size = 0.01;
parameters.radius = 10;
parameters.branches = 3;
parameters.spin = 1;
parameters.randomness = 0.279;
parameters.randomnessPower = 3.473;

export default function Galaxy() {
  const positions = useMemo(() => {
    const positions = new Float32Array(parameters.count * 3);

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;

      const radius = Math.random() * parameters.radius;

      const spinAngle = radius * parameters.spin;
      const branchAngle =
        ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

      const randomX =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness *
        radius;
      const randomY =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness *
        radius;
      const randomZ =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness *
        radius;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
    }
    return positions;
  });

  const galaxyRef = React.useRef(null);
  useFrame((state, delta) => {
    galaxyRef.current.rotation.y += delta / 3;
  });

  return (
    <>
      <points ref={galaxyRef}>
        <bufferGeometry vertexColors={true}>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          size={parameters.size}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        >
          <GradientTexture
            stops={[0.6, 0.86]}
            colors={["#39586f", "#e63946"]}
            size={100}
          />
        </pointsMaterial>
      </points>
    </>
  );
}
