
import { Link } from 'react-router-dom'


import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PeopleIcon from '@mui/icons-material/People';
import { Button } from '@mui/material';

import Reusible_data_table from '../reusible/Reusible_data_table';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { Footer, LogoutLink, NavBar, SideNavHeader } from '../reusible/Sidebar';

export default function Order() {

    const OrderColumns = [
        {
            field: 'product', headerName: 'Product', width: 130,
            renderCell: (params) => {
                return (
                    params.row.product?.name || <Button variant="contained" size='small' sx={{ borderRadius: '5%', backgroundColor: '#E53270' }}> Not Assigned </Button>
                )
            }
        },
        {
            field: 'customer', headerName: 'Customer', width: 150,
            renderCell: (params) => {
                return (
                    params.row.customer[0]?.fullname ||
                    <Button variant="contained" size='small' sx={{ borderRadius: '5%', backgroundColor: '#E53270' }}> Not Assigned </Button>
                )
            }
        },
        {
            field: 'agent', headerName: 'Agent', width: 150,
            renderCell: (params) => {
                return (
                    params.row.agent[0]?.fullname ||
                    <Button variant="contained" size='small' sx={{ borderRadius: '5%', backgroundColor: '#E53270' }}> Not Assigned </Button>
                )
            }
        },
        {
            field: 'product_price', headerName: 'Product_price', width: 111,
            renderCell: (params) => {
                return (
                    // order.product_price.price 
                    params.row.product_price.price ||
                    <Button variant="contained" size='small' sx={{ borderRadius: '5%', backgroundColor: '#E53270' }}> Not Assigned </Button>
                )
            }
        },
        {
            field: 'product_commission', headerName: 'Product_commission', width: 111,
            renderCell: (params) => {
                return (
                    //order.product_commission.commission
                    params.row.product_commission.commission ||
                    <Button variant="contained" size='small' sx={{ borderRadius: '5%', backgroundColor: '#E53270' }}> Not Assigned </Button>
                )
            }
        },
        {
            field: 'status', headerName: 'Status', width: 100,
            renderCell: (params) => {
                return (
                    //order.status_label
                    params.row.status_label ||
                    <Button variant="contained" size='small' sx={{ borderRadius: '5%', backgroundColor: '#E53270' }}> Not Assigned </Button>
                )
            }
        },


    ];



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
                                    <PeopleIcon />
                                </div>
                                <span class="nav-link-text ms-1">Customers</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/orders'} class="nav-link text-white active bg-gradient-primary" >
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
                <NavBar title={'Orders'} />
                {/* post icon */}
                <Link to={'/order_post'} >
                    <AddBoxIcon sx={{ fontSize: '60px', color: '#E53270' }} />
                </Link>

                {/* <!-- End Navbar --> */}
                <div class="container-fluid py-4">
                    <div class="row">
                        {/* <div class="col-lg-8 col-md-10 mx-auto"> */}
                        {/* content page */}
                        <Reusible_data_table
                            apiUrl={'https://spiky-crater-dep2vxlep8.ploi.online/api/v1/orders'}
                            columns={OrderColumns}
                            title={'Orders'}
                        />

                        {/* </div> */}
                    </div>

                    <Footer />

                </div>
            </main>

        </body>
    )
}
