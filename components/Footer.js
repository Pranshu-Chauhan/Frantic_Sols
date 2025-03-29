import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "../styles/Footer.module.css"; // ✅ Import the CSS module

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Footer Columns */}
        <div className={styles.footerColumn}>
          <h4>Project Services</h4>
          <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Explore a Digital Space</a></li>
            <li><a href="#">Request a Quote</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Creator Tools</h4>
          <ul>
            <li><a href="#">Web Platform</a></li>
            <li><a href="#">Documentation ↗</a></li>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Supported Applications</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Brand Resources</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p><strong>Frantic Solutions</strong> &copy; 2025</p>
      </div>
    </footer>
  );
}
