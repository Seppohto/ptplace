import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from './Home'
import NotFound from './NotFound'
import About from './About';
import Customers from './Customer';
import Trainings from './Trainings'


export default function NavTabs() {
  //navtabs start
  const [route, setRoute] = useState(0);

  const handleRChange = (event, newRoute) => {
    setRoute(newRoute);
  };
  //navtabs end
  //customer fetch start
  const [cusData, setCusData] = useState([]);

  useEffect(() => fetchCusData(), []);

  const fetchCusData = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
    .then(response => response.json())
    .then(data => {setCusData(data.content) ;           
    })            
    .catch(err => console.error(err))
    }   
  //customers fetch end
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
  //trainings fetch end
  
  console.log(traiData);

 
  return (
    <div>
    <Box sx={{ width: '100%' }}>
      
    <BrowserRouter>
        <Tabs value={route} onChange={handleRChange} aria-label="nav tabs example">
            <Tab label="Home" component={Link} to="/" />
            <Tab label="Customers" component={Link} to="/components/Customers" />
            <Tab label="Trainings" component={Link} to="/components/Trainings" />
            <Tab label="About" component={Link} to="/components/About" />
        </Tabs>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/components/About" element={<About />} />
          <Route path="/components/Customers" element={<Customers customers={cusData}/>} />
          <Route path="/components/Trainings" element={<Trainings trainings={traiData}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </Box>
  </div>
  );
}