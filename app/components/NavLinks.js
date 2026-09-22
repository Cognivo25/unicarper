'use client';
import { usePathname } from 'next/navigation';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/references', 'References'],
  ['/services', 'Services'],
  ['/contact', 'Contact'],
];

export default function NavLinks() {
  const path = usePathname();
  return (
    <ul>
      {links.map(([href, label]) => {
        const active = href === '/' ? path === '/' : path.startsWith(href);
        return (
          <li key={href} className={active ? 'active' : undefined}>
            <a href={href} aria-current={active ? 'page' : undefined}>{label}</a>
          </li>
        );
      })}
    </ul>
  );
}
