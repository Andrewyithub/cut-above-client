import ButtonDialog from '../ButtonDialog';
import CustomDialogContent from '../CustomDialogContent';
import { useAppointment } from '../../hooks/useAppointment';
import { useDialog } from '../../hooks/useDialog';
import { useEmployeesQuery } from '../../hooks/useEmployeesQuery';

const dialog = (appointment, employee) => {
  return {
    button: 'Modify',
    title: `Are you sure you want to modify your ${appointment.service}?`,
    content: `With ${employee.firstName} on ${appointment.date} at ${appointment.start}?`,
  };
};

export default function ModifyAppointment({ appointment }) {
  const { open, handleOpen, handleClose } = useDialog();
  const { employee } = useEmployeesQuery(appointment.employee);
  const { handleModify } = useAppointment();

  if (!employee) return <div>Loading...</div>;

  const dialogProps = dialog(appointment, employee);

  return (
    <ButtonDialog
      buttonText={dialogProps.button}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <CustomDialogContent
        dialog={dialogProps}
        handleAgree={() => handleModify(appointment.id)}
        handleClose={handleClose}
      />
    </ButtonDialog>
  );
}
