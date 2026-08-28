"use client"

import React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import {
    Braces,
    ChartNoAxesCombined,
    Code2,
    Database,
    Workflow,
} from "lucide-react"

const expertiseGroups = [
    {
        title: "Frontend Development",
        icon: Code2,
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
        ],
        className: "lg:col-span-3",
    },
    {
        title: "Backend & Data",
        icon: Database,
        skills: ["Supabase", "SQL"],
        className: "lg:col-span-2",
    },
    {
        title: "Core Programming",
        icon: Braces,
        skills: ["Python", "C++"],
        className: "lg:col-span-2",
    },
    {
        title: "Data & AI Foundations",
        icon: ChartNoAxesCombined,
        skills: ["NumPy", "Pandas", "Matplotlib", "scikit-learn"],
        className: "lg:col-span-2",
    },
    {
        title: "Workflow Automation",
        icon: Workflow,
        skills: ["n8n"],
        className: "lg:col-span-1",
    },
]

const headingVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
}

const cardContentVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const cardItemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 22,
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

export default function Expertise() {
    const shouldReduceMotion = useReducedMotion()

    const getItemVariants = (): Variants => {
        if (shouldReduceMotion) {
            return {
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
            }
        }

        return cardItemVariants
    }

    return (
        <section
            id="expertise"
            className="bg-[#050506] px-6 py-6 sm:px-8 lg:px-14"
        >
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={headingVariants}
                    className="max-w-3xl"
                >
                    <p className="text-sm font-normal tracking-[0.24em] text-[#C8FF3E]">
                        EXPERTISE
                    </p>

                    <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                        The tools behind the web products I build.
                    </h2>

                    <p className="mt-5 max-w-2xl  font-normal leading-relaxed text-[#A1A1AA] sm:text-base">
                        My core focus is building responsive, polished interfaces—while
                        growing my skills in data, AI and automation.
                    </p>
                </motion.div>

                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {expertiseGroups.map((group) => {
                        const Icon = group.icon

                        return (
                            <div
                                key={group.title}
                                className={`rounded-2xl border border-[#C8FF3E]/60 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] sm:p-7 ${group.className}`}
                            >
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.55 }}
                                    variants={cardContentVariants}
                                >
                                    <motion.div
                                        variants={getItemVariants()}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-[#C8FF3E]">
                                            <Icon size={21} strokeWidth={1.8} />
                                        </div>

                                        <h3 className="text-lg font-bold text-white">
                                            {group.title}
                                        </h3>
                                    </motion.div>

                                    <motion.div
                                        variants={getItemVariants()}
                                        className="mt-6 flex flex-wrap gap-2"
                                    >
                                        {group.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm font-normal text-[#A1A1AA] transition-colors duration-300 hover:border-[#C8FF3E]/50 hover:text-[#C8FF3E]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
