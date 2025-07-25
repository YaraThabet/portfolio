import React from 'react'
import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
     <spotLight 
     position={[5,4,6]}
     angle={0.5}
     intensity={100}
     penumbra={1}
     color="#9d4edd"
     />
     <primitive
     object={new THREE.RectAreaLight('#A259ff')}
     />
     
    </>
  )
}

export default HeroLights;
