import { useGlobalState } from '@/state';
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react'
import { Group, Mesh, TextureLoader } from 'three'

const INDEX_2_SCALE = 6;
const INDEX_1_SCALE = 7;
const INDEX_3_SCALE = 15;
const INDEX_2_X = -4;
const INDEX_3_Y = 3;
const INDEX_3_Z = -6;

export default function Earth() {
    const { pageIndex } = useGlobalState();
    const ref = useRef<Mesh>(null);
    const groupRef = useRef<Group>(null);
    useFrame((state, delta) => {
        if (!ref.current || !groupRef.current) return;
        // console.log(delta);
        ref.current.rotation.x += delta * 0.3
        ref.current.rotation.y += delta * 0.3
        if (pageIndex == 2) {

            const nextScale = ref.current.scale.x + delta * 5;
            const scaleValue = nextScale > INDEX_3_SCALE ? INDEX_3_SCALE : nextScale;
            ref.current.scale.set(scaleValue, scaleValue, scaleValue);

            // ref.current.position.x += delta

            // const [x,y,z] = [];
        }
        if (pageIndex == 1) {
            const nextGroupX = groupRef.current.position.x - delta * 3;
            groupRef.current.position.x = nextGroupX > INDEX_2_X ? nextGroupX : INDEX_2_X
            
            const nextScale = ref.current.scale.x - delta * 5;
            const scaleValue = nextScale < INDEX_2_SCALE ? INDEX_2_SCALE : nextScale;
            ref.current.scale.set(scaleValue, scaleValue, scaleValue);
            
            // const [x,y,z] = [];
        }else{
            const nextGroupX = groupRef.current.position.x + delta * 3;
            groupRef.current.position.x = nextGroupX > 1 ? 1 : nextGroupX
            
        }
        if (pageIndex == 0) {

            const nextScale = ref.current.scale.x + delta * 5;
            const scaleValue = nextScale > INDEX_1_SCALE ? INDEX_1_SCALE : nextScale;
            ref.current.scale.set(scaleValue, scaleValue, scaleValue);

            // const [x,y,z] = [];
        }
    })

    const colorMap = useLoader(TextureLoader, '/images/earth.webp');

    return (
        <group ref={groupRef}>
            <mesh position={[-4, 1, -6]} rotation={[0, 0, 0]} scale={7} ref={ref}  >
                <sphereGeometry args={[1, 40, 40]} />
                <meshPhongMaterial color="white" map={colorMap} />
            </mesh>
        </group>
    )
}
