"use client"

import { useEffect } from "react"
import gsap from "gsap"

export default function Loader({
  visible,
  setVisible,
}: {
  visible: boolean
  setVisible: (v: boolean) => void
}) {
  useEffect(() => {
    if (!visible) return

    document.documentElement.style.overflow = "hidden"

    const letters = gsap.utils.toArray<HTMLElement>(".loader-letter")

    gsap.set(letters, {
      opacity: 0,
      y: 40,
      scale: 0.8,
      filter: "blur(6px)",
    })

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = ""
        setVisible(false)
      },
    })

    tl.to(letters, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.9,
      ease: "elastic.out(1, 0.6)",
      stagger: 0.06,
    })
    .to(letters,{
      opacity:0,
      duration : 0.5,
      ease: "power2.inOut",
      stagger : 0.06
    })
      // .to(".loader-word", {
      //   scale: 1.05,
      //   duration: 0.4,
      //   ease: "power2.out",
      // })
      // .to(".loader-word", {
      //   scale: 1,
      //   duration: 0.3,
      // })
      // .to(".loader-word", {
      //   textShadow: "0 0 40px rgba(255,255,255,0.8)",
      //   duration: 0.4,
      //   ease: "power2.out",
      // })
      // .to(".loader", {
      //   opacity: 0,
      //   duration: 0.6,
      //   ease: "power2.inOut",
      // }, "+=0.8")

    return () => {
      document.documentElement.style.overflow = ""
    }
  }, [visible])

  if (!visible) return null

  const text = "neo.mediakey"

  return (
    <div className="loader fixed inset-0 z-9999 flex items-center justify-center bg-black">
      <div
        className="loader-word text-white text-6xl font-semibold tracking-tight"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {text.split("").map((c, i) => (
          <span
            key={i}
            className="loader-letter inline-block"
          >
            {c === " " ? "\u00A0" : c}
          </span>
        ))}
      </div>
    </div>
  )
}
