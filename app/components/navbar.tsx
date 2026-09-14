"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link href="/" className="logo" onClick={closeMenu}>
        <img src="/images/logo.webp" alt="Logo" />
      </Link>

      {/* Desktop navigation */}
      <div className="desktopMenu">
        <Link href="/about">About Us</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/cart">🛒</Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile navigation */}
      <div className={`mobileMenu ${isOpen ? "open" : ""}`}>
        <Link href="/about" onClick={closeMenu}>
          About Us
        </Link>

        <Link href="/shop" onClick={closeMenu}>
          Shop
        </Link>

        <Link href="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <Link href="/cart" onClick={closeMenu}>
          Cart
        </Link>
      </div>
    </nav>
  );
}
