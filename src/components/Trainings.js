import React from 'react';
import { AgGridReact} from 'ag-grid-react';
import dayjs from 'dayjs'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Trainings = (props) => {    
  const [trainings, setTrainings] = React.useState([]);

   React.useEffect(() =>  {
    fetch(props.tUrl)
    .then(response => response.json())
    .then(responseData => {
        setTrainings(responseData.content) ;             
    })            
    .catch(err => console.error(err))
    }, []);

    const rowData = trainings.map((trainings) => ({
        date: dayjs(trainings.date),
        duration: trainings.duration,
        activity: trainings.activity}));

    const rowHeaders = ['date',
        'duration',
        'activity'];

   const columns = rowHeaders.map((i) => ({
       headerName: i, field:i, sortable:true, resizable:true, filter:true, floatingFilter:true
   }));

   return (
       <div className="ag-theme-alpine" style={{height: 800, width: "max"}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columns}>
           </AgGridReact>
       </div>
   );
};

export default Trainings;