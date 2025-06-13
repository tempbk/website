// app/components/Footer.tsx
import Link from 'next/link';
import { Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Navigation</h3>
          <ul className="footer-links">
            <li>
              <Link href="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="footer-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="footer-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/ContactUs" className="footer-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-contact">
            Email: <a href="mailto:cjbyron99@gmail.com" className="footer-link">cjbyron99@gmail.com</a>
          </p>
          <p className="footer-contact">Phone: 701-864-0988</p>
          
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social">
            <a
              href="https://x.com/ByronTechs"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Byron Technology. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
