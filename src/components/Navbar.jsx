import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'TREATMENTS', path: '/treatments' },
  { label: 'PACKAGES', path: '/packages' },
  { label: 'ABOUT', path: '/about' },
  { label: 'CONTACT', path: '/contact' },
];

export default function Navbar({ onCartOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-kristals-cream/95 backdrop-blur-md border-b border-kristals-taupe/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-kristals-dark flex items-center justify-center">
              <span className="font-serif font-bold text-kristals-gold text-xl">K</span>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-kristals-dark tracking-tight block leading-none">Kristal's</span>
              <span className="text-[10px] text-kristals-gold tracking-[0.2em] uppercase font-medium">Med Spa &amp; Wellness</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-widest transition-colors relative group ${
                  location.pathname === link.path ? 'text-kristals-gold' : 'text-kristals-dark/60 hover:text-kristals-gold'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-kristals-gold transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Cart button */}
            <button
              onClick={onCartOpen}
              className="relative p-2 text-kristals-dark/60 hover:text-kristals-gold transition-colors"
              aria-label="Open cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-kristals-gold text-white text-xs font-bold flex items-center justify-center">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>

            {/* Book Now - desktop */}
            <a href="tel:+17864745829" className="hidden md:inline-block btn-primary text-xs py-2.5 px-6">
              BOOK NOW
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-kristals-dark/60"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-kristals-taupe/30 bg-kristals-cream">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm font-medium tracking-widest py-2 transition-colors ${
                  location.pathname === link.path ? 'text-kristals-gold' : 'text-kristals-dark/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+17864745829" className="block text-center btn-primary text-xs py-2.5 px-6 mt-4">
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}