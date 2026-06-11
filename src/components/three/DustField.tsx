import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scrollState } from '@/state'

const COUNT = 6500

function makeSprite(): THREE.Texture {
  const size = 48
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, 'rgba(180,140,90,0.7)')
  grad.addColorStop(0.45, 'rgba(100,75,50,0.25)')
  grad.addColorStop(1, 'rgba(60,45,30,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

/** Faqat mayda, sekin suzuvchi chang zarralari — shakl morfingi yo'q */
export function DustField() {
  const groupRef = useRef<THREE.Group>(null)
  const sprite = useMemo(makeSprite, [])

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 38
      arr[i * 3 + 1] = (Math.random() - 0.5) * 28
      arr[i * 3 + 2] = (Math.random() - 0.5) * 32
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.015
    groupRef.current.rotation.x = Math.sin(scrollState.progress * Math.PI * 2) * 0.04
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          map={sprite}
          alphaMap={sprite}
          color="#5c4a38"
          transparent
          depthWrite={false}
          blending={THREE.NormalBlending}
          opacity={0.45}
          sizeAttenuation
        />
      </points>
    </group>
  )
}
