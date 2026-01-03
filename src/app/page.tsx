import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/mdx';

export default function Home() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl">
          <p className="text-[--color-accent] text-xs uppercase tracking-widest mb-6 animate-fade-up opacity-0">
            Design with ROAM
          </p>
          
          <h1 className="font-[family-name:var(--font-serif)] text-4xl md:text-6xl lg:text-7xl text-[--color-chrome-bright] leading-[1.1] mb-8 animate-fade-up opacity-0 animate-delay-100">
            Creative direction &<br />
            <span className="text-chrome-gradient">brand design</span> for<br />
            companies that move culture.
          </h1>
          
          <p className="text-[--color-chrome-dim] max-w-xl animate-fade-up opacity-0 animate-delay-200">
            10 years of UI/UX experience compressed into bold, strategic work 
            for startups and D2C brands. Now building AI-powered solutions 
            that turn two-month timelines into two days.
          </p>
          
          <div className="flex gap-6 mt-12 animate-fade-up opacity-0 animate-delay-300">
            <a 
              href="#work" 
              className="text-xs uppercase tracking-widest text-[--color-chrome-bright] border-b border-[--color-accent] pb-1 hover:text-[--color-accent] transition-colors"
            >
              View Work
            </a>
            <a 
              href="mailto:hello@roam.design" 
              className="text-xs uppercase tracking-widest text-[--color-chrome-dim] hover:text-[--color-chrome-bright] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 animate-fade-up opacity-0 animate-delay-400">
          <div className="flex items-center gap-3">
            <div className="w-px h-12 bg-[--color-border]" />
            <span className="text-[--color-chrome-dim] text-xs uppercase tracking-widest rotate-90 origin-left translate-x-3">
              Scroll
            </span>
          </div>
        </div>
      </section>
      
      {/* Work Section */}
      <section id="work" className="px-6 md:px-12 lg:px-24 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-[--color-accent] text-xs uppercase tracking-widest mb-3">
              Selected Work
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-[--color-chrome-bright]">
              Recent Projects
            </h2>
          </div>
          
          <span className="text-[--color-chrome-dim] text-xs">
            {projects.length} projects
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              frontmatter={project.frontmatter}
              index={index}
            />
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-24 border-t border-[--color-border]">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <p className="text-[--color-chrome-bright] font-bold mb-4">RYAN</p>
            <p className="text-[--color-chrome-dim] text-sm max-w-xs">
              Creative Director based in Venice, LA. 
              Building the future of design at the intersection of craft and AI.
            </p>
          </div>
          
          <div className="flex gap-12">
            <div>
              <p className="text-[--color-chrome-dim] text-xs uppercase tracking-widest mb-4">Links</p>
              <div className="flex flex-col gap-2">
                <a href="https://twitter.com" className="text-[--color-chrome] hover:text-[--color-accent] transition-colors text-sm">Twitter</a>
                <a href="https://instagram.com" className="text-[--color-chrome] hover:text-[--color-accent] transition-colors text-sm">Instagram</a>
                <a href="https://linkedin.com" className="text-[--color-chrome] hover:text-[--color-accent] transition-colors text-sm">LinkedIn</a>
              </div>
            </div>
            
            <div>
              <p className="text-[--color-chrome-dim] text-xs uppercase tracking-widest mb-4">Contact</p>
              <a href="mailto:hello@roam.design" className="text-[--color-chrome] hover:text-[--color-accent] transition-colors text-sm">
                hello@roam.design
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-6 border-t border-[--color-border] flex justify-between items-center">
          <p className="text-[--color-chrome-dim] text-xs">
            © 2024 Design with ROAM
          </p>
          <p className="text-[--color-chrome-dim] text-xs">
            Venice, CA
          </p>
        </div>
      </footer>
    </main>
  );
}
