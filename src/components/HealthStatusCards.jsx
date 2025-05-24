import React from "react";
import styles from "../styles/HealthStatusCards.module.css";

const mockCards = [
  {
    organ: "Lungs",
    date: "26 Oct 2021",
    status: "Poor",
    color: "#FF4D4F",
    percent: 80,
  },
  {
    organ: "Teeth",
    date: "26 Oct 2021",
    status: "Good",
    color: "#00C3A5",
    percent: 65,
  },
  {
    organ: "Bone",
    date: "26 Oct 2021",
    status: "Critical",
    color: "#FF7A00",
    percent: 90,
  },
];

const HealthStatusCards = () => {
  return (
    <div className={styles.cardContainer}>
      {mockCards.map((item, idx) => (
        <div className={styles.card} key={idx}>
          <div className={styles.organ}>{item.organ}</div>
          <div className={styles.date}>Date: {item.date}</div>
          <div className={styles.progressWrapper}>
            <div
              className={styles.progressBar}
              style={{ width: `${item.percent}%`, backgroundColor: item.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
