import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./AdminPanel.css"

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'img', headerName: 'Image', width: 130 },
  { field: 'title', headerName: 'Title', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 90,
  },
  { field: 'actions', headerName: 'Actions', width: 130 },

];

const rows = [
  { id: 1, lastName: 'Snow', title: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const AdminPanel = () => {
  return (<>
  <Navbar/>
  <div className="adminCont">
    <div className="adminMain" style={{ height: '90vh', width: '80%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
    <Footer/>
  </>);
};

export default AdminPanel;