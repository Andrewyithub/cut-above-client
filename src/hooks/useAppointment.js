import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  useCancelAppointmentMutation,
  useUpdateAppointmentMutation,
} from '../features/appointments/apptApiSlice';
import { useSendCancellationMutation } from '../features/emailSlice';
import {
  beginRescheduling,
  endRescheduling,
  selectCancelId,
  selectRescheduling,
} from '../features/appointments/appointmentSlice';
import { formatDateSlash, formatTime } from '../utils/date';

export function useAppointment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rescheduling = useSelector(selectRescheduling);
  const cancelId = useSelector(selectCancelId);
  const [cancelAppointment] = useCancelAppointmentMutation();
  const [updateAppointment] = useUpdateAppointmentMutation();
  const [sendCancellation] = useSendCancellationMutation();

  const handleCancel = async (id) => {
    try {
      const cancelledAppt = await cancelAppointment({ id }).unwrap();
      const formattedDate = formatDateSlash(cancelledAppt.data.date);
      const formattedTime = formatTime(cancelledAppt.data.time);
      if (!rescheduling) {
        const sentCancellation = await sendCancellation({
          employee: cancelledAppt.data.employee,
          date: formattedDate,
          time: formattedTime,
        });
        console.log('cancellation email response: ', sentCancellation);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleModify = (id) => {
    dispatch(beginRescheduling(id));
    navigate('/bookings');
  };

  const handleRescheduling = () => dispatch(endRescheduling());

  const handleStatusUpdate = async (appointment, newStatus) => {
    const checkedInAppt = await updateAppointment({
      ...appointment,
      status: newStatus,
    }).unwrap();
    console.log('check status update: ', checkedInAppt);
  };

  return {
    // appointments,
    rescheduling,
    cancelId,
    handleCancel,
    handleModify,
    handleRescheduling,
    handleStatusUpdate,
  };
}
