import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
  title: 'About | Ryan',
  description: 'Creative Director with 10 years of UI/UX experience, building AI-powered design solutions.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <p className="text-[--color-accent] text-xs uppercase tracking-widest mb-6">
            About
          </p>
          
          <h1 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl lg:text-6xl text-[--color-chrome-bright] leading-[1.1] mb-12">
            Designing at the intersection of craft, strategy, and technology.
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-[--color-chrome]">
                I'm Ryan, a creative director and designer based in Venice, LA. 
                I run Design with ROAM, a design agency specializing in bold, 
                culture-shifting brand work for startups and D2C brands.
              </p>
              
              <p className="text-[--color-chrome]">
                With 10 years of UI/UX experience, I've developed a process that 
                combines strategic thinking with meticulous craft. Now I'm 
                transitioning the agency into a "vibe code design agency" — 
                creating AI-backed solutions that compress traditional two-month 
                timelines into two days.
              </p>
              
              <p className="text-[--color-chrome]">
                I believe the best design work happens when you deeply understand 
                both the problem and the people you're designing for. Every 
                project is an opportunity to move culture forward.
              </p>
            </div>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-[--color-chrome-dim] text-xs uppercase tracking-widest mb-4">
                  Services
                </h3>
                <ul className="space-y-2">
                  <li className="text-[--color-chrome-bright]">Creative Direction</li>
                  <li className="text-[--color-chrome-bright]">Brand Identity</li>
                  <li className="text-[--color-chrome-bright]">UI/UX Design</li>
                  <li className="text-[--color-chrome-bright]">Campaign Design</li>
                  <li className="text-[--color-chrome-bright]">AI-Powered Solutions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-[--color-chrome-dim] text-xs uppercase tracking-widest mb-4">
                  Select Clients
                </h3>
                <ul className="space-y-2">
                  <li className="text-[--color-chrome]">LIV Las Vegas</li>
                  <li className="text-[--color-chrome]">MUDWTR</li>
                  <li className="text-[--color-chrome]">+ More</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-[--color-chrome-dim] text-xs uppercase tracking-widest mb-4">
                  Connect
                </h3>
                <div className="space-y-2">
                  <a 
                    href="mailto:hello@roam.design" 
                    className="block text-[--color-accent] hover:text-[--color-chrome-bright] transition-colors"
                  >
                    hello@roam.design
                  </a>
                  <a 
                    href="https://twitter.com" 
                    className="block text-[--color-chrome] hover:text-[--color-accent] transition-colors"
                  >
                    Twitter
                  </a>
                  <a 
                    href="https://instagram.com" 
                    className="block text-[--color-chrome] hover:text-[--color-accent] transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[--color-border]">
        <div className="max-w-4xl">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-[--color-chrome-bright] mb-6">
            Let's build something together.
          </h2>
          <p className="text-[--color-chrome-dim] mb-8 max-w-xl">
            Whether you need brand strategy, creative direction, or AI-powered 
            design solutions — I'd love to hear about your project.
          </p>
          <a 
            href="mailto:hello@roam.design"
            className="inline-block text-xs uppercase tracking-widest text-[--color-void] bg-[--color-accent] px-6 py-3 hover:bg-[--color-chrome-bright] transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </main>
  );
}
