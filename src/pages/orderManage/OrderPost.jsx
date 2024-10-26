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

import { Footer, LogoutLink, NavBar, SideNavHeader } from "../reusible/Sidebar";

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
                <NavBar title={'Order Post'} />

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

                    <Footer />

                </div>
            </main>

        </body>
    )
}
