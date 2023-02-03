import React from "react";

function Geometry() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <torusKnotGeometry attach="geometry" args={[1, 0.4, 109, 5, 1, 12]} />
      <meshLambertMaterial attach="material" color="cyan" />
    </mesh>
  );
}

export default Geometry;

//how to increase the tubular segment of torus Knot Geometry in react-three?
