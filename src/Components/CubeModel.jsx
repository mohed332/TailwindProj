import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gasp from 'gasp';
import React, { useLayoutEffect, useRef } from 'react'

const CubeModel = () => {
    const textRef = useRef();
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.5))
    const refBlock = useRef();
    const tl = useRef();
    useLayoutEffect(() => {
      tl.current = gasp.timeline();

      tl.current.to(
        refBlock.current.position,
      )
    }, [])
  return (
    <>
      <group {...props} dispose={null} ref={refBlock}>

        <mesh>
                <boxGeometry args={[2,2,2]} />
                <meshStandardMaterial>
                  <RenderTexture attach='map' anisotropy={16}>
                  <PerspectiveCamera
                    makeDefault
                    position={[0,0,5]}
                    manual
                    aspect={1 / 3}
                  />
                  <color attach='background' args={['orange']}/>
                  <ambientLight intensity={0.5}/>
                  <directionalLight position={[10,10,5]}/>
                    <Text ref={textRef} fontSize={1} color={"purple"}>
                      Hello
                    </Text>
                  </RenderTexture>
                </meshStandardMaterial>
            </mesh>
      </group>
    </>
  )
}

export default CubeModel