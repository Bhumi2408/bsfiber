"use client";

import { useEffect, useRef, useState } from "react";

// Fades/zooms/slides its content in when scrolled into view.
// anim: "fade" | "zoom" | "fade-up" | "slide-up"
export default function Reveal({ as: Tag = "section", anim = "fade", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} data-anim={anim} className={`reveal ${shown ? "in" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
