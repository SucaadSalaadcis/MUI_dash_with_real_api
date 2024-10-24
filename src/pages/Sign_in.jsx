import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { useState } from 'react';

export default function Sign_in() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSumbit = async (e) => {

        e.preventDefault();
        try {
            if (email == '' && password == '') {
                toast.success("All Fields are required")
            }
            const user_data = await axios.post('https://spiky-crater-dep2vxlep8.ploi.online/api/auth/login',
                { email, password }, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then((user_data) => {
                // ku store garey token in cookie 
                Cookies.set('token', user_data.data.token, { expires: 7, });
                // localStorage.setItem('token',user_data.data.token);

                // toast.success('Login successful',)
                window.location.href = '/';
            })

            console.log('Login successful:', user_data.data);

            // Redirect user to dashboard
        } catch (error) {
            console.error('Error user_data:', error.response);
        }

    }


    return (
        <body class="bg-gray-200">
            <div class="container position-sticky z-index-sticky top-0">
                <div class="row">
                    <div class="col-12">
                        {/* <!-- Navbar --> */}
                        <nav class="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                            <div class="container-fluid ps-2 pe-0">
                               
                                <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon mt-2">
                                        <span class="navbar-toggler-bar bar1"></span>
                                        <span class="navbar-toggler-bar bar2"></span>
                                        <span class="navbar-toggler-bar bar3"></span>
                                    </span>
                                </button>
                                <div class="collapse navbar-collapse" id="navigation">
                                    <ul class="navbar-nav mx-auto">
                                        <li class="nav-item">
                                            <Link to={'/'} class="nav-link d-flex align-items-center me-2 active" aria-current="page">
                                                {/* <a class="nav-link d-flex align-items-center me-2 active" aria-current="page" href="../pages/dashboard.html"> */}
                                                <i class="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                                                Dashboard
                                                {/* </a> */}
                                            </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to={'/sign_up'} class="nav-link me-2">
                                                {/* <a class="nav-link me-2" href="../pages/sign-up.html"> */}
                                                <i class="fas fa-user-circle opacity-6 text-dark me-1"></i>
                                                Sign Up
                                                {/* </a> */}
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/sign_in'} class="nav-link me-2">
                                                {/* <a class="nav-link me-2" href="../pages/sign-in.html"> */}
                                                <i class="fas fa-key opacity-6 text-dark me-1"></i>
                                                Sign In
                                                {/* </a> */}
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul class="navbar-nav d-lg-block d-none">
                                       
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        {/* <!-- End Navbar --> */}
                    </div>
                </div>
            </div>
            <main class="main-content  mt-0">
                <div class="page-header align-items-start min-vh-100" style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
                    backgroundSize: 'cover',
                }}>
                    <span class="mask bg-gradient-dark opacity-6"></span>
                    <div class="container my-auto">
                        <div class="row">
                            <div class="col-lg-4 col-md-8 col-12 mx-auto">
                                <div class="card z-index-0 fadeIn3 fadeInBottom">
                                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                            <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                                            <div class="row mt-3">
                                                <div class="col-2 text-center ms-auto">
                                                    <a class="btn btn-link px-3" href="javascript:;">
                                                        <i class="fa fa-facebook text-white text-lg"></i>
                                                    </a>
                                                </div>
                                                <div class="col-2 text-center px-1">
                                                    <a class="btn btn-link px-3" href="javascript:;">
                                                        <i class="fa fa-github text-white text-lg"></i>
                                                    </a>
                                                </div>
                                                <div class="col-2 text-center me-auto">
                                                    <a class="btn btn-link px-3" href="javascript:;">
                                                        <i class="fa fa-google text-white text-lg"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <form role="form" class="text-start">
                                            <div class="input-group input-group-outline my-3">
                                                <label class="form-label">Email</label>
                                                <input type="email" class="form-control" autoComplete='off'
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div class="input-group input-group-outline mb-3">
                                                <label class="form-label">Password</label>
                                                <input type="password" class="form-control" autoComplete='off'
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <div class="form-check form-switch d-flex align-items-center mb-3">
                                                <input class="form-check-input" type="checkbox" id="rememberMe" />
                                                <label class="form-check-label mb-0 ms-2" for="rememberMe">Remember me</label>
                                            </div>
                                            <div class="text-center">
                                                <button type="button" class="btn bg-gradient-primary w-100 my-4 mb-2" onClick={handleSumbit}>Sign in</button>
                                            </div>
                                            <p class="mt-4 text-sm text-center">
                                                Don't have an account?
                                                <Link to={'/sign_up'} class="text-primary text-gradient font-weight-bold">  Sign up </Link>
                                                {/* <a href="../pages/sign-up.html" class="text-primary text-gradient font-weight-bold">Sign up</a> */}
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="footer position-absolute bottom-2 py-2 w-100">
                        <div class="container">
                            <div class="row align-items-center justify-content-lg-between">
                                <div class="col-12 col-md-6 my-auto">
                                    <div class="copyright text-center text-sm text-white text-lg-start">
                                        © <script>
                                            document.write(new Date().getFullYear())
                                        </script>,
                                        made with <i class="fa fa-heart" aria-hidden="true"></i> by
                                        <a href="https://www.creative-tim.com" class="font-weight-bold text-white" target="_blank">Creative Tim</a>
                                        for a better web.
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                                        <li class="nav-item">
                                            <a href="https://www.creative-tim.com" class="nav-link text-white" target="_blank">Creative Tim</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="https://www.creative-tim.com/presentation" class="nav-link text-white" target="_blank">About Us</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="https://www.creative-tim.com/blog" class="nav-link text-white" target="_blank">Blog</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-white" target="_blank">License</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </body>
    )
}
