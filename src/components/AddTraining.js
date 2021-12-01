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
import MenuItem from '@mui/material/MenuItem';

export default function AddTrainings(props) {
  const [open, setOpen] = React.useState(false);
  const [training, setTraining] = React.useState({
    date: '', duration: '', activity: '', customer: ''
  });

  const handleChange = (newValue) => {
    setTraining({...training, date: newValue})
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setTraining({...training, [event.target.name]: event.target.value})
  }

  const addTraining =  () => {
      props.saveTraining(training);
      handleClose();
  }

  return (
    <div>
      <Button style={{margin:10}}variant="outlined" onClick={handleClickOpen}>
        Add training
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New training</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in training information
          </DialogContentText>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <Stack spacing={3}>
              <DateTimePicker
                label="Date&Time picker"                
                ampm={false}
                value={training.date}
                inputFormat="DD/MM/YYYY hh:mm"
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
          id="customer"
          select
          label="Select Customer"
          value={training.customer}
          name="customer"
          onChange={e => handleInputChange(e)}
          helperText="Customer linked to this training"
        >
          {props.customers.map((customer, idx) => (
            <MenuItem key={idx} value={customer.links[0].href}>
              {customer.firstname} {customer.lastname}
            </MenuItem>
          ))}
        </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addTraining}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
