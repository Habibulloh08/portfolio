import { lazy, Suspense } from 'react'

const SceneNoir = lazy(() => import('./SceneNoir'))

export default function Scene3D() {
  return (
    <Suspense fallback={null}>
      <SceneNoir />
    </Suspense>
  )
}
