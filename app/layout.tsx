import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";
import Footer from "@/components/Footer";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Your Name | Digital Studio",
	description: "Custom digital storefronts for independent boutiques.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
			<body className={`${syne.variable} ${dmSans.variable} font-sans bg-[#EFEFEF] text-[#0A0A0A] overflow-x-hidden selection:bg-[#0A0A0A] selection:text-[#EFEFEF]`}>
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
