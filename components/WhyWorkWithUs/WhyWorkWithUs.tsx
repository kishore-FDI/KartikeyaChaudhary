"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TrendingUp, Palette, Target } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function WhyWorkWithUs() {
    const rootRef = useRef<HTMLDivElement>(null)
    const leftRef = useRef<HTMLDivElement>(null)
    const rightRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feature-item", {
                x: -40,
                opacity: 0,
                stagger: 0.15,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: rootRef.current,
                    start: "top 75%",
                }
            })

            gsap.from(rightRef.current, {
                x: 60,
                rotateY: -20,
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
            id="why-us-detailed"
            className="bg-[#f5f5f0] py-32 px-6 md:px-24"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                {/* Left Side: Content */}
                <div ref={leftRef} className="flex-1 space-y-12">
                    <div>
                        <h2 className="text-5xl md:text-8xl font-poppins font-bold tracking-tight leading-[0.9] text-black mb-4">
                            WHY WORK <br />
                            WITH <span className="text-[#5d859a]">US?</span>
                        </h2>
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 font-semibold">THE NEO ADVANTAGE</p>
                    </div>

                    <div className="space-y-10">
                        <div className="feature-item flex gap-6">
                            <div className="w-12 h-12 bg-[#8fb0c0]/10 rounded-xl flex items-center justify-center text-[#5d859a] shrink-0">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold mb-2">GROWTH FOCUS</h4>
                                <p className="text-neutral-600 text-lg leading-relaxed">
                                    Scale your reach and retention with data-backed content loops.
                                </p>
                            </div>
                        </div>

                        <div className="feature-item flex gap-6">
                            <div className="w-12 h-12 bg-[#8fb0c0]/10 rounded-xl flex items-center justify-center text-[#5d859a] shrink-0">
                                <Palette size={24} />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold mb-2">BRANDING FOCUS</h4>
                                <p className="text-neutral-600 text-lg leading-relaxed">
                                    Premium visual narratives that build authority and trust.
                                </p>
                            </div>
                        </div>

                        <div className="feature-item flex gap-6">
                            <div className="w-12 h-12 bg-[#8fb0c0]/10 rounded-xl flex items-center justify-center text-[#5d859a] shrink-0">
                                <Target size={24} />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold mb-2">STRATEGY FOCUS</h4>
                                <p className="text-neutral-600 text-lg leading-relaxed">
                                    Engineered funnels designed to turn viewers into clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Mastering the Funnel Card */}
                <div ref={rightRef} className="flex-1 w-full flex justify-center lg:justify-end">
                    <div className="bg-black text-white p-12 md:p-16 rounded-[3rem] w-full max-w-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-[#5d859a]/10 transition-colors duration-700" />

                        <h3 className="text-4xl md:text-5xl font-poppins font-bold leading-tight mb-12">
                            MASTERING<br />THE FUNNEL
                        </h3>

                        <div className="space-y-10">
                            <div className="flex items-center gap-6">
                                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</div>
                                <p className="text-lg md:text-xl text-white/80">Attention Harvesting (Top-of-Funnel)</p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</div>
                                <p className="text-lg md:text-xl text-white/80">Trust Architecting (Mid-Funnel)</p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</div>
                                <p className="text-lg md:text-xl text-white/80">Authority Conversion (Bottom-of-Funnel)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
