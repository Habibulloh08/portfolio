import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scrollState } from '@/state'
import { buildTargets } from './shapes'

const SHAPES = 6
const smoothstep = (t: number) => t * t * (3 - 2 * t)

function makeSprite(): THREE.Texture {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, 'rgba(255,255,255,1)')
  grad.addColorStop(0.35, 'rgba(255,255,255,0.7)')
  grad.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

interface MorphingCloudProps {
  count: number
  colors: string[]
  size?: number
  spinSpeed?: number
  scale?: number
}

export function MorphingCloud({
  count,
  colors,
  size = 0.075,
  spinSpeed = 0.06,
  scale = 1,
}: MorphingCloudProps) {
  const geomRef = useRef<THREE.BufferGeometry>(null)
  const matRef = useRef<THREE.PointsMaterial>(null)
  const groupRef = useRef<THREE.Group>(null)
  const smooth = useRef(0)
  const lastF = useRef(-1)

  const targets = useMemo(() => buildTargets(count), [count])
  const positions = useMemo(() => targets[0].slice(), [targets])
  const sprite = useMemo(makeSprite, [])
  const threeColors = useMemo(() => colors.map((c) => new THREE.Color(c)), [colors])

  useFrame((_, delta) => {
    smooth.current = THREE.MathUtils.damp(smooth.current, scrollState.progress, 2.8, delta)
    const f = smooth.current * (SHAPES - 1)

    if (Math.abs(f - lastF.current) > 0.0005) {
      lastF.current = f
      const i0 = Math.min(Math.floor(f), SHAPES - 2)
      const t = smoothstep(Math.min(Math.max(f - i0, 0), 1))
      const a = targets[i0]
      const b = targets[i0 + 1]
      const pos = geomRef.current!.attributes.position.array as Float32Array
      for (let i = 0; i < pos.length; i++) {
        pos[i] = a[i] + (b[i] - a[i]) * t
      }
      geomRef.current!.attributes.position.needsUpdate = true
      matRef.current!.color.lerpColors(threeColors[i0], threeColors[i0 + 1], t)
    }

    if (groupRef.current) {
      const vel = Math.abs(scrollState.velocity)
      groupRef.current.rotation.y += delta * (spinSpeed + vel * 0.0015)
      groupRef.current.rotation.x = Math.sin(smooth.current * Math.PI * 2) * 0.12
    }
  })

  return (
    <group ref={groupRef} scale={scale}>
      <points>
        <bufferGeometry ref={geomRef}>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={matRef}
          size={size}
          map={sprite}
          alphaMap={sprite}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
    </group>
  )
}
