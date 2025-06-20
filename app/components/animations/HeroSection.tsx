"use client";
import React from "react";
import gsap from "gsap";
import { motion, useInView } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Meetus from "../custom/Meetus";

gsap.registerPlugin(ScrollTrigger);

const OurTeam: React.FC = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".scoped-styles",
        start: "-20% top",
        end: `+=200%`,
        pin: true,
      });

      gsap.to(".header .letters:first-child", {
        x: () => -innerHeight * 6,
        scale: 10,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".scoped-styles",
          start: "top top",
          end: `+=200%`,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      gsap.to(".header .letters:last-child", {
        x: () => innerHeight * 6,
        scale: 10,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".scoped-styles",
          start: "top top",
          end: `+=200%`,
          scrub: 1,
        },
      });

      gsap.to(".img-holder", {
        rotation: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scale: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".scoped-styles",
          start: "top top",
          end: `+=200%`,
          scrub: 1,
        },
      });
    },
    { scope: ref }
  );

  return (
    <motion.div
      ref={ref}
      className="scoped-styles mt-[450px] h-screen"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ type: "spring", stiffness: 100, damping: 50 }}
    >
      <div className="website-content">
        <div className="img-holder">
          <Meetus />
        </div>
      </div>
      <div className="header">
        <div className="letters">
          <div>o</div>
          <div>u</div>
          <div>r</div>
        </div>
        <div className="letters">
          <div>t</div>
          <div>e</div>
          <div>a</div>
          <div>m</div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurTeam;
