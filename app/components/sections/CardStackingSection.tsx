"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    heading: "Encrypted by design",
    description: "All data encrypted in transit and at rest",
    image: "./assets/images/privacy1.png", // replace with actual image
  },
  {
    heading: "Never sold or shared",
    description: "Your information stays yours, period",
    image: "./assets/images/privacy2.png",
  },
  {
    heading: "You control your data",
    description: "Delete, modify, or export anytime",
    image: "./assets/images/privacy3.png", // replace with actual image
  },
];

export const CardStackingSection = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const stickDistance = 0;

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "center center",
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;

      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: `50% ${lastCardST.start + stickDistance}`,
      });

      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        markers: false,
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });
  }, []);

  return (
    <>
      <section className="py-16 overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto space-y-8 relative">
          {cardData.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="stackCard bg-opacity-90 rounded-3xl min-h-[450px] px-8 py-12 bg-white flex items-center justify-between gap-8"
              style={{
                backgroundColor: ["#f3f3f5", "#f3f3f5", "#f3f3f5"][i],
              }}
            >
              {/* Left: Text */}
              <div className="w-1/2 text-white">
                <h2 className="text-3xl font-bold mb-4">{card.heading}</h2>
                <p className="text-lg">{card.description}</p>
              </div>

              {/* Right: Image */}
              <div className="w-1/2">
                <img
                  src={card.image}
                  alt={card.heading}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="h-[1000px]"></section> */}
    </>
  );
};
