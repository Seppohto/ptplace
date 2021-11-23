import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from './Home'
import NotFound from './NotFound'
import About from './About';
import Customers from './Customer';
import Trainings from './Trainings';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


export default function NavTabs() {
  //navtabs start
  const [route, setRoute] = useState(0);

  const handleRChange = (event, newRoute) => {
    setRoute(newRoute);
  };
  //navtabs end

  //customer section
  const [cusData, setCusData] = useState([]);

  useEffect(() => fetchCusData(), []);

  const fetchCusData = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
    .then(response => response.json())
    .then(data => {setCusData(data.content) ;           
    })            
    .catch(err => console.error(err))
  }   

  const deleteCustomer = (link) => {
    if (window.confirm('Are you sure?')){
    handleClick();
    fetch(link, {method: 'DELETE'})
    .then(res => fetchCusData())
    .catch(err => console.error(err))
    }
  };

  const saveCustomer = (customer) => {
    if (window.confirm('Add this new customer?')){
    handleClick();
    fetch('https://customerrest.herokuapp.com/api/customers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    })
    .then(res => fetchCusData())
    .catch(err => console.error(err))
    }
  };

  const updateCustomer = (customer, link) => {
    fetch(link, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    })
    .then(res => fetchCusData())
    .catch(err => console.error(err))        
  };

  //customers end

  //training fetch start
  const [traiData, setTraiData] = useState([]);

  useEffect(() => fetchTraiData(), []);

  const fetchTraiData = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
    .then(response => response.json())
    .then(data => {setTraiData(data.content) ;           
    })            
    .catch(err => console.error(err))
  }      

  const deleteTraining = (link) => {
    if (window.confirm('Are you sure you want to delete the training?')){
    handleClick();
    fetch(link, {method: 'DELETE'})
    .then(res => fetchTraiData())
    .catch(err => console.error(err))
    }
  };

  const saveTraining = (training) => {
    if (window.confirm('Add this new training?')){
    handleClick();
    fetch('https://customerrest.herokuapp.com/api/trainings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(training)
    })
    .then(res => fetchTraiData())
    .catch(err => console.error(err))
    }
  };

  const updateTraining = (training, link) => {
    fetch(link, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(training)
    })
    .then(res => fetchTraiData())
    .catch(err => console.error(err))        
  };
  //trainings fetch end
  
      //Snackbar config

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };
 
  return (
    <div style={{height: 800, width: "max"}}>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Action done succesfully!
      </Alert>
    </Snackbar>
    <Box sx={{ width: '100%' }}>      
    <BrowserRouter>
        <Tabs value={route} onChange={handleRChange} >
            <Tab label="Home" component={Link} to="/" />
            <Tab label="Customers" component={Link} to="/components/Customers" />
            <Tab label="Trainings" component={Link} to="/components/Trainings" />
            <Tab label="About" component={Link} to="/components/About" />
        </Tabs>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/components/About" element={<About />} />
          <Route path="/components/Customers" element={<Customers customers={cusData} 
          deleteCustomer={deleteCustomer} saveCustomer={saveCustomer} updateCustomer={updateCustomer}/>} />
          <Route path="/components/Trainings" element={<Trainings trainings={traiData}
          deleteTraining={deleteTraining} saveTraining={saveTraining} updateTraining={updateTraining}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </Box>
  </div>
  );
}