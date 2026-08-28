"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/theme-context";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    const isDarkTheme = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={
                isDarkTheme
                    ? "Switch to light theme"
                    : "Switch to dark theme"
            }
            title={
                isDarkTheme
                    ? "Light theme"
                    : "Dark theme"
            }
            className={`
                flex h-8 w-8 sm:h-10 sm:w-10 shrink-0
                items-center justify-center
                rounded-full border
                bg-transparent
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#C8FF3E]/10
                ${isDarkTheme
                    ? "border-[#C8FF3E]/70 text-[#C8FF3E]"
                    : "border-[#668600]/70 text-[#668600]"
                }
            `}
        >
            {isDarkTheme ? (
                <Moon size={18} strokeWidth={2} />
            ) : (
                <Sun size={18} strokeWidth={2} />
            )}
        </button>
    );
}