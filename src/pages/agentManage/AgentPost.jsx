import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FaceIcon from '@mui/icons-material/Face';
import { Box, Button, FormControl, Paper, TextField, Typography } from '@mui/material';

import axios from 'axios';
import toast from 'react-hot-toast';
import AddIcon from '@mui/icons-material/Add';


import Cookies from 'js-cookie';
import BackIcon from '../reusible/BackIcon';

import { Footer, LogoutLink, NavBar, SideNavHeader } from '../reusible/Sidebar';



export default function AgentPost() {


    const [fullname, setFullName] = useState("");
    const [description, setDescription] = useState("");
    const [business, setBusiness] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();


    const getToken = () => {
        return Cookies.get('token');
    };
    // post
    const handlePost = async (e) => {
        e.preventDefault();
        const data = {
            fullname, description, business, phone
        }

        const response = await axios.post("https://spiky-crater-dep2vxlep8.ploi.online/api/v1/agents", data, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            if (response.data) {
                toast.success('Registered Successfuly...')
                navigate('/agents')
            }
        }).catch((error) => console.log(error));
    }


    return (
        <body class="g-sidenav-show  bg-gray-200">
            <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">

                <SideNavHeader />

                <hr class="horizontal light mt-0 mb-2" />

                <div class="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
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
                            <Link to={'/user_management/roles'} class="nav-link text-white" >
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
                            <Link to={'/agents'} class="nav-link text-white active bg-gradient-primary" >
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
                                    <FaceIcon />
                                </div>
                                <span class="nav-link-text ms-1">Customers</span>
                            </Link>
                        </li>

                    </ul>
                </div>

                <LogoutLink />

            </aside>
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                {/* <!-- Navbar --> */}
                <NavBar title={'Agent Post'} />

                {/* <!-- End Navbar --> */}
                <div class="container-fluid py-4">
                    <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                            <BackIcon pathUrl={'/agents'} />
                            <Paper elevation={3} style={{ padding: '70px', borderRadius: '8px' }}>
                                {/* content page */}
                                <Typography sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Agent Post Form</Typography>
                                <FormControl variant="standard" sx={{ margin: 1, width: "100%", gap: '10px' }} >
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Full Name"
                                        value={fullname}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Business"
                                        value={business}
                                        onChange={(e) => setBusiness(e.target.value)}
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
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
