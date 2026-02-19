"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeoMediaKeyVSL from "./HeroMainVideo";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const videoWrapRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [headlineRef.current, copyRef.current, videoWrapRef.current, footerRef.current],
        { opacity: 0 }
      );

      gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%",
        },
      })
        .fromTo(
          headlineRef.current,
          { y: 120, scale: 0.96 },
          { y: 0, scale: 1, opacity: 0.035, duration: 1.4 }
        )
        .fromTo(
          copyRef.current,
          { y: 40, filter: "blur(6px)" },
          { y: 0, filter: "blur(0px)", opacity: 1, duration: 0.9 },
          "-=0.9"
        )
        .fromTo(
          videoWrapRef.current,
          { y: 80, scale: 0.92 },
          { y: 0, scale: 1, opacity: 1, duration: 1.2 },
          "-=0.7"
        )
        .fromTo(
          footerRef.current,
          { y: 24, letterSpacing: "0.6em" },
          { y: 0, letterSpacing: "0.25em", opacity: 1, duration: 0.8 },
          "-=0.6"
        );

      gsap.timeline({
        scrollTrigger: {
          trigger: videoWrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }).fromTo(videoWrapRef.current, { y: 60 }, { y: -60, ease: "none" });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative min-h-screen bg-black overflow-hidden px-4 flex flex-col justify-center"
    >
      <h1
        ref={headlineRef}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-bold tracking-tight text-[5rem] sm:text-[8rem] md:text-[14rem] lg:text-[18rem]"
      >
        ATTENTION
      </h1>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div
          ref={copyRef}
          className="max-w-xs text-center text-xs text-white/60 sm:max-w-md"
        >
          It’s not about posting more.
          <br />
          It’s about posting smarter.
        </div>

        <div
          ref={videoWrapRef}
          className="w-full max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-4xl will-change-transform"
        >
          <NeoMediaKeyVSL
            videoSrc="https://video.wixstatic.com/video/b64a6a_42cfba9189fd4d588e411e757878ab2b/720p/mp4/file.mp4"
            posterSrc="https://static.wixstatic.com/media/b64a6a_42cfba9189fd4d588e411e757878ab2bf000.jpg"
          />
        </div>

        <div
          ref={footerRef}
          className="flex items-center justify-center uppercase tracking-widest text-white/90 overflow-hidden will-change-transform"
          style={{ padding: "1rem 2rem" }}
        >
          <span className="text-[0.9rem] whitespace-nowrap">
            Strategy over volume
          </span>
        </div>
      </div>
    </section>
  );
}
