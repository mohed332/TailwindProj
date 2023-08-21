import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const CubeModel = () => {
    const textRef = useRef();
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
  return (
    <>
        <mesh>
                <boxGeometry args={[2,2,2]} />
                <meshStandardMaterial>
                  <RenderTexture attach='map'>
                  <PerspectiveCamera
                    makeDefault
                    position={[0,0,3]}
                  />
                  <color attach='background' args={['magenta']}/>
                    <Text ref={textRef} fontSize={1} color={"red"}>
                      Hello
                    </Text>
                  </RenderTexture>
                </meshStandardMaterial>
            </mesh>
    </>
  )
}

export default CubeModel