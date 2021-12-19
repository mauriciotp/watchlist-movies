import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link to="/" className={styles.logo}>
          WatchList
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Watch List</Link>
          </li>
          <li>
            <Link to="/watched">Watched</Link>
          </li>
          <li>
            <Link to="/add" className={styles.add}>
              + Add
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
