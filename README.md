# Jordan Cowan - Personal Portfolio

[![CI/CD Pipeline](https://github.com/JC-02/Personal-Website/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/JC-02/Personal-Website/actions/workflows/ci-cd.yml)
[![Dependency Updates](https://github.com/JC-02/Personal-Website/actions/workflows/dependencies.yml/badge.svg)](https://github.com/JC-02/Personal-Website/actions/workflows/dependencies.yml)

## Hello there

My name is **Jordan Cowan**, and I'm a Software Engineer currently living in Victoria, BC, Canada. Welcome to the repository for my personal website and portfolio!

**Visit my live portfolio: [www.jordancowan.ca](https://www.jordancowan.ca)**

## About This Portfolio

This portfolio website is more than just a collection of projects, it's a carefully crafted experience that reflects my passion for neat technology and elegant design. Built with modern web technologies, it features some interactive animations, responsive design, and a contact system for others to easily get in touch with me.

### Key Highlights
- Interactive particle animation system that responds to user interaction
- Smooth scroll animations and parallax effects
- Professional contact form with email integration
- Fully responsive design optimized for all devices
- Modern, clean aesthetic with attention to detail

## Tech Stack

This portfolio is built with a modern, performant tech stack:

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite for fast development and optimized builds
- **Form Handling**: EmailJS for contact functionality
- **Code Quality**: Biome formatter and ESLint
- **Hosting**: Vercel for seamless deployment and global CDN
- **Version Control**: Git with GitHub integration

## Running the Project Locally

Want to explore the code or run it locally? Here's how to get started:

### Prerequisites
- Node.js (version 18 or higher)
- npm or bun package manager

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/JC-02/Personal-Website.git
   cd Personal-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or if you prefer bun
   bun install
   ```

3. **Set up environment variables** (optional for basic viewing)

   ```bash
   # Create a .env file in the root directory
   # Add EmailJS credentials for contact form functionality
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run code quality checks
- `npm run format` - Format code with Biome

## Project Structure

```text
src/
├── components/                 # React components
│   ├── HeroSection.tsx             # Landing section with name animation
│   ├── AboutSection.tsx            # Personal introduction
│   ├── ProjectsSection.tsx         # Project showcase
│   ├── ExperienceSection.tsx       # Skills and education
│   ├── ContactSection.tsx          # Contact information
│   └── ParticleBackground.tsx      # Interactive animation
├── hooks/                      # Custom React hooks
└── App.tsx                     # Main application component
```

## Contact & Connect

I'm always open to connecting to talk about cool opportunities and projects. If you want to get in touch with me, please reach out through one of:

- **Portfolio Contact Form**: [www.jordancowan.ca/#contact](https://www.jordancowan.ca/#contact)
- **GitHub**: [@JC-02](https://github.com/JC-02)
- **LinkedIn**: [Jordan Cowan](https://www.linkedin.com/in/jordan-cowan-a84853ab)

## Copyright & License

**© 2025 Jordan Cowan. All Rights Reserved.**

This portfolio and all its contents, including but not limited to code, design, text, images, and interactive elements, are the exclusive intellectual property of Jordan Cowan.

### Terms of Use

- **No Reproduction**: This work may not be copied, reproduced, distributed, or transmitted in any form or by any means without explicit written permission.
- **No Commercial Use**: This portfolio and its components may not be used for commercial purposes.
- **Attribution Required**: Any reference to, citation of, or inspiration drawn from this work must include proper attribution to Jordan Cowan with a link to this repository.
- **Code Excerpts**: Small code snippets may be referenced for educational purposes only with proper attribution, but substantial portions may not be copied.

### Educational Use

While this portfolio serves as inspiration for other developers, please respect intellectual property rights. If you're inspired by any techniques or approaches, create your own unique implementation rather than copying existing work.

For permissions, licensing inquiries, or collaboration opportunities, please contact me through my portfolio website.

---

*Built with ❤️ and lots of ☕ by Jordan Cowan*
