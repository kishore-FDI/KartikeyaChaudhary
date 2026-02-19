// VideoBoundary.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Music2, Pause } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  videoSrc: string;
  posterSrc: string;
};

export default function ShortsVideoPlayer({ videoSrc, posterSrc }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const userControlled = useRef(false);

  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const [hover, setHover] = useState(false);
  const [showMutedTip, setShowMutedTip] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    v.muted = true;
    v.play().catch(() => {});
    const t = setTimeout(() => setShowMutedTip(false), 2000);

    let prevMuted = true;

    const st = ScrollTrigger.create({
      trigger: v,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        if (userControlled.current) return;
        v.muted = prevMuted;
        setMuted(prevMuted);
      },
      onEnterBack: () => {
        if (userControlled.current) return;
        v.muted = prevMuted;
        setMuted(prevMuted);
      },
      onLeave: () => {
        if (userControlled.current) return;
        prevMuted = v.muted;
        v.muted = true;
        setMuted(true);
      },
      onLeaveBack: () => {
        if (userControlled.current) return;
        prevMuted = v.muted;
        v.muted = true;
        setMuted(true);
      },
    });

    return () => {
      clearTimeout(t);
      st.kill();
    };
  }, []);

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;

    if (v.paused) {
      v.play().catch(() => {});
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  // set userControl as early as possible: pointer down
  const onMutePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    userControlled.current = true;
  };

  const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const v = ref.current;
    if (!v) return;

    const newMuted = !v.muted;
    v.muted = newMuted;
    setMuted(newMuted);

    // ensure user gesture activates audio if needed
    if (!newMuted) {
      // attempt to resume playback to satisfy autoplay/user-gesture policies
      v.play().catch(() => {});
    }
  };

  return (
    <div
      className="relative w-full aspect-auto overflow-hidden rounded-xl cursor-pointer"
      onClick={togglePlay}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <video
        ref={ref}
        className="w-full h-full object-cover"
        // src={videoSrc}
        poster={posterSrc}
        playsInline
        loop
        preload="metadata"
      />

      {paused && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 p-4 rounded-full">
            <Pause className="w-8 h-8 text-white" />
          </div>
        </div>
      )}

      <div className="absolute bottom-4 right-4">
        <button
          onPointerDown={onMutePointerDown}
          onClick={toggleMute}
          title={muted ? "Audio muted — click to unmute" : "Audio on — click to mute"}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className={`bg-black/60 p-3 rounded-full transition-opacity ${
            hover || muted ? "opacity-100" : "opacity-0"
          }`}
          // ensure the button itself doesn't allow the parent onClick to run
          onMouseDown={(e) => e.stopPropagation()}
        >
          {muted ? (
            <Music2 className="w-6 h-6 text-white" />
          ) : (
            <Music className="w-6 h-6 text-white" />
          )}
        </button>
        {/* optional small helper if you'd like a visible tip */}
        {muted && showMutedTip && (
          <div className="sr-only">Audio is muted. Click the button to enable sound.</div>
        )}
      </div>
    </div>
  );
}
