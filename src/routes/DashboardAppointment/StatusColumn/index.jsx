import UpdateApptStatus from '../UpdateApptStatus';
import Employee from '@/components/Employee';
import ApptTitle from '@/components/ApptCard/ApptTitle';
import ModifyAppointment from '@/components/ApptCard/ApptButton/ModifyAppointment';
import CancelAppointment from '@/components/ApptCard/ApptButton/CancelAppointment';
import styles from './styles.module.css';

export default function StatusColumn({ appointments, status }) {
  const nextStatus = {
    scheduled: 'checked-in',
    'checked-in': 'completed',
    completed: 'scheduled',
  };
  const newStatus = nextStatus[status];
  if (appointments.length < 1) {
    return <h5>No {status} appointments</h5>;
  }
  return (
    <div className={styles.column}>
      {appointments.map((appt) => (
        <div key={appt.id} className={styles.appointment_card}>
          <div className={styles.flex_col}>
            <div>
              <ApptTitle appointment={appt} />
              <Employee employeeId={appt.employeeId} />
            </div>
          </div>
          <div className={styles.buttons_wrap}>
            <div className="grow-0">
              <UpdateApptStatus appointment={appt} newStatus={newStatus} />
            </div>
            <div className="grow-0">
              <ModifyAppointment appointment={appt} />
            </div>
            <div className="grow-0">
              <CancelAppointment appointment={appt} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}