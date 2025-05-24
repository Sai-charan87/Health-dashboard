import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";

import styles from "../styles/DashboardMainContent.module.css";

const DashboardOverview = () => (
  <div className={styles.dashboardOverview}>
    <AnatomySection />
    <HealthStatusCards />
  </div>
);

const DashboardMainContent = () => {
  return (
    <div className={styles.dashboardMainContent}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.overviewCard}>
          <h2 className={styles.sectionTitle}>Dashboard Overview</h2>
          <DashboardOverview />
        </div>
        <ActivityFeed />
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
