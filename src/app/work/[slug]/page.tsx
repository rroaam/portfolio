import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/mdx';
import Header from '@/components/Header';

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return { title: 'Project Not Found' };
  }
  
  return {
    title: `${project.frontmatter.title} | Ryan`,
    description: project.frontmatter.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }
  
  const { frontmatter, content } = project;
  
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl">
          <Link 
            href="/#work"
            className="inline-flex items-center gap-2 text-[--color-chrome-dim] text-xs uppercase tracking-widest mb-8 hover:text-[--color-accent] transition-colors"
          >
            <span>←</span>
            <span>Back to Work</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[--color-accent] text-xs uppercase tracking-widest">
              {frontmatter.client}
            </span>
            <span className="text-[--color-chrome-dim]">•</span>
            <span className="text-[--color-chrome-dim] text-xs">
              {frontmatter.year}
            </span>
          </div>
          
          <h1 className="font-[family-name:var(--font-serif)] text-4xl md:text-6xl text-[--color-chrome-bright] mb-6">
            {frontmatter.title}
          </h1>
          
          <p className="text-[--color-chrome] text-lg max-w-2xl mb-8">
            {frontmatter.description}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {frontmatter.category.map((cat) => (
              <span 
                key={cat}
                className="stamp text-[--color-chrome-dim]"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {/* Hero Image */}
      <section className="px-6 md:px-12 lg:px-24 pb-16">
        <div className="aspect-[21/9] bg-[--color-surface] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[--color-surface-elevated] to-[--color-void]" />
          {/* Add hero image here when available */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[--color-chrome-dim] text-xs uppercase tracking-widest">
              Hero Image
            </span>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-3xl mx-auto">
          <article className="prose">
            <MDXRemote source={content} />
          </article>
        </div>
      </section>
      
      {/* Project Navigation */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[--color-border]">
        <div className="flex justify-between items-center">
          <Link 
            href="/#work"
            className="text-[--color-chrome-dim] text-xs uppercase tracking-widest hover:text-[--color-accent] transition-colors"
          >
            ← All Projects
          </Link>
          
          <a 
            href="mailto:hello@roam.design"
            className="text-[--color-accent] text-xs uppercase tracking-widest hover:text-[--color-chrome-bright] transition-colors"
          >
            Start a Project →
          </a>
        </div>
      </section>
    </main>
  );
}
