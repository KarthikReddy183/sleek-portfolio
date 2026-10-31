'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { ThemeToggleButton } from './ThemeSwitch';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work-experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
];

export default function Navbar() {
  return <header className="ramx-header">
    <Link className="ramx-brand" href="/" aria-label="Karthik Reddy Y home">
      <Image src="/assets/logo.png" alt="" width={32} height={32} />
    </Link>
    <nav aria-label="Main navigation">{links.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}</nav>
    <div className="ramx-header-tools">
      <Link href="/blog" aria-label="Search blog" title="Search blog"><Search size={17} /></Link>
      <ThemeToggleButton variant="circle" start="top-right" blur />
    </div>
  </header>;
}
