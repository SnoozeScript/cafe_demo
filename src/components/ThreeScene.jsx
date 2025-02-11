import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

const CoffeeCup = () => {
  const { scene, animations } = useGLTF("/models/coffee_grinder.glb");
  const { actions } = useAnimations(animations, scene);

  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const xNormalized = (clientX / window.innerWidth - 0.5) * 2;
      const yNormalized = (clientY / window.innerHeight - 0.5) * 2;
      const xRotation = -yNormalized * Math.PI * 0.1; // Reduced rotation sensitivity
      const yRotation = xNormalized * Math.PI * 0.1;
      setRotation([xRotation, yRotation, 0]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <primitive object={scene} scale={10} position={[0, -1.5, 0]} rotation={rotation} />;
};

const ThreeScene = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 2, 6], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <CoffeeCup />
        </Suspense>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;