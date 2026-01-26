"use client"

import { ReactLenis } from "lenis/react"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/Navbar/Navbar"
import Intro from "../Intro/Intro"

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (visible) return

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    const lenis = lenisRef.current?.lenis
    if (!lenis) return () => gsap.ticker.remove(update)

    const onScroll = () => ScrollTrigger.update()
    lenis.on("scroll", onScroll)

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (typeof value === "number") {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll?.current ?? window.scrollY
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: document.documentElement.style.transform ? "transform" : "fixed",
    })

    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener("resize", onResize)

    ScrollTrigger.refresh()

    return () => {
      lenis.off("scroll", onScroll)
      window.removeEventListener("resize", onResize)
      gsap.ticker.remove(update)
    }
  }, [visible])

  if (visible) {
    return <Intro visible={visible} setVisible={setVisible} />
  }

  return (
    <>
      {/* <Intro visible={visible} setVisible={setVisible} /> */}
      <Navbar />
      <ReactLenis
        root
        ref={lenisRef}
        autoRaf={false}
        options={{
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 2,
        }}
      >
        {children}
      </ReactLenis>
    </>

  )
}
