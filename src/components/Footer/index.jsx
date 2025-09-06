import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>petFound</div>
            <p className={styles.tagline}>
              Where lost becomes found, where hope becomes reunion.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2,847</span>
                <span className={styles.statLabel}>Pets Reunited</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15,000+</span>
                <span className={styles.statLabel}>Community Members</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Quick Actions</h3>
            <ul className={styles.linkList}>
              <li><a href="/report-lost" className={styles.footerLink}>Report Lost Pet</a></li>
              <li><a href="/browse-found" className={styles.footerLink}>Browse Found Pets</a></li>
              <li><a href="/success-stories" className={styles.footerLink}>Success Stories</a></li>
              <li><a href="/emergency-tips" className={styles.footerLink}>Emergency Tips</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Community</h3>
            <ul className={styles.linkList}>
              <li><a href="/volunteer" className={styles.footerLink}>Become a Volunteer</a></li>
              <li><a href="/ngo-partners" className={styles.footerLink}>NGO Partners</a></li>
              <li><a href="/local-groups" className={styles.footerLink}>Local Groups</a></li>
              <li><a href="/forum" className={styles.footerLink}>Community Forum</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Support</h3>
            <ul className={styles.linkList}>
              <li><a href="/help-center" className={styles.footerLink}>Help Center</a></li>
              <li><a href="/contact" className={styles.footerLink}>Contact Us</a></li>
              <li><a href="/safety-guide" className={styles.footerLink}>Safety Guide</a></li>
              <li><a href="/faq" className={styles.footerLink}>FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterSection}>
            <h3 className={styles.columnTitle}>Stay Updated</h3>
            <p className={styles.newsletterText}>
              Get weekly updates on reunions, safety tips, and community highlights.
            </p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email"
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe
              </button>
            </form>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>Twitter</a>
              <a href="#" className={styles.socialLink}>Facebook</a>
              <a href="#" className={styles.socialLink}>Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <span className={styles.copyright}>© 2025 petFound. Made with care for our furry friends.</span>
          </div>
          <div className={styles.bottomRight}>
            <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
            <a href="/terms" className={styles.legalLink}>Terms of Service</a>
            <a href="/cookies" className={styles.legalLink}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;