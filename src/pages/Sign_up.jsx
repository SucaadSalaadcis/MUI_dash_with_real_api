import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

export default function Sign_up() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); // inistance tixraac


    const handleSumbit = (e) => {

        e.preventDefault();

        try {
            axios.post('https://spiky-crater-dep2vxlep8.ploi.online/api/auth/register', { name, email, password }).then((response) => {
                // console.log(response);
                if (response.data.status) {
                    toast.success('Registered Successfuly...');
                    navigate('/example/login_v2');
                }
            }).catch(err => {
                toast.error(err.response.data.message);
                // console.log(err.response.data.message)
            });

        } catch (error) {
            console.log(error);
            toast.error(error);
        }

    }



    return (
        <body class="">
            <div class="container position-sticky z-index-sticky top-0">
                <div class="row">
                    <div class="col-12">
                        {/* <!-- Navbar --> */}
                        <nav class="navbar navbar-expand-lg blur border-radius-lg top-0 z-index-3 shadow position-absolute mt-4 py-2 start-0 end-0 mx-4">
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
                                            <Link to={'/sign_up'} class="nav-link me-2" >
                                                {/* <a class="nav-link me-2" href="../pages/sign-up.html"> */}
                                                <i class="fas fa-user-circle opacity-6 text-dark me-1"></i>
                                                Sign Up
                                                {/* </a> */}
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/sign_in'} class="nav-link me-2" >
                                                {/* <a class="nav-link me-2" href="../pages/sign-in.html"> */}
                                                <i class="fas fa-key opacity-6 text-dark me-1"></i>
                                                Sign In
                                                {/* </a> */}
                                            </Link>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </nav>
                        {/* <!-- End Navbar --> */}
                    </div>
                </div>
            </div>
            <main class="main-content  mt-0">
                <section>
                    <div class="page-header min-vh-100">
                        <div class="container">
                            <div class="row">
                                <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                                    <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style={{
                                        backgroundImage: "url('../assets/img/illustrations/illustration-signup.jpg')",
                                        backgroundSize: 'cover',
                                    }}>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                                    <div class="card card-plain">
                                        <div class="card-header">
                                            <h4 class="font-weight-bolder">Sign Up</h4>
                                            <p class="mb-0">Enter your email and password to register</p>
                                        </div>
                                        <div class="card-body">
                                            <form role="form">
                                                <div class="input-group input-group-outline mb-3">
                                                    <label class="form-label">Name</label>
                                                    <input type="text" class="form-control" autoComplete='off'
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                </div>
                                                <div class="input-group input-group-outline mb-3">
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
                                                <div class="form-check form-check-info text-start ps-0">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        I agree the <a href="javascript:;" class="text-dark font-weight-bolder">Terms and Conditions</a>
                                                    </label>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0" onClick={handleSumbit}>Sign Up</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="card-footer text-center pt-0 px-lg-2 px-1">
                                            <p class="mb-2 text-sm mx-auto">
                                                Already have an account?
                                                <Link to={'/sign_in'}>Sign in</Link>
                                                {/* <a href="../pages/sign-in.html" class="text-primary text-gradient font-weight-bold">Sign in</a> */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </body>
    )
}
