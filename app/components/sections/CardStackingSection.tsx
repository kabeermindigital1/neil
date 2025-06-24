"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    heading: "Encrypted by design",
    description: "All data encrypted in transit and at rest",
    image: "./assets/images/privacy1.png",
  },
  {
    heading: "Never sold or shared",
    description: "Your information stays yours, period",
    image: "./assets/images/privacy2.png",
  },
  {
    heading: "You control your data",
    description: "Delete, modify, or export anytime",
    image: "./assets/images/privacy3.png",
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
    <section className="py-20 overflow-hidden bg-white">
      <div className="w-full space-y-12 relative px-4 sm:px-8">
        {cardData.map((card, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="stackCard w-full bg-white rounded-3xl min-h-[600px] px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl"
          >
            {/* Left: Text */}
            <div className="w-full lg:w-1/2 ">
              <h2 className="text-7xl font-light text-[#0f52ba] mb-4">
                {card.heading}
              </h2>
              <p className="text-xl ">{card.description}</p>
            </div>

            {/* Right: Image */}
            <div className="w-full lg:w-1/2">
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
  );
};
