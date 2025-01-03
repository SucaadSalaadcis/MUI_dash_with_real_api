import { Box, Button, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

// add functionallity
export function Add() {

    const location = useLocation();

    return (
        <Box
            sx={{
                display: 'flex',  // Use flexbox
                justifyContent: 'flex-end',  // Push to the right
                width: '100%',  // Make sure the parent spans the full width
            }}>
            {

                location.pathname === '/user_management/users' ? <Link to={'/user_post'}>
                    <Button variant='contained' sx={{ marginBottom: '10px', backgroundColor: '#E53270' }}>
                        ADD
                    </Button>
                </Link> : location.pathname === '/user_management/permission' ? <Link to={'/permission_post'}>
                    <Button variant='contained' sx={{ marginBottom: '10px', backgroundColor: '#E53270' }}>
                        ADD
                    </Button>
                </Link> : location.pathname === '/user_management/roles' ? <Link to={'/role_post'}>
                    <Button variant='contained' sx={{ marginBottom: '10px', backgroundColor: '#E53270' }}>
                        ADD
                    </Button>
                </Link> : location.pathname === '/products' ? <Link to={'/product_post'}>
                    <Button variant='contained' sx={{ marginBottom: '10px', backgroundColor: '#E53270' }}>
                        ADD
                    </Button>
                </Link> : location.pathname === '/agents' ? <Link to={'/agent_post'}>
                    <Button variant='contained' sx={{ marginBottom: '10px', backgroundColor: '#E53270' }}>
                        ADD
                    </Button>
                </Link> : location.pathname === '/customers' ? <Link to={'/cust_post'}>
                    <Button variant='contained' sx={{ marginBottom: '10px', backgroundColor: '#E53270' }}>
                        ADD
                    </Button>
                </Link> : location.pathname === '/orders' ? <Link to={'/order_post'}>
                    <Button variant='contained' sx={{ marginBottom: '10px', backgroundColor: '#E53270' }}>
                        ADD
                    </Button>
                </Link> : ''
            }

        </Box>
    )
}

// veiw functionallity
export function View({ veiwParam }) {
    return (
        <label>
            {
                location.pathname === '/user_management/permission' ? <Link to={`/permission_view/${veiwParam}`}>
                    <VisibilityIcon style={{ color: "green", marginLeft: '8px' }} />
                </Link> : location.pathname === '/agents' ? <Link to={`/agent_view/${veiwParam}`}>
                    <VisibilityIcon style={{ color: "green", marginLeft: '8px' }} />
                </Link> : location.pathname === '/products' ? <Link to={`/product_view/${veiwParam}`}>
                    <VisibilityIcon style={{ color: "green", marginLeft: '8px' }} />
                </Link> : location.pathname === '/customers' ? <Link to={`/customer_view/${veiwParam}`}>
                    <VisibilityIcon style={{ color: "green", marginLeft: '8px' }} />
                </Link> : location.pathname === '/user_management/users' ? <Link to={`/users_view/${veiwParam}`}>
                    <VisibilityIcon style={{ color: "green", marginLeft: '8px' }} />
                </Link> : location.pathname === '/user_management/roles' ? <Link to={`/role_view/${veiwParam}`}>
                    <VisibilityIcon style={{ color: "green", marginLeft: '8px' }} />
                </Link> : location.pathname === '/orders' ? <Link to={`/order_view/${veiwParam}`}>
                    <VisibilityIcon style={{ color: "green", marginLeft: '8px' }} />
                </Link> : ""


            }
        </label>
    )
}


// veiw functionallity
export function Edit({ EditParam }) {
    return (
        <label>

            {
                location.pathname === '/user_management/permission' ? <Link to={`/permission/${EditParam}`}>
                    <EditIcon style={{ color: "blue" }} />
                </Link> : location.pathname === '/agents' ? <Link to={`/agent/${EditParam}`}>
                    <EditIcon style={{ color: "blue" }} />
                </Link> : location.pathname === '/customers' ? <Link to={`/customer/${EditParam}`}>
                    <EditIcon style={{ color: "blue" }} />
                </Link> : location.pathname === '/products' ? <Link to={`/product/${EditParam}`}>
                    <EditIcon style={{ color: "blue" }} />
                </Link> : location.pathname === '/user_management/roles' ? <Link to={`/role/${EditParam}`}>
                    <EditIcon style={{ color: "blue" }} />
                </Link> : location.pathname === '/user_management/users' ? <Link to={`/users/${EditParam}`}>
                    <EditIcon style={{ color: "blue" }} />
                </Link> : location.pathname === '/orders' ? <Link to={`/order/${EditParam}`}>
                    <EditIcon style={{ color: "blue" }} />
                </Link> : ""

            }
        </label>
    )
}




///// short way 

// import { Box, Button } from "@mui/material";
// import { Link, useLocation } from "react-router-dom";

// import VisibilityIcon from '@mui/icons-material/Visibility';
// import EditIcon from '@mui/icons-material/Edit';


// const pathMap = [
//     { path: '/user_management/permission', endpoint: 'permission', viewEndpoint: 'permission_view' },
//     { path: '/agents', endpoint: 'agent', viewEndpoint: 'agent_view' },
//     { path: '/customers', endpoint: 'customer', viewEndpoint: 'customer_view' },
//     { path: '/products', endpoint: 'product', viewEndpoint: 'product_view' },
//     { path: '/user_management/roles', endpoint: 'role', viewEndpoint: 'role_view' },
//     { path: '/user_management/users', endpoint: 'users', viewEndpoint: 'users_view' },
//     { path: '/orders', endpoint: 'order', viewEndpoint: 'order_view' },
// ];



// // edit functionallity
// export function Edit({ EditParam }) {

//     const location = useLocation();

//     const match = pathMap.find(item => item.path === location.pathname);
//     // console.log(match)
//     if (!match) return null;

//     // Construct 
//     const url = `/${match.endpoint}/${EditParam}`;

//     return (
//         <Link to={url}>
//             <EditIcon style={{ color: 'blue' }} />
//         </Link>
//     )
// }


// // veiw functionallity
// export function View({ veiwParam }) {

//     const location = useLocation();

//     const match = pathMap.find(item => item.path === location.pathname);

//     if (!match) return null;

//     const url = `/${match.viewEndpoint}/${veiwParam}`;

//     return (
//         <Link to={url}>
//             <VisibilityIcon style={{ color: "green", marginLeft: '8px' }} />
//         </Link>
//     )
// }


// // add functionallity
// export function Add() {

//     const location = useLocation();

//     const match = pathMap.find(item => item.path === location.pathname);
//     // console.log(match)
//     if (!match) return null;

//     // Construct 
//     const url = `/${match.endpoint}`;

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'flex-end',  // Push to the right
//                 width: '100%',
//             }}>
//             <Link to={url}>
//                 <Button variant='contained' sx={{ backgroundColor: '#E53270' }}>
//                     ADD
//                 </Button>
//             </Link>
//         </Box>
//     )
// }









