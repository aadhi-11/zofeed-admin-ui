import './DataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows, DBRows, DBColumns, HotelColumns, HotelRows, OrderRows, OrderColumns } from '../../DatatableSource';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const DataTable = ({ title }) => {
    console.log(title, "This is in Datatable")

    var column = []
    var Row = []

    if (title === 'customer') {
        column = userColumns;
        Row = userRows;
        console.log(column)
        console.log(Row)
        console.log("This is user");
    }
    else if (title === 'Delivery') {
        column = DBColumns;
        Row = DBRows;
        console.log(column)
        console.log(Row)
        // console.log("This is delivery");
    }
    else if (title === 'hotel') {
        column = HotelColumns;
        Row = HotelRows;
        console.log(column)
        console.log(Row)
        console.log("This is hotel");

    } else if (title === 'order') {
        column = OrderColumns;
        Row = OrderRows;
    }

    const [data, setData] = useState(Row)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const actionColumn = [
        {
            field: "action", headerName: "Action", width: 200, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        {
                            title === 'customer' ? (
                                <Link to="/admin/user/:UserId" style={{ textDecoration: "none" }}>
                                    <div className="viewButton">View</div>
                                </Link>
                            ) : null
                        }
                        {
                            title === 'Delivery' ? (
                                <Link to="/admin/delivery/:dbId" style={{ textDecoration: "none" }}>
                                    <div className="viewButton">View</div>
                                </Link>
                            ) : null
                        }
                        {
                            title === 'hotel' ? (
                                <Link to="/admin/hotel/:dbId" style={{ textDecoration: "none" }}>
                                    <div className="viewButton">View</div>
                                </Link>
                            ) : null
                        }
                        {
                            title === 'order' ? (
                                <Link to="/admin/order/:dbId" style={{ textDecoration: "none" }}>
                                    <div className="viewButton">View</div>
                                </Link>
                            ) : null
                        }
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className='datatable' >
            <div className="datatableTitle">
                All {title}
                {/* {
                    title === 'customer' ? (
                        <Link to="/admin/user/new" className='link'>
                            Add New
                        </Link>
                    ) : null
                } */}
                {
                    title === 'Delivery' ? (
                        <Link to="/admin/delivery/new" className='link'>
                            Add New
                        </Link>
                    ) : null
                }
                {
                    title === 'hotel' ? (
                        <Link to="/admin/hotel/new" className='link'>
                            Add New
                        </Link>
                    ) : null
                }
            </div>
            <DataGrid
                className='datagrid'
                rows={data}
                columns={column.concat(actionColumn)}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable
