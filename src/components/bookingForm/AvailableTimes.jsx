import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Enabled horizontal scrolling on small screens
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  margin: '2rem 0',
  padding: { sm: '0 1rem', md: '0' },
  overflowX: 'scroll',
  overflow: { md: 'visible' },
  flexWrap: { md: 'wrap' },
  justifyContent: { md: 'center' },
};

const AvailableTime = ({ children, handleOpen }) => {
  return (
    <Button variant="contained" onClick={handleOpen}>
      {children}
    </Button>
  );
};

export default function AvailableTimes({ timeSlots, openDialog }) {
  const handleOpen = (data) => openDialog(data);

  return (
    <>
      {timeSlots.length > 0 ? (
        <div style={{ marginBlock: '2rem' }}>
          <Typography variant="h6" align="center">
            Times Available
          </Typography>
          <Box sx={containerStyle}>
            {timeSlots.map((slot) => (
              <AvailableTime
                key={slot.id}
                handleOpen={() => handleOpen(slot)}
              >{`${slot.start} ${slot.available.length} left`}</AvailableTime>
            ))}
          </Box>
        </div>
      ) : (
        <Typography variant="h6" align="center">
          No Times Available
        </Typography>
      )}
    </>
  );
}
