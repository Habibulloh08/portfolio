// React renderlardan tashqaridagi mutable store'lar.
// useFrame / rAF ichida o'qiladi — har framedagi re-renderning oldini oladi.

export const scrollState = {
  /** 0..1 — sahifaning umumiy scroll progressi */
  progress: 0,
  /** scroll tezligi (kamera roll / parallax uchun) */
  velocity: 0,
}
