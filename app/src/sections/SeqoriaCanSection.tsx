'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TrueFocus from '@/app/src/components/TrueFocus';

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        heading: 'Seqoria Can...........',
        content: 'Discover what Seqoria can do for you.',
        gradient:
            'linear-gradient(135deg, #0F52BA 0%, #1E88E5 50%, #42A5F5 100%)',
        icon: '🚀',
        accent: '#E3F2FD',
    },
    {
        heading: 'Book your flights',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        gradient:
            'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 50%, #FFB3B3 100%)',
        icon: '✈️',
        accent: '#FFEBEE',
    },
    {
        heading: 'Order your groceries',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        gradient:
            'linear-gradient(135deg, #4CAF50 0%, #66BB6A 50%, #81C784 100%)',
        icon: '🛒',
        accent: '#E8F5E9',
    },
    {
        heading: 'Schedule you a Ride',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        gradient:
            'linear-gradient(135deg, #9C27B0 0%, #BA68C8 50%, #CE93D8 100%)',
        icon: '🚗',
        accent: '#F3E5F5',
    },
];

const SeqoriaCanSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const scrollTween = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        function setupAnimation() {
            if (!sectionRef.current || !cardsRef.current) return;
            const totalWidth = cards.length * window.innerWidth;
            gsap.set(cardsRef.current, { width: `${cards.length * 100}vw` });
            if (scrollTween.current) scrollTween.current.kill();
            scrollTween.current = gsap.to(cardsRef.current, {
                x: `-${totalWidth - window.innerWidth}`,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: `+=${totalWidth}`,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
            });
        }
        setupAnimation();
        window.addEventListener('resize', setupAnimation);
        return () => {
            window.removeEventListener('resize', setupAnimation);
            if (scrollTween.current) scrollTween.current.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                background: 'linear-gradient(135deg, #f7f8fa 0%, #e3f2fd 100%)',
                position: 'relative',
                width: '100vw',
                height: '100vh',
            }}
            className="overflow-hidden"
        >
            <div
                ref={cardsRef}
                style={{
                    display: 'flex',
                    width: `${cards.length * 100}vw`,
                    height: '100vh',
                }}
            >
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        style={{
                            width: '100vw',
                            height: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: ' sans-serif',
                            fontWeight: 300,
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {idx === 0 ? (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100vw',
                                    height: '100vh',
                                    background: 'transparent',
                                    position: 'relative',
                                    fontFamily:
                                        'Quicksand, Arial, Helvetica, sans-serif',
                                    fontWeight: 300,
                                }}
                            >
                                {/* Background pattern */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background:
                                            'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                                        pointerEvents: 'none',
                                    }}
                                />
                                <TrueFocus
                                    sentence="Seqoria Can..."
                                    blurAmount={8}
                                    borderColor="#fff"
                                    glowColor="rgba(255,255,255,0.5)"
                                    animationDuration={0.6}
                                    pauseBetweenAnimations={1.2}
                                />
                            </div>
                        ) : (
                            <div
                                style={{
                                    width: '90vw',
                                    maxWidth: '1200px',
                                    height: '80vh',
                                    background: 'rgba(255, 255, 255, 0.95)',
                                    backdropFilter: 'blur(20px)',
                                    borderRadius: '24px',
                                    boxShadow:
                                        '0 20px 60px rgba(0, 0, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '4rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    fontFamily:
                                        'Quicksand, Arial, Helvetica, sans-serif',
                                    fontWeight: 300,
                                }}
                            >
                                {/* Card background gradient */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: card.gradient,
                                        opacity: 0.05,
                                        borderRadius: '24px',
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    style={{
                                        fontSize: '4rem',
                                        marginBottom: '2rem',
                                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                                        animation:
                                            'float 3s ease-in-out infinite',
                                    }}
                                >
                                    {card.icon}
                                </div>

                                {/* Heading */}
                                <h2
                                    style={{
                                        fontSize: '3.5rem',
                                        fontWeight: 300,
                                        marginBottom: '1.5rem',
                                        textAlign: 'center',
                                        background: card.gradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        lineHeight: 1.2,
                                        letterSpacing: '-0.02em',
                                        fontFamily:
                                            'Quicksand, Arial, Helvetica, sans-serif',
                                    }}
                                >
                                    {card.heading}
                                </h2>

                                {/* Content */}
                                <p
                                    style={{
                                        fontSize: '1.25rem',
                                        textAlign: 'center',
                                        maxWidth: '600px',
                                        lineHeight: 1.6,
                                        color: '#4A5568',
                                        fontWeight: 300,
                                        margin: 0,
                                        fontFamily:
                                            'Quicksand, Arial, Helvetica, sans-serif',
                                    }}
                                >
                                    {card.content}
                                </p>

                                {/* Accent line */}
                                <div
                                    style={{
                                        width: '60px',
                                        height: '4px',
                                        background: card.gradient,
                                        borderRadius: '2px',
                                        marginTop: '2rem',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    }}
                                />

                                {/* Floating elements */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '20%',
                                        right: '10%',
                                        width: '60px',
                                        height: '60px',
                                        background: card.accent,
                                        borderRadius: '50%',
                                        opacity: 0.3,
                                        animation:
                                            'float 4s ease-in-out infinite',
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '20%',
                                        left: '10%',
                                        width: '40px',
                                        height: '40px',
                                        background: card.accent,
                                        borderRadius: '50%',
                                        opacity: 0.2,
                                        animation:
                                            'float 5s ease-in-out infinite reverse',
                                    }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Add CSS animations */}
            <style jsx>{`
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </section>
    );
};

export default SeqoriaCanSection;
