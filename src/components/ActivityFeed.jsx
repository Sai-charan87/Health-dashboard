import React from "react";
import styles from "../styles/ActivityFeed.module.css";

function ActivityFeed() {
  return (
    <div className={styles.activityFeed}>
      <h3 className={styles.title}>Activity</h3>
      <p className={styles.summary}>3 appointments on this week</p>

      <div className={styles.chart}>
        <div className={styles.bar} style={{ height: "40%" }} />
        <div className={styles.bar} style={{ height: "70%" }} />
        <div className={styles.bar} style={{ height: "100%" }} />
        <div className={styles.bar} style={{ height: "60%" }} />
        <div className={styles.bar} style={{ height: "20%" }} />
        <div className={styles.bar} style={{ height: "50%" }} />
        <div className={styles.bar} style={{ height: "80%" }} />
      </div>

      <div className={styles.daysRow}>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
      </div>
    </div>
  );
}

export default ActivityFeed;
