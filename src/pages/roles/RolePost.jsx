import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PeopleIcon from '@mui/icons-material/People';

import { Box, Button, FormControl, Paper, TextField, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import axios from 'axios';
import toast from 'react-hot-toast';
import AddIcon from '@mui/icons-material/Add';
import Select from 'react-select';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import BackIcon from '../reusible/BackIcon';

import { Footer, LogoutLink, NavBar, SideNavHeader } from '../reusible/Sidebar';



export default function RolePost() {


    const [title, setTitle] = useState("");

    const [permissions, setPermissions] = useState([]);
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    // console.log(selectedPermissions) ;  tracks the id of every permision [1,2,3] you choose

    const navigate = useNavigate();


    const getToken = () => {
        return Cookies.get('token');
    };


    // get permissions
    useEffect(() => {
        const fetchPermissions = async () => {
            try {
                const response = await axios.get('https://spiky-crater-dep2vxlep8.ploi.online/api/v1/roles/create', {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                    },
                });
                setPermissions(response.data.meta.permissions); // Make sure this is correct
            } catch (error) {
                console.error('Error fetching permissions:', error);
            }
        };

        fetchPermissions();
    }, []);

    // Function to get permission title by ID
    const getPermissionTitle = (id) => {
        const permission = permissions.find((perm) => perm.id === id);
        // console.log(permission); {id: 2, title: 'permission_create'}
        return permission ? permission.title : 'Unknown Permission'; // Handle cases where permission is not found
    };
    // console.log(permissions);

    // post 
    const handlePost = async (e) => {
        e.preventDefault();


        const data = {
            title: title,
            permissions: selectedPermissions.map((id) => ({
                id: id,
                title: getPermissionTitle(id)
                // If you call getPermissionTitle(2), it will find the object { id: 2, title: 'permission_create' }.

            })),
        };

        try {
            const response = await axios.post(
                "https://spiky-crater-dep2vxlep8.ploi.online/api/v1/roles",
                data,
                {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            if (response.data) {
                toast.success('Registered Successfully...');
                // console.log(response.data.data)
                //   The optional chaining operator (?.) is used here to safely access the roles property. If response.data.data is undefined or null, the expression will not throw an error and will simply evaluate to undefined. This prevents runtime errors when trying to access properties of undefined
                const rolesData = response.data.data?.roles || [];
                navigate('/user_management/roles');
            }
        } catch (error) {
            console.error("Error details:", error.response ? error.response.data : error.message);
            toast.error('Failed to register. Please try again.');
        }
    };






    return (
        <body class="g-sidenav-show  bg-gray-200">
            <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">

                <SideNavHeader />

                <hr class="horizontal light mt-0 mb-2" />

                <div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link text-white" to={'/'}>
                                {/* <a class="nav-link text-white active bg-gradient-primary" href="./pages/dashboard.html"> */}
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">dashboard</i>
                                </div>
                                <span class="nav-link-text ms-1">Dashboard</span>
                                {/* </a> */}
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link to={'/virtual_reality'} class="nav-link text-white">

                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">view_in_ar</i>
                                </div>
                                <span class="nav-link-text ms-1">Virtual Reality</span>
                                {/* </a> */}
                            </Link>
                        </li>

                        <li class="nav-item mt-3">
                            <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">User Management</h6>
                        </li>

                        <li class="nav-item">
                            <Link to={'/user_management/permission'} class="nav-link text-white" >
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    {/* <i class="material-icons opacity-10">assignment</i> */}
                                    <CircleOutlinedIcon />
                                </div>
                                <span class="nav-link-text ms-1">Permissions</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/user_management/roles'} class="nav-link text-white active bg-gradient-primary" >
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    {/* <i class="material-icons opacity-10">assignment</i> */}
                                    <CircleOutlinedIcon />
                                </div>
                                <span class="nav-link-text ms-1">Roles</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/user_management/users'} class="nav-link text-white" >
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    {/* <i class="material-icons opacity-10">assignment</i> */}
                                    <CircleOutlinedIcon />
                                </div>
                                <span class="nav-link-text ms-1">Users</span>
                            </Link>
                        </li>
                        <hr />
                        <li class="nav-item">
                            <Link to={'/products'} class="nav-link text-white" >
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    {/* <i class="material-icons opacity-10">assignment</i> */}
                                    <Inventory2Icon />
                                </div>
                                <span class="nav-link-text ms-1">Products</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/agents'} class="nav-link text-white" >
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    {/* <i class="material-icons opacity-10">assignment</i> */}
                                    <SupportAgentIcon />
                                </div>
                                <span class="nav-link-text ms-1">Agents</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/customers'} class="nav-link text-white" >
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    {/* <i class="material-icons opacity-10">assignment</i> */}
                                    <PeopleIcon />
                                </div>
                                <span class="nav-link-text ms-1">Customers</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/orders'} class="nav-link text-white" >
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    {/* <i class="material-icons opacity-10">assignment</i> */}
                                    <ShoppingCartCheckoutIcon />
                                </div>
                                <span class="nav-link-text ms-1">Orders</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <LogoutLink />
                
            </aside>
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                {/* <!-- Navbar --> */}
                <NavBar title={'Role Post'} />

                {/* <!-- End Navbar --> */}
                <div class="container-fluid py-4">
                    <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                            <BackIcon pathUrl={'/user_management/roles'} />
                            <Paper elevation={3} style={{ padding: '70px', borderRadius: '8px' }}>
                                {/* content page */}
                                <Typography sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Role Post Form</Typography>
                                <FormControl variant="standard" sx={{ margin: 1, width: "100%", gap: '10px' }} >
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <Select
                                        isMulti
                                        options={permissions.map(permission => ({
                                            value: permission.id,
                                            label: permission.title
                                        }))}
                                        onChange={(selectedOptions) => {
                                            setSelectedPermissions(selectedOptions.map(option => option.value)); // Update state with selected IDs
                                        }}
                                        value={selectedPermissions.map(id => ({
                                            value: id,
                                            label: getPermissionTitle(id) // Ensure the title is fetched correctly
                                        }))} // This will set the initial value to the current permissions
                                        placeholder="Select permission(s)"
                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                border: '2px solid #6c757d',
                                                borderRadius: '8px',
                                                padding: '5px',
                                            }),
                                            placeholder: (base) => ({
                                                ...base,
                                                color: '#495057',
                                                fontSize: '16px',
                                                padding: '8px',
                                            }),
                                        }}
                                    />

                                </FormControl>
                                <Box display="flex" justifyContent="flex-end" mt={2}>
                                    <Button variant="contained"
                                        startIcon={<AddIcon />}
                                        style={{ backgroundColor: '#E53270', paddingRight: '25px', }}
                                        onClick={handlePost}
                                    >
                                        Post
                                    </Button>
                                </Box>

                            </Paper>
                        </div>
                    </div>

                    <Footer />

                </div>
            </main>

        </body>
    )
}
