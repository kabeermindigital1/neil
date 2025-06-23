import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-3">
            <div className="flex items-center gap-2">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
                <h4>seqoria</h4>
            </div>
            <Image
                src="/assets/svg/logo.svg"
                alt="Logo"
                width={200}
                height={200}
                priority
            />
            <div className="flex items-center gap-2">
                <button className="bg-[#08457E] hover:bg-transparent hover:text-[#08457E] hover:border-[#08457E] border-[1px] border-transparent text-white px-4 py-2 rounded-md">
                    Login
                </button>
                <button className="bg-[#08457E] hover:bg-transparent hover:text-[#08457E] hover:border-[#08457E] border-[1px] border-transparent text-white px-4 py-2 rounded-md">
                    Signup
                </button>
            </div>
        </header>
    );
};

export default Header;
