import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        petFound
      </Link>
      <nav className={styles.nav}>
        <Link to="/" className={isActive('/') ? styles.active : ''}>Home</Link>
        <Link to="/report-lost" className={isActive('/report-lost') ? styles.active : ''}>Report Lost</Link>
        <Link to="/report-found" className={isActive('/report-found') ? styles.active : ''}>Report Found</Link>
        <Link to="/browse" className={isActive('/browse') ? styles.active : ''}>Browse</Link>
      </nav>
    </header>
  );
}
