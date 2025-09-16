import { useEffect } from "react";

export function useRevealOnScroll2() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal2");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view2");
            io.unobserve(e.target); // play once
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}