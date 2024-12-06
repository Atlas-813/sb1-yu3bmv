import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinksProps {
  mobile?: boolean;
  onClose?: () => void;
}

export default function NavLinks({ mobile, onClose }: NavLinksProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const links = [
    { 
      href: isHome ? '#services' : '/', 
      label: 'Services',
      scroll: isHome
    },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/request', label: 'Request' },
  ];

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, scroll: boolean) => {
    if (!scroll) return;
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClose) onClose();
  };

  const baseStyles = mobile
    ? 'block py-3 px-4 rounded-lg text-white font-bold hover:text-primary-300 hover:bg-primary-900/50 transition-all'
    : 'inline-block px-4 py-2 rounded-lg text-white font-bold hover:text-primary-300 hover:bg-primary-900/50 transition-all';

  return (
    <ul className={mobile ? 'space-y-1' : 'flex space-x-2'}>
      {links.map(({ href, label, scroll }) => (
        <li key={href}>
          {scroll ? (
            <a
              href={href}
              className={baseStyles}
              onClick={(e) => handleServiceClick(e, scroll)}
            >
              {label}
            </a>
          ) : (
            <Link
              to={href}
              className={baseStyles}
              onClick={onClose}
            >
              {label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}