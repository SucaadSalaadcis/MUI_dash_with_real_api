import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GridLoader } from 'react-spinners';
import { Box, Button, Typography, Paper } from '@mui/material';

const Reusible_data_table = ({ apiUrl, columns, title }) => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const getToken = () => Cookies.get('token');

    const fetchData = async (page = 1) => {
        try {
            setLoading(true);
            const response = await axios.get(`${apiUrl}?page=${page}`, {
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

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage, apiUrl]);

    return (
        <Paper elevation={3} style={{ padding: '70px', borderRadius: '8px' }}>

            <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
                {title} Data Table
            </Typography>

            {loading ? (
                <GridLoader color="#E53270" loading={loading} size={15} />
            ) : (
                <>
                    <div style={{ height: '100%', width: '100%', marginBottom: '20px' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
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
