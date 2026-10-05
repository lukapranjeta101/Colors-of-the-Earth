"use client";
import { useRef, useState, useEffect } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const customEase = [0.76, 0, 0.24, 1] as const;

const reveal: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8, // Cut down from 1s
			ease: customEase
		}
	}
};

const viewProps = { once: false, margin: "0px 0px -100px 0px" };

// 1. GLOBAL NOISE TEXTURE
const Noise = () => (
	<div className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.04] mix-blend-difference">
		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
			<filter id="noiseFilter">
				<feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
			</filter>
			<rect width="100%" height="100%" filter="url(#noiseFilter)" />
		</svg>
	</div>
);

// 2. TRUE PARALLAX IMAGE COMPONENT
const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
	const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

	return (
		<div ref={ref} className={`relative overflow-hidden ${className}`}>
			<motion.img
				style={{ y }} src={src} alt={alt}
				className="absolute inset-0 w-full h-[130%] object-cover -top-[15%] will-change-transform"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
		</div>
	);
};

// 3. ARCHITECTURAL GRAPHICS COMPONENTS
const Crosshair = ({ className }: { className?: string }) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`absolute text-[#0A0A0A]/20 pointer-events-none ${className}`}>
		<path d="M12 0V24M0 12H24" stroke="currentColor" strokeWidth="1" />
	</svg>
);

const CircularText = ({ className }: { className?: string }) => (
	<motion.div
		animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
		className={`absolute pointer-events-none transform-gpu ${className}`}
	>
		<svg viewBox="0 0 100 100" width="120" height="120" className="text-[#3B5BDB]/30 fill-current">
			<path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
			<text fontSize="11" fontWeight="bold" letterSpacing="3">
				<textPath href="#circlePath" startOffset="0%">ENGINEERED FOR EXCELLENCE • DIGITAL ARCHITECTURE •</textPath>
			</text>
		</svg>
	</motion.div>
);

const WireframeGlobe = ({ className }: { className?: string }) => (
	<motion.div
		animate={{ rotateY: 360, rotateX: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
		className={`absolute pointer-events-none transform-gpu text-white/10 ${className}`}
	>
		<svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
			<circle cx="50" cy="50" r="45" />
			<ellipse cx="50" cy="50" rx="45" ry="15" />
			<ellipse cx="50" cy="50" rx="15" ry="45" />
			<path d="M5 50H95M50 5V95" />
		</svg>
	</motion.div>
);


export default function Home() {
	// Logic for the draggable carousel
	const carouselRef = useRef<HTMLDivElement>(null);
	const [carouselWidth, setCarouselWidth] = useState(0);

	useEffect(() => {
		if (carouselRef.current) {
			setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
		}
	}, []);

	const PROJECTS = [
		{ id: 1, title: "Maison Vesper", type: "E-Commerce", img: "https://images.unsplash.com/photo-1515347619362-7ed2157a4e69?auto=format&fit=crop&w=1200&q=80" },
		{ id: 2, title: "Aura Archive", type: "Inventory Vault", img: "https://images.unsplash.com/photo-1617127365659-c47fa863d8bc?auto=format&fit=crop&w=1200&q=80" },
		{ id: 3, title: "Solene Resort", type: "Lookbook", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80" },
		{ id: 4, title: "Kinetix Flagship", type: "Digital Storefront", img: "https://images.unsplash.com/photo-1550614000-4b95d4669819?auto=format&fit=crop&w=1200&q=80" },
	];

	return (
		<div className="w-full relative">
			<Noise />

			{/* 1. HERO SECTION */}
			<section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-24 overflow-hidden">

				{/* Gradients & Grid */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
					<motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[radial-gradient(circle_at_center,rgba(59,91,219,0.15)_0%,transparent_60%)] transform-gpu" />
					<motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_0%,transparent_60%)] transform-gpu" />
				</div>
				<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>

				{/* Architectural Graphics */}
				<Crosshair className="top-24 left-12 hidden md:block" />
				<Crosshair className="top-24 right-12 hidden md:block" />
				<Crosshair className="bottom-24 left-12 hidden md:block" />
				<Crosshair className="bottom-24 right-12 hidden md:block" />

				<div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center relative z-10">

					<motion.div initial="hidden" animate="visible" variants={reveal} className="w-full relative">

						<motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-12 md:-top-20 right-[10%] md:right-[20%] text-[#3B5BDB]/20 transform-gpu hidden md:block">
							<svg width="120" height="120" viewBox="0 0 100 100" fill="none"><path d="M50 0L53.5 46.5L100 50L53.5 53.5L50 100L46.5 53.5L0 50L46.5 46.5L50 0Z" fill="currentColor" /></svg>
						</motion.div>

						<h1 className="text-[13vw] md:text-[9rem] font-bold font-[family-name:var(--font-syne)] leading-[0.85] tracking-tighter uppercase text-[#0A0A0A]">ARCHITECTING</h1>

						<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 my-2 md:my-4">
							<h1 className="text-[13vw] md:text-[9rem] font-bold font-[family-name:var(--font-syne)] leading-[0.85] tracking-tighter uppercase text-[#3B5BDB]">DIGITAL</h1>

							{/* Shortened duration and delay to make it snap in */}
							<motion.div
								initial={{ scale: 0, opacity: 0, rotate: -15 }}
								animate={{ scale: 1, opacity: 1, rotate: 0 }}
								transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
								className="hidden md:block w-56 h-24 rounded-full overflow-hidden relative shadow-2xl border-4 border-white/50 transform-gpu will-change-transform"
							>
								<img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=600&q=80" className="object-cover w-full h-full" alt="Studio" />
							</motion.div>

							<h1 className="text-[13vw] md:text-[9rem] font-bold font-[family-name:var(--font-syne)] leading-[0.85] tracking-tighter uppercase text-[#0A0A0A]">FLAGSHIPS</h1>
						</div>
					</motion.div>

					{/* Cut delay from 0.5 to 0.15 */}
					<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease: customEase }} className="text-lg md:text-2xl text-[#0A0A0A]/60 max-w-2xl font-medium leading-relaxed mt-10 mb-12">
						We abandon templates to engineer bespoke, high-performance web experiences for independent brands that refuse to blend in.
					</motion.p>

					{/* Cut delay from 0.6 to 0.2 */}
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: customEase }} className="flex flex-wrap gap-8 items-center justify-center">
						<Link href="/work" passHref>
							<motion.div whileHover={{ y: -6 }} whileTap={{ y: 2 }} className="bg-[#3B5BDB] text-white px-10 py-5 rounded-full font-bold text-lg border-2 border-[#3B5BDB] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(59,91,219,0.3)] cursor-pointer inline-block transform-gpu will-change-transform">
								Explore The Archive
							</motion.div>
						</Link>
						<Link href="/contact" passHref>
							<motion.div whileHover={{ y: -4 }} whileTap={{ y: 2 }} className="text-[#0A0A0A] font-bold uppercase tracking-widest text-sm transition-all duration-300 cursor-pointer flex items-center gap-2 transform-gpu will-change-transform">
								Book a Consultation <span className="text-xl text-[#3B5BDB]">→</span>
							</motion.div>
						</Link>
					</motion.div>
				</div>
			</section>

			{/* 2. THE PHILOSOPHY */}
			<section className="bg-white py-32 border-t border-[#0A0A0A]/5 relative z-10 overflow-hidden">
				{/* Graphic: Circular Text rotating in the background */}
				<CircularText className="-left-10 top-20 hidden lg:block" />

				<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
					<motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewProps} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }} className="w-full shadow-2xl rounded-3xl overflow-hidden transform-gpu will-change-transform">
						<ParallaxImage src="https://images.unsplash.com/photo-1550614000-4b95d4669819?auto=format&fit=crop&w=1600&q=80" alt="Boutique Tailoring" className="aspect-[4/5] bg-gray-200" />
					</motion.div>

					<motion.div initial="hidden" whileInView="visible" viewport={viewProps} variants={reveal}>
						<span className="text-sm font-bold tracking-widest uppercase text-[#3B5BDB] mb-6 flex items-center gap-4">
							<span className="w-12 h-px bg-[#3B5BDB]"></span> Our Philosophy
						</span>
						<h2 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-syne)] tracking-tighter mb-8 leading-tight">
							TEMPLATES ARE FOR THE MASSES.
						</h2>
						<p className="text-[#0A0A0A]/70 text-lg leading-relaxed mb-6 font-medium">
							Your garments are crafted with intent, precision, and a unique point of view. Your digital storefront should be no different.
						</p>
						<p className="text-[#0A0A0A]/70 text-lg leading-relaxed mb-10 font-medium">
							We abandon cookie-cutter themes in favor of custom-coded, highly interactive web architecture that forces your customers to pay attention.
						</p>
						<Link href="/pricing" className="border-b-2 border-[#3B5BDB] pb-1 text-[#3B5BDB] font-bold uppercase tracking-widest text-sm hover:opacity-50 transition-opacity">
							Discover Our Process
						</Link>
					</motion.div>
				</div>
			</section>

			{/* MASSIVE PARALLAX BREAK */}
			<section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden bg-[#0A0A0A]">
				<ParallaxImage src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=80" alt="High Fashion Editorial" className="absolute inset-0 w-full h-full opacity-60" />
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
					<motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewProps} transition={{ duration: 1 }} className="text-white text-5xl md:text-9xl font-bold font-[family-name:var(--font-syne)] tracking-tighter mix-blend-overlay transform-gpu will-change-transform">
						ENGINEERED AESTHETICS.
					</motion.h2>
				</div>
			</section>

			{/* 3. TECHNICAL ARCHITECTURE */}
			<section className="bg-[#0A0A0A] text-[#EFEFEF] py-32 relative z-10 overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

				{/* Graphic: Rotating 3D Wireframe Globe */}
				<WireframeGlobe className="-right-10 top-1/2 -translate-y-1/2 opacity-50 hidden lg:block" />

				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<motion.div initial="hidden" whileInView="visible" viewport={viewProps} variants={reveal} className="mb-20 text-center">
						<h2 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-syne)] tracking-tighter mb-6">BUILT FOR <span className="text-[#3B5BDB]">SPEED.</span></h2>
						<p className="text-[#EFEFEF]/60 max-w-2xl mx-auto text-lg font-medium">Every millisecond counts. We utilize modern tech stacks to ensure your site is instantly accessible, boosting your SEO and conversion rates.</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{[
							{ stat: "100", label: "Lighthouse", desc: "Perfect performance and SEO metrics." },
							{ stat: "< 1s", label: "Load Time", desc: "Instant page transitions via Next.js." },
							{ stat: "0", label: "Layout Shift", desc: "Pixel-perfect stability across devices." },
							{ stat: "100%", label: "Custom", desc: "No bloated plugins. Just clean React." }
						].map((metric, idx) => (
							<motion.div
								key={metric.label}
								initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewProps} transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
								className="border border-[#3B5BDB]/20 p-8 rounded-3xl bg-[#0A0A0A]/50 backdrop-blur-md hover:border-[#3B5BDB]/50 hover:bg-[#3B5BDB]/10 transition-colors group relative overflow-hidden transform-gpu will-change-transform"
							>
								<div className="absolute inset-0 bg-gradient-to-br from-[#3B5BDB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<div className="text-4xl md:text-5xl font-[family-name:var(--font-syne)] font-bold text-[#3B5BDB] mb-4 relative z-10">{metric.stat}</div>
								<div className="font-bold uppercase tracking-widest text-sm text-white mb-4 relative z-10">{metric.label}</div>
								<p className="text-white/60 text-sm leading-relaxed relative z-10">{metric.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* 4. DRAGGABLE SHOWCASE CAROUSEL */}
			<section className="bg-white py-32 relative z-10 overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-2 border-[#0A0A0A]/10 pb-8">
					<div>
						<span className="text-sm font-bold tracking-widest uppercase text-[#3B5BDB] mb-4 block flex items-center gap-4">
							<span className="w-8 h-px bg-[#3B5BDB]"></span> Showcase
						</span>
						<motion.h2 initial="hidden" whileInView="visible" viewport={viewProps} variants={reveal} className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-syne)] tracking-tighter">
							SELECTED ARCHIVE.
						</motion.h2>
					</div>
					<div className="flex items-center gap-4 text-[#0A0A0A]/40 font-bold uppercase tracking-widest text-xs">
						<span>← Drag to explore →</span>
					</div>
				</div>

				{/* Carousel Container */}
				<div ref={carouselRef} className="pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))] cursor-grab active:cursor-grabbing overflow-hidden">
					<motion.div
						drag="x"
						dragConstraints={{ right: 0, left: -carouselWidth }}
						className="flex gap-8 w-max pr-6"
					>
						{PROJECTS.map((project, idx) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={viewProps}
								transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
								className="group relative w-[85vw] md:w-[400px] lg:w-[500px]"
							>
								<div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative border border-[#3B5BDB]/10 transition-colors duration-500 shadow-xl group-hover:shadow-[0_20px_50px_rgba(59,91,219,0.15)] transform-gpu will-change-transform pointer-events-none">
									<ParallaxImage src={project.img} alt={project.title} className="w-full h-full" />
								</div>
								<div className="flex justify-between items-end">
									<div>
										<h3 className="text-3xl font-[family-name:var(--font-syne)] font-bold group-hover:text-[#3B5BDB] transition-colors">{project.title}</h3>
										<p className="text-[#0A0A0A]/50 mt-2 font-medium">{project.type}</p>
									</div>
									<Link href="/work" className="w-12 h-12 rounded-full border border-[#0A0A0A]/20 flex items-center justify-center group-hover:bg-[#3B5BDB] group-hover:border-[#3B5BDB] group-hover:text-white transition-colors duration-300">
										↗
									</Link>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* 5. MASSIVE CALL TO ACTION */}
			<section className="bg-[#EFEFEF] py-40 rounded-t-[3rem] border-t border-[#3B5BDB]/10 relative z-20 overflow-hidden">
				{/* Graphic: Massive Watermark Crosshair in background */}
				<Crosshair className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-[#3B5BDB]/5 opacity-50 scale-[3]" />

				<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
					<motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewProps} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }} className="text-5xl md:text-8xl font-bold font-[family-name:var(--font-syne)] tracking-tighter mb-12 uppercase leading-none transform-gpu will-change-transform">
						Ready to build <br /> the <span className="text-[#3B5BDB]">extraordinary?</span>
					</motion.h2>
					<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewProps} transition={{ duration: 0.8, delay: 0.2 }}>
						<Link href="/contact" passHref>
							<motion.div whileHover={{ y: -8 }} whileTap={{ y: 2 }} className="inline-block bg-[#3B5BDB] text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-[0_20px_40px_rgba(59,91,219,0.35)] transition-all duration-300 cursor-pointer transform-gpu will-change-transform">
								Start Your Project Today
							</motion.div>
						</Link>
					</motion.div>
				</div>
			</section>

		</div>
	);
}
