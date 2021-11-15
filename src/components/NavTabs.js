import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from './Home'
import NotFound from './NotFound'
import About from './About';
import Customers from './Customer';
import Trainings from './Trainings'


export default function NavTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <div>
    <Box sx={{ width: '100%' }}>
    <BrowserRouter>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
            <Tab label="Home" component={Link} to="/" />
            <Tab label="Customers" component={Link} to="/components/Customers" />
            <Tab label="Trainings" component={Link} to="/components/Trainings" />
            <Tab label="About" component={Link} to="/components/About" />
        </Tabs>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/components/About" element={<About />} />
          <Route path="/components/Customers" element={<Customers cUrl={props.cUrl}/>} />
          <Route path="/components/Trainings" element={<Trainings tUrl={props.tUrl}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </Box>
  </div>
  );
}