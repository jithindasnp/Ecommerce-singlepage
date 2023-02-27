import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../components/navbar/Navbar'
import Topbar from '../components/topbar/Topbar'

export default function Cart() {
    const [cartIn, setcartIn] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token) {
            navigate('/login')
        } else {
            axios.get('http://localhost:3001/api/cart/view', 
            { headers: { "Authorization": "Bearer " + token } }).then((result) => {
                console.log(result.data)
                let data=result.data
                setcartIn(data)
            }).catch((err) => {
                console.log(err);
                if (err.response.data.loginStatus == false) {
                    alert("Login expired!!  please login again")
                }
            })
        }
    }, [])


    const removeItem = (id,product) => {
        let token = localStorage.getItem("token")
        axios.post('http://localhost:3001/api/cart/delete',{id,product},
         { headers: { "Authorization": "Bearer " + token } }).then((result) => {
            if (result) {
                window.location.reload();
            }
        }).catch((err) => {
            console.log(err);
            if (err.response.data.loginStatus == false) {
                alert("Login expired!!  please login again")
            }
        })
    }

    return (
        <>
            <Topbar />
            <Navbar />
            <div className="container my-5 cartPage w-75">
                <div className="row cartTitleRow" >
                    <div className="col-sm-6 col mt-3 ">
                        <h4 className='ms-5'>ITEM</h4>
                    </div>
                    <div className="col-sm-3 col mt-3">
                        <h4>PRICE</h4>
                    </div>
                    <div className="col-sm-3 col mt-3">
                        <h4><a href="" ></a></h4>
                    </div>
                </div>
                {cartIn.map((item) =>

                    <div className="row">

                        <div className="col-sm-6">
                            <ul >
                                <li><h4 className='mt-3'>{item.productName}</h4></li>
                            </ul>
                        </div>

                        <div className="col-sm-3">
                            <h4 className='mt-3'>₹ {item.price}</h4>
                        </div>
                        <div className="col-sm-3">
                            <p className='mt-3'><button type="button" onClick={() => { removeItem(item._id,item.productName) }} class="btn btn-outline-danger text-white">remove</button></p>
                        </div>

                    </div>)}
            </div>
        </>
    )
}
