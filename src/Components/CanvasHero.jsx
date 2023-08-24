import { ContactShadows, OrbitControls, PerspectiveCamera, RenderTexture, ScrollControls, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import CubeModel from './CubeModel'


const CanvasHero = () => {
  return (
    <> 
        <div className='w-screen h-screen'>
        <Canvas camera={{fov: 25, position:[8,8,8]}}>
        <ambientLight intensity={2}/>
        <ScrollControls pages={3} damping={0.25}>

        <directionalLight position={[10,10,5]}/>
            <CubeModel/>
        <OrbitControls 
        enableZoom={false} 
        minPolarAngle={Math.PI / 10} 
        maxPolarAngle={Math.PI /2 } />
        <ContactShadows 
        frames={1} 
        position={[0, -0.5, 0]} 
        blur={1} 
        opacity={1}
        />
        <ContactShadows 
        frames={1} 
        position={[0, -0.5, 0]} 
        blur={3} 
        opacity={1}
        color={'red'}
        />
        </ScrollControls>
        </Canvas>
        </div>
    </>
  )
}

export default CanvasHero