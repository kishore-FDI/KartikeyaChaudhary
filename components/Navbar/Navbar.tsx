"use client"

import { useRef, useState, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { NavItems } from "@/lib/consts"

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  useLayoutEffect(() => {
    if (!headerRef.current || !navRef.current) return
    const items = navRef.current.querySelectorAll("h1, a, button")

    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { scaleX: 0, transformOrigin: "50% 50%" })
      gsap.set(items, { y: 12, opacity: 0 })

      gsap.timeline()
        .to(headerRef.current, { scaleX: 1, duration: 0.7, ease: "power3.out" })
        .to(items, {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.4,
          ease: "power2.out",
        }, "-=0.25")
    }, headerRef)

    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    if (!menuRef.current) return
    gsap.to(menuRef.current, {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0,
      duration: 0.35,
      ease: "power2.out",
      overflow: "hidden",
    })
  }, [open])

  return (
    <header
      ref={headerRef}
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[92%] max-w-5xl z-50
        rounded-2xl overflow-hidden
        border border-white/10
        shadow-[0_12px_40px_rgba(0,0,0,0.6)]
      "
    >
      <div
        className="
          absolute inset-0
          [backdrop-filter:blur(16px)_saturate(140%)]
          bg-black/25
        "
        aria-hidden
      />

      <nav
        ref={navRef}
        className="relative flex items-center justify-between px-6 py-4 text-white"
      >
        <h1 className="text-lg font-semibold">
          {NavItems.brand}
        </h1>

        <div className="hidden md:flex gap-9 text-md">
          {NavItems.links.map((l, i) => (
            <a key={i} className="text-white/80 hover:text-white" href={l[1]}>
              {l[0]}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          {NavItems.socials.map(({ Icon, href, label }, i) => (
            <a key={i} href={href} aria-label={label} className="text-white/60 hover:text-white">
              <Icon size={20} />
            </a>
          ))}
          <button className="text-xs px-5 py-2.5 rounded-full bg-lime-400 text-black font-medium">
            {NavItems.cta}
          </button>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-px bg-white" />
          <span className="w-6 h-px bg-white" />
          <span className="w-6 h-px bg-white" />
        </button>
      </nav>

      <div
        ref={menuRef}
        className="md:hidden relative px-6 pb-1"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="flex flex-col gap-5 pt-4 text-sm">
          {NavItems.links.map((l, i) => (
            <a key={i} className="text-white/80">
              {l}
            </a>
          ))}

          <div className="flex gap-4 pt-2">
            {NavItems.socials.map(({ Icon, href, label }, i) => (
              <a key={i} href={href} aria-label={label} className="text-white/70">
                <Icon size={20} />
              </a>
            ))}
          </div>

          <button className="w-fit text-xs px-2.5   py-2.5 rounded-full bg-lime-400 text-black font-medium mb-4">
            {NavItems.cta}
          </button>
        </div>
      </div>
    </header>
  )
}
