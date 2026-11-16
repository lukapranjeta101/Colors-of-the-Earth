import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";
import Footer from "@/components/Footer";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Colors of the Earth | Painting & Remodeling | Cleveland, OH",
	description: "Colors of the Earth Painting and Remodeling provides quality painting and home remodeling services in Cleveland, Ohio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
			<body className={`${syne.variable} ${dmSans.variable} font-sans bg-[#F7F5EF] text-[#243D30] overflow-x-hidden selection:bg-[#243D30] selection:text-[#F7F5EF]`}>
				<Navbar />
				<main className="pt-24 min-h-screen">
					{children}
				</main>
				<ScrollToTop />
				<Footer />
			</body>
		</html>
	);
}
