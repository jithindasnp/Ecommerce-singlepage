import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../components/navbar/Navbar'
import Topbar from '../components/topbar/Topbar'

export default function Login() {
    const [login, setlogin] = useState()
    const navigate = useNavigate()


    const loginInpChange = (e) => {
        const { name, value } = e.target
        setlogin({ ...login, [name]: value })

    }


    const loginSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/login', login).then((result) => {
            console.log(result);
            localStorage.setItem('token', result.data.token)
            if (result) {
                navigate('/')
            } else {
                navigate('/login')
            }
        })
    }


    return (
        <>
            <Topbar />
            <Navbar />
            <div className="container loginContainer mt-5">
                <section className="vh-100 sectionReg " >
                    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6 my-5">
                                    <div className="card" style={{ borderRadius: 15 }}>
                                        <div className="card-body p-5 ">
                                            <h2 className="text-uppercase text-center mb-5">
                                                Login account
                                            </h2>
                                            <form onSubmit={loginSubmit}>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="email"
                                                        id="form3Example3cg"
                                                        className="form-control form-control-lg"
                                                        name='email'
                                                        onChange={loginInpChange}
                                                    />
                                                    <label className="form-label" htmlFor="form3Example3cg">
                                                        Email
                                                    </label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        id="form3Example4cg"
                                                        className="form-control form-control-lg"
                                                        name='password'
                                                        onChange={loginInpChange}
                                                    />
                                                    <label className="form-label" htmlFor="form3Example4cg">
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="form-check mb-5">
                                                    <input
                                                        className="form-check-input "
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="form2Example3cg"
                                                    />
                                                    <label className="form-check-label" htmlFor="form2Example3g">
                                                        I agree all statements in{" "}
                                                        <a href="#!" className="text-body">
                                                            <u>Terms of service</u>
                                                        </a>
                                                    </label>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                                <p className="text-center text-muted mt-5 mb-0">
                                                    Have already an account?{" "}
                                                    <a href="/register" className="fw-bold text-body">
                                                        <u>Register here</u>
                                                    </a>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
