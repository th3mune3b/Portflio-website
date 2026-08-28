"use client";

import Link from "next/link";

type NavigationProps = {
    onNavigate?: () => void;
};

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navigation({
    onNavigate,
}: NavigationProps) {
    return (
        <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={onNavigate}
                    className="
                        relative py-2 text-[#868B94]
                        transition-colors duration-300
                        after:absolute after:bottom-0 after:left-0
                        after:h-[1px] after:w-full
                        after:origin-left after:scale-x-0
                        after:bg-[#C8FF3E]
                        after:transition-transform
                        after:duration-300 after:content-['']
                        hover:text-white
                        hover:after:scale-x-100
                    "
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}