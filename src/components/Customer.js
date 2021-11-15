import React from 'react';
import { AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Customers = (props) => {    
  const [customers, setCustomers] = React.useState([]);

   React.useEffect(() =>  {
    fetch(props.cUrl)
    .then(response => response.json())
    .then(responseData => {
        setCustomers(responseData.content) ;             
    })            
    .catch(err => console.error(err))
    }, [props.cUrl]);

    const rowData = customers.map((customer) => ({
        Firstname: customer.firstname,
        Lastname: customer.lastname,
        Streetaddress: customer.streetaddress,
        Postcode: customer.streetaddress,
        City: customer.city,
        Email: customer.email,
        Phone: customer.phone,}));

    const rowHeaders = ['Firstname',
        'Lastname',
        'Streetaddress',
        'Postcode',
        'City',
        'Email',
        'Phone'];

   const columns = rowHeaders.map((i) => ({
       headerName: i, resizable:true, field: i, sortable:true, filter:true, floatingFilter:true
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

export default Customers;