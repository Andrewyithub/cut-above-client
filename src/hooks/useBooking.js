import { useSelector } from 'react-redux';
import { useAddAppointmentMutation } from '../features/appointments/apptApiSlice';
import {
  selectScheduleByDate,
  useUpdateScheduleMutation,
} from '../features/scheduleSlice';
import { useAppointment } from './useAppointment';

export function useBooking() {
  const [addAppointment] = useAddAppointmentMutation();
  const [updateSchedule] = useUpdateScheduleMutation();
  const scheduleByDate = useSelector(selectScheduleByDate);
  const { rescheduling, cancelId, handleCancel, handleRescheduling } =
    useAppointment();

  const handleBooking = async ({ date, start, end, service, employee }) => {
    const newAppt = await addAppointment({
      date,
      start,
      end,
      service,
      employee,
    }).unwrap();
    const updatedSchedule = await updateSchedule({
      id: scheduleByDate.id,
      appointment: newAppt.data.id,
    }).unwrap();
    console.log(updatedSchedule);
    if (rescheduling && cancelId) {
      handleCancel(cancelId);
      handleRescheduling();
    }
  };

  return {
    handleBooking,
  };
}
