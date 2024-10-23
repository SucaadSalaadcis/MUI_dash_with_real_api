import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GridLoader } from 'react-spinners';
import { Box, Button, Typography, Paper, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import Swal from 'sweetalert2';
import EditIcon from '@mui/icons-material/Edit';

import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useLocation } from 'react-router-dom';



const Reusible_data_table = ({ apiUrl, columns, title }) => {

    const location = useLocation();

    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(10); // Default page size

    const getToken = () => Cookies.get('token');

    // get all data
    const fetchData = async (page = 1) => {
        try {
            setLoading(true);
            const response = await axios.get(`${apiUrl}?page=${page}&limit=${pageSize}`, {
                headers: {
                    'Authorization': `Bearer ${getToken()}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            const data = response.data?.data || [];
            const lastPage = response.data.last_page || 1;
            setTotalPages(lastPage);
            setCurrentPage(page);
            setRows(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    // delete data 
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${apiUrl}/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }).then(() => {
                    fetchData();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your data has been deleted.",
                        icon: "success"
                    });
                }).catch((error) => {
                    console.log("Error deleting the record: ", error);
                });
            }
        });
    };




    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage, apiUrl, pageSize]);

    // Add a custom action column
    const actionColumn = {
        field: 'actions',
        headerName: 'Actions',
        renderCell: (params) => (
            <>
                <IconButton aria-label="delete"
                    onClick={() => handleDelete(params.row.id)}
                >
                    <DeleteIcon style={{ color: "#E53270" }} />
                </IconButton>

                {
                    location.pathname === '/user_management/permission' ? <Link to={`/permission/${params.row.id}`}>
                        <EditIcon style={{ color: "blue" }} />
                    </Link> : location.pathname === '/agents' ? <Link to={`/agent/${params.row.id}`}>
                        <EditIcon style={{ color: "blue" }} />
                    </Link> : location.pathname === '/customers' ? <Link to={`/customer/${params.row.id}`}>
                        <EditIcon style={{ color: "blue" }} />
                    </Link> : location.pathname === '/products' ? <Link to={`/product/${params.row.id}`}>
                        <EditIcon style={{ color: "blue" }} />
                    </Link> : location.pathname === '/user_management/roles' ? <Link to={`/role/${params.row.id}`}>
                        <EditIcon style={{ color: "blue" }} />
                    </Link> : ""

                }

            </>
        ),
    };


    // Handle pageSize change from the <Select> input
    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
    };


    return (
        <Paper elevation={3} style={{ padding: '70px', borderRadius: '8px' }}>

            {/* select page size */}
            <FormControl variant="standard" sx={{ margin: 1, width: 120 }} >
                <InputLabel id="page-size-label">Page Size</InputLabel>
                <Select
                    labelId="page-size-label"
                    id="page-size"
                    value={pageSize}
                    onChange={handlePageSizeChange}
                    label="Page Size"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>
            </FormControl>

            <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
                {title} Data Table
            </Typography>

            {/* loading */}
            {loading ? (
                <GridLoader color="#E53270" loading={loading} size={15} />
            ) : (
                <>
                    {/* data grid */}
                    <div style={{ height: '100vh', width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            // columns={columns}
                            columns={[...columns, actionColumn]}
                            loading={loading}
                            pagination={false}
                            hideFooter
                            disableSelectionOnClick
                            getRowHeight={() => 100} // Increase row height to fit content
                            getRowClassName={(params) =>
                                `row-${params.row.id % 2 === 0 ? 'even' : 'odd'}`
                            }
                            sx={{
                                // Styles for even and odd rows
                                '& .row-even': {
                                    backgroundColor: '#f9f9f9', // Light grey for even rows
                                },
                                '& .row-odd': {
                                    backgroundColor: '#ffffff', // White for odd rows
                                },

                                //& refers to the parent element where this style is being applied
                                // .MuiDataGrid-columnHeader : wa mui class
                                '& .MuiDataGrid-columnHeader': {
                                    fontWeight: 'bolder',
                                    fontSize: '17px',
                                    color: '#E53270'
                                },
                                // '& .MuiDataGrid-cell': {
                                //     display: 'flex',        // Make the cell a flex container
                                //     justifyContent: 'start',  // Center horizontally
                                //     alignItems: 'center',      // Center vertically
                                // },


                            }}
                        />
                    </div>
                    <Box className="d-flex justify-content-end align-items-center my-4 mt-5">
                        <Button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            style={{ backgroundColor: currentPage === 1 ? '#ccc' : '#E53270', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px ', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', marginRight: '5px', }}>
                            Previous
                        </Button>
                        <Typography style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</Typography>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            style={{ backgroundColor: currentPage === totalPages ? '#ccc' : '#E53270', color: '#fff', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}>
                            Next
                        </button>
                    </Box>
                </>
            )}
        </Paper>
    );
};

export default Reusible_data_table;
