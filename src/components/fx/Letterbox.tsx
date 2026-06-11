/** Kino letterbox chiziqlari */
export function Letterbox() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-[45] h-[7vh] bg-gradient-to-b from-black to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[45] h-[7vh] bg-gradient-to-t from-black to-transparent"
      />
    </>
  )
}
