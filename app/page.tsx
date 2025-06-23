'use client';

import { ThirdSection } from './components/sections/ThirdSection';
import Hero from './src/sections/Hero';
import Header from './src/ui/Header';
import SeqoriaCanSection from './src/sections/SeqoriaCanSection';
import Footer from './src/ui/Footer';

export default function Page() {
    return (
        <main>
            <Header />
            <Hero />
            <ThirdSection />
            <SeqoriaCanSection />
            <Footer />
        </main>
    );
}
