import { calendarData } from "../data/calendarData";
import styles from "../styles/CalendarView.module.css";

function CalendarView() {
  return (
    <div className={styles.calendarView}>
      <h3 className={styles.calendarTitle}>October 2021</h3>
      <table className={styles.calendarGrid}>
        <thead>
          <tr className={styles.calendarHeader}>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thurs</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.daysRow}>
            {calendarData.days.map((day, index) => (
              <td key={index} className={styles.dayCell}>
                {day}
              </td>
            ))}
          </tr>
          {calendarData.timeSlots.map((timeSlot, rowIndex) => (
            <tr key={rowIndex}>
              {timeSlot.map((slot, colIndex) => (
                <td key={colIndex} className={styles.calendarCell}>
                  {slot || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.appointmentCards}>
        <div className={styles.appointmentCard}>
          <h4>Dentist Appointment</h4>
          <p>Time: 09:00 AM</p>
        </div>
        <div className={styles.appointmentCard}>
          <h4>Physiotherapy Session</h4>
          <p>Time: 03:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
