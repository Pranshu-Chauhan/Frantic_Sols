import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/exterior_architecture.glb"); // Ensure this file is inside the public folder

  return <primitive object={scene} scale={1} />;
};

const ThreeDModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [5, 2, 10], fov: 50 }}
      style={{ width: "500px", height: "400px" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Model />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default ThreeDModel;
