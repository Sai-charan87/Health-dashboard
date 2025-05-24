import styles from "../styles/SimpleAppointmentCard.module.css";

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className={styles.appointmentCard}>
      <div className={styles.cardIcon}>
        <i className="far fa-calendar-alt"></i>
      </div>
      <div className={styles.cardContent}>
        <h5>{title}</h5>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
