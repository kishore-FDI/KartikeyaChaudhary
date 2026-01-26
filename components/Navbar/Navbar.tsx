"use client"

import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { NavItems } from "@/lib/consts"

export default function Navbar() {
  const headerRef = useRef<HTMLHeadElement>(null)
  const navRef = useRef<HTMLElement>(null)

useLayoutEffect(() => {
  if (!headerRef.current || !navRef.current) return

  const items = navRef.current.querySelectorAll("h1, a, button")

  const ctx = gsap.context(() => {
    gsap.set(headerRef.current, {
      scaleX: 0,
      transformOrigin: "50% 50%",
    })

    gsap.set(items, { y: 12, opacity: 0 })

    gsap.timeline()
      .to(headerRef.current, {
        scaleX: 1,
        duration: 0.7,
        ease: "power3.out",
      })
      .to(
        items,
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.25"
      )
  }, headerRef)

  return () => ctx.revert()
}, [])


  return (
    <header
      ref={headerRef}
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[92%] max-w-7xl z-50
        rounded-2xl overflow-hidden
        border border-white/10
        shadow-[0_12px_40px_rgba(0,0,0,0.6)]
      "
    >
      <div
        className="
          absolute inset-0
          [backdrop-filter:blur(15px)_saturate(140%)] backdrop-saturate-150
          bg-black/15
        "
        aria-hidden
      />

      <nav
        ref={navRef}
        className="relative flex items-center justify-between px-8 py-4 text-white"
      >
        <h1 className="text-lg font-semibold tracking-[-0.01em]">
          {NavItems.brand}
        </h1>

        <div className="flex gap-9 text-sm">
          {NavItems.links.map((l, i) => (
            <a
              key={i}
              className="text-white/60 hover:text-white transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <div className="flex gap-4">
            {NavItems.socials.map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                aria-label={label}
                className="text-white/60 hover:text-white transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <button className="text-xs px-5 py-2.5 rounded-full bg-lime-400 text-black font-medium">
            {NavItems.cta}
          </button>
        </div>
      </nav>
    </header>
  )
}
