"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const reveal: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};
const viewProps = { once: false, margin: "0px 0px -100px 0px" };

const Noise = () => (
    <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.04] mix-blend-difference">
        <svg viewBox="0 0 200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#noiseFilter)" /></svg>
    </div>
);

const WireframeGlobe = ({ className }: { className?: string }) => (
    <motion.div animate={{ rotateY: 360, rotateX: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className={`absolute pointer-events-none transform-gpu text-[#243D30]/5 ${className}`}>
        <svg width="250" height="250" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="50" cy="50" r="45" />
            <ellipse cx="50" cy="50" rx="45" ry="15" />
            <ellipse cx="50" cy="50" rx="15" ry="45" />
            <path d="M5 50H95M50 5V95" />
        </svg>
    </motion.div>
);

export default function Pricing() {
    return (
        <div className="w-full relative min-h-screen bg-[#F7F5EF] overflow-hidden">
            <Noise />
            <WireframeGlobe className="-right-20 top-20" />

            <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto">
                <motion.div initial="hidden" animate="visible" variants={reveal} className="text-center relative z-10 mb-32">
                    <h1 className="text-[10vw] md:text-[7rem] font-bold font-[family-name:var(--font-syne)] leading-[0.85] tracking-tighter uppercase text-[#243D30]">
                        OUR <br /> <span className="text-[#335B46]">SERVICES.</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Tier 1 - Light */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewProps} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                        className="border border-[#243D30]/10 rounded-3xl p-10 md:p-14 bg-[#F7F5EF]/50 backdrop-blur-xl shadow-xl relative overflow-hidden group hover:border-[#335B46]/30 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-8 text-[#243D30]/10 font-[family-name:var(--font-syne)] font-bold text-6xl group-hover:text-[#335B46]/5 transition-colors">01</div>
                        <h3 className="text-4xl font-[family-name:var(--font-syne)] font-bold mb-4 text-[#243D30]">Painting</h3>
                        <p className="text-[#243D30]/60 mb-8 font-medium">Refresh your home&apos;s appearance with quality painting and attention to detail.</p>
                        <div className="text-3xl font-bold mb-10 text-[#335B46]">Contact for Details</div>

                        <ul className="space-y-4 mb-12 text-[#243D30]/80 font-medium">
                            <li className="flex gap-4"><span className="text-[#335B46]">✓</span> Interior Painting</li>
                            <li className="flex gap-4"><span className="text-[#335B46]">✓</span> Exterior Painting</li>
                            <li className="flex gap-4"><span className="text-[#335B46]">✓</span> Quality Craftsmanship</li>
                            <li className="flex gap-4"><span className="text-[#335B46]">✓</span> Attention to Detail</li>
                        </ul>

                        <Link href="/contact" passHref>
                            <motion.div whileHover={{ y: -4 }} whileTap={{ y: 2 }} className="w-full text-center bg-[#243D30] text-[#F7F5EF] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300 cursor-pointer transform-gpu will-change-transform">
                                Request Information
                            </motion.div>
                        </Link>
                    </motion.div>

                    {/* Tier 2 - Dark Flagship */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewProps} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
                        className="border border-[#335B46]/30 rounded-3xl p-10 md:p-14 bg-[#243D30] text-[#F7F5EF] shadow-2xl shadow-[#335B46]/10 relative overflow-hidden group"
                    >
                        {/* Ambient inner glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(51,91,70,0.15),transparent_50%)]"></div>

                        <div className="absolute top-0 right-0 p-8 text-[#F7F5EF]/5 font-[family-name:var(--font-syne)] font-bold text-6xl group-hover:text-[#335B46]/20 transition-colors">02</div>
                        <h3 className="text-4xl font-[family-name:var(--font-syne)] font-bold mb-4">Remodeling</h3>
                        <p className="text-[#F7F5EF]/60 mb-8 font-medium">Improve your living spaces with thoughtful remodeling and quality craftsmanship.</p>
                        <div className="text-3xl font-bold mb-10 text-[#A6B59B]">Contact for Details</div>

                        <ul className="space-y-4 mb-12 text-[#F7F5EF]/80 font-medium relative z-10">
                            <li className="flex gap-4"><span className="text-[#A6B59B]">✓</span> Kitchen & Bathroom Remodeling</li>
                            <li className="flex gap-4"><span className="text-[#A6B59B]">✓</span> Interior Renovations</li>
                            <li className="flex gap-4"><span className="text-[#A6B59B]">✓</span> Quality Craftsmanship</li>
                            <li className="flex gap-4"><span className="text-[#A6B59B]">✓</span> Affordable Pricing</li>
                        </ul>

                        <Link href="/contact" passHref>
                            <motion.div whileHover={{ y: -4 }} whileTap={{ y: 2 }} className="relative z-10 w-full text-center bg-[#335B46] text-[#F7F5EF] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:shadow-[0_15px_30px_rgba(51,91,70,0.3)] transition-shadow duration-300 cursor-pointer transform-gpu will-change-transform">
                                Request Information
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
