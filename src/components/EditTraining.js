import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

export default function EditTraining(props) {
  const [open, setOpen] = React.useState(false);
  const [training, setTraining] = React.useState({
    date: '', duration: '', activity: '', 
  });

  const handleChange = (newValue) => {
    setTraining({...training, date: newValue})
  };

  const handleClickOpen = () => {
    setTraining({date: props.training.date, duration: props.training.duration, 
    activity: props.training.activity})
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setTraining({...training, [event.target.name]: event.target.value})
  }

  const updateTraining =  () => {
      props.updateTraining(training, props.training.id);
      handleClose();
  }

  return (
    <div>
      <Button size="small" variant="outlined" onClick={handleClickOpen}>
        Edit training
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit training</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Choose what to edit
          </DialogContentText>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <Stack spacing={3}>
              <DateTimePicker
                label="Date&Time picker"
                ampm={false}
                value={training.date}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <TextField
            margin="dense"
            name="duration"
            value={training.duration}
            label="Duration"
            fullWidth
            onChange={e => handleInputChange(e)}
          />
          <TextField
            margin="dense"
            name="activity"
            value={training.activity}
            label="Activity"
            fullWidth
            onChange={e => handleInputChange(e)}
          />
          <TextField
            margin="dense"
            name="customer"
            value={props.customer}
            label="Customer"
            fullWidth
            onChange={e => handleInputChange(e)}
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateTraining}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
