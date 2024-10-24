import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import Select from 'react-select';
import Cookies from 'js-cookie';

import axios from 'axios';

import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate, useParams } from "react-router-dom";

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PeopleIcon from '@mui/icons-material/People';
import { Box, Button, FormControl, Paper, TextField, Typography } from '@mui/material';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import BackIcon from "../reusible/BackIcon";
import Logout from "../Logout";

export default function OrderPost() {


    const getToken = () => Cookies.get('token');

    // State management
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [agents, setAgents] = useState([]);
    const [productPrices, setProductPrices] = useState([]);
    const [productCommisions, setProductCommisions] = useState([]);

    const [selectedOrders, setSelectedOrders] = useState([]);

    const [selectedCustomer, setSelectedCustomer] = useState([]);
    const [selectedAgent, setSelectedAgent] = useState([]);

    const [selectedProductPrice, setSelectedProductPrice] = useState(null);
    const [selectedProductCommision, setSelectedProductCommision] = useState(null);

    const [selectedProduct_price_id, setSelectedProduct_price_id] = useState('');
    const [selectedProduct_commission_id, setSelectedProduct_commission_id] = useState('');
    const [selectStatus, setSelectedStatus] = useState('');
    const [selectProduct_id, setSelectedProduct_id] = useState('');
    const [ownerId, setOwnerId] = useState('');


    const navigate = useNavigate();



    useEffect(() => {
        const fetchData = async () => {
            try {
                const orderResponse = await axios.get('https://spiky-crater-dep2vxlep8.ploi.online/api/v1/orders/create', {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
                setOrders(orderResponse.data.meta.product || []);
                setProductPrices(orderResponse.data.meta.product_price || []);
                setProductCommisions(orderResponse.data.meta.product_commission || []);

                const customerResponse = await axios.get('https://spiky-crater-dep2vxlep8.ploi.online/api/v1/customers', {
                    headers: { 'Authorization': `Bearer ${getToken()}` },
                });
                setCustomers(customerResponse.data.data);

                const agentResponse = await axios.get('https://spiky-crater-dep2vxlep8.ploi.online/api/v1/agents', {
                    headers: { 'Authorization': `Bearer ${getToken()}` },
                });
                setAgents(agentResponse.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);




    const postOrderData = async (e) => {
        e.preventDefault();

        // Ensure selectedCustomer and selectedAgent are arrays before mapping
        const customerArray = Array.isArray(selectedCustomer)
            ? selectedCustomer.map(cust => ({
                id: cust.value,
                fullname: cust.label, // Assuming the label contains the fullname
            }))
            : [];

        const agentArray = Array.isArray(selectedAgent)
            ? selectedAgent.map(ag => ({
                id: ag.value,
                fullname: ag.label, // Assuming the label contains the fullname
            }))
            : [];

        // Construct the data based on selected values
        const data = {
            product_price_id: selectedProductPrice?.value || '',
            product_commission_id: selectedProductCommision?.value || '',
            owner_id: ownerId || '', // Assuming you have an owner ID available
            agent: agentArray, // Array of agent objects
            customer: customerArray, // Array of customer objects
            product_id: selectProduct_id || '',
            status: selectStatus || '', // Changed from status_label to status
        };

        console.log('data:', data);

        try {
            const response = await axios.post(
                `https://spiky-crater-dep2vxlep8.ploi.online/api/v1/orders`, // Ensure this is the correct endpoint for creating/updating orders
                data,
                {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                        'Content-Type': 'application/json', // Use JSON for this API
                    },
                }
            );

            console.log('Order updated successfully:', response.data);
            toast.success("Order updated successfully!");
            navigate('/orders');
        } catch (err) {
            console.error('Error updating order:', err);

            if (err.response?.status === 422) {
                const errors = err.response.data.errors;
                console.log('Validation errors:', errors);
                toast.error(`Failed to update order: ${JSON.stringify(errors)}`);
            } else {
                toast.error("An unexpected error occurred.");
            }
        }
    };





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
                                <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Order Post</li>
                            </ol>
                            <h6 class="font-weight-bolder mb-0">Order Post</h6>
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

                {/* <!-- End Navbar --> */}
                <div class="container-fluid py-4">
                    <div class="row">
                        {/* <div class="col-lg-8 col-md-10 mx-auto"> */}
                        {/* content page */}
                        <BackIcon pathUrl={'/orders'} />
                        <Paper elevation={3} style={{ padding: '70px', borderRadius: '8px' }}>
                            {/* content page */}
                            <Typography sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Order Post Form</Typography>
                            <FormControl variant="standard" sx={{ margin: 1, width: "100%", gap: '10px' }} >
                                <Select options={orders.map(order => ({ value: order.id, label: order.name }))} isMulti value={selectedOrders} onChange={setSelectedOrders} />
                                <Select options={customers.map(cust => ({ value: cust.id, label: cust.fullname }))} isMulti value={selectedCustomer} onChange={setSelectedCustomer} />
                                <Select options={agents.map(agent => ({ value: agent.id, label: agent.fullname }))} isMulti value={selectedAgent} onChange={setSelectedAgent} />
                                <Select options={productPrices.map(price => ({ value: price.id, label: `${price.price}` }))} value={selectedProductPrice} onChange={setSelectedProductPrice} />
                                <Select options={productCommisions.map(comm => ({ value: comm.id, label: `${comm.commission}` }))} value={selectedProductCommision} onChange={setSelectedProductCommision} />

                                <Box>Product_price_id</Box>
                                <TextField
                                    required
                                    id="outlined-required"
                                    value={selectedProduct_price_id}
                                    onChange={(e) => setSelectedProduct_price_id(e.target.value)}
                                />

                                <Box>Product_commission_id</Box>
                                <TextField
                                    required
                                    id="outlined-required"
                                    value={selectedProduct_commission_id}
                                    onChange={(e) => setSelectedProduct_commission_id(e.target.value)}
                                />

                                <Box>Product_id</Box>
                                <TextField
                                    required
                                    id="outlined-required"
                                    value={selectProduct_id}
                                    onChange={(e) => setSelectedProduct_id(e.target.value)}
                                />

                                <Box>Owner_id</Box>
                                <TextField
                                    required
                                    id="outlined-required"
                                    value={ownerId}
                                    onChange={(e) => setOwnerId(e.target.value)}
                                />

                                <Box>Status</Box>
                                <TextField
                                    required
                                    id="outlined-required"
                                    value={selectStatus}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                />
                            </FormControl>
                            <Box display="flex" justifyContent="flex-end" mt={2}>
                                <Button variant="contained"
                                    startIcon={<AddIcon />}
                                    style={{ backgroundColor: '#E53270', paddingRight: '25px', }}
                                    onClick={postOrderData}
                                >
                                    Post
                                </Button>
                            </Box>

                        </Paper>

                        {/* </div> */}
                    </div>

                    <div class="position-fixed bottom-1 end-1 z-index-2">
                        <div class="toast fade hide p-2 bg-white" role="alert" aria-live="assertive" id="successToast" aria-atomic="true">
                            <div class="toast-header border-0">
                                <i class="material-icons text-success me-2">
                                    check
                                </i>
                                <span class="me-auto font-weight-bold">Material Dashboard </span>
                                <small class="text-body">11 mins ago</small>
                                <i class="fas fa-times text-md ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close"></i>
                            </div>
                            <hr class="horizontal dark m-0" />
                            <div class="toast-body">
                                Hello, world! This is a notification message.
                            </div>
                        </div>
                        <div class="toast fade hide p-2 mt-2 bg-gradient-info" role="alert" aria-live="assertive" id="infoToast" aria-atomic="true">
                            <div class="toast-header bg-transparent border-0">
                                <i class="material-icons text-white me-2">
                                    notifications
                                </i>
                                <span class="me-auto text-white font-weight-bold">Material Dashboard </span>
                                <small class="text-white">11 mins ago</small>
                                <i class="fas fa-times text-md text-white ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close"></i>
                            </div>
                            <hr class="horizontal light m-0" />
                            <div class="toast-body text-white">
                                Hello, world! This is a notification message.
                            </div>
                        </div>
                        <div class="toast fade hide p-2 mt-2 bg-white" role="alert" aria-live="assertive" id="warningToast" aria-atomic="true">
                            <div class="toast-header border-0">
                                <i class="material-icons text-warning me-2">
                                    travel_explore
                                </i>
                                <span class="me-auto font-weight-bold">Material Dashboard </span>
                                <small class="text-body">11 mins ago</small>
                                <i class="fas fa-times text-md ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close"></i>
                            </div>
                            <hr class="horizontal dark m-0" />
                            <div class="toast-body">
                                Hello, world! This is a notification message.
                            </div>
                        </div>
                        <div class="toast fade hide p-2 mt-2 bg-white" role="alert" aria-live="assertive" id="dangerToast" aria-atomic="true">
                            <div class="toast-header border-0">
                                <i class="material-icons text-danger me-2">
                                    campaign
                                </i>
                                <span class="me-auto text-gradient text-danger font-weight-bold">Material Dashboard </span>
                                <small class="text-body">11 mins ago</small>
                                <i class="fas fa-times text-md ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close"></i>
                            </div>
                            <hr class="horizontal dark m-0" />
                            <div class="toast-body">
                                Hello, world! This is a notification message.
                            </div>
                        </div>
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

            <div class="fixed-plugin">
                <a class="fixed-plugin-button text-dark position-fixed px-3 py-2">
                    <i class="material-icons py-2">settings</i>
                </a>
                <div class="card shadow-lg">
                    <div class="card-header pb-0 pt-3">
                        <div class="float-start">
                            <h5 class="mt-3 mb-0">Material UI Configurator</h5>
                            <p>See our dashboard options.</p>
                        </div>
                        <div class="float-end mt-4">
                            <button class="btn btn-link text-dark p-0 fixed-plugin-close-button">
                                <i class="material-icons">clear</i>
                            </button>
                        </div>
                        {/* <!-- End Toggle Button --> */}
                    </div>
                    <hr class="horizontal dark my-1" />
                    <div class="card-body pt-sm-3 pt-0">
                        {/* <!-- Sidebar Backgrounds --> */}
                        <div>
                            <h6 class="mb-0">Sidebar Colors</h6>
                        </div>
                        <a href="javascript:void(0)" class="switch-trigger background-color">
                            <div class="badge-colors my-2 text-start">
                                <span class="badge filter bg-gradient-primary active" data-color="primary" onclick="sidebarColor(this)"></span>
                                <span class="badge filter bg-gradient-dark" data-color="dark" onclick="sidebarColor(this)"></span>
                                <span class="badge filter bg-gradient-info" data-color="info" onclick="sidebarColor(this)"></span>
                                <span class="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)"></span>
                                <span class="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)"></span>
                                <span class="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)"></span>
                            </div>
                        </a>
                        {/* <!-- Sidenav Type --> */}
                        <div class="mt-3">
                            <h6 class="mb-0">Sidenav Type</h6>
                            <p class="text-sm">Choose between 2 different sidenav types.</p>
                        </div>
                        <div class="d-flex">
                            <button class="btn bg-gradient-dark px-3 mb-2 active" data-class="bg-gradient-dark" onclick="sidebarType(this)">Dark</button>
                            <button class="btn bg-gradient-dark px-3 mb-2 ms-2" data-class="bg-transparent" onclick="sidebarType(this)">Transparent</button>
                            <button class="btn bg-gradient-dark px-3 mb-2 ms-2" data-class="bg-white" onclick="sidebarType(this)">White</button>
                        </div>
                        <p class="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
                        {/* <!-- Navbar Fixed --> */}
                        <div class="mt-3 d-flex">
                            <h6 class="mb-0">Navbar Fixed</h6>
                            <div class="form-check form-switch ps-0 ms-auto my-auto">
                                <input class="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onclick="navbarFixed(this)" />
                            </div>
                        </div>
                        <hr class="horizontal dark my-3" />
                        <div class="mt-2 d-flex">
                            <h6 class="mb-0">Light / Dark</h6>
                            <div class="form-check form-switch ps-0 ms-auto my-auto">
                                <input class="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" onclick="darkMode(this)" />
                            </div>
                        </div>
                        <hr class="horizontal dark my-sm-4" />
                        <a class="btn btn-outline-dark w-100" href="">View documentation</a>
                        <div class="w-100 text-center">
                            <a class="github-button" href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/material-dashboard on GitHub">Star</a>
                            <h6 class="mt-3">Thank you for sharing!</h6>
                            <a href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard" class="btn btn-dark mb-0 me-2" target="_blank">
                                <i class="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
                            </a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard" class="btn btn-dark mb-0 me-2" target="_blank">
                                <i class="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </body>
    )
}
