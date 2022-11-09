import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Geometry from "./Geometry.js";

function ThreeCanvas() {
  return (
    <div className="background">
      <Canvas className="">
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Geometry />
      </Canvas>
    </div>
  );
}

export default ThreeCanvas;
