export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] text-[#EFEFEF] py-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-2">
                    {/* Custom Geometric Kinetic Logo (Light Version) */}
                    <div className="flex items-center gap-4 mb-6">
                        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#EFEFEF]">
                            <path d="M0 0H30V100H0V0Z" fill="currentColor" />
                            <path d="M40 0H100V30H40V0Z" fill="currentColor" />
                            <path d="M40 70H100V100H40V70Z" fill="currentColor" />
                            <path d="M70 40H100V60H70V40Z" fill="currentColor" />
                        </svg>
                        <span className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight">
                            STUDIO.
                        </span>
                    </div>
                    <p className="text-[#EFEFEF]/50 max-w-sm text-sm leading-relaxed">
                        Architecting high-performance digital storefronts for independent boutiques and heritage brands worldwide.
                    </p>
                </div>

                <div>
                    <h4 className="font-[family-name:var(--font-syne)] font-bold text-lg mb-6">Navigation</h4>
                    <ul className="space-y-4 text-sm text-[#EFEFEF]/50 font-medium">
                        <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="/work" className="hover:text-white transition-colors">Archive</a></li>
                        <li><a href="/pricing" className="hover:text-white transition-colors">Services</a></li>
                        <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-[family-name:var(--font-syne)] font-bold text-lg mb-6">Socials</h4>
                    <ul className="space-y-4 text-sm text-[#EFEFEF]/50 font-medium">
                        <li><a href="#" className="hover:text-white transition-colors">LinkedIn ↗</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Twitter / X ↗</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">GitHub ↗</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#EFEFEF]/30 font-medium tracking-widest uppercase">
                <p>© {new Date().getFullYear()} STUDIO. All rights reserved.</p>
                <p className="mt-4 md:mt-0">Designed & Engineered in-house.</p>
            </div>
        </footer>
    );
}
