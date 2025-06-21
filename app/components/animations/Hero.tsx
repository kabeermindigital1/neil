'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animatedElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const animatedElement = animatedElementRef.current;

        if (!container || !animatedElement) return;

        // Initial state
        gsap.set(animatedElement, {
            opacity: 0,
            scale: 0,
        });

        // Create the scroll-triggered animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;

                    if (progress <= 0.6) {
                        const opacityProgress = progress / 0.6;
                        gsap.set(animatedElement, {
                            opacity: opacityProgress,
                            scale: opacityProgress,
                        });
                    }
                    if (progress > 0.6 && progress <= 0.9) {
                        gsap.set(animatedElement, {
                            opacity: 1,
                            scale: 1,
                        });
                    }
                    if (progress > 0.9) {
                        const scaleProgress = (progress - 0.9) / 0.1;
                        const finalScale = 1 + scaleProgress * 2;
                        gsap.set(animatedElement, {
                            scale: finalScale,
                        });
                    }
                },
            },
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <main>
            {/* Section 1: The original hero text */}
            <div className="h-screen w-full flex flex-col items-center justify-center text-center">
                <h1 className="text-[96.94px] font-[700] bg-gradient-to-r from-[#0F52BA] to-[#009B77] inline-block text-transparent bg-clip-text">
                    seqoria
                </h1>
                <p className="text-[36.43px] text-gray-600">
                    Your Executive Assistant
                </p>
            </div>

            {/* Section 2: The animated section */}
            <div ref={containerRef} className="h-[300vh] w-full">
                <div
                    ref={animatedElementRef}
                    className="bg-blue-500 w-full h-screen sticky top-0 flex items-center justify-center"
                >
                    <h1 className="text-white text-4xl font-bold">
                        New Animated Section
                    </h1>
                </div>
            </div>
        </main>
    );
};

export default Hero;
