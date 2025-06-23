'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const heading = 'seqoria';

const Hero = () => {
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const spans = boxRef.current?.querySelectorAll('span');
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
                    trigger: boxRef.current,
                    start: `top+=${i * 20}% 30%`,
                    end: `top+=${i * 20 + 60}% 30%`,
                    scrub: 0.5,
                },
            });
        });
    }, []);

    return (
        <section className="h-[210vh] w-full" style={{ background: '#f3f3f5' }}>
            <div className="w-full h-full flex items-center justify-center">
                <div
                    className="box"
                    ref={boxRef}
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {heading.split('').map((char, i) => (
                        <span
                            key={i}
                            style={{
                                fontWeight: 400,
                                fontStyle: 'normal',
                                textShadow:
                                    '0px 0px 5px rgba(31, 29, 46, 0.55)',
                                fontSize: '12rem',
                                textTransform: 'uppercase',
                                display: 'inline-block',
                                color: i < 3 ? '#0F52BA' : '#009B77',
                            }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </div>
                <div
                    className="box"
                    ref={boxRef}
                    style={{
                        position: 'fixed',
                        top: '90%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {heading.split('').map((char, i) => (
                        <span
                            key={i}
                            style={{
                                fontWeight: 400,
                                fontStyle: 'normal',
                                textShadow:
                                    '0px 0px 5px rgba(31, 29, 46, 0.55)',
                                fontSize: '12rem',
                                textTransform: 'uppercase',
                                display: 'inline-block',
                                color: i < 3 ? '#0F52BA' : '#009B77',
                            }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
