import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditTraining(props) {
  const [open, setOpen] = React.useState(false);
  const [training, setTraining] = React.useState({
    date: '', duration: '', activity: '', 
  });

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
      props.updateTraining(training, props.training.links[0].href);
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
          <TextField
            autoFocus
            margin="dense"
            name="date"
            value={training.date}
            label="Date"
            fullWidth
            onChange={e => handleInputChange(e)}
          />
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateTraining}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
