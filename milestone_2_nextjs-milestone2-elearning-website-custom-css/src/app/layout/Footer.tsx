import Link from "next/link";
import "../../styles/Footer.css"

function Footer() {
  return (
    <section className="footer-section">
      <footer className="footer-container">
        <div className="footer-content">
          <h2 className="footer-heading">Imtiaz Ahmed Web</h2>
          <nav className="footer-nav">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
          <div className="footer-links">
            <a href="">LinkedIn</a>
           </div>
        </div> 
        <hr />
        <p id="p">Imtiaz Ahmed web &copy; 2024 All rights reserved</p>
      </footer>
    </section>
  );
}

export default Footer;
