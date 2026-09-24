import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center">
        <div className="footer">
            <Link href="/" className="logo">
              <img src="/images/logo.webp" alt="Logo" />
            </Link>
            <Link href="/about">About</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/contact">Contact</Link>          
        </div>
        <div className="social-icons">
          <p >
            © <span id="year">{new Date().getFullYear()}</span> Marina Kreibring
          </p>
            <a href="https://www.linkedin.com/in/marina-kreibring-belarus/" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/media/set/?set=a.10220453385269109&type=3" target="_blank" rel="noopener noreferrer">
              <img src="/images/fb-icon.png" alt="Facebook" />
            </a>
        
          <p>
            Last updated: <span id="last-updated">{new Date().toLocaleDateString()}</span>
          </p>
        </div>
    </footer>
  );
}

 