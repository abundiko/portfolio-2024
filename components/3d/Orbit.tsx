import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

export default function Orbit() {



    return (
        <>

            <PerspectiveCamera makeDefault manual 
            position={[0, 0, 200]}
            args={[100, 2]}
            zoom={4}
            rotation={[10,0,0]}
             />
            <OrbitControls enableZoom={false} maxDistance={6} />
        </>
    )
}
