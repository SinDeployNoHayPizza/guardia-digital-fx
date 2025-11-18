// app/components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import { ModeToggle } from "../ui/ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between rounded-full border border-white/40 dark:border-white/30 bg-white/5 dark:bg-transparent backdrop-blur-3xl shadow-2xl px-6 sm:px-8 lg:px-10">
          {/* Logo con icono */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-opacity">
            <Shield className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline">Guardia Digital</span>
            <span className="sm:hidden">GD</span>
          </Link>
          
          {/* Navigation links */}
          <ul className="flex items-center gap-6">
            <li>
              <Link 
                href="/" 
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Contacto
              </Link>
            </li>
          </ul>
          
          {/* Dark mode toggle */}
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
