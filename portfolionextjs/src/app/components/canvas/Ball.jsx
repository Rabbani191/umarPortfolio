"use client";

import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import Loader from "./Loader";

// Separate the mesh component to handle texture loading
const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef();
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// BallCanvas component to render the Three.js scene
const BallCanvas = ({ icon }) => {
  return (
    <div className="w-full h-full">
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
