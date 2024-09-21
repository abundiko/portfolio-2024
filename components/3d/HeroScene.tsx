'use client'

import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Earth from './Earth'
import Orbit from './Orbit'
// import { OrbitControls as OR } from 'three/examples/jsm/Addons.js'

export default function HeroScene() {


    return (
        <div className='h-full w-full'>
            <Canvas>
                <ambientLight intensity={0.5} />
                {/* <directionalLight color="red" position={[0, 0, 5]} /> */}
                {/* <directionalLight color="green" position={[10, 10, 5]} /> */}
                <directionalLight color="pink" intensity={2} position={[10, -10, 10]} />
                <directionalLight color="blue" intensity={2} position={[10, 10, 10]} />
                <directionalLight color="green" intensity={2} position={[0, 0, 10]} />
                {/* <pointLight color={"white"} position={[0, 0, 10]} /> */}
                {/* <color attach="background" args={['#001']} /> */}
                {/* cube */}
                <Earth />
                {/* <Text3D
                    position={[0, 2, -2]}
                    castShadow
                
                    font={"/fonts/bauserif_Regular.json"}>
                    Bad {"\n"}
                    Decisions {"\n"}
                    Developers
                    <meshStandardMaterial color={"#ddf"} />
                </Text3D> */}
                <Stars count={200} />
                {/* <CubeCamera>
                    {(texture) => (
                        <mesh>
                            <sphereGeometry />
                            <meshStandardMaterial envMap={texture} />
                        </mesh>
                    )}
                </CubeCamera> */}
                <Orbit />
            </Canvas>

        </div>
    )
}
