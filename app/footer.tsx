import {
    ArrowUp,
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
} from "lucide-react"

const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/th3mune3b",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/muhammad-muneeb-zafar-79b6223b4",
    },
    {
        name: "Instagram",
        href: "https://instagram.com/th3.mune3b",
    },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#050506] px-5 py-6 sm:px-8 lg:px-14">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(200,255,62,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,62,0.35) 1px, transparent 1px)",
                    backgroundSize: "58px 58px",
                }}
            />

            <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#C8FF3E]/[0.06] blur-[110px]" />

            <div className="relative mx-auto max-w-7xl">


                <div className="grid grid-cols-1 gap-10 py-6 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
                    <div>
                        <a
                            href="#home"
                            aria-label="Go to homepage"
                            className="inline-flex items-center gap-3"
                        >
                            <div className="h-9 w-9 shrink-0">
                                <img
                                    src="/icon.png"
                                    alt="Muneeb Zafar"
                                    className="h-full w-full rounded-full border border-[#696D74] object-cover"
                                />
                            </div>

                            <span>
                                <span className="block text-sm font-bold text-white">
                                    Muneeb Zafar
                                </span>
                                <span className="mt-0.5 block text-xs text-[#A1A1AA]">
                                    Web · AI · Automation
                                </span>
                            </span>
                        </a>

                        <p className="mt-5 max-w-sm text-sm font-normal leading-6 text-[#A1A1AA]">
                            A React and Next.js developer building responsive web
                            experiences while developing skills in AI and workflow
                            automation.
                        </p>


                    </div>

                    <div>
                        <h3 className="font-mono text-xs tracking-[0.2em] text-white/40">
                            NAVIGATION
                        </h3>

                        <div className="mt-5 flex flex-col items-start gap-3">
                            {navigationLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="group inline-flex items-center gap-2 text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-[#C8FF3E]"
                                >
                                    <span>{link.name}</span>
                                    <ArrowUpRight
                                        size={13}
                                        className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-mono text-xs tracking-[0.2em] text-white/40">
                            CONNECT
                        </h3>

                        <div className="mt-5 flex flex-col items-start gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center gap-2 text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-[#C8FF3E]"
                                >
                                    <span>{social.name}</span>
                                    <ArrowUpRight
                                        size={13}
                                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-mono text-xs tracking-[0.2em] text-white/40">
                            CONTACT
                        </h3>

                        <div className="mt-5 space-y-4">
                            <a
                                href="mailto:zmuneeb733@gmail.com"
                                className="group flex items-start gap-3"
                            >
                                <Mail
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#C8FF3E]"
                                />

                                <span className="break-all text-sm text-[#A1A1AA] transition-colors duration-200 group-hover:text-white">
                                    zmuneeb733@gmail.com
                                </span>
                            </a>

                            <a
                                href="tel:+923266893868"
                                className="group flex items-start gap-3"
                            >
                                <Phone
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#C8FF3E]"
                                />

                                <span className="text-sm text-[#A1A1AA] transition-colors duration-200 group-hover:text-white">
                                    +92 326 6893868
                                </span>
                            </a>

                            <div className="flex items-start gap-3">
                                <MapPin
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#C8FF3E]"
                                />

                                <span className="text-sm text-[#A1A1AA]">
                                    Lahore, Pakistan
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-white/35">
                        © {currentYear} Muhammad Muneeb Zafar. All rights reserved.
                    </p>

                    <div className="flex items-center justify-between gap-6 sm:justify-end">
                        <p className="text-xs text-white/35">
                            Built with Next.js & Tailwind CSS
                        </p>

                        <a
                            href="#home"
                            aria-label="Back to top"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-200 hover:border-[#C8FF3E] hover:bg-[#C8FF3E] hover:text-[#050506]"
                        >
                            <ArrowUp size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
