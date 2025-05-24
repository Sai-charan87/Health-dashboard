import React from "react";
import { Bell, Plus } from "lucide-react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Left: Logo, Search, Notification */}
      <div className={styles.left}>
        <h1 className={styles.logo}>
          Healthcare<span className={styles.dot}>.</span>
        </h1>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." disabled />
        </div>
        <div className={styles.iconBox}>
          <Bell size={20} />
        </div>
      </div>

      {/* Right: Avatar + Add */}
      <div className={styles.right}>
        <div className={`${styles.squareBox} ${styles.userBox}`}>
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className={styles.avatar}
          />
          <span className={styles.userName}>John Doe</span>
        </div>
        <div className={styles.squareBox}>
          <Plus size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
