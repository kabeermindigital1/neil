"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  text: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const letters = gsap.utils.toArray<HTMLSpanElement>(
      "span",
      headingRef.current
    );

    const tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.03,
      },
    });

    tl.to(letters, {
      y: 0,
      opacity: 1,
    });

    const trigger = ScrollTrigger.create({
      trigger: headingRef.current,
      start: "top 80%",
      onEnter: () => tl.play(),
      onEnterBack: () => tl.play(),
      // ⛔ Removed onLeave & onLeaveBack
    });

    return () => {
      trigger.kill();
      tl.kill();
    };
  }, [text]);

  return (
    <h1
      ref={headingRef}
      className="text-4xl font-bold text-6xl text-black inline-block  "
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block opacity-0 translate-y-5"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};
