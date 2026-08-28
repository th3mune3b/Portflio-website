"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

export default function IntroLoader() {
    const [isVisible, setIsVisible] = useState(true)
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        const timer = window.setTimeout(
            () => setIsVisible(false),
            shouldReduceMotion ? 700 : 1900,
        )

        return () => {
            window.clearTimeout(timer)
            document.body.style.overflow = previousOverflow
        }
    }, [shouldReduceMotion])

    useEffect(() => {
        if (!isVisible) {
            document.body.style.overflow = ""
        }
    }, [isVisible])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    role="status"
                    aria-label="Loading Muhammad Muneeb Zafar portfolio"
                    initial={{ opacity: 1 }}
                    exit={
                        shouldReduceMotion
                            ? { opacity: 0 }
                            : { opacity: 0, scale: 1.025 }
                    }
                    transition={{ duration: shouldReduceMotion ? 0.15 : 0.55 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050506] px-6"
                >
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.12]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(200,255,62,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,62,0.28) 1px, transparent 1px)",
                            backgroundSize: "58px 58px",
                            maskImage:
                                "radial-gradient(circle at center, black, transparent 72%)",
                        }}
                    />

                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8FF3E]/10 blur-[110px]" />

                    <div className="relative w-full max-w-5xl text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45 }}
                            className="font-mono text-[10px] tracking-[0.38em] text-[#C8FF3E] sm:text-xs"
                        >
                            FULL-STACK DEVELOPER · AI EXPLORER
                        </motion.p>

                        <div className="mt-5 overflow-hidden">
                            <motion.h1
                                initial={
                                    shouldReduceMotion
                                        ? { opacity: 0 }
                                        : { opacity: 0, y: "105%" }
                                }
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: shouldReduceMotion ? 0.2 : 0.75,
                                    delay: shouldReduceMotion ? 0 : 0.15,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl"
                            >
                                Muhammad Muneeb
                                <span className="block text-[#C8FF3E]">Zafar</span>
                            </motion.h1>
                        </div>

                        <div className="mx-auto mt-8 h-px w-full max-w-sm overflow-hidden bg-white/10">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: shouldReduceMotion ? 0.2 : 1.2,
                                    delay: shouldReduceMotion ? 0 : 0.35,
                                    ease: "easeInOut",
                                }}
                                className="h-full origin-left bg-[#C8FF3E]"
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: shouldReduceMotion ? 0 : 0.65 }}
                            className="mt-4 font-mono text-[10px] tracking-[0.32em] text-white/35"
                        >
                            PORTFOLIO / 2026
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
