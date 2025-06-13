// app/components/Navbar.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' }, // Lowercase
  { label: 'Services', href: '/services' }, // Lowercase
  { label: 'Hiring', href: '/hiring' }, // Lowercase
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo-container">
            <Link href="/" className="logo">
              <Image
                src="/biglogo.png"
                alt="Company Logo"
                width={160}
                height={40}
                className="logo-desktop"
                priority
              />
              <Image
                src="/smalllogo.png"
                alt="Company Logo"
                width={48}
                height={48}
                className="logo-mobile"
                priority
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            <button
              onClick={toggleMenu}
              className="menu-toggle"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}