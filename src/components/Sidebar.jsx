// src/components/Sidebar.jsx
import React from "react";
import styles from "../styles/Sidebar.module.css";
import {
  LayoutDashboard,
  History,
  CalendarDays,
  ClipboardList,
  BarChart,
  FlaskConical,
  MessageCircle,
  LifeBuoy,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.topSection}>
        <h3 className={styles.sectionTitle}>General</h3>
        <nav className={styles.nav}>
          <a href="#">
            <LayoutDashboard className={styles.icon} /> Dashboard
          </a>
          <a href="#">
            <History className={styles.icon} /> History
          </a>
          <a href="#">
            <CalendarDays className={styles.icon} /> Calendar
          </a>
          <a href="#">
            <ClipboardList className={styles.icon} /> Appointments
          </a>
          <a href="#">
            <BarChart className={styles.icon} /> Statistics
          </a>
          <a href="#">
            <FlaskConical className={styles.icon} /> Tests
          </a>
        </nav>

        <h3 className={styles.sectionTitle}>Tools</h3>
        <nav className={styles.nav}>
          <a href="#">
            <MessageCircle className={styles.icon} /> Chat
          </a>
          <a href="#">
            <LifeBuoy className={styles.icon} /> Support
          </a>
        </nav>
      </div>

      <div className={styles.bottomSection}>
        <a href="#" className={styles.bottomLink}>
          <Settings className={styles.icon} /> Setting
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
