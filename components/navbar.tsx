"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <Link href="/" className="logo" onClick={closeMenu}>
                <img src="/images/logo.jpg" alt="Logo" />
            </Link>

            {/* Desktop navigation */}
            <div className="desktopMenu">
                <Link
                    href="/about"
                    className={`nav-link ${
                    pathname === "/about" ? "active" : ""
                    }`}
                >
                    About
                </Link>
                <Link
                    href="/shop"
                    className={`nav-link ${
                    pathname === "/shop" ? "active" : ""
                    }`}
                >
                    Shop
                </Link>
                <Link
                    href="/contact"
                    className={`nav-link ${
                    pathname === "/contact" ? "active" : ""
                    }`}
                >
                    Contact
                </Link>
                <Link
                    href="/signin"
                    className={`nav-link ${pathname === "/signin" ? "active" : ""}`}
                >
                    My Account
                </Link> 
                <Link
                    href="/cart"
                    className={`nav-link ${
                    pathname === "/cart" ? "active" : ""
                    }`}
                >
                    🛒
                </Link>
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

                <Link href="/signin" onClick={closeMenu}>
                    Sign In
                </Link>
            </div>
        </nav>
    );
}

