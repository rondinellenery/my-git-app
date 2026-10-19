
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export function Header({ brand, description, children }) {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} to="/">
        <span className={styles.logo}>GT</span>

        <div className={styles.brandText}>
          <strong>{brand}</strong>
          <span>{description}</span>
        </div>
      </Link>

      <nav className={styles.navigation}>
        {children}
      </nav>
    </header>
  );
}
