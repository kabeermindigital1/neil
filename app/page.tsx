'use client';
import Hero from './components/animations/Hero';
import AnimatedImage from './components/animations/AnimatedImage';
// import HeroSection from './components/animations/HeroSection';
import Header from './components/ui/Header';

const page = () => {
    return (
        <main>
            <Header />
            <Hero />
            <AnimatedImage />
            {/* <HeroSection /> */}
            {/* <HeroSection /> */}
        </main>
    );
};

export default page;
