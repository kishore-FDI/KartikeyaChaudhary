"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { NavItems } from "@/lib/consts"

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
    const rootRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".footer-content > *", {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: rootRef.current,
                    start: "top 95%",
                }
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <footer
            ref={rootRef}
            className="bg-black text-white py-20 px-6 md:px-24 border-t border-white/5"
        >
            <div className="footer-content max-w-7xl mx-auto flex flex-col items-center">
                {/* Brand */}
                <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-[#5d859a]">
                    {NavItems.brand}
                </h2>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
                    {NavItems.links.map((link, i) => (
                        <a
                            key={i}
                            href={link[1]}
                            className="text-white/60 hover:text-white transition-colors uppercase tracking-widest text-sm font-medium"
                        >
                            {link[0]}
                        </a>
                    ))}
                </div>

                {/* Socials */}
                <div className="flex gap-8 mb-16">
                    {NavItems.socials.map(({ Icon, href, label }, i) => (
                        <a
                            key={i}
                            href={href}
                            aria-label={label}
                            className="text-white/40 hover:text-[#5d859a] transition-all duration-300 transform hover:scale-110"
                        >
                            <Icon size={24} />
                        </a>
                    ))}
                </div>

                {/* Copyright & Disclaimer */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-white/30 text-xs uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} {NavItems.brand.toUpperCase()}. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
