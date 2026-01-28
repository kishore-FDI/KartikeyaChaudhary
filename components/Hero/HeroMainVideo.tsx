// HeroMainVideo.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Music, Music2, Pause } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type NeoMediaKeyVSLProps = {
  videoSrc: string;
  posterSrc: string;
};

export default function NeoMediaKeyVSL({
  videoSrc,
  posterSrc,
}: NeoMediaKeyVSLProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [showControls, setShowControls] = useState(false);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const [showMutedTip, setShowMutedTip] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let prevMuted = v.muted;

    const st = ScrollTrigger.create({
      trigger: v,
      start: "top bottom",
      end: "bottom top",
      onLeave: () => {
        prevMuted = v.muted;
        v.muted = true;
        setMuted(true);
      },
      onLeaveBack: () => {
        prevMuted = v.muted;
        v.muted = true;
        setMuted(true);
      },
      onEnter: () => {
        v.muted = prevMuted;
        setMuted(prevMuted);
      },
      onEnterBack: () => {
        v.muted = prevMuted;
        setMuted(prevMuted);
      },
    });

    return () => st.kill();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.play();
    const t = setTimeout(() => setShowMutedTip(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.paused ? v.play() : v.pause();
    setPaused(v.paused);
  };

  const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) setShowMutedTip(false);
  };

  return (
    <div
      className="relative w-full aspect-video overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl cursor-pointer"
      onClick={togglePlay}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        preload="metadata"
        playsInline
        loop
        poster={posterSrc}
      >
        {/* <source src={videoSrc} type="video/mp4" /> */}
      </video>

      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          paused ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-black/60 p-3 sm:p-4 rounded-full">
          <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
      </div>

      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
        <Tooltip.Provider>
          <Tooltip.Root open={muted && (showControls || showMutedTip)}>
            <Tooltip.Trigger asChild>
              <button
                onClick={toggleMute}
                className={`bg-black/60 p-2 sm:p-3 rounded-full transition-opacity duration-300 ${
                  showControls || muted ? "opacity-100" : "opacity-0"
                }`}
              >
                {muted ? (
                  <Music2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                ) : (
                  <Music className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                )}
              </button>
            </Tooltip.Trigger>
            <Tooltip.Content
              side="left"
              className="bg-black text-white text-xs px-3 py-2 rounded hidden sm:block"
            >
              Audio muted
              <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    </div>
  );
}
