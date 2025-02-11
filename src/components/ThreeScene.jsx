import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

const CoffeeCup = () => {
  const { scene, animations } = useGLTF("/models/coffee_grinder.glb");
  const { actions } = useAnimations(animations, scene);

  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play(); // Play the first animation
    }
  }, [actions]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      const xNormalized = (clientX / window.innerWidth - 0.5) * 2;
      const yNormalized = (clientY / window.innerHeight - 0.5) * 2;

      const xRotation = -yNormalized * Math.PI * 0.2;
      const yRotation = xNormalized * Math.PI * 0.2;

      setRotation([xRotation, yRotation, 0]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <primitive object={scene} scale={15} position={[0, -2, 0]} rotation={rotation} />;
};

const ThreeScene = () => {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "flex-start",
      width: "100vw",
      paddingRight: "1300px",
      marginTop: "-20px", // Moves the canvas upwards
    }}
  >
      <Canvas style={{ width: "1200px", height: "800px"}} camera={{ position: [0, 2.5, 8], fov: 35 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 2, 5]} intensity={1} />
        <Suspense fallback={null}>
          <CoffeeCup />
        </Suspense>
        <OrbitControls enableZoom={true} minDistance={4} maxDistance={10} />
      </Canvas>
    </div>
  );
};



export default ThreeScene;
