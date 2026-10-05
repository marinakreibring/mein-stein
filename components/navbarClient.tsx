"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

type User = {
    id: string;
    name: string;
    email: string;
};

type NavbarProps = {
    user: User | null;
};


export default function Navbar({ user }: NavbarProps) {
    const pathname = usePathname();
    const firstName = user?.name.split(" ")[0];

    const [isOpen, setIsOpen] = useState(false);
    
    const { items } = useCart();
    console.log("CART ITEMS:", items);
    const cartCount = items.reduce(
        (total, item) => total + item.quantity,
        0
    );

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
                    href="/contact-form"
                    className={`nav-link ${
                    pathname === "/contact-form" ? "active" : ""
                    }`}
                >
                    Contact
                </Link>
                {user ? (
                    <>
                        <span className="nav-link">
                            Welcome, {firstName}!
                        </span>

                        <Link href="/logout" className="nav-link">
                            Logout
                        </Link>
                    </>
                    ) : (
                        <Link
                            href="/signin"
                                className={`nav-link ${
                                pathname === "/signin" ? "active" : ""
                                }`}
                            >
                            My Account
                        </Link>
                )}
                
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

                <Link href="/contact-form" onClick={closeMenu}>
                    Contact
                </Link>

                {user ? (
                    <>
                        <span className="nav-link">
                            Welcome, {firstName}!
                        </span>

                        <Link href="/logout" onClick={closeMenu}>
                            Logout
                        </Link>
                    </>
                    ) : (
                    <Link href="/signin" onClick={closeMenu}>
                        Sign In
                    </Link>
                )}
            </div>
            <div className="cart">
                <Link
                    href="/cart"
                    className={`nav-link ${
                    pathname === "/cart" ? "active" : ""
                    }`}
                >
                     🛒 
                    {cartCount > 0 && (
                        <span className="count">
                            {cartCount}
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    );
}

