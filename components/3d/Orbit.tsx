import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

export default function Orbit() {
    const orbitRef = useRef<any>()

    useFrame((_, delta) => {
        if (orbitRef.current) {
            orbitRef.current.zoom0 += delta
            // console.log(orbitRef.current);

        }
    })

    return (
        <>

            <PerspectiveCamera makeDefault manual 
            position={[0, 0, 200]}
            args={[100, 2]}
            zoom={4}
            rotation={[10,0,0]}
             />
            <OrbitControls ref={orbitRef as any} enableZoom={false} maxDistance={6} />
        </>
    )
}
