import Image from 'next/image';

const HeroSection = () => {
    return (
        <main>
            <div>
                <h1>Welcome to our store</h1>
            </div>
            <div>
                <Image src="/images/hero-section.png" alt="hero-section" />
            </div>
        </main>
    );
};

export default HeroSection;
