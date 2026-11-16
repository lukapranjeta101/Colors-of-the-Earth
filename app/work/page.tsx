"use client";
import { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const reveal: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};
const viewProps = { once: false, margin: "0px 0px -100px 0px" };

const Noise = () => (
    <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.04] mix-blend-difference">
        <svg viewBox="0 0 200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
    </div>
);

const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.img style={{ y }} src={src} alt={alt} className="absolute inset-0 w-full h-[130%] object-cover -top-[15%] will-change-transform" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
    );
};

const Crosshair = ({ className }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`absolute text-[#243D30]/20 pointer-events-none ${className}`}>
        <path d="M12 0V24M0 12H24" stroke="currentColor" strokeWidth="1" />
    </svg>
);

const PROJECTS = [
    { id: 1, title: "Living Room Repaint", type: "Sample Photo", img: "https://images.unsplash.com/photo-1770736158887-9a0f3702416e?auto=format&fit=crop&w=1200&q=80" },
    { id: 2, title: "Kitchen Remodel", type: "Sample Photo", img: "https://images.unsplash.com/photo-1725905803121-dd123b058a5c?auto=format&fit=crop&w=1200&q=80" },
    { id: 3, title: "Exterior Refresh", type: "Sample Photo", img: "https://images.unsplash.com/photo-1786295866836-2949bbd847cd?auto=format&fit=crop&w=1200&q=80" },
    { id: 4, title: "Interior Remodel", type: "Sample Photo", img: "https://images.unsplash.com/photo-1757605327126-9baefea3348b?auto=format&fit=crop&w=1200&q=80" },
];

export default function Work() {
    return (
        <div className="w-full relative min-h-screen bg-[#F7F5EF]">
            <Noise />

            {/* Hero */}
            <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-[#243D30]/10">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_100%_at_50%_0%,#000_20%,transparent_100%)]"></div>
                <Crosshair className="top-40 left-6 md:left-12 hidden md:block" />
                <Crosshair className="top-40 right-6 md:right-12 hidden md:block" />

                <motion.div initial="hidden" animate="visible" variants={reveal} className="text-center relative z-10">
                    <h1 className="text-[12vw] md:text-[8rem] font-bold font-[family-name:var(--font-syne)] leading-[0.85] tracking-tighter uppercase text-[#243D30]">
                        OUR WORK.
                    </h1>
                    <p className="text-lg md:text-xl text-[#243D30]/60 max-w-2xl mx-auto font-medium mt-8">A look at the spaces we help transform.</p>
                </motion.div>
            </section>

            {/* Grid */}
            <section className="max-w-7xl mx-auto px-6 py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewProps} transition={{ duration: 0.8, delay: idx % 2 === 0 ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] as const }}
                            className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
                        >
                            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative border border-[#335B46]/10 transition-colors duration-500 shadow-xl group-hover:shadow-[0_20px_50px_rgba(51,91,70,0.15)] transform-gpu will-change-transform">
                                <ParallaxImage src={project.img} alt={project.title} className="w-full h-full pointer-events-none" />
                            </div>
                            <div className="flex justify-between items-end px-2">
                                <div>
                                    <h3 className="text-3xl font-[family-name:var(--font-syne)] font-bold group-hover:text-[#335B46] transition-colors">{project.title}</h3>
                                    <p className="text-[#243D30]/50 mt-2 font-medium tracking-wide uppercase text-xs">{project.type}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-[#243D30]/20 flex items-center justify-center group-hover:bg-[#335B46] group-hover:border-[#335B46] group-hover:text-[#F7F5EF] transition-colors duration-300">
                                    ↗
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
