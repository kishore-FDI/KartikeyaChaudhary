"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
    const rootRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current, {
                y: 120,
                scale: 0.95,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: rootRef.current,
                    start: "top 75%",
                }
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={rootRef}
            id="cta"
            className="bg-black py-32 px-6 md:px-24 text-white overflow-hidden relative"
        >
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none" />

            <div ref={contentRef} className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="text-sm uppercase tracking-[0.3em] text-white/50 mb-8">Ready to Unlock?</h2>

                <h3 className="text-5xl md:text-8xl font-poppins font-bold leading-[0.95] mb-12 tracking-tight">
                    BOOK YOUR <br />
                    <span className="text-lime-400 italic">DISCOVERY CALL</span>
                </h3>

                <p className="font-manrope text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto">
                    Direct line to the Team. <br className="hidden md:block" />
                    Let's discuss your vision.
                </p>

                <a
                    href="#"
                    className="inline-flex items-center gap-4 bg-lime-400 text-black px-10 py-6 rounded-full text-xl font-semibold hover:bg-white hover:scale-105 transition-all duration-300 group"
                >
                    Schedule Now
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            </div>
        </section>
    )
}
