'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper';
import { Autoplay, EffectFlip } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const slidesData = [
    {
        heading: 'Productivity',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        bg: '#E3F2FD',
        img: '/assets/images/plan.jpg',
    },
    {
        heading: 'Collaboration',
        para: 'Work together in real-time, wherever you are.',
        bg: '#FFF3E0',
        img: '/assets/images/plan.jpg',
    },
    {
        heading: 'Security',
        para: 'Your data is protected with industry-leading security.',
        bg: '#E8F5E9',
        img: '/assets/images/plan.jpg',
    },
    {
        heading: 'Support',
        para: '24/7 support to help you succeed at every step.',
        bg: '#F3E5F5',
        img: '/assets/images/plan.jpg',
    },
];

const AnimatedGrowImage = () => {
    useEffect(() => {
        const triggerElem = document.getElementById('hero-sticky-trigger');
        const sliderElem = document.getElementById('slider-fade-in');
        if (triggerElem && sliderElem) {
            gsap.fromTo(
                sliderElem,
                { opacity: 1 },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: triggerElem,
                        start: 'top+=50% top',
                        end: 'top+=70% top',
                        scrub: true,
                    },
                }
            );
        }
    }, []);

    // Animate content overlay on slide change
    const onSlideChange = (swiper: SwiperCore) => {
        const overlays = document.querySelectorAll('.slider-content-overlay');
        overlays.forEach((el, idx) => {
            if (idx === swiper.activeIndex) {
                gsap.fromTo(
                    el,
                    { y: -60, opacity: 0 },
                    { y: 0, opacity: 1, duration: 2.7, ease: 'power3.out' }
                );
            } else {
                gsap.set(el, { y: -60, opacity: 0 });
            }
        });
    };

    const imageRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const triggerElem = document.getElementById('hero-sticky-trigger');
        if (imageRef.current && triggerElem) {
            gsap.fromTo(
                imageRef.current,
                {
                    width: 145,
                    height: 145,
                    borderRadius: '50%',
                    x: 0,
                    opacity: 1,
                },
                {
                    width: '100vw',
                    height: '100vh',
                    borderRadius: '0px',
                    x: '-3vw',
                    opacity: 1,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: triggerElem,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );
            // Fade out image from 50% to 70%
            gsap.to(imageRef.current, {
                opacity: 0,
                scrollTrigger: {
                    trigger: triggerElem,
                    start: 'top+=50% top',
                    end: 'top+=70% top',
                    scrub: true,
                },
            });
        }
    }, []);
    return (
        <div
            ref={imageRef}
            style={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                overflow: 'hidden',
                margin: 0,
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                id="slider-fade-in"
                style={{
                    opacity: 0,
                    transition: 'opacity 0.8s',
                    width: '100vw',
                    height: '100vh',
                }}
            >
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    style={{ width: '100vw', height: '100vh' }}
                    onSlideChange={onSlideChange}
                    onSwiper={onSlideChange}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, EffectFlip]}
                    effect="flip"
                >
                    {slidesData.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                            <div
                                style={{
                                    position: 'relative',
                                    borderRadius: 0,
                                    width: '100vw',
                                    height: '100vh',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundImage: `url(${slide.img})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    overflow: 'hidden',
                                }}
                            >
                                <div
                                    className="slider-content-overlay px-10 overflow-hidden"
                                    style={{
                                        width: '30vw',
                                        maxWidth: '90vw',
                                        height: '100vh',
                                        background: 'rgba(255,255,255,0.15)',
                                        overflow: 'hidden',
                                        backdropFilter: 'blur(16px)',
                                        WebkitBackdropFilter: 'blur(16px)',
                                        borderLeft: '4px solid #0F52BA',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'absolute',
                                        right: '0',
                                        top: '0',
                                        left: 'unset',
                                        transform: 'none',
                                        zIndex: 2,
                                        boxShadow:
                                            '0 4px 32px rgba(0,0,0,0.10)',
                                        opacity: idx === 0 ? 1 : 0,
                                        boxSizing: 'border-box',
                                        padding: '2rem',
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontSize: '2.5rem',
                                            marginBottom: '1.2rem',
                                            fontWeight: 300,
                                            textAlign: 'center',
                                            color: '#0F52BA',
                                            zIndex: 2,
                                            position: 'relative',
                                            width: '100%',
                                            maxWidth: '100%',
                                            overflowWrap: 'break-word',
                                            wordBreak: 'break-word',
                                            whiteSpace: 'pre-line',
                                            fontFamily: ' sans-serif',
                                        }}
                                    >
                                        {slide.heading}
                                    </h3>
                                    <p
                                        className="px-10"
                                        style={{
                                            fontSize: '1.3rem',
                                            color: '#222',
                                            margin: 0,
                                            width: '100%',
                                            maxWidth: '100%',
                                            overflowWrap: 'break-word',
                                            wordBreak: 'break-word',
                                            whiteSpace: 'pre-line',
                                            textAlign: 'center',
                                            zIndex: 2,
                                            position: 'relative',
                                            fontFamily:
                                                'Quicksand, Arial, Helvetica, sans-serif',
                                            fontWeight: 300,
                                        }}
                                    >
                                        {slide.para}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AnimatedGrowImage;
