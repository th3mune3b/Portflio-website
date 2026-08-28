"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section id="home" className="relative flex min-h-[calc(100vh-80px)] w-full items-center justify-center overflow-hidden bg-[#050506] py-6">

            {/* 1. Grid Background (Opacity 45%) */}
            <div
                className="absolute inset-0 pointer-events-none opacity-45"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.4'/%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* 2. Top-Aligned Floating Watermark Text */}
            <div className="absolute inset-0 flex flex-col justify-start pt-4 pointer-events-none select-none overflow-hidden px-4 md:px-12 z-0">
                <div className="w-full flex justify-start">
                    <h1
                        className="font-serif text-[15vw] lg:text-[13vw] tracking-wider text-transparent uppercase opacity-60 leading-[0.85] transition-all duration-700 animate-[pulse_4s_ease-in-out_infinite]"
                        style={{
                            WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.12)",
                        }}
                    >
                        MUNEEB
                    </h1>
                </div>

                <div className="w-full flex justify-end mt-2 sm:mt-2">
                    <h1
                        className="font-serif text-[15vw] lg:text-[13vw] tracking-wider text-transparent uppercase opacity-60 leading-[0.85] transition-all duration-700"
                        style={{
                            WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.12)",
                        }}
                    >
                        ZAFAR
                    </h1>
                </div>
            </div>

            {/* Main Content Container with Scroll-Triggered Bottom-to-Top Animation */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 mx-auto max-w-7xl px-4 px-8 w-full mt-12 md:mt-16"
            >
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

                    {/* LEFT COLUMN: Main Heading & Text */}
                    <div className="lg:col-span-7 flex flex-col justify-center">

                        {/* Status Subtitle */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-[#868B94] backdrop-blur-md w-fit">
                            <span className="h-2 w-2 rounded-full bg-[#C8FF3E]"></span>
                            <span>FULL-STACK DEVELOPER</span>
                            <span className="text-white/30">•</span>
                            <span>AI EXPLORER</span>
                        </div>

                        {/* Main Headline */}
                        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                            I build intelligent web experiences where modern{" "}
                            <span className="text-[#C8FF3E]">development</span> <br className="hidden sm:inline" />
                            meets AI.
                        </h2>
                        <p className="mt-6 max-w-xl text-base leading-7 text-[#A1A1AA] sm:text-lg sm:leading-8">
                            Crafting fast, scalable web apps with{" "}
                            <span className="font-medium text-white">React & Next.js</span> while leveraging{" "}
                            <span className="font-medium text-[#C8FF3E]">AI</span> to build next-generation digital products.
                        </p>
                        {/* Call to Action Buttons */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href="#projects"
                                className="rounded bg-[#C8FF3E] px-6 py-3 text-sm font-semibold text-[#050506] transition-all duration-300 hover:-translate-y-1 hover:bg-[#b0eb2f] hover:shadow-[0_0_20px_rgba(200,255,62,0.4)]"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="rounded border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/5"
                            >
                                Let's Connect
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Visual Elements & Floating Cards */}
                    <div className="relative lg:col-span-5 flex justify-center items-center">

                        {/* Status Badge Tag */}
                        <div className="absolute -top-6 left-4 z-20 flex items-center gap-2 rounded-md border border-white/10 bg-[#0d0d0f]/90 px-3 py-1.5 text-xs font-mono backdrop-blur-md shadow-xl">
                            <span className="text-[#868B94]">STATUS</span>
                            <span className="font-bold text-white">BUILDING</span>
                            <span className="h-2 w-2 rounded-full bg-[#C8FF3E] animate-pulse"></span>
                        </div>

                        {/* Main Image/Profile Container */}
                        <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#0a0a0c]/80 p-2 backdrop-blur-xl shadow-2xl">
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-b from-white/5 to-transparent">
                                <img
                                    src="/muneebimage.png"
                                    alt="Muneeb Zafar Portrait"
                                    className="h-full w-full object-cover  "
                                />
                            </div>

                            {/* <div className="mt-3 px-2 pb-2 text-xs font-mono text-[#868B94] flex justify-between items-center">
                                <span>FULL-STACK</span>
                            </div> */}
                        </div>

                        {/* FLOATING SKILL BADGES */}
                        <div className="absolute -top-4 right-2 z-20 animate-bounce [animation-duration:3s] rounded-full border border-white/10 bg-[#0d0d0f]/90 px-3 py-1 text-xs text-white shadow-lg backdrop-blur-md motion-reduce:animate-none">
                            React
                        </div>

                        <div className="absolute top-1/3 -right-4 z-20 animate-bounce [animation-delay:-0.7s] [animation-duration:3s] rounded-full border border-white/10 bg-[#0d0d0f]/90 px-3 py-1 text-xs text-white shadow-lg backdrop-blur-md motion-reduce:animate-none">
                            Next.js
                        </div>

                        <div className="absolute bottom-1/4 -left-6 z-20 animate-bounce [animation-delay:-1.4s] [animation-duration:3s] rounded-full border border-white/10 bg-[#0d0d0f]/90 px-3 py-1 text-xs text-white shadow-lg backdrop-blur-md motion-reduce:animate-none">
                            JavaScript
                        </div>

                        <div className="absolute -bottom-3 right-6 z-20 animate-bounce [animation-delay:-2.1s] [animation-duration:3s] rounded-full border border-white/10 bg-[#0d0d0f]/90 px-3 py-1 text-xs text-white shadow-lg backdrop-blur-md motion-reduce:animate-none">
                            Tailwind CSS
                        </div>

                    </div>

                </div>
            </motion.div>
        </section>
    );
}
