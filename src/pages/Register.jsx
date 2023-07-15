import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useRegisterAccountMutation } from '../features/registerSlice';

//
export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [registerAccount] = useRegisterAccountMutation();

  const handlePwdChange = (e) => {
    setError(false);
    setHelperText('');
    setPassword(e.target.value);
  };

  const handleConfirmPwdChange = (e) => {
    setError(false);
    setHelperText('');
    setConfirmPwd(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (password !== confirmPwd) {
        // set a error message
        setError(true);
        setHelperText('Passwords do not match');
        return;
      }
      setEmail((email) => {
        const trimmedEmail = email.trim();
        const lowercaseEmail = trimmedEmail.toLowerCase();
        return lowercaseEmail;
      });
      await registerAccount({
        firstName,
        lastName,
        email,
        password,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        }}
      >
        <TextField
          label="First name"
          margin="normal"
          fullWidth
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
        ></TextField>
        <TextField
          label="Last name"
          margin="normal"
          fullWidth
          value={lastName}
          onChange={({ target }) => setLastName(target.value)}
        ></TextField>
      </div>
      <TextField
        label="Email"
        required
        fullWidth
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      ></TextField>
      <TextField
        error={error}
        label="Password"
        type="password"
        required
        fullWidth
        margin="normal"
        value={password}
        onChange={handlePwdChange}
      ></TextField>
      <TextField
        error={error}
        helperText={helperText}
        label="Confirm password"
        type="password"
        required
        fullWidth
        margin="normal"
        value={confirmPwd}
        onChange={handleConfirmPwdChange}
      ></TextField>
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, mb: 3 }}>
        Register
      </Button>
    </form>
  );
}