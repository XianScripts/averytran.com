import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box() {
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function Background() {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
      <OrbitControls />
    </Canvas>
  )
}
