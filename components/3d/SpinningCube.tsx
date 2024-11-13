import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DirectionalLight, Mesh } from "three";

export default function SpinningCube() {
  return (
    <Canvas
      shadows
      // camera={{ fov: 75, position: [0, 0, 5], far: 1000, near: 0.1 }}
    >
      <ambientLight intensity={0.1} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <DLight />
      <MainCube />
    </Canvas>
  );
}

function MainCube() {
    const ref = useRef<Mesh>(null);
    useFrame((_, delta)=>{
        if(!ref.current || !_) return;
        ref.current.rotation.x += delta * 0.2
        ref.current.rotation.z += delta * 0.2
    })
    
  return (
    <>
      <mesh ref={ref} scale={1.2} position={[0, 0, 0]}>
        <icosahedronGeometry args={[2, 2]} />
        {/* <wireframeGeometry  /> */}
        <meshStandardMaterial flatShading color="blue" />
        <mesh scale={1.01} position={[0, 0, 0]}>
          <icosahedronGeometry args={[2, 2]} />
          {/* <wireframeGeometry  /> */}
          <meshStandardMaterial
            wireframe
            wireframeLinewidth={2}
            flatShading
            color="white"
          />
        </mesh>
      </mesh>
    </>
  );
}

function DLight() {
  const ref = useRef<DirectionalLight>(null);
//   useHelper(ref as never, DirectionalLightHelper);

  return (
    <>
      <directionalLight ref={ref} color={'blue'} position={[-1, 3, 1]} />
      <hemisphereLight color={"red"} groundColor={"green"} intensity={100} />
      <directionalLight color={'purple'} ref={ref} position={[1, 3, -1]} intensity={4} />
    </>
  );
}
