import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
      <Link 
        href="/" 
        className="text-[--color-chrome-bright] font-bold tracking-tight hover:text-[--color-accent] transition-colors"
      >
        RYAN
      </Link>
      
      <nav className="flex gap-8 text-xs uppercase tracking-widest">
        <Link 
          href="/#work" 
          className="text-[--color-chrome] hover:text-[--color-accent] transition-colors"
        >
          Work
        </Link>
        <Link 
          href="/about" 
          className="text-[--color-chrome] hover:text-[--color-accent] transition-colors"
        >
          About
        </Link>
        <a 
          href="mailto:hello@roam.design" 
          className="text-[--color-chrome] hover:text-[--color-accent] transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
