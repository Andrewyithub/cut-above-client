import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ButtonDialog from '../ButtonDialog';
import { useAppointment } from '../../hooks/useAppointment';
import { useDialog } from '../../hooks/useDialog';
import { useEmployeesQuery } from '../../hooks/useEmployeesQuery';

const dialog = (appt, employee) => {
  return {
    button: 'Cancel',
    title: `Are you sure you want to cancel your ${appt.service}?`,
    content: `With ${employee.firstName} on ${appt.date} at ${appt.start}?`,
  };
};

const CancelDialogContent = ({ dialog, handleClose, handleAgree }) => {
  return (
    <>
      <DialogTitle>{dialog.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialog.content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAgree} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </>
  );
};

export default function CancelAppointment({ appt }) {
  const { open, handleOpen, handleClose } = useDialog();
  const { employee } = useEmployeesQuery(appt.employee);
  const { handleCancel } = useAppointment();

  if (!employee) return <div>Loading...</div>;

  const dialogProps = dialog(appt, employee);

  return (
    <ButtonDialog
      buttonText={dialogProps.button}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <CancelDialogContent
        dialog={dialogProps}
        handleAgree={() => handleCancel(appt.id)}
        handleClose={handleClose}
      />
    </ButtonDialog>
  );
}