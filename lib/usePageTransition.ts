// usePageTransition.ts
import { useLayoutEffect } from "react";
import gsap from "gsap";

export function usePageTransition(
  ref: React.RefObject<HTMLElement>
) {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    gsap.set(el, { opacity: 0, y: 24 });

    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    return () => {
      gsap.to(el, {
        opacity: 0,
        y: -24,
        duration: 0.4,
        ease: "power3.in",
      });
    };
  }, []);
}
