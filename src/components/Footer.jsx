import React from 'react';

const Footer = () => {
    return (
        <footer className="py-6 text-center text-sm text-neutral-400">
            <p>&copy; {new Date().getFullYear()} Moidheen Suhair. All rights reserved.</p>
            <p className="mt-2">Designed and Built with React & Tailwind CSS</p>
        </footer>
    );
};

export default Footer;
