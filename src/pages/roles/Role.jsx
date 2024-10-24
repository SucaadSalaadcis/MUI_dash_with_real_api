import React from 'react'
import { Link } from 'react-router-dom'

import Reusible_data_table from '../reusible/Reusible_data_table';

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Button, Box } from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Logout from '../Logout';


export default function Role() {

    const roleColumns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'title', headerName: 'Title', width: 150 },
        // { field: 'permissions', headerName: 'Permissions', width: 150 },
        {
            field: 'permissions',
            headerName: 'Permissions',
            width: 300,
            renderCell: (params) => (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px', // Space between buttons
                        maxHeight: '150px', // Set max height to prevent row overflow
                        overflowY: 'auto', // Scroll when content exceeds max height
                        padding: '5px', // Optional padding for better layout
                        backgroundColor: '#f5f5f5',
                        borderRadius: '4px',
                    }}
                >
                    {params.value && params.value.length > 0 ? (
                        params.value.map((permission, index) => (
                            <Button
                                key={index}
                                style={{
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '20px',
                                    background: '#E53270',
                                    padding: '2px 6px',
                                }}
                            >
                                {permission.title}
                            </Button>
                        ))
                    ) : (
                        <span>No Permissions</span>
                    )}
                </Box>
            ),
        },
    ];

    return (
        <body class="g-sidenav-show  bg-gray-200">
            <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                <div class="sidenav-header">
                    <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                        <img src="../assets/img/logo-ct.png" class="navbar-brand-img h-100" alt="main_logo" />
                        <span class="ms-1 font-weight-bold text-white">ADWAAR Dashboard</span>
                    </a>
                </div>
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
                                {/* <a class="nav-link text-white " href="./pages/virtual-reality.html"> */}
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">view_in_ar</i>
                                </div>
                                <span class="nav-link-text ms-1">Virtual Reality</span>
                                {/* </a> */}
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/rtl'} class="nav-link text-white">
                                {/* <a class="nav-link text-white " href="./pages/rtl.html"> */}
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">format_textdirection_r_to_l</i>
                                </div>
                                <span class="nav-link-text ms-1">RTL</span>
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

                <div class="sidenav-footer position-absolute w-100 bottom-0 ">
                    <div class="mx-3">
                        <a class="btn bg-gradient-primary mt-4 w-100" type="button"><Logout /></a>
                    </div>
                </div>
            </aside>
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                {/* <!-- Navbar --> */}
                <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
                    <div class="container-fluid py-1 px-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
                                <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Roles</li>
                            </ol>
                            <h6 class="font-weight-bolder mb-0">Roles</h6>
                        </nav>
                        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div class="input-group input-group-outline">
                                    <label class="form-label">Type here...</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <ul class="navbar-nav  justify-content-end">
                                <li class="nav-item d-flex align-items-center">
                                    <a href="javascript:;" class="nav-link text-body font-weight-bold px-0">
                                        <i class="fa fa-user me-sm-1"></i>
                                        <span class="d-sm-inline d-none">Sign In</span>
                                    </a>
                                </li>
                                <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                                    <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav">
                                        <div class="sidenav-toggler-inner">
                                            <i class="sidenav-toggler-line"></i>
                                            <i class="sidenav-toggler-line"></i>
                                            <i class="sidenav-toggler-line"></i>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item px-3 d-flex align-items-center">
                                    <a href="javascript:;" class="nav-link text-body p-0">
                                        <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                                    </a>
                                </li>
                                <li class="nav-item dropdown pe-2 d-flex align-items-center">
                                    <a href="javascript:;" class="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa fa-bell cursor-pointer"></i>
                                    </a>
                                    <ul class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                                        <li class="mb-2">
                                            <a class="dropdown-item border-radius-md" href="javascript:;">
                                                <div class="d-flex py-1">
                                                    <div class="my-auto">
                                                        <img src="../assets/img/team-2.jpg" class="avatar avatar-sm  me-3 " />
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <h6 class="text-sm font-weight-normal mb-1">
                                                            <span class="font-weight-bold">New message</span> from Laur
                                                        </h6>
                                                        <p class="text-xs text-secondary mb-0">
                                                            <i class="fa fa-clock me-1"></i>
                                                            13 minutes ago
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="mb-2">
                                            <a class="dropdown-item border-radius-md" href="javascript:;">
                                                <div class="d-flex py-1">
                                                    <div class="my-auto">
                                                        <img src="../assets/img/small-logos/logo-spotify.svg" class="avatar avatar-sm bg-gradient-dark  me-3 " />
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <h6 class="text-sm font-weight-normal mb-1">
                                                            <span class="font-weight-bold">New album</span> by Travis Scott
                                                        </h6>
                                                        <p class="text-xs text-secondary mb-0">
                                                            <i class="fa fa-clock me-1"></i>
                                                            1 day
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item border-radius-md" href="javascript:;">
                                                <div class="d-flex py-1">
                                                    <div class="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                                                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <title>credit-card</title>
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                                    <g transform="translate(1716.000000, 291.000000)">
                                                                        <g transform="translate(453.000000, 454.000000)">
                                                                            <path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                                                            <path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <h6 class="text-sm font-weight-normal mb-1">
                                                            Payment successfully completed
                                                        </h6>
                                                        <p class="text-xs text-secondary mb-0">
                                                            <i class="fa fa-clock me-1"></i>
                                                            2 days
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* post icon */}
                <Link to={'/role_post'} >
                    <AddBoxIcon sx={{ fontSize: '60px', color: '#E53270' }} />
                </Link>
                {/* <!-- End Navbar --> */}
                <div class="container-fluid py-4">
                    <div class="row">
                        {/* <div class="col-lg-8 col-md-10 mx-auto"> */}
                        {/* content page */}
                        <Reusible_data_table
                            apiUrl="https://spiky-crater-dep2vxlep8.ploi.online/api/v1/roles"
                            columns={roleColumns}
                            title={'Roles'}
                        />

                        {/* </div> */}
                    </div>

                    <footer class="footer py-4 " style={{ marginTop: '100px' }}>
                        <div class="container-fluid">
                            <div class="row align-items-center justify-content-lg-between">
                                <div class="col-lg-6 mb-lg-0 mb-4">
                                    <div class="copyright text-center text-sm text-muted text-lg-start">
                                        © <script>
                                            document.write(new Date().getFullYear())
                                        </script>,
                                        made with <i class="fa fa-heart"></i> by
                                        <a href="https://adwaar.com/" class="font-weight-bold" target="_blank"> Adwaar </a>
                                        for a better web.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </footer>
                </div>
            </main>

        </body>
    )
}
