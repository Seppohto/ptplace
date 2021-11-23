import React from 'react';
import { AgGridReact} from 'ag-grid-react';
import dayjs from 'dayjs'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Button from '@mui/material/Button';
import EditTraining from './EditTraining';
import AddTraining from './AddTraining';

export default function Trainings(props) {

    
      
    
    console.log(props.trainings)
    //console.log(props.trainings[0].links[0].href)

    const columns = [
        {headerName: 'Date', resizable: true, field: 'date', sortable:true, filter:true, floatingFilter:true, width:200,
            cellRendererFramework: function(params) {
            return <div>{dayjs(params.data.date).format('ddd HH:mm - DD.MM.YYYY')}</div>
         },}
        ,{headerName: 'Duration', resizable: true, field: 'duration', sortable:true, filter:true, floatingFilter:true, width:110}
        ,{headerName: 'Activity', resizable: true, field: 'activity', sortable:true, filter:true, floatingFilter:true, width:200}
        ,{headerName: 'Edit', width: 160, 
            cellRendererFramework: function(params) {
                return <EditTraining updateTraining={props.updateTraining} training={params.data}/>
        },}
        ,{headerName: 'Delete', resizable: true, width:120, 
            cellRendererFramework: function(params) {
                return <Button size="small" variant="outlined" color="error"
            onClick={() =>props.deleteTraining(params.data.links[0].href)}> Delete </Button>
        },}
        ];

   return (
       <div className="ag-theme-alpine" style={{height: 800, width: "max"}}>
           <AddTraining saveTraining={props.saveTraining}/> 
           <AgGridReact
               rowData={props.trainings}
               animateRows={true}
               columnDefs={columns}>
           </AgGridReact>
       </div>
   );
}