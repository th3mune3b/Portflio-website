import type { Metadata } from "next";
import { ThemeProvider } from "./context/theme-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muneeb Zafar",
  description:
    "Muhammad Muneeb Zafar Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col"
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
