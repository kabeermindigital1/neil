"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "../ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export const ThirdSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const list = document.querySelector(".list");
      const fill = document.querySelector(".fill");
      const listItems = gsap.utils.toArray<HTMLLIElement>("li");
      const slides = gsap.utils.toArray<HTMLElement>(".slide");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pin-section",
          start: "top top",
          end: `+=${listItems.length * 50}%`,
          pin: true,
          scrub: true,
          markers: true,
        },
      });

      if (fill) {
        gsap.set(fill, {
          scaleY: 1 / listItems.length,
          transformOrigin: "top left",
        });
      }

      listItems.forEach((item, i) => {
        const prev = listItems[i - 1];
        if (prev) {
          tl.set(item, { color: "#000" }, 0.5 * i)
            .to(slides[i], { autoAlpha: 1, duration: 0.2 }, "<")
            .set(prev, { color: "#000" }, "<")
            .to(slides[i - 1], { autoAlpha: 0, duration: 0.2 }, "<");
        } else {
          gsap.set(item, { color: "#000" });
          gsap.set(slides[i], { autoAlpha: 1 });
        }
      });

      tl.to({}, {}).to(
        fill,
        {
          scaleY: 1,
          transformOrigin: "top left",
          ease: "none",
          duration: tl.duration() - 0.5,
        },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <section className="w-full h-screen flex justify-center items-center bg-black"></section>

      <section className="w-full h-screen border-y-2 border-dashed border-gray-400 pin-section">
        <div className="w-full max-w-6xl h-[20%] mx-auto flex justify-center items-center">
          <SectionHeading text="Privacy at every step of your journey" />
        </div>
        <div className=" w-full h-[60%]  flex justify-center items-center">
          <div className="w-full max-w-6xl mx-auto flex px-4 relative content">
            <ul className="text-[30px] text-white pr-4 list capitalize">
              <li>Request</li>
              <li>Processing</li>
              <li>Completion</li>
              <li>Storage</li>
            </ul>

            <div className="absolute top-0 left-0 w-[2px] h-full bg-black fill"></div>

            <div className="flex-grow relative right">
              <div
                className="slide absolute top-0 right-0 w-[80%] h-[400px] opacity-0 invisible rounded-[10px] bg-center bg-cover flex items-end justify-center text-white text-3xl"
                style={{
                  backgroundImage: "url('./assets/images/request.jpeg')",
                }}
              >
                <h1 className="py-5 bg-black/50 px-4 rounded">
                  Your message encrypted before sending
                </h1>
              </div>
              <div
                className="slide absolute top-0 right-0 w-[80%] h-[400px] opacity-0 invisible rounded-[10px] bg-center bg-cover flex items-end justify-center text-white text-3xl"
                style={{
                  backgroundImage: "url('./assets/images/processing.png')",
                }}
              >
                <h1 className="py-5 bg-black/50 px-4 rounded">
                  Secure servers, no data retention
                </h1>
              </div>
              <div
                className="slide absolute top-0 right-0 w-[80%] h-[400px] opacity-0 invisible rounded-[10px] bg-center bg-cover flex items-end justify-center text-white text-3xl"
                style={{
                  backgroundImage: "url('./assets/images/completion.jpg')",
                }}
              >
                <h1 className="py-5 bg-black/50 px-4 rounded">
                  Task completed, sensitive details purged
                </h1>
              </div>
              <div
                className="slide absolute top-0 right-0 w-[80%] h-[400px] opacity-0 invisible rounded-[10px] bg-center bg-cover flex items-end justify-center text-white text-3xl"
                style={{
                  backgroundImage: "url('./assets/images/storage.jpg')",
                }}
              >
                <h1 className="py-5 bg-black/50 px-4 rounded">
                  Only preferences saved, with your permission
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-screen flex justify-center items-center bg-black"></section>
    </div>
  );
};
