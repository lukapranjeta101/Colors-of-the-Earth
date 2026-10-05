# KINETIC STUDIO | Digital Architecture Portfolio

A high-performance, award-winning style portfolio website built for independent brands. This project abandons standard templates in favor of a bespoke, physics-based UI driven by advanced kinetic typography, seamless page transitions, and buttery smooth scrolling.

## 🚀 Tech Stack

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router) & React 19
*   **Styling:** Tailwind CSS (with native magnetic hover translations)
*   **Animation Engine:** [GSAP](https://gsap.com/) (GreenSock) + `@gsap/react`
*   **Scroll Physics:** [Lenis](https://lenis.studiofreight.com/) (Native React Wrapper)
*   **Fonts:** Syne (Primary Display) & DM Sans (Body text) via `next/font`

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
To get started, clone this repository to your local machine:
```bash
git clone [https://github.com/your-username/portfolio-website.git](https://github.com/your-username/portfolio-website.git)
cd portfolio-website
```

### 2. Install Node Modules (Dependencies)
This project requires specific up-to-date modules to ensure React 19 compatibility and sub-millisecond animation performance. Run the following command to install the core Next.js modules alongside our custom animation stack:
```bash
npm install
```

**Key dependencies installed via this command include:**
*   **`gsap` & `@gsap/react`**: For high-performance timeline sequencing and scroll triggers.
*   **`lenis`**: For the physics-based, frictionless smooth scrolling engine.
*   **`tailwindcss`, `postcss`, `autoprefixer`**: For the UI styling.
*   **`lucide-react`** *(optional)*: For lightweight, crisp SVG icons.

### 3. Run the Development Server
Once all modules are installed, start the Next.js local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 📁 Project Architecture & File Details

This project utilizes the Next.js App Router. Here is the breakdown of the core files and what they control:

### Core Layout & Providers
*   **`app/layout.tsx`**: The root layout. It imports global CSS, injects the custom Google Fonts (Syne & DM Sans), and wraps the entire application in the `SmoothScroll` provider.
*   **`app/globals.css`**: Contains Tailwind directives and the base CSS resets. *(Note: native `scroll-smooth` is intentionally omitted here to allow Lenis to control the scroll physics).*
*   **`components/SmoothScroll.tsx`**: The global Lenis wrapper that initializes the smooth scroll physics (`lerp: 0.07`) and globally registers GSAP plugins (like `ScrollTrigger`).
*   **`components/Navbar.tsx`**: The global navigation header featuring magnetic hover links.

### The Pages (Routes)
*   **`app/page.tsx` (Homepage)**
    *   **Content:** The main entry point featuring the "Architecting Digital Flagships" hero section, the Philosophy statement, and a draggable kinetic showcase carousel.
    *   **Tech:** Uses a master `useGSAP` timeline with `power4.out` easing to aggressively snap elements into place on load, completely free of "floaty" delays.
*   **`app/work/page.tsx` (The Archive)**
    *   **Content:** A masonry-style gallery of past projects.
    *   **Tech:** Utilizes continuous parallax image scrolling inside static, architectural bounding boxes.
*   **`app/pricing/page.tsx` (Capabilities & Investment)**
    *   **Content:** Outlines the service tiers (The Showcase vs. The Digital Flagship) using a high-contrast Light/Dark mode side-by-side layout.
    *   **Tech:** Features the rotating `WireframeGlobe` architectural SVG graphic.
*   **`app/contact/page.tsx` (Start the Dialogue)**
    *   **Content:** A minimalist, premium inquiry form targeting Q3 bookings.
    *   **Tech:** Uses ambient radial gradients and floating input labels triggered by Tailwind's `peer-focus` utilities.

---

## 🛠️ Development Environment & Hardware

This project was architected and built using **VS Code** alongside local AI agents running on the following hardware configuration. The lightweight nature of the GSAP and Lenis stack ensures 60fps performance even on highly optimized, mid-range setups.

**Local Machine Specs:**
*   **Processor:** Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz
*   **Memory (RAM):** 8.00 GB
*   **Graphics:** NVIDIA GeForce GT 730 (4 GB VRAM)
*   **Storage:** 504 GB allocated on a 1.14 TB drive
*   **OS:** Windows 64-bit

**AI Architecture:**
The codebase was developed using the **Continue** extension, leveraging local AI models via **Ollama** for entirely autonomous, rate-limit-free agentic workflows.
*   **Agent Code Generation:** `qwen2.5-coder:7b`
*   **Architectural Planning:** `llama3`
