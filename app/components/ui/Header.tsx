import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <div>
                <h1>Helooo</h1>
            </div>
            <Image
                src="/images/logo-with-bg.png"
                alt="logo"
                width={100}
                height={100}
            />
            <div>
                <button>Login</button>
                <button>Signup</button>
            </div>
        </header>
    );
};

export default Header;
