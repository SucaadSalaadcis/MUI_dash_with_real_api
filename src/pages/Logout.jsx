import axios from "axios";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { Box } from "@mui/material";

export default function Logout() {

    const navigate = useNavigate(); // Correctly use the hook inside the component

    const handleLogout = () => {
        // localStorage.clear();
        Cookies.remove('token')
        navigate('/sign_in')
    };

    return (
        <Box onClick={handleLogout}>
            Logout
        </Box>
    );
}
