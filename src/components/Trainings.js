import React from 'react';
import { AgGridReact} from 'ag-grid-react';
import dayjs from 'dayjs'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Trainings(props) {

    const rowData = props.trainings.map((trainings) => ({
        ...trainings, date: dayjs(trainings.date).format('ddd HH:mm - DD.MM.YYYY')
    }))
      
       // Date: dayjs(trainings.date).format('ddd HH:mm - DD.MM.YYYY'),

    const columns = [
        {headerName: 'Date', resizable: true, field: 'date', sortable:true, filter:true, floatingFilter:true, width:200}
        ,{headerName: 'Duration', resizable: true, field: 'duration', sortable:true, filter:true, floatingFilter:true, width:110}
        ,{headerName: 'Activity', resizable: true, field: 'activity', sortable:true, filter:true, floatingFilter:true, width:200}
        ];

   return (
       <div className="ag-theme-alpine" style={{height: 800, width: "max"}}>
           <AgGridReact
               rowData={rowData}
               animateRows={true}
               columnDefs={columns}>
           </AgGridReact>
       </div>
   );
}