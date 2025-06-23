'use client';
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import AnimatedGrowImage from '../components/AnimatedGrowImage';

const heading = 'seqria';
const left = heading.slice(0, 3).split('');
const right = heading.slice(3).split('');

const Hero = () => {
    const splitTextRef = useRef<HTMLDivElement>(null);
    const [hideSubheading, setHideSubheading] = useState(false);

    useEffect(() => {
        const spans =
            splitTextRef.current?.querySelectorAll<HTMLSpanElement>('span');
        if (!spans) return;
        const start = -100;
        const end = 100;
        const steps = heading.length;
        const stepSize = (end - start) / (steps - 1);
        spans.forEach((span, i) => {
            gsap.to(span, {
                x: start + stepSize * i + '%',
                scale: 3,
                filter: 'blur(10px)',
                opacity: 0,
                scrollTrigger: {
                    trigger: splitTextRef.current,
                    start: `top+=${i * 20}% 30%`,
                    end: `top+=${i * 20 + 60}% 30%`,
                    scrub: 0.5,
                },
            });
        });
        // Animate subheading fade out after image animation
        const subheadingElem = document.getElementById('hero-subheading');
        if (subheadingElem && splitTextRef.current) {
            gsap.to(subheadingElem, {
                opacity: 0,
                scrollTrigger: {
                    trigger: splitTextRef.current,
                    start: 'top+=60% top',
                    end: 'bottom top',
                    scrub: true,
                    onUpdate: (self) => {
                        if (self.progress === 1) setHideSubheading(true);
                        else setHideSubheading(false);
                    },
                },
            });
        }
    }, []);

    return (
        <section className="h-[200vh] w-full" style={{ background: '#f3f3f5' }}>
            <div
                id="hero-sticky-trigger"
                style={{
                    position: 'sticky',
                    top: 0,
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div className="flex items-center justify-center w-full">
                    <div
                        ref={splitTextRef}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {/* Left text */}
                        {left.map((char, i) => (
                            <span
                                key={i}
                                style={{
                                    fontWeight: 300,
                                    fontStyle: 'normal',
                                    fontSize: '12rem',
                                    textTransform: 'uppercase',
                                    display: 'inline-block',
                                    color: '#0F52BA',
                                    fontFamily:
                                        'Quicksand, Arial, Helvetica, sans-serif',
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                        {/* Center image */}
                        <AnimatedGrowImage />
                        {/* Right text */}
                        {right.map((char, i) => (
                            <span
                                key={i + left.length}
                                style={{
                                    fontWeight: 300,
                                    fontStyle: 'normal',
                                    fontSize: '12rem',
                                    textTransform: 'uppercase',
                                    display: 'inline-block',
                                    color: '#009B77',
                                    fontFamily:
                                        'Quicksand, Arial, Helvetica, sans-serif',
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Subheading */}
                {!hideSubheading && (
                    <div
                        id="hero-subheading"
                        style={{
                            fontFamily:
                                'Quicksand, Arial, Helvetica, sans-serif',
                            fontWeight: 300,
                            fontSize: '2.5rem',
                            color: '#1f1d2e',
                            textAlign: 'center',
                            transition: 'opacity 1.2s',
                        }}
                    >
                        Your Executive Assistant
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;
