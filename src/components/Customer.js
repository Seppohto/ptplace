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
    }, []);

    const rowData = customers.map((customer) => ({
        firstname: customer.firstname,
        lastname: customer.lastname,
        streetaddress: customer.streetaddress,
        postcode: customer.streetaddress,
        city: customer.city,
        email: customer.email,
        phone: customer.phone,}));

    const rowHeaders = ['firstname',
        'lastname',
        'streetaddress',
        'postcode',
        'city',
        'email',
        'phone'];

   const columns = rowHeaders.map((i) => ({
       headerName: i, field:i, sortable:true, filter:true, floatingFilter:true
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