import React from 'react';
import './App.css';
import NavTabs from './components/NavTabs';

function App() {

  const [cUrl, setCUrl] = React.useState([]);
  const [tUrl, setTUrl] = React.useState([]);
  const [pUrl, setPUrl] = React.useState([]);


  React.useEffect(() =>  {
  fetch('https://customerrest.herokuapp.com/api')
  .then(response => response.json())
  .then(responseData => {
      setCUrl(responseData.links[0].href) ; 
      setTUrl(responseData.links[1].href) ; 
      setPUrl(responseData.links[2].href) ;               
  })            
  .catch(err => console.error(err))
  }, []);

  return (
    <div className="App">
      <NavTabs cUrl={cUrl} tUrl={tUrl} pUrl={pUrl} />
    </div>
  );
}

export default App;
