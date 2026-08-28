"use client";

import Navigation from "./nav";
import { useEffect, useState } from "react";

export default function Head() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                isScrolled
                    ? "border-b border-white/10 bg-[#050506]/95 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
                    : "border-b border-transparent bg-[#050506]"
            }`}
        >
            <div className="mx-4 flex items-center justify-between py-4 transition-all duration-300 sm:mx-6">
                <div className="flex items-center gap-3">
                    <div className="h-9 w-9 shrink-0">
                        <img
                            src="/icon.png"
                            alt="Muneeb Zafar"
                            className="h-full w-full rounded-full border border-[#696D74] object-cover"
                        />
                    </div>

                    <div>
                        <h1 className="text-sm font-bold text-white">
                            Muneeb Zafar
                        </h1>

                        <p className="text-[12px] text-[#868B94]">
                            <span className="mr-1 text-[#C8FF3E]">
                                &#9679;
                            </span>
                            Available to work
                        </p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center rounded-3xl bg-[#161C1F] px-5 pb-2 md:flex">
                    <Navigation />
                </div>

                {/* Desktop CV Button */}
                <div className="hidden items-center md:flex">
                    <a
                        href="/Muneeb-Zafar-Resume.pdf"
                        download="Muneeb-Zafar-resume.pdf"
                        className="flex cursor-pointer items-center gap-2 rounded bg-[#C8FF3E] px-3 py-2 text-sm font-medium text-[#050506] shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <DownloadIcon />
                        Download CV
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center md:hidden">
                    <button
                        type="button"
                        onClick={() =>
                            setIsMobileMenuOpen((isOpen) => !isOpen)
                        }
                        className="p-2 text-white focus:outline-none"
                        aria-label={
                            isMobileMenuOpen ? "Close menu" : "Open menu"
                        }
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-white/10 bg-[#050506] px-5 py-3 md:hidden"
                >
                    <div className="flex flex-col gap-2 [&>nav]:flex-col [&>nav]:items-start [&>nav]:gap-2 [&>nav_*]:py-1">
                        <Navigation
                            onNavigate={() => setIsMobileMenuOpen(false)}
                        />

                        <div className="pt-2">
                            <a
                                href="/Muneeb-Zafar-Resume.pdf"
                                download="Muneeb-Zafar-resume.pdf"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-[#C8FF3E] py-2 text-sm font-medium text-[#050506] shadow-md transition-all duration-200"
                            >
                                <DownloadIcon />
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

function DownloadIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}

function MenuIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );
}