"use client";

import {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

type ThemeProviderProps = {
    children: ReactNode;
};

const ThemeContext =
    createContext<ThemeContextType | null>(null);

export function ThemeProvider({
    children,
}: ThemeProviderProps) {
    // Portfolio by default dark rahega
    const [theme, setTheme] =
        useState<Theme>("dark");

    const hasLoadedTheme = useRef(false);

    // Refresh ke baad saved theme load hogi
    useEffect(() => {
        const savedTheme =
            window.localStorage.getItem(
                "portfolio-theme",
            );

        const initialTheme: Theme =
            savedTheme === "light"
                ? "light"
                : "dark";

        document.documentElement.setAttribute(
            "data-theme",
            initialTheme,
        );

        document.documentElement.style.colorScheme =
            initialTheme;

        const frameId =
            window.requestAnimationFrame(() => {
                hasLoadedTheme.current = true;
                setTheme(initialTheme);
            });

        return () => {
            window.cancelAnimationFrame(frameId);
        };
    }, []);

    // Theme change par HTML aur localStorage update honge
    useEffect(() => {
        if (!hasLoadedTheme.current) return;

        document.documentElement.setAttribute(
            "data-theme",
            theme,
        );

        document.documentElement.style.colorScheme =
            theme;

        window.localStorage.setItem(
            "portfolio-theme",
            theme,
        );
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "dark"
                ? "light"
                : "dark",
        );
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider",
        );
    }

    return context;
}