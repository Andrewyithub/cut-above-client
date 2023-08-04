import { useDispatch, useSelector } from "react-redux";
import {
  selectOpen,
  selectMessage,
  selectSeverity,
  setSuccess,
  setError,
  clearMessage,
} from "../features/notificationSlice";

export function useNotification() {
  const dispatch = useDispatch();
  const open = useSelector(selectOpen);
  const message = useSelector(selectMessage);
  const severity = useSelector(selectSeverity);
  const handleSuccess = (message) => dispatch(setSuccess(message));
  const handleError = (err) => {
    const errorMessage = err?.response?.data?.error || err;
    dispatch(setError(`Error: ${errorMessage}`));
  };
  const handleClearMessage = () => dispatch(clearMessage());
  return {
    open,
    message,
    severity,
    handleSuccess,
    handleError,
    handleClearMessage,
  };
}
