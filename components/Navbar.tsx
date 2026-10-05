"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#EFEFEF]/90 backdrop-blur-xl border-b border-[#0A0A0A]/10"
        >
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-4 group">
                    <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3B5BDB] group-hover:rotate-180 transition-transform duration-700 ease-in-out">
                        <path d="M0 0H30V100H0V0Z" fill="currentColor" />
                        <path d="M40 0H100V30H40V0Z" fill="currentColor" />
                        <path d="M40 70H100V100H40V70Z" fill="currentColor" />
                        <path d="M70 40H100V60H70V40Z" fill="currentColor" />
                    </svg>
                    <span className="font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight">
                        STUDIO.
                    </span>
                </Link>
                <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-[#0A0A0A]/70">
                    <Link href="/work" className="hover:text-[#3B5BDB] transition-colors">Work</Link>
                    <Link href="/pricing" className="hover:text-[#3B5BDB] transition-colors">Services</Link>
                    <Link href="/contact" passHref>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#3B5BDB] text-white px-8 py-3 rounded-full hover:shadow-[0_4px_15px_rgba(59,91,219,0.25)] transition-shadow duration-300 cursor-pointer inline-block"
                        >
                            Let's Talk
                        </motion.div>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
