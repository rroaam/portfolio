import Link from 'next/link';
import Image from 'next/image';
import { ProjectFrontmatter } from '@/lib/mdx';

interface ProjectCardProps {
  slug: string;
  frontmatter: ProjectFrontmatter;
  index: number;
}

export default function ProjectCard({ slug, frontmatter, index }: ProjectCardProps) {
  return (
    <Link 
      href={`/work/${slug}`}
      className="project-card block aspect-[4/3] bg-[--color-surface] group"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        opacity: 0 
      }}
    >
      {/* Thumbnail placeholder - replace with actual images */}
      <div className="absolute inset-0 bg-gradient-to-br from-[--color-surface-elevated] to-[--color-void]">
        {frontmatter.thumbnail && frontmatter.thumbnail !== '/images/placeholder/thumb.jpg' && (
          <Image
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[--color-accent] text-xs uppercase tracking-widest">
              {frontmatter.client}
            </span>
            <span className="text-[--color-chrome-dim] text-xs">
              {frontmatter.year}
            </span>
          </div>
          
          <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[--color-chrome-bright] mb-2">
            {frontmatter.title}
          </h3>
          
          <p className="text-[--color-chrome-dim] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            {frontmatter.description}
          </p>
          
          <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            {frontmatter.category.slice(0, 3).map((cat) => (
              <span 
                key={cat}
                className="text-[10px] uppercase tracking-wider text-[--color-chrome-dim] border border-[--color-border] px-2 py-1"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Index number */}
      <div className="absolute top-6 right-6 z-10">
        <span className="text-[--color-chrome-dim] text-xs font-mono">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </Link>
  );
}
