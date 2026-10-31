import Link from 'next/link';
import React from 'react';

const navigate = [
  ['Home', '/'], ['Work', '/work-experience'], ['Blog', '/blog'], ['Resume', '/resume'],
  ['Projects', '/projects'], ['Gears', '/gears'], ['Setup', '/setup'], ['Terminal', '/terminal'],
  ['Books', '/books'], ['Movies', '/movies'], ['RSS FEED', '/blog/feed.xml'],
];
const connect = [
  ['X', 'https://x.com/ramxcodes'], ['LinkedIn', 'https://www.linkedin.com/in/ramxcodes/'],
  ['Github', 'https://github.com/ramxcodes'], ['YouTube', 'https://youtube.com/@ramxcodes'],
  ['Instagram', 'https://instagram.com/ramxcodes/'], ['Pinterest', 'https://pinterest.com/ramxcodes'],
  ['Medium', 'https://ramxcodes.medium.com/'], ['Email', 'mailto:hi@ramx.in'],
];

export default function Footer() {
  return <footer className="ramx-footer">
    <div className="ramx-footer-column"><h2>Navigate</h2><div>{navigate.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</div></div>
    <div className="ramx-footer-column"><h2>Connect</h2><div>{connect.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div></div>
    <p className="ramx-copyright">© 2026 Karthik Reddy Y. All rights reserved.</p>
  </footer>;
}
