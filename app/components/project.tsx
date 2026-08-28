"use client"

import React, { useCallback, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import {
    Activity,
    ArrowUpRight,
    CloudSun,
    // Github,
    Hash,
    ListChecks,
    Sparkles,
    Table2,
    type LucideIcon,
} from "lucide-react"

type FeaturedProject = {
    title: string
    category: string
    description: string
    focus: string
    technologies: string[]
    image: string
    demo: string
    github: string | null
}

type MiniProject = {
    title: string
    description: string
    technologies: string[]
    github: string
    icon: LucideIcon
}

const featuredProjects: FeaturedProject[] = [
    {
        title: "Docufy",
        category: "SAAS / DOCUMENT PLATFORM",
        description:
            "A responsive document-focused SaaS experience with clear pricing plans and an interactive FAQ flow.",
        focus: "SaaS Design",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
        image: "/docufy-showcase.png",
        demo: "https://docufy-three.vercel.app/",
        github: null,
    },
    {
        title: "Sarab Fast Food",
        category: "RESTAURANT / ORDERING EXPERIENCE",
        description:
            "A responsive restaurant experience that makes menu discovery, product selection and cart management feel simple.",
        focus: "Interactive UI",
        technologies: ["JavaScript", "Tailwind CSS", "Swiper.js", "LocalStorage"],
        image: "/sarab-showcase.png",
        demo: "https://sarab-resturant.vercel.app/",
        github: "https://github.com/th3mune3b/sarab-resturant.git",
    },
    {
        title: "Shahrozhannan Printing Press",
        category: "PRINTING / E-COMMERCE",
        description:
            "A modern printing-business website built around product discovery, service clarity and custom quote requests.",
        focus: "Full-Stack Web App",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
        image: "/printing-showcase.png",
        demo: "https://shahrozhannan-printing-web.vercel.app/",
        github:
            "https://github.com/th3mune3b/shahrozhannan_printing_web.git",
    },
]

const miniProjects: MiniProject[] = [
    {
        title: "Weather App",
        description:
            "Live city weather with readable conditions and clear error handling.",
        technologies: ["JavaScript", "Weather API"],
        github: "https://github.com/th3mune3b/Weather-App.git",
        icon: CloudSun,
    },
    {
        title: "To-Do List",
        description:
            "A focused task manager with completion states and local persistence.",
        technologies: ["JavaScript", "LocalStorage"],
        github: "https://github.com/th3mune3b/To-Do-List.git",
        icon: ListChecks,
    },
    {
        title: "Guess Number Game",
        description:
            "An interactive number challenge with feedback and score logic.",
        technologies: ["JavaScript", "DOM"],
        github: "https://github.com/th3mune3b/Guess-Number-Game.git",
        icon: Hash,
    },
    {
        title: "Table Generator",
        description:
            "A simple utility for generating multiplication tables instantly.",
        technologies: ["JavaScript", "Loops"],
        github: "https://github.com/th3mune3b/Table-Generator.git",
        icon: Table2,
    },
    {
        title: "BMI Calculator",
        description:
            "A clean calculator that turns user input into understandable BMI results.",
        technologies: ["JavaScript", "Form Logic"],
        github: "https://github.com/th3mune3b/BMI-CALCULATOR.git",
        icon: Activity,
    },
]

const revealVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 55,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        },
    },
}

const contentVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.09,
        },
    },
}

const contentItemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
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

function useVisibleCards() {
    const [visibleCards, setVisibleCards] = useState(1)

    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth >= 1024) {
                setVisibleCards(3)
            } else if (window.innerWidth >= 640) {
                setVisibleCards(2)
            } else {
                setVisibleCards(1)
            }
        }

        updateVisibleCards()
        window.addEventListener("resize", updateVisibleCards)

        return () => window.removeEventListener("resize", updateVisibleCards)
    }, [])

    return visibleCards
}

function GitHubIcon() {
    return (
        <svg
            width={17}
            height={17}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.28-.36 6.72-1.61 6.72-7A5.44 5.44 0 0 0 19.27 3.77 5.07 5.07 0 0 0 19.13.32S18 0 15 1.82a13.38 13.38 0 0 0-7 0C5 0 3.87.32 3.87.32a5.07 5.07 0 0 0-.14 3.45A5.44 5.44 0 0 0 2.28 7.5c0 5.42 3.44 6.61 6.72 7A4.8 4.8 0 0 0 8 18v4" />
            <path d="M8 19c-3 .92-3-1.5-4-2" />
        </svg>
    )
}

export default function Projects() {
    const visibleCards = useVisibleCards()
    const shouldReduceMotion = useReducedMotion()
    const [activeIndex, setActiveIndex] = useState(visibleCards)
    const [transitionEnabled, setTransitionEnabled] = useState(true)
    const [isPaused, setIsPaused] = useState(false)

    const carouselProjects = useMemo(
        () => [
            ...miniProjects.slice(-visibleCards),
            ...miniProjects,
            ...miniProjects.slice(0, visibleCards),
        ],
        [visibleCards],
    )

    useEffect(() => {
        setTransitionEnabled(false)
        setActiveIndex(visibleCards)

        const frame = requestAnimationFrame(() => {
            requestAnimationFrame(() => setTransitionEnabled(true))
        })

        return () => cancelAnimationFrame(frame)
    }, [visibleCards])

    const moveNext = useCallback(() => {
        setTransitionEnabled(true)
        setActiveIndex((current) => current + 1)
    }, [])

    useEffect(() => {
        if (isPaused || shouldReduceMotion) return

        const timer = window.setTimeout(moveNext, 2800)
        return () => window.clearTimeout(timer)
    }, [activeIndex, isPaused, moveNext, shouldReduceMotion])

    const handleTransitionEnd = (
        event: React.TransitionEvent<HTMLDivElement>,
    ) => {
        if (
            event.target !== event.currentTarget ||
            event.propertyName !== "transform"
        ) {
            return
        }

        if (activeIndex >= miniProjects.length + visibleCards) {
            setTransitionEnabled(false)
            setActiveIndex(visibleCards)
        } else if (activeIndex <= 0) {
            setTransitionEnabled(false)
            setActiveIndex(miniProjects.length)
        }
    }

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#050506] px-6 py-6 sm:px-8 lg:px-14"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.055]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(200,255,62,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,62,0.35) 1px, transparent 1px)",
                    backgroundSize: "58px 58px",
                }}
            />

            <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C8FF3E]/[0.055] blur-[110px]" />

            <div className="relative mx-auto max-w-[1440px]">
                <motion.div
                    variants={revealVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className="max-w-3xl"
                >
                    <div className="flex items-center gap-3">
                        <p className="text-xs font-medium tracking-[0.28em] text-[#C8FF3E] sm:text-sm">
                            Projects
                        </p>
                    </div>

                    <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                        Projects built around real product goals.
                    </h2>

                    <p className="mt-5 max-w-2xl  font-normal leading-7 text-[#A1A1AA] sm:text-base">
                        Responsive interfaces, practical user flows and focused
                        experiments built with modern web technologies.
                    </p>
                </motion.div>

                <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {featuredProjects.map((project) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 55 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.16 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#C8FF3E]/55 bg-[#0C1015] transition-colors duration-300"
                        >
                            <div className="relative h-64 shrink-0 overflow-hidden border-b border-white/10 bg-[#080B0F]">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} responsive website showcase`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.035]"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C1015]/45 via-transparent to-transparent" />
                            </div>

                            <motion.div
                                variants={contentVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.35 }}
                                className="flex flex-1 flex-col p-5 sm:p-6"
                            >
                                <motion.div
                                    variants={contentItemVariants}
                                    className="flex items-start justify-between gap-4"
                                >
                                    <p className="pt-1 font-mono text-[10px] tracking-[0.2em] text-[#C8FF3E]">
                                        {project.category}
                                    </p>
                                    <span className="font-mono text-xs text-white/35">
                                        0{featuredProjects.indexOf(project) + 1}
                                    </span>
                                </motion.div>

                                <motion.h3
                                    variants={contentItemVariants}
                                    className="mt-4 text-2xl font-bold leading-tight text-white"
                                >
                                    {project.title}
                                </motion.h3>

                                <motion.p
                                    variants={contentItemVariants}
                                    className="mt-3 text-sm font-normal leading-6 text-[#A1A1AA]"
                                >
                                    {project.description}
                                </motion.p>

                                <motion.div
                                    variants={contentItemVariants}
                                    className="mt-5 flex flex-wrap gap-2"
                                >
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1.5 font-mono text-[10px] text-[#A1A1AA]"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </motion.div>

                                <motion.div
                                    variants={contentItemVariants}
                                    className="mt-6 flex items-center justify-end gap-5"
                                >
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 font-mono text-xs text-white transition-colors duration-200 hover:text-[#C8FF3E]"
                                    >
                                        DEMO
                                        <ArrowUpRight size={15} />
                                    </a>

                                    {project.github ? (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1.5 font-mono text-xs text-white transition-colors duration-200 hover:text-[#C8FF3E]"
                                        >
                                            GITHUB
                                            <ArrowUpRight size={15} />
                                        </a>
                                    ) : (
                                        <span
                                            aria-disabled="true"
                                            title="Repository link not added"
                                            className="inline-flex cursor-not-allowed items-center gap-1.5 font-mono text-xs text-white/30"
                                        >
                                            GITHUB
                                            <ArrowUpRight size={15} />
                                        </span>
                                    )}
                                </motion.div>
                            </motion.div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    variants={revealVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className="mt-12"
                >
                    <div>
                        <div className="flex items-center gap-3">
                            <p className="text-xs font-medium tracking-[0.28em] text-[#C8FF3E] sm:text-sm">
                                MINI PROJECTS
                            </p>
                        </div>
                        <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                            Small builds. Focused lessons.
                        </h3>
                    </div>
                </motion.div>

                <div
                    className="-mx-2 mt-6 overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className="flex"
                        onTransitionEnd={handleTransitionEnd}
                        style={{
                            transform: `translateX(-${activeIndex * (100 / visibleCards)}%)`,
                            transitionProperty: "transform",
                            transitionDuration: transitionEnabled
                                ? shouldReduceMotion
                                    ? "1ms"
                                    : "650ms"
                                : "0ms",
                            transitionTimingFunction:
                                "cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                    >
                        {carouselProjects.map((project, index) => {
                            const Icon = project.icon

                            return (
                                <div
                                    key={`${project.title}-${index}`}
                                    className="shrink-0 px-2"
                                    style={{ width: `${100 / visibleCards}%` }}
                                >
                                    <article className="group flex h-[255px] flex-col rounded-2xl border border-[#C8FF3E]/55 bg-[#0C1015] p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6">
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C8FF3E]/20 bg-[#C8FF3E]/[0.06] text-[#C8FF3E]">
                                                <Icon size={21} />
                                            </div>
                                        </div>

                                        <h4 className="mt-5 text-xl font-bold text-white">
                                            {project.title}
                                        </h4>
                                        <p className="mt-2 line-clamp-2 text-sm font-normal leading-6 text-[#A1A1AA]">
                                            {project.description}
                                        </p>

                                        <div className="mt-auto flex items-end justify-between gap-4 pt-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map(
                                                    (technology) => (
                                                        <span
                                                            key={technology}
                                                            className="font-mono text-[10px] text-white/40"
                                                        >
                                                            {technology}
                                                        </span>
                                                    ),
                                                )}
                                            </div>

                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={`Open ${project.title} GitHub repository`}
                                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-200 group-hover:border-[#C8FF3E] group-hover:text-[#C8FF3E]"
                                            >
                                                <GitHubIcon />
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
