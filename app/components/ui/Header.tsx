'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="flex justify-between items-center px-5 h-16 w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
            <div>
                <button
                    onClick={toggleMenu}
                    className="p-2 flex items-center gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-tablet-icon lucide-tablet"
                    >
                        <rect
                            width="16"
                            height="20"
                            x="4"
                            y="2"
                            rx="2"
                            ry="2"
                        />
                        <line x1="12" x2="12.01" y1="18" y2="18" />
                    </svg>
                    <h3>Seqoria</h3>
                </button>

                {/* Navigation Menu Overlay */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md px-5 py-2 min-w-[500px] h-screen z-50">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Menu
                            </h3>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <Image
                src="/assets/svg/logo.svg"
                alt="Logo"
                width={173}
                height={38}
                priority
            />

            <div className="flex items-center gap-2">
                <button className=" text-black px-4 py-2 rounded-md border-none hover:border-2 hover:bg-[#08457E] hover:text-white transition-all duration-300">
                    Login
                </button>
                <button className="bg-[#08457E] text-white px-4 py-2 rounded-md  hover:border-[#08457E] hover:bg-transparent hover:border-2 hover:text-black transition-all duration-300">
                    Signup
                </button>
            </div>
        </header>
    );
};

export default Header;
