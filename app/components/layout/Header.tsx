// app/components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';

import { ModeToggle } from "@/app/components/ui/ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        {/* Placeholder for logo */}
        <div className="logo">Guardia Digital</div>
        {/* Placeholder for navigation links */}
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        {/* Placeholder for dark mode toggle */}
        <div className="dark-mode-toggle">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
