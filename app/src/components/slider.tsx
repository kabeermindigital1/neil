import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

type SlideData = {
    heading: string;
    para: string;
    bg: string;
    img: string;
};

const slidesData: SlideData[] = [
    {
        heading: 'Productivity',
        para: 'Boost your workflow with our smart tools and integrations.',
        bg: '#E3F2FD',
        img: '/assets/images/hero.png',
    },
    {
        heading: 'Collaboration',
        para: 'Work together in real-time, wherever you are.',
        bg: '#FFF3E0',
        img: '/assets/images/hero.png',
    },
    {
        heading: 'Security',
        para: 'Your data is protected with industry-leading security.',
        bg: '#E8F5E9',
        img: '/assets/images/hero.png',
    },
    {
        heading: 'Support',
        para: '24/7 support to help you succeed at every step.',
        bg: '#F3E5F5',
        img: '/assets/images/hero.png',
    },
];

const Slider = () => {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            style={{ width: '100vw', height: '100vh' }}
        >
            {slidesData.map((slide: SlideData, idx: number) => (
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
                            className="slider-content-overlay"
                            style={{
                                width: '40vw',
                                height: '40vh',
                                // maxWidth: '90vw',
                                maxHeight: '90vh',
                                minWidth: 0,
                                background: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(16px)',
                                WebkitBackdropFilter: 'blur(16px)',
                                borderLeft: '4px solid #0F52BA',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                position: 'absolute',
                                right: '5vw',
                                top: '5vh',
                                left: 'unset',
                                transform: 'none',
                                zIndex: 2,
                                boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
                                overflow: 'auto',
                                overflowWrap: 'break-word',
                                wordBreak: 'break-all',
                                boxSizing: 'border-box',
                                padding: '2rem',
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '1.2rem',
                                    fontWeight: 300,
                                    textAlign: 'left',
                                    color: '#0F52BA',
                                    zIndex: 2,
                                    position: 'relative',
                                    width: '100%',
                                    maxWidth: '100%',
                                    overflowWrap: 'break-word',
                                    wordBreak: 'break-word',
                                    whiteSpace: 'pre-line',
                                    fontFamily:
                                        'Quicksand, Arial, Helvetica, sans-serif',
                                }}
                            >
                                {slide.heading}
                            </h3>
                            <p
                                style={{
                                    fontSize: '1.3rem',
                                    color: '#222',
                                    margin: 0,
                                    textAlign: 'left',
                                    zIndex: 2,
                                    position: 'relative',
                                    width: '100%',
                                    maxWidth: '100%',
                                    overflowWrap: 'break-word',
                                    wordBreak: 'break-word',
                                    whiteSpace: 'pre-line',
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
    );
};

export default Slider;
