// app/page.tsx
"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from "@/components/Hero/Hero"
import WhyUs from "@/components/WhyUs/WhyUs"
import HowItWorks from "@/components/HowItWorks/HowItWorks"
import WhyWorkWithUs from "@/components/WhyWorkWithUs/WhyWorkWithUs"
import Short from "@/components/Shorts/Short"
import Stories from "@/components/Stories/Stories"
import CTA from "@/components/CTA/CTA"
import Footer from "@/components/Footer/Footer"
import { vertexShader, fragmentShader } from "@/lib/shader"
import * as THREE from "three"
import { SHADERCONFIG } from "@/lib/consts"
import { hexToRgb } from "@/lib/helper"

gsap.registerPlugin(ScrollTrigger)

function splitText(el: HTMLElement, mode: "char" | "word") {
  const ps = el.querySelectorAll<HTMLParagraphElement>("p")
  const items: HTMLElement[] = []

  ps.forEach(p => {
    const text = p.innerText
    p.innerHTML =
      mode === "char"
        ? text
          .split("")
          .map(c =>
            c === " "
              ? `<span class="unit">&nbsp;</span>`
              : `<span class="unit">${c}</span>`
          )
          .join("")
        : text
          .split(" ")
          .map(w => `<span class="unit">${w} </span>`)
          .join("")

    items.push(...Array.from(p.querySelectorAll(".unit")) as HTMLElement[])
  })

  return items
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const heroRef = useRef<HTMLDivElement | null>(null)
  const whyRef = useRef<HTMLDivElement | null>(null)

  const t1Ref = useRef<HTMLDivElement | null>(null)
  const t2Ref = useRef<HTMLDivElement | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const scrollProgress = useRef(0)
  const scrollEnabled = useRef(false)

  /* ===================== THREE ===================== */
  useEffect(() => {
    if (!canvasRef.current || !whyRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false,
    })

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    const rgb = hexToRgb(SHADERCONFIG.color)

    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader, // MUST include `precision highp float;`
      transparent: true,
      uniforms: {
        uProgress: { value: 0 },
        uResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        uColor: {
          value: new THREE.Vector3(rgb.r, rgb.g, rgb.b),
        },
        uSpread: { value: SHADERCONFIG.spread },
      },
    })

    scene.add(new THREE.Mesh(geometry, material))

    let raf = 0

    const animate = () => {
      material.uniforms.uProgress.value = scrollEnabled.current
        ? scrollProgress.current
        : 0.0

      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }

    animate()

    const onScroll = () => {
      if (!scrollEnabled.current) return

      const el = whyRef.current!
      const rect = el.getBoundingClientRect()
      const scroll = Math.max(0, -rect.top)
      const maxScroll = Math.max(1, el.offsetHeight - window.innerHeight)

      scrollProgress.current = Math.min(scroll / maxScroll, 1.1)
    }

    const onResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      renderer.setSize(w, h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      material.uniforms.uResolution.value.set(w, h)
    }

    window.addEventListener("scroll", onScroll)
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  /* ===================== GSAP ===================== */
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const mode = isMobile ? "word" : "char"

    const ctx = gsap.context(() => {
      gsap.set(whyRef.current, {
        position: "fixed",
        inset: 0,
        yPercent: 100,
        zIndex: 20,
      })

      gsap.set(".headline-line", { yPercent: 120, opacity: 0 })

      const t1Units = splitText(t1Ref.current!, mode)
      const t2Units = splitText(t2Ref.current!, mode)

      gsap.set(".unit", {
        display: mode === "char" ? "inline-block" : "inline",
        willChange: "transform, opacity",
      })

      gsap.set(t1Units, { opacity: 1, y: 0 })
      gsap.set(t2Units, { opacity: 0, y: 12 })
      gsap.set(progressRef.current, { width: "0%" })

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
          onUpdate: self => {
            if (self.progress === 1) scrollEnabled.current = true
          },
        },
      })
        .to(heroRef.current, { scale: 0.9, y: -120, ease: "none" }, 0)
        .to(whyRef.current, { yPercent: 0, ease: "none" }, 0.15)
        .to(
          ".headline-line",
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.08,
            ease: "power3.out",
          },
          0.45
        )
        .to(
          t1Units,
          {
            opacity: 0,
            y: -12,
            stagger: isMobile ? 0.04 : 0.008,
            ease: "power2.out",
          },
          1
        )
        .to(
          t2Units,
          {
            opacity: 1,
            y: 0,
            stagger: isMobile ? 0.04 : 0.008,
            ease: "power2.out",
          },
          1.2
        )
        .to(
          progressRef.current,
          {
            width: "100%",
            ease: "none",
            duration: 1.2,
          },
          1
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <main ref={containerRef} className="relative bg-black text-white overflow-hidden">
      <div ref={heroRef} className="relative z-10">
        <Hero />
      </div>
      <div ref={whyRef} className="pointer-events-none">
        <WhyUs t1Ref={t1Ref} t2Ref={t2Ref} progressRef={progressRef} />
      </div>
      <canvas ref={canvasRef} className="fixed inset-0 z-50 pointer-events-none" />
      <HowItWorks />
      <WhyWorkWithUs />
      <Short />
      <Stories />
      <CTA />
      <Footer />
    </main>
  )
}
