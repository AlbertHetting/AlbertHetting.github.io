// Hooks/DetailAni.jsx
import { useEffect } from "react";

export function useRevealOnScroll3(watch = null) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal3");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view3");
            io.unobserve(e.target); 
          }
        }
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [watch]); // re-run when 'watch' changes
}