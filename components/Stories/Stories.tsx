"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { testimonials } from "@/lib/consts"

gsap.registerPlugin(ScrollTrigger)

export default function Stories() {
    const rootRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(".stories-header > *", {
                y: 60,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                }
            })

            // Cards animation
            const cards = gsap.utils.toArray(".testimonial-card")
            cards.forEach((card: any, i: number) => {
                gsap.from(card, {
                    y: 60,
                    scale: 0.9,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                    },
                    delay: (i % 3) * 0.15 // Horizontal stagger
                })
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={rootRef}
            id="stories"
            className="bg-neutral-50 py-24 px-6 md:px-24 text-black"
        >
            <div ref={headerRef} className="stories-header mb-20">
                <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Customer Stories</h2>
                <h3 className="text-4xl md:text-6xl font-poppins font-semibold leading-tight">
                    Hear from their<br />experience
                </h3>
            </div>

            <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="testimonial-card group p-8 bg-white border border-neutral-200 rounded-3xl hover:border-black transition-colors duration-300 flex flex-col justify-between min-h-[320px]"
                    >
                        <div>
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 text-black fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="font-manrope text-lg leading-relaxed text-neutral-800 mb-8 italic">
                                "{t.quote}"
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-semibold text-xl">{t.name}</span>
                            <span className="text-sm text-neutral-500 uppercase tracking-wider mt-1">{t.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
