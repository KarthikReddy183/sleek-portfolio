import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, Youtube } from 'lucide-react';
import type { Metadata } from 'next';
import { experiences } from '@/config/Experience';
import { ExperienceList } from '@/components/experience/ExperienceList';

export const metadata: Metadata = {
  title: 'Karthik Reddy Y - Full Stack Web Developer',
  description: 'Engineer, polymath, and creator. Love to build cool stuff.',
};

const socials = [
  { label: 'X', href: 'https://x.com/ramxcodes', mark: '𝕏' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ramxcodes/', icon: Linkedin },
  { label: 'Github', href: 'https://github.com/ramxcodes', icon: Github },
  { label: 'YouTube', href: 'https://youtube.com/@ramxcodes', icon: Youtube },
  { label: 'Instagram', href: 'https://instagram.com/ramxcodes/', icon: Instagram },
  { label: 'Pinterest', href: 'https://pinterest.com/ramxcodes', mark: '℘' },
  { label: 'Medium', href: 'https://ramxcodes.medium.com/', mark: 'M' },
  { label: 'Email', href: 'mailto:hi@ramx.in', icon: Mail },
];

const collections = [
  { heading: 'Development', links: [
    { title: 'Gears', description: 'Tools, devices, and software I use to get work done.', href: '/gears' },
    { title: 'Setup', description: 'VSCode / Cursor configuration and extensions guide.', href: '/setup' },
    { title: 'Terminal', description: 'Zsh, Starship, Fastfetch, and shell configuration.', href: '/terminal' },
  ] },
  { heading: 'Personal', links: [
    { title: 'Books', description: 'Books that have influenced my thinking and growth.', href: '/books' },
    { title: 'Movies', description: 'Films and shows that have inspired and entertained me.', href: '/movies' },
  ] },
];

export default function HomePage() {
  return (
    <main className="ramx-main">
      <section className="ramx-intro">
        <div className="ramx-identity">
          <Image src="/assets/logo.png" alt="Karthik Reddy Y pixel avatar" width={64} height={64} className="ramx-avatar" priority />
          <div>
            <h1>Karthik Reddy Y</h1>
            <p className="ramx-role">Engineer <span>·</span> Polymath <span>·</span> <a href="mailto:hi@ramx.in">Email</a></p>
          </div>
        </div>
        <p className="ramx-bio">Love to build cool stuff, content creator &amp; polymath.</p>
        <div className="ramx-socials" aria-label="Social links">
          {socials.map(({ label, href, icon: Icon, mark }) => (
            <a key={label} href={href} aria-label={label} title={label}>
              {Icon ? <Icon size={17} strokeWidth={1.8} /> : <span className="ramx-social-mark">{mark}</span>}
            </a>
          ))}
        </div>
      </section>

      <section className="ramx-section ramx-experience">
        <h2>Experience</h2>
        <ExperienceList experiences={experiences.slice(0, 3)} />
        <Link className="ramx-more" href="/work-experience">Show all work experiences</Link>
      </section>

      {collections.map((collection) => <section className="ramx-section ramx-collection" key={collection.heading}>
        <h2>{collection.heading}</h2>
        <div className="ramx-collection-list">{collection.links.map((item) => <Link href={item.href} key={item.title}>
          <strong>{item.title}</strong><span>{item.description}</span><ArrowUpRight size={14} />
        </Link>)}</div>
      </section>)}
    </main>
  );
}
