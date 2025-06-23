'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate footer on scroll
            gsap.fromTo(
                footerRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 90%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // Stagger animate logo and links
            gsap.fromTo(
                logoRef.current,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 80%',
                    },
                }
            );

            gsap.fromTo(
                '.footer-link',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 70%',
                    },
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            style={{
                background: 'linear-gradient(135deg, #0F52BA 0%, #009B77 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Pattern */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 50%)
                    `,
                    pointerEvents: 'none',
                }}
            />

            {/* Floating Elements */}
            <div
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    animation: 'float 6s ease-in-out infinite',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '30%',
                    right: '15%',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '50%',
                    animation: 'float 8s ease-in-out infinite reverse',
                }}
            />

            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '2rem 2rem',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                {/* Main Footer Content */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        marginBottom: '2rem',
                    }}
                >
                    {/* Logo Section */}
                    <div>
                        <div
                            ref={logoRef}
                            style={{
                                marginBottom: '1rem',
                            }}
                        >
                            <Image
                                src="/assets/svg/logo.svg"
                                width={100}
                                height={100}
                                alt="Seqoria Logo"
                                style={{
                                    height: '40px',
                                    width: 'auto',
                                    filter: 'brightness(0) invert(1)',
                                }}
                            />
                            <p
                                style={{
                                    fontSize: '0.9rem',
                                    opacity: 0.9,
                                    marginTop: '0.5rem',
                                    fontFamily:
                                        'Quicksand, Arial, Helvetica, sans-serif',
                                    fontWeight: 300,
                                }}
                            >
                                Your intelligent executive assistant
                            </p>
                        </div>
                        <p
                            style={{
                                fontSize: '0.9rem',
                                lineHeight: 1.5,
                                opacity: 0.8,
                                fontFamily:
                                    'Quicksand, Arial, Helvetica, sans-serif',
                                fontWeight: 300,
                            }}
                        >
                            Transform your productivity with AI-powered
                            assistance. From booking flights to managing emails,
                            we handle it all.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3
                            style={{
                                fontSize: '1.2rem',
                                fontWeight: 300,
                                marginBottom: '1rem',
                                fontFamily:
                                    'Quicksand, Arial, Helvetica, sans-serif',
                            }}
                        >
                            Quick Links
                        </h3>
                        <ul
                            style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                            }}
                        >
                            {[
                                'Book Flights',
                                'Order Groceries',
                                'Schedule Rides',
                                'Email Management',
                            ].map((link, index) => (
                                <li
                                    key={index}
                                    className="footer-link"
                                    style={{
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    <a
                                        href="#"
                                        style={{
                                            color: 'white',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            opacity: 0.8,
                                            transition: 'all 0.3s ease',
                                            fontFamily:
                                                'Quicksand, Arial, Helvetica, sans-serif',
                                            fontWeight: 300,
                                            display: 'inline-block',
                                            position: 'relative',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.opacity = '1';
                                            e.currentTarget.style.transform =
                                                'translateX(10px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.opacity =
                                                '0.8';
                                            e.currentTarget.style.transform =
                                                'translateX(0)';
                                        }}
                                    >
                                        {link}
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: '-2px',
                                                left: 0,
                                                width: '0',
                                                height: '2px',
                                                background: 'white',
                                                transition: 'width 0.3s ease',
                                            }}
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3
                            style={{
                                fontSize: '1.2rem',
                                fontWeight: 300,
                                marginBottom: '1rem',
                                fontFamily:
                                    'Quicksand, Arial, Helvetica, sans-serif',
                            }}
                        >
                            Company
                        </h3>
                        <ul
                            style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                            }}
                        >
                            {['About Us', 'Contact', 'Support'].map(
                                (link, index) => (
                                    <li
                                        key={index}
                                        className="footer-link"
                                        style={{
                                            marginBottom: '0.5rem',
                                        }}
                                    >
                                        <a
                                            href="#"
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none',
                                                fontSize: '0.9rem',
                                                opacity: 0.8,
                                                transition: 'all 0.3s ease',
                                                fontFamily:
                                                    'Quicksand, Arial, Helvetica, sans-serif',
                                                fontWeight: 300,
                                                display: 'inline-block',
                                                position: 'relative',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.opacity =
                                                    '1';
                                                e.currentTarget.style.transform =
                                                    'translateX(10px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.opacity =
                                                    '0.8';
                                                e.currentTarget.style.transform =
                                                    'translateX(0)';
                                            }}
                                        >
                                            {link}
                                            <span
                                                style={{
                                                    position: 'absolute',
                                                    bottom: '-2px',
                                                    left: 0,
                                                    width: '0',
                                                    height: '2px',
                                                    background: 'white',
                                                    transition:
                                                        'width 0.3s ease',
                                                }}
                                            />
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3
                            style={{
                                fontSize: '1.2rem',
                                fontWeight: 300,
                                marginBottom: '1rem',
                                fontFamily:
                                    'Quicksand, Arial, Helvetica, sans-serif',
                            }}
                        >
                            Get in Touch
                        </h3>
                        <div
                            style={{
                                marginBottom: '1rem',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: '0.9rem',
                                    opacity: 0.8,
                                    marginBottom: '0.3rem',
                                    fontFamily:
                                        'Quicksand, Arial, Helvetica, sans-serif',
                                    fontWeight: 300,
                                }}
                            >
                                📧 hello@seqoria.com
                            </p>
                            <p
                                style={{
                                    fontSize: '0.9rem',
                                    opacity: 0.8,
                                    marginBottom: '0.3rem',
                                    fontFamily:
                                        'Quicksand, Arial, Helvetica, sans-serif',
                                    fontWeight: 300,
                                }}
                            >
                                📞 +1 (555) 123-4567
                            </p>
                            <p
                                style={{
                                    fontSize: '0.9rem',
                                    opacity: 0.8,
                                    fontFamily:
                                        'Quicksand, Arial, Helvetica, sans-serif',
                                    fontWeight: 300,
                                }}
                            >
                                📍 San Francisco, CA
                            </p>
                        </div>

                        {/* Social Links */}
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.8rem',
                            }}
                        >
                            {[
                                { icon: '🐦', label: 'Twitter' },
                                { icon: '💼', label: 'LinkedIn' },
                                { icon: '📘', label: 'Facebook' },
                                { icon: '📷', label: 'Instagram' },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="footer-link"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '35px',
                                        height: '35px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '50%',
                                        textDecoration: 'none',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease',
                                        backdropFilter: 'blur(10px)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background =
                                            'rgba(255,255,255,0.2)';
                                        e.currentTarget.style.transform =
                                            'translateY(-3px) scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background =
                                            'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.transform =
                                            'translateY(0) scale(1)';
                                    }}
                                    title={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.2)',
                        paddingTop: '1.5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                    }}
                >
                    <p
                        style={{
                            fontSize: '0.8rem',
                            opacity: 0.7,
                            margin: 0,
                            fontFamily:
                                'Quicksand, Arial, Helvetica, sans-serif',
                            fontWeight: 300,
                        }}
                    >
                        © 2024 Seqoria. All rights reserved.
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                        }}
                    >
                        {[
                            'Privacy Policy',
                            'Terms of Service',
                            'Cookie Policy',
                        ].map((link, index) => (
                            <a
                                key={index}
                                href="#"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontSize: '0.8rem',
                                    opacity: 0.7,
                                    transition: 'opacity 0.3s ease',
                                    fontFamily:
                                        'Quicksand, Arial, Helvetica, sans-serif',
                                    fontWeight: 300,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = '0.7';
                                }}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
