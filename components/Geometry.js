import React from "react";

function Geometry() {
  return (
    <mesh rotation={[90,0,20]}>
      <torusKnotGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}

export default Geometry;
