"use client";
import { motion, Variants } from "framer-motion";

const reveal: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};
const viewProps = { once: false, margin: "0px 0px -100px 0px" };

const Noise = () => (
    <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.04] mix-blend-difference">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#noiseFilter)" /></svg>
    </div>
);

const Crosshair = ({ className }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`absolute text-[#0A0A0A]/20 pointer-events-none ${className}`}>
        <path d="M12 0V24M0 12H24" stroke="currentColor" strokeWidth="1" />
    </svg>
);

export default function Contact() {
    return (
        <div className="w-full relative min-h-screen bg-[#EFEFEF] overflow-hidden flex flex-col justify-center">
            <Noise />

            {/* Ambient Lighting */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
                <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(59,91,219,0.15)_0%,transparent_60%)] transform-gpu" />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
            </div>

            <Crosshair className="top-32 left-12 hidden lg:block" />
            <Crosshair className="bottom-32 right-12 hidden lg:block" />

            <section className="relative w-full max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Left Side: Typography */}
                <motion.div initial="hidden" animate="visible" variants={reveal} className="flex flex-col justify-center">
                    <span className="text-sm font-bold tracking-widest uppercase text-[#3B5BDB] mb-6 block">Index 03</span>
                    <h1 className="text-[12vw] md:text-[6rem] font-bold font-[family-name:var(--font-syne)] leading-[0.85] tracking-tighter uppercase text-[#0A0A0A] mb-8">
                        START THE <br /> <span className="text-[#3B5BDB]">DIALOGUE.</span>
                    </h1>
                    <p className="text-xl text-[#0A0A0A]/60 font-medium leading-relaxed max-w-md mb-12">
                        Currently accepting new inquiries for Q3. Tell us about your brand, your goals, and the digital experience you envision.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/40 mb-2">Direct Inquiry</div>
                            <a href="mailto:hello@studio.com" className="text-xl font-bold text-[#0A0A0A] hover:text-[#3B5BDB] transition-colors">hello@studio.com</a>
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/40 mb-2">Location</div>
                            <p className="text-xl font-bold text-[#0A0A0A]">Remote / Worldwide</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
                    className="bg-white/60 backdrop-blur-xl border border-[#0A0A0A]/10 p-10 md:p-14 rounded-3xl shadow-xl"
                >
                    <form className="space-y-12">

                        <div className="relative group">
                            <input type="text" id="name" placeholder=" " className="peer w-full bg-transparent border-b-2 border-[#0A0A0A]/10 py-4 text-xl text-[#0A0A0A] focus:outline-none focus:border-[#3B5BDB] transition-colors" required />
                            <label htmlFor="name" className="absolute left-0 top-4 text-xl text-[#0A0A0A]/40 font-medium transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#3B5BDB] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:font-bold cursor-text">
                                Your Name
                            </label>
                        </div>

                        <div className="relative group">
                            <input type="email" id="email" placeholder=" " className="peer w-full bg-transparent border-b-2 border-[#0A0A0A]/10 py-4 text-xl text-[#0A0A0A] focus:outline-none focus:border-[#3B5BDB] transition-colors" required />
                            <label htmlFor="email" className="absolute left-0 top-4 text-xl text-[#0A0A0A]/40 font-medium transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#3B5BDB] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:font-bold cursor-text">
                                Email Address
                            </label>
                        </div>

                        <div className="relative group">
                            <textarea id="details" rows={4} placeholder=" " className="peer w-full bg-transparent border-b-2 border-[#0A0A0A]/10 py-4 text-xl text-[#0A0A0A] focus:outline-none focus:border-[#3B5BDB] transition-colors resize-none" required></textarea>
                            <label htmlFor="details" className="absolute left-0 top-4 text-xl text-[#0A0A0A]/40 font-medium transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#3B5BDB] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:font-bold cursor-text">
                                Project Details & Timeline
                            </label>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ y: -4 }} whileTap={{ y: 2 }}
                            className="w-full bg-[#3B5BDB] text-white px-8 py-5 rounded-full font-bold text-lg uppercase tracking-widest hover:shadow-[0_15px_30px_rgba(59,91,219,0.3)] transition-shadow duration-300 transform-gpu will-change-transform"
                        >
                            Submit Inquiry
                        </motion.button>
                    </form>
                </motion.div>

            </section>
        </div>
    );
}
