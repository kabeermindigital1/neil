'use client';
import { Menu, Search, ShoppingBag, User, Mail } from 'lucide-react';
import Image from 'next/image';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import { SiInstagram } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/app/components/ui/sheet';
import Link from 'next/link';
import useShowHeader from '@/app/hooks/useShowHeader';
/**
 * A header component that renders a navigation menu, search bar, and user account controls,
 * and is visible when the user is at the top of the page or scrolling up, and hidden when
 * the user is scrolling down past a certain point.
 */
const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];
const Header = () => {
    const { showHeader } = useShowHeader();
    const [showMailForm, setShowMailForm] = useState(false);
    useEffect(() => {
        if (showMailForm) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Cleanup function to ensure scroll is re-enabled when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showMailForm]);
    return (
        <header
            className={`fixed top-0 w-full z-50 transition-transform duration-500 bg-gradient-to-b from-black/70 to-transparent ${
                showHeader ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="layout flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href={'/'}>
                        <Image
                            src={'/images/logo-with-bg.png'}
                            width={100}
                            height={100}
                            alt={'logo'}
                        />
                    </Link>
                    <NavigationMenu />
                    <SearchBar />
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <LiaFlagUsaSolid className="w-8 h-8" />
                    <Link href="/auth/register">
                        <User className="w-6 h-6" />
                    </Link>
                    <ShoppingBag className="w-6 h-6" />
                    <SiInstagram className="w-6 h-6" />
                    <Mail
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => setShowMailForm(true)}
                    />
                </div>
            </div>
            {/* Blurred Overlay */}
            {showMailForm && (
                <div className="absolute inset-0 z-[100] backdrop-blur-sm bg-black/30 h-screen" />
            )}
            {/* MailForm with animation */}
            <AnimatePresence>
                {showMailForm && (
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 60 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center h-screen"
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <MailForm onClose={() => setShowMailForm(false)} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
const SearchBar = () => {
    return (
        <div className="relative flex items-center select-none shrink">
            <Search className="w-4 h-4 text-white/50 absolute left-5 pointer-events-none" />
            <input
                type="text"
                placeholder="Search"
                className="border w-full pl-12 py-2 border-white/50 rounded-full focus:outline-accent-one outline-1 focus:border-none ease-in duration-200 transition-all"
            />
        </div>
    );
};
const NavigationMenu = () => {
    const [showMailForm, setShowMailForm] = useState(false);
    return (
        <Sheet>
            <SheetTrigger asChild className="cursor-pointer">
                <Menu className="min-w-8 min-h-8" size={32} />
            </SheetTrigger>
            <SheetContent side="left" className="bg-black border-none">
                <SheetHeader className="flex flex-row md:flex-col items-center justify-between">
                    <SheetTitle className="hidden">Edit profile</SheetTitle>
                    <SheetDescription className="hidden">
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                    </SheetDescription>
                    <Image
                        src={'/images/logo-with-bg.png'}
                        width={100}
                        height={100}
                        alt={'logo'}
                    />
                    <div className="flex md:hidden items-center gap-4">
                        <LiaFlagUsaSolid className="w-8 h-8" />
                        <User className="w-6 h-6" />
                        <ShoppingBag className="w-6 h-6" />
                        <SiInstagram className="w-6 h-6" />
                        <Mail
                            className="w-6 h-6 cursor-pointer"
                            onClick={() => setShowMailForm(true)}
                        />
                    </div>
                </SheetHeader>
                <div>
                    {navLinks.map((link) => (
                        <SheetClose
                            asChild
                            key={link.name}
                            className="block p-4 text-center hover:bg-gray duration-150 ease-in-out transition-all"
                        >
                            <Link
                                href={link.href}
                                className="font-bold text-xl"
                            >
                                {link.name}
                            </Link>
                        </SheetClose>
                    ))}
                </div>
                <SheetFooter>
                    <SheetClose asChild>footer</SheetClose>
                </SheetFooter>
                {/* Blurred Overlay */}
                {showMailForm && (
                    <div className="absolute inset-0 z-[100] backdrop-blur-sm bg-black/30 h-screen" />
                )}
                {/* MailForm with animation */}
                <AnimatePresence>
                    {showMailForm && (
                        <motion.div
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 60 }}
                            className="fixed inset-0 z-[101] flex items-center justify-center h-screen"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <MailForm
                                    onClose={() => setShowMailForm(false)}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </SheetContent>
        </Sheet>
    );
};
const MailForm = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="w-full max-w-md bg-white text-black p-8 text-center rounded-2xl flex flex-col gap-4 shadow-lg mx-4 relative">
            <button
                onClick={onClose}
                className="absolute -top-4 -right-4 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors"
            >
                <IoClose size={24} color="black" />
            </button>
            <h2 className="text-2xl font-bold">Signup For In The Know</h2>
            <p className="text-base">
                Stay Connected! Sign up for the US store mailing list and unlock
                exclusive updates and content that matters to you.
            </p>
            <input
                type="text"
                className="w-full border p-4 rounded text-base"
                placeholder="First Name"
            />
            <input
                type="text"
                className="w-full border p-4 rounded text-base"
                placeholder="Last Name"
            />
            <input
                type="email"
                className="w-full border p-4 rounded text-base"
                placeholder="Email"
            />
            <button
                type="submit"
                className="bg-gradient-to-l from-accent-one to-accent-two text-white p-4 w-full rounded cursor-pointer text-base font-medium"
            >
                Confirm
            </button>
            <p className="text-sm">
                By submitting your details, you confirm you are 16+
            </p>
        </div>
    );
};
export default Header;
