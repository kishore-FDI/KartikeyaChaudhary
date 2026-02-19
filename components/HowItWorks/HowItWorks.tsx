"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mic, PenTool, TrendingUp, Play } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function HowItWorks() {
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".how-card", {
                y: 80,
                scale: 0.95,
                opacity: 0,
                stagger: 0.2,
                duration: 1.2,
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
            id="how-it-works"
            className="bg-[#f5f5f0] py-24 px-6 md:px-24"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                {/* Card 1: You Record */}
                <div className="how-card group bg-[#e9e9e2] p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[400px]">
                    <div>
                        <div className="w-14 h-14 bg-[#8fb0c0] rounded-2xl flex items-center justify-center text-white mb-8">
                            <Mic size={28} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-poppins font-bold leading-tight mb-6">
                            YOU RECORD,<br />WE HANDLE THE REST
                        </h3>
                        <p className="text-neutral-600 font-manrope text-lg leading-relaxed">
                            Record your videos in your style, at your pace. Just send us the files, we'll take care of everything from here.
                        </p>
                    </div>
                </div>

                {/* Card 2: We Turn Clips */}
                <div className="how-card group bg-black p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] text-white">
                    <div>
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#8fb0c0] mb-8">
                            <PenTool size={28} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-poppins font-bold leading-tight mb-6">
                            WE TURN CLIPS<br />INTO CONTENT<br />THAT CONVERTS
                        </h3>
                        <p className="text-white/60 font-manrope text-lg leading-relaxed">
                            Our team carefully edits and refines your videos to reflect your brand's tone, turning simple recordings into polished, high-performing content.
                        </p>
                    </div>
                </div>

                {/* Card 3: More Reach */}
                <div className="how-card group bg-[#5d859a] p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] text-white">
                    <div>
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-8">
                            <TrendingUp size={28} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-poppins font-bold leading-tight mb-6">
                            MORE REACH,<br />MORE IMPACT
                        </h3>
                        <p className="text-white/80 font-manrope text-lg leading-relaxed">
                            Multi-platform optimization for maximum growth and authority.
                        </p>
                    </div>
                </div>

                {/* Card 4: Video UI Mockup */}
                <div className="how-card group bg-[#111] p-10 rounded-[2.5rem] flex flex-col justify-center items-center min-h-[400px] relative overflow-hidden">
                    <div className="w-full max-w-[280px] bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 relative z-10">
                        <div className="flex gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                        <div className="aspect-[16/9] bg-[#222] rounded-lg flex items-center justify-center mb-6">
                            <div className="w-12 h-12 bg-[#5d859a] rounded-full flex items-center justify-center text-white">
                                <Play size={20} className="fill-current ml-1" />
                            </div>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full mb-3">
                            <div className="h-full w-[60%] bg-[#5d859a] rounded-full" />
                        </div>
                        <div className="flex gap-2">
                            <div className="h-6 w-20 bg-white/5 rounded" />
                            <div className="h-6 w-20 bg-white/5 rounded" />
                        </div>
                    </div>
                    {/* Decorative radial gradient */}
                    <div className="absolute inset-0 bg-radial-gradient from-[#5d859a]/20 to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    )
}
