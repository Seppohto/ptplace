import React from 'react';
import { AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Customers(props) {

        const columns = [
            {headerName: 'Firstname', resizable: true, field: 'firstname', sortable:true, filter:true, floatingFilter:true, width:180}
            ,{headerName: 'Lastname', resizable: true, field: 'lastname', sortable:true, filter:true, floatingFilter:true, width:180}
            ,{headerName: 'Streetaddress', resizable: true, field: 'streetaddress', sortable:true, filter:true, floatingFilter:true, width:200}
            ,{headerName: 'Postcode', resizable: true, field: 'postcode', sortable:true, filter:true, floatingFilter:true, width:120}
            ,{headerName: 'City', resizable: true, field: 'city', sortable:true, filter:true, floatingFilter:true, width:100}
            ,{headerName: 'Email', resizable: true, field: 'email', sortable:true, filter:true, floatingFilter:true, width:200}
            ,{headerName: 'Phone', resizable: true, field: 'phone', sortable:true, filter:true, floatingFilter:true, width:160}
            ];

    return (
        <div className="ag-theme-alpine" style={{height: 800, width: "max"}}>
            <AgGridReact
                rowData={props.customers}
                columnDefs={columns}>
            </AgGridReact>
        </div>
    );
}