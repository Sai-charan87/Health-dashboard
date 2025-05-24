import React from "react";
import styles from "../styles/AnatomySection.module.css";
import anatomyImg from "../assets/human-anatomy.avif"; // use your image path

const AnatomySection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={anatomyImg}
          alt="Human Anatomy"
          className={styles.anatomyImage}
        />
        <div className={`${styles.sticker} ${styles.heart}`}>
          ❤️ Healthy Heart
        </div>
        <div className={`${styles.sticker} ${styles.leg}`}>🦵 Healthy Leg</div>
      </div>
    </div>
  );
};

export default AnatomySection;
