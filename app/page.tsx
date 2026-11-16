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
		<svg viewBox="0 0 200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
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
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`absolute text-[#243D30]/20 pointer-events-none ${className}`}>
		<path d="M12 0V24M0 12H24" stroke="currentColor" strokeWidth="1" />
	</svg>
);

const CircularText = ({ className }: { className?: string }) => (
	<motion.div
		animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
		className={`absolute pointer-events-none transform-gpu ${className}`}
	>
		<svg viewBox="0 0 100 100" width="120" height="120" className="text-[#335B46]/30 fill-current">
			<path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
			<text fontSize="11" fontWeight="bold" letterSpacing="3">
				<textPath href="#circlePath" startOffset="0%">QUALITY CRAFTSMANSHIP • COLORS OF THE EARTH •</textPath>
			</text>
		</svg>
	</motion.div>
);

const WireframeGlobe = ({ className }: { className?: string }) => (
	<motion.div
		animate={{ rotateY: 360, rotateX: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
		className={`absolute pointer-events-none transform-gpu text-[#F7F5EF]/10 ${className}`}
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
		{ id: 1, title: "Living Room Repaint", type: "Sample Photo", img: "https://images.unsplash.com/photo-1770736158887-9a0f3702416e?auto=format&fit=crop&w=1200&q=80" },
		{ id: 2, title: "Kitchen Remodel", type: "Sample Photo", img: "https://images.unsplash.com/photo-1725905803121-dd123b058a5c?auto=format&fit=crop&w=1200&q=80" },
		{ id: 3, title: "Exterior Refresh", type: "Sample Photo", img: "https://images.unsplash.com/photo-1786295866836-2949bbd847cd?auto=format&fit=crop&w=1200&q=80" },
		{ id: 4, title: "Interior Remodel", type: "Sample Photo", img: "https://images.unsplash.com/photo-1757605327126-9baefea3348b?auto=format&fit=crop&w=1200&q=80" },
	];

	return (
		<div className="w-full relative">
			<Noise />

			{/* 1. HERO SECTION */}
			<section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-24 overflow-hidden">

				{/* Gradients & Grid */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
					<motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[radial-gradient(circle_at_center,rgba(51,91,70,0.15)_0%,transparent_60%)] transform-gpu" />
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

						<motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-12 md:-top-20 right-[10%] md:right-[20%] text-[#335B46]/20 transform-gpu hidden md:block">
							<svg width="120" height="120" viewBox="0 0 100 100" fill="none"><path d="M50 0L53.5 46.5L100 50L53.5 53.5L50 100L46.5 53.5L0 50L46.5 46.5L50 0Z" fill="currentColor" /></svg>
						</motion.div>

						<h1 className="text-[13vw] md:text-[9rem] font-bold font-[family-name:var(--font-syne)] leading-[0.85] tracking-tighter uppercase text-[#243D30]">BRINGING</h1>

						<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 my-2 md:my-4">
							<h1 className="text-[13vw] md:text-[9rem] font-bold font-[family-name:var(--font-syne)] leading-[0.85] tracking-tighter uppercase text-[#335B46]">NEW</h1>

							{/* Shortened duration and delay to make it snap in */}
							<motion.div
								initial={{ scale: 0, opacity: 0, rotate: -15 }}
								animate={{ scale: 1, opacity: 1, rotate: 0 }}
								transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
								className="hidden md:block w-56 h-24 rounded-full overflow-hidden relative shadow-2xl border-4 border-[#F7F5EF]/50 transform-gpu will-change-transform"
							>
								<img src="https://images.unsplash.com/photo-1786295866839-d17f879c65cd?auto=format&fit=crop&w=600&q=80" className="object-cover w-full h-full" alt="Painter applying a fresh coat of paint" />
							</motion.div>

							<h1 className="text-[13vw] md:text-[9rem] font-bold font-[family-name:var(--font-syne)] leading-[0.85] tracking-tighter uppercase text-[#243D30]">LIFE</h1>
						</div>
					</motion.div>

					{/* Cut delay from 0.5 to 0.15 */}
					<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease: customEase }} className="text-lg md:text-2xl text-[#243D30]/60 max-w-2xl font-medium leading-relaxed mt-10 mb-12">
						Quality painting and remodeling in Cleveland, Ohio. Helping homeowners transform their spaces with quality craftsmanship at affordable prices.
					</motion.p>

					{/* Cut delay from 0.6 to 0.2 */}
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: customEase }} className="flex flex-wrap gap-8 items-center justify-center">
						<Link href="/work" passHref>
							<motion.div whileHover={{ y: -6 }} whileTap={{ y: 2 }} className="bg-[#335B46] text-[#F7F5EF] px-10 py-5 rounded-full font-bold text-lg border-2 border-[#335B46] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(51,91,70,0.3)] cursor-pointer inline-block transform-gpu will-change-transform">
								See Our Work
							</motion.div>
						</Link>
						<Link href="/contact" passHref>
							<motion.div whileHover={{ y: -4 }} whileTap={{ y: 2 }} className="text-[#243D30] font-bold uppercase tracking-widest text-sm transition-all duration-300 cursor-pointer flex items-center gap-2 transform-gpu will-change-transform">
								Get In Touch <span className="text-xl text-[#335B46]">→</span>
							</motion.div>
						</Link>
					</motion.div>
				</div>
			</section>

			{/* 2. THE PHILOSOPHY */}
			<section className="bg-[#F7F5EF] py-32 border-t border-[#243D30]/5 relative z-10 overflow-hidden">
				{/* Graphic: Circular Text rotating in the background */}
				<CircularText className="-left-10 top-20 hidden lg:block" />

				<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
					<motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewProps} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }} className="w-full shadow-2xl rounded-3xl overflow-hidden transform-gpu will-change-transform">
						<ParallaxImage src="https://images.unsplash.com/photo-1757605327126-9baefea3348b?auto=format&fit=crop&w=1600&q=80" alt="Freshly painted living room" className="aspect-[4/5] bg-gray-200" />
					</motion.div>

					<motion.div initial="hidden" whileInView="visible" viewport={viewProps} variants={reveal}>
						<span className="text-sm font-bold tracking-widest uppercase text-[#335B46] mb-6 flex items-center gap-4">
							<span className="w-12 h-px bg-[#335B46]"></span> Our Philosophy
						</span>
						<h2 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-syne)] tracking-tighter mb-8 leading-tight">
							QUALITY WORK. FAIR PRICES.
						</h2>
						<p className="text-[#243D30]/70 text-lg leading-relaxed mb-6 font-medium">
							At Colors of the Earth, we believe every home deserves quality work and attention to detail.
						</p>
						<p className="text-[#243D30]/70 text-lg leading-relaxed mb-10 font-medium">
							For seven years, we&apos;ve helped Cleveland homeowners improve their spaces through painting and remodeling, at a price that makes sense.
						</p>
						<Link href="/pricing" className="border-b-2 border-[#335B46] pb-1 text-[#335B46] font-bold uppercase tracking-widest text-sm hover:opacity-50 transition-opacity">
							See Our Services
						</Link>
					</motion.div>
				</div>
			</section>

			{/* MASSIVE PARALLAX BREAK */}
			<section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden bg-[#243D30]">
				<ParallaxImage src="https://images.unsplash.com/photo-1761013320045-d29e4f10bcbc?auto=format&fit=crop&w=2000&q=80" alt="Newly painted home exterior" className="absolute inset-0 w-full h-full opacity-60" />
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
					<motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewProps} transition={{ duration: 1 }} className="text-[#F7F5EF] text-5xl md:text-9xl font-bold font-[family-name:var(--font-syne)] tracking-tighter mix-blend-overlay transform-gpu will-change-transform">
						ATTENTION TO DETAIL.
					</motion.h2>
				</div>
			</section>

			{/* 3. TECHNICAL ARCHITECTURE */}
			<section className="bg-[#243D30] text-[#F7F5EF] py-32 relative z-10 overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

				{/* Graphic: Rotating 3D Wireframe Globe */}
				<WireframeGlobe className="-right-10 top-1/2 -translate-y-1/2 opacity-50 hidden lg:block" />

				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<motion.div initial="hidden" whileInView="visible" viewport={viewProps} variants={reveal} className="mb-20 text-center">
						<h2 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-syne)] tracking-tighter mb-6">BUILT ON <span className="text-[#A6B59B]">EXPERIENCE.</span></h2>
						<p className="text-[#F7F5EF]/60 max-w-2xl mx-auto text-lg font-medium">Every project matters. We bring years of hands-on experience to every home we work on, with an eye for detail and a commitment to doing the job right.</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{[
							{ stat: "7", label: "Years in Business", desc: "Proudly serving homeowners across Cleveland." },
							{ stat: "Local", label: "Cleveland-Based", desc: "Based right here in Cleveland, Ohio." },
							{ stat: "Fair", label: "Honest Pricing", desc: "Quality craftsmanship at prices that make sense." },
							{ stat: "Full", label: "Full-Service", desc: "From painting to remodeling, we handle it all." }
						].map((metric, idx) => (
							<motion.div
								key={metric.label}
								initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewProps} transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
								className="border border-[#335B46]/20 p-8 rounded-3xl bg-[#243D30]/50 backdrop-blur-md hover:border-[#335B46]/50 hover:bg-[#335B46]/10 transition-colors group relative overflow-hidden transform-gpu will-change-transform"
							>
								<div className="absolute inset-0 bg-gradient-to-br from-[#335B46]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<div className="text-4xl md:text-5xl font-[family-name:var(--font-syne)] font-bold text-[#A6B59B] mb-4 relative z-10">{metric.stat}</div>
								<div className="font-bold uppercase tracking-widest text-sm text-[#F7F5EF] mb-4 relative z-10">{metric.label}</div>
								<p className="text-[#F7F5EF]/60 text-sm leading-relaxed relative z-10">{metric.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* 4. DRAGGABLE SHOWCASE CAROUSEL */}
			<section className="bg-[#F7F5EF] py-32 relative z-10 overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-2 border-[#243D30]/10 pb-8">
					<div>
						<span className="text-sm font-bold tracking-widest uppercase text-[#335B46] mb-4 block flex items-center gap-4">
							<span className="w-8 h-px bg-[#335B46]"></span> Showcase
						</span>
						<motion.h2 initial="hidden" whileInView="visible" viewport={viewProps} variants={reveal} className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-syne)] tracking-tighter">
							RECENT PROJECTS.
						</motion.h2>
					</div>
					<div className="flex items-center gap-4 text-[#243D30]/40 font-bold uppercase tracking-widest text-xs">
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
								<div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative border border-[#335B46]/10 transition-colors duration-500 shadow-xl group-hover:shadow-[0_20px_50px_rgba(51,91,70,0.15)] transform-gpu will-change-transform pointer-events-none">
									<ParallaxImage src={project.img} alt={project.title} className="w-full h-full" />
								</div>
								<div className="flex justify-between items-end">
									<div>
										<h3 className="text-3xl font-[family-name:var(--font-syne)] font-bold group-hover:text-[#335B46] transition-colors">{project.title}</h3>
										<p className="text-[#243D30]/50 mt-2 font-medium">{project.type}</p>
									</div>
									<Link href="/work" className="w-12 h-12 rounded-full border border-[#243D30]/20 flex items-center justify-center group-hover:bg-[#335B46] group-hover:border-[#335B46] group-hover:text-[#F7F5EF] transition-colors duration-300">
										↗
									</Link>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* 5. MASSIVE CALL TO ACTION */}
			<section className="bg-[#F7F5EF] py-40 rounded-t-[3rem] border-t border-[#335B46]/10 relative z-20 overflow-hidden">
				{/* Graphic: Massive Watermark Crosshair in background */}
				<Crosshair className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-[#335B46]/5 opacity-50 scale-[3]" />

				<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
					<motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewProps} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }} className="text-5xl md:text-8xl font-bold font-[family-name:var(--font-syne)] tracking-tighter mb-12 uppercase leading-none transform-gpu will-change-transform">
						Ready to transform <br /> your <span className="text-[#335B46]">home?</span>
					</motion.h2>
					<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewProps} transition={{ duration: 0.8, delay: 0.2 }}>
						<Link href="/contact" passHref>
							<motion.div whileHover={{ y: -8 }} whileTap={{ y: 2 }} className="inline-block bg-[#335B46] text-[#F7F5EF] px-12 py-5 rounded-full font-bold text-lg hover:shadow-[0_20px_40px_rgba(51,91,70,0.35)] transition-all duration-300 cursor-pointer transform-gpu will-change-transform">
								Start Your Project
							</motion.div>
						</Link>
					</motion.div>
				</div>
			</section>

		</div>
	);
}
