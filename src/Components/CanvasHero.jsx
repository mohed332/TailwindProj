import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import CubeModel from './CubeModel'

const CanvasHero = () => {
  return (
    <> 
        <div className='w-screen h-screen'>
        <Canvas camera={{fov: 25, position:[8,8,8]}}>
        <OrbitControls enableZoom={false} autoRotate  />
        <ambientLight intensity={5}/>
        <directionalLight position={[3,2,1]}/>
            <CubeModel/>
        </Canvas>
        </div>
    </>
  )
}

export default CanvasHero