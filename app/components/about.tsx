"use client"

import React from "react"
import { motion, type Variants } from "framer-motion"
import {
    MapPin,
    GraduationCap,
    Layers,
    CalendarCheck,
} from "lucide-react"

const cardContent = [
    {
        icon: <MapPin size={24} />,
        name: "Location",
        description: "Lahore, Pakistan",
    },
    {
        icon: <GraduationCap size={24} />,
        name: "Experience",
        description: "6 Months — Thrill Edge Technology",
    },
    {
        icon: <Layers size={24} />,
        name: "Education",
        description: "BS Computer Science",
    },
    {
        icon: <CalendarCheck size={24} />,
        name: "Semester",
        description: "6th (3.67 CGPA)",
    },
]

const textContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
        },
    },
}

const cardsContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.16,
        },
    },
}

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 70,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
}

const cardContentVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const cardItemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

export default function About() {
    return (
        <section id="about" className="bg-black px-6 py-6 sm:px-8 lg:px-14">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
                <motion.div
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-xs font-medium tracking-[0.28em] text-[#C8FF3E] sm:text-sm"
                    >
                        ABOUT
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="py-3 text-4xl font-bold leading-tight text-white sm:text-5xl"
                    >
                        A developer blending web, automation and AI.
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="pb-3 font-normal text-[#A1A1AA]"
                    >
                        I’m Muhammad Muneeb Zafar, a Computer Science student and
                        Full-Stack Web Developer Intern at Thrill Edge Technology.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="pb-3 font-normal text-[#A1A1AA]"
                    >
                        I build responsive, polished web interfaces with React,
                        Next.js, Tailwind CSS and Supabase. I enjoy turning ideas into
                        clear user experiences through reusable components, clean
                        layouts and practical problem-solving.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="pb-3 font-normal text-[#A1A1AA]"
                    >
                        Alongside web development, I’m building my foundation in
                        Python, AI/ML and n8n automation—working toward products that
                        combine modern web experiences with intelligent workflows.
                    </motion.p>

                    <motion.a
                        variants={itemVariants}
                        href="/Muneeb-Zafar-Resume.pdf"
                        download="Muneeb-Zafar-resume.pdf"
                        className="mt-2 inline-flex cursor-pointer items-center gap-2 rounded bg-[#C8FF3E] px-6 py-3 text-sm font-medium text-[#050506] shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
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
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download CV
                    </motion.a>
                </motion.div>

                <motion.div
                    variants={cardsContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                    {cardContent.map((card) => (
                        <div
                            key={card.name}
                            className="min-h-[150px] rounded-2xl border border-[#C8FF3E] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03]"
                        >
                            <motion.div variants={cardContentVariants}>
                                <motion.div
                                    variants={cardItemVariants}
                                    className="text-[#C8FF3E]"
                                >
                                    {card.icon}
                                </motion.div>

                                <motion.p
                                    variants={cardItemVariants}
                                    className="my-3 text-sm text-[#A1A1AA]"
                                >
                                    {card.name}
                                </motion.p>

                                <motion.h2
                                    variants={cardItemVariants}
                                    className="text-lg font-bold text-white"
                                >
                                    {card.description}
                                </motion.h2>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
