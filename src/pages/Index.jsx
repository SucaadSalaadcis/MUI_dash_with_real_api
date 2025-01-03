import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Logout from './Logout';
import { Footer, LogoutLink, NavBar, SideNavHeader } from './reusible/Sidebar';


export default function Index() {

    const navigate = useNavigate();

    useEffect(() => {
        if (Cookies.get('token')) {

        } else {
            navigate('/sign_in');
        }
    }, [])

    return (
        <body class="g-sidenav-show  bg-gray-200">
            <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">

                <SideNavHeader />

                <hr class="horizontal light mt-0 mb-2" />
                <div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link text-white active bg-gradient-primary" to={'/'}>
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

                        <li class="nav-item mt-3">
                            <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">User Management</h6>
                        </li>

                        <li class="nav-item">
                            <Link to={'/user_management/permission'} class="nav-link text-white">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    {/* <i class="material-icons opacity-10"></i> */}
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
                <hr />
                <LogoutLink />

            </aside>
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                {/* <!-- Navbar --> */}
                <NavBar title={'Dashboard'} />
                {/* <!-- End Navbar --> */}
                <div class="container-fluid py-4">
                    <div class="row">
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="card">
                                <div class="card-header p-3 pt-2">
                                    <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                        <i class="material-icons opacity-10">weekend</i>
                                    </div>
                                    <div class="text-end pt-1">
                                        <p class="text-sm mb-0 text-capitalize">Today's Money</p>
                                        <h4 class="mb-0">$53k</h4>
                                    </div>
                                </div>
                                <hr class="dark horizontal my-0" />
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-success text-sm font-weight-bolder">+55% </span>than lask week</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="card">
                                <div class="card-header p-3 pt-2">
                                    <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                        <i class="material-icons opacity-10">person</i>
                                    </div>
                                    <div class="text-end pt-1">
                                        <p class="text-sm mb-0 text-capitalize">Today's Users</p>
                                        <h4 class="mb-0">2,300</h4>
                                    </div>
                                </div>
                                <hr class="dark horizontal my-0" />
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-success text-sm font-weight-bolder">+3% </span>than lask month</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="card">
                                <div class="card-header p-3 pt-2">
                                    <div class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                        <i class="material-icons opacity-10">person</i>
                                    </div>
                                    <div class="text-end pt-1">
                                        <p class="text-sm mb-0 text-capitalize">New Clients</p>
                                        <h4 class="mb-0">3,462</h4>
                                    </div>
                                </div>
                                <hr class="dark horizontal my-0" />
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-danger text-sm font-weight-bolder">-2%</span> than yesterday</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6">
                            <div class="card">
                                <div class="card-header p-3 pt-2">
                                    <div class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                                        <i class="material-icons opacity-10">weekend</i>
                                    </div>
                                    <div class="text-end pt-1">
                                        <p class="text-sm mb-0 text-capitalize">Sales</p>
                                        <h4 class="mb-0">$103,430</h4>
                                    </div>
                                </div>
                                <hr class="dark horizontal my-0" />
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-success text-sm font-weight-bolder">+5% </span>than yesterday</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-4" style={{ marginTop: '30px' }}>
                        <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
                            <div class="card">
                                <div class="card-header pb-0">
                                    <div class="row">
                                        <div class="col-lg-6 col-7">
                                            <h6>Projects</h6>
                                            <p class="text-sm mb-0">
                                                <i class="fa fa-check text-info" aria-hidden="true"></i>
                                                <span class="font-weight-bold ms-1">30 done</span> this month
                                            </p>
                                        </div>
                                        <div class="col-lg-6 col-5 my-auto text-end">
                                            <div class="dropdown float-lg-end pe-4">
                                                <a class="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="fa fa-ellipsis-v text-secondary"></i>
                                                </a>
                                                <ul class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                                                    <li><a class="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                                                    <li><a class="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                                                    <li><a class="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body px-0 pb-2">
                                    <div class="table-responsive">
                                        <table class="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Companies</th>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Members</th>
                                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Budget</th>
                                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Completion</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="./assets/img/small-logos/logo-xd.svg" class="avatar avatar-sm me-3" alt="xd" />
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mb-0 text-sm">Material XD Version</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="avatar-group mt-2">
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                                <img src="./assets/img/team-1.jpg" alt="team1" />
                                                            </a>
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                                <img src="./assets/img/team-2.jpg" alt="team2" />
                                                            </a>
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                                                <img src="./assets/img/team-3.jpg" alt="team3" />
                                                            </a>
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="./assets/img/team-4.jpg" alt="team4" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td class="align-middle text-center text-sm">
                                                        <span class="text-xs font-weight-bold"> $14,000 </span>
                                                    </td>
                                                    <td class="align-middle">
                                                        <div class="progress-wrapper w-75 mx-auto">
                                                            <div class="progress-info">
                                                                <div class="progress-percentage">
                                                                    <span class="text-xs font-weight-bold">60%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="./assets/img/small-logos/logo-atlassian.svg" class="avatar avatar-sm me-3" alt="atlassian" />
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mb-0 text-sm">Add Progress Track</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="avatar-group mt-2">
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                                <img src="./assets/img/team-2.jpg" alt="team5" />
                                                            </a>
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="./assets/img/team-4.jpg" alt="team6" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td class="align-middle text-center text-sm">
                                                        <span class="text-xs font-weight-bold"> $3,000 </span>
                                                    </td>
                                                    <td class="align-middle">
                                                        <div class="progress-wrapper w-75 mx-auto">
                                                            <div class="progress-info">
                                                                <div class="progress-percentage">
                                                                    <span class="text-xs font-weight-bold">10%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar bg-gradient-info w-10" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="./assets/img/small-logos/logo-slack.svg" class="avatar avatar-sm me-3" alt="team7" />
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mb-0 text-sm">Fix Platform Errors</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="avatar-group mt-2">
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                                <img src="./assets/img/team-3.jpg" alt="team8" />
                                                            </a>
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="./assets/img/team-1.jpg" alt="team9" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td class="align-middle text-center text-sm">
                                                        <span class="text-xs font-weight-bold"> Not set </span>
                                                    </td>
                                                    <td class="align-middle">
                                                        <div class="progress-wrapper w-75 mx-auto">
                                                            <div class="progress-info">
                                                                <div class="progress-percentage">
                                                                    <span class="text-xs font-weight-bold">100%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="./assets/img/small-logos/logo-spotify.svg" class="avatar avatar-sm me-3" alt="spotify" />
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mb-0 text-sm">Launch our Mobile App</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="avatar-group mt-2">
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                                <img src="./assets/img/team-4.jpg" alt="user1" />
                                                            </a>
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                                <img src="./assets/img/team-3.jpg" alt="user2" />
                                                            </a>
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                                                <img src="./assets/img/team-4.jpg" alt="user3" />
                                                            </a>
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="./assets/img/team-1.jpg" alt="user4" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td class="align-middle text-center text-sm">
                                                        <span class="text-xs font-weight-bold"> $20,500 </span>
                                                    </td>
                                                    <td class="align-middle">
                                                        <div class="progress-wrapper w-75 mx-auto">
                                                            <div class="progress-info">
                                                                <div class="progress-percentage">
                                                                    <span class="text-xs font-weight-bold">100%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="./assets/img/small-logos/logo-jira.svg" class="avatar avatar-sm me-3" alt="jira" />
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mb-0 text-sm">Add the New Pricing Page</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="avatar-group mt-2">
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                                <img src="./assets/img/team-4.jpg" alt="user5" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td class="align-middle text-center text-sm">
                                                        <span class="text-xs font-weight-bold"> $500 </span>
                                                    </td>
                                                    <td class="align-middle">
                                                        <div class="progress-wrapper w-75 mx-auto">
                                                            <div class="progress-info">
                                                                <div class="progress-percentage">
                                                                    <span class="text-xs font-weight-bold">25%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar bg-gradient-info w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="./assets/img/small-logos/logo-invision.svg" class="avatar avatar-sm me-3" alt="invision" />
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mb-0 text-sm">Redesign New Online Shop</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="avatar-group mt-2">
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                                <img src="./assets/img/team-1.jpg" alt="user6" />
                                                            </a>
                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="./assets/img/team-4.jpg" alt="user7" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td class="align-middle text-center text-sm">
                                                        <span class="text-xs font-weight-bold"> $2,000 </span>
                                                    </td>
                                                    <td class="align-middle">
                                                        <div class="progress-wrapper w-75 mx-auto">
                                                            <div class="progress-info">
                                                                <div class="progress-percentage">
                                                                    <span class="text-xs font-weight-bold">40%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar bg-gradient-info w-40" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="40"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card h-100">
                                <div class="card-header pb-0">
                                    <h6>Orders overview</h6>
                                    <p class="text-sm">
                                        <i class="fa fa-arrow-up text-success" aria-hidden="true"></i>
                                        <span class="font-weight-bold">24%</span> this month
                                    </p>
                                </div>
                                <div class="card-body p-3">
                                    <div class="timeline timeline-one-side">
                                        <div class="timeline-block mb-3">
                                            <span class="timeline-step">
                                                <i class="material-icons text-success text-gradient">notifications</i>
                                            </span>
                                            <div class="timeline-content">
                                                <h6 class="text-dark text-sm font-weight-bold mb-0">$2400, Design changes</h6>
                                                <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
                                            </div>
                                        </div>
                                        <div class="timeline-block mb-3">
                                            <span class="timeline-step">
                                                <i class="material-icons text-danger text-gradient">code</i>
                                            </span>
                                            <div class="timeline-content">
                                                <h6 class="text-dark text-sm font-weight-bold mb-0">New order #1832412</h6>
                                                <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
                                            </div>
                                        </div>
                                        <div class="timeline-block mb-3">
                                            <span class="timeline-step">
                                                <i class="material-icons text-info text-gradient">shopping_cart</i>
                                            </span>
                                            <div class="timeline-content">
                                                <h6 class="text-dark text-sm font-weight-bold mb-0">Server payments for April</h6>
                                                <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                                            </div>
                                        </div>
                                        <div class="timeline-block mb-3">
                                            <span class="timeline-step">
                                                <i class="material-icons text-warning text-gradient">credit_card</i>
                                            </span>
                                            <div class="timeline-content">
                                                <h6 class="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</h6>
                                                <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                                            </div>
                                        </div>
                                        <div class="timeline-block mb-3">
                                            <span class="timeline-step">
                                                <i class="material-icons text-primary text-gradient">key</i>
                                            </span>
                                            <div class="timeline-content">
                                                <h6 class="text-dark text-sm font-weight-bold mb-0">Unlock packages for development</h6>
                                                <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                                            </div>
                                        </div>
                                        <div class="timeline-block">
                                            <span class="timeline-step">
                                                <i class="material-icons text-dark text-gradient">payments</i>
                                            </span>
                                            <div class="timeline-content">
                                                <h6 class="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
                                                <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />

                </div>
            </main>

        </body>

    )
}
