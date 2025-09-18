import { useEffect } from "react";

export function useRevealOnScroll4() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal4");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view4");
            io.unobserve(e.target); 
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}