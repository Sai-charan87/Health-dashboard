import SimpleAppointmentCard from "./SimpleAppointmentCard";
import { upcomingAppointments } from "../data/appointments";
import styles from "../styles/UpcomingSchedule.module.css";

function UpcomingSchedule() {
  return (
    <div className={styles.upcomingSchedule}>
      <h3>The Upcoming Schedule</h3>

      <div className={styles.scheduleDay}>
        <h4>On Thursday</h4>
        <div className={styles.scheduleDayCards}>
          {upcomingAppointments
            .filter((appt) => appt.day === "Thursday")
            .map((appt, index) => (
              <SimpleAppointmentCard
                key={index}
                title={appt.title}
                time={appt.time}
              />
            ))}
        </div>
      </div>

      <div className={styles.scheduleDay}>
        <h4>On Saturday</h4>
        <div className={styles.scheduleDayCards}>
          {upcomingAppointments
            .filter((appt) => appt.day === "Saturday")
            .map((appt, index) => (
              <SimpleAppointmentCard
                key={index}
                title={appt.title}
                time={appt.time}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;
