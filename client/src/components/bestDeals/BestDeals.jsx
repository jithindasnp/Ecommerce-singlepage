import React, { useEffect, useState } from 'react'
import './bestDeals.css'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { Button, IconButton, Snackbar } from '@mui/material'

export default function BestDeals() {
    const [product, setproduct] = useState([])
    const navigate = useNavigate()

    // --------code for snackbar(toast)--------------
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const style = {
        postion:'absolute',
        top: '0',
        marginLeft: "70%"
    }
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <IconButton fontSize="small" />x<IconButton />
            </IconButton>
        </React.Fragment>
    );
    //---------------snackbar-----------------------

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token) {
            navigate('/login')
        } else {
            axios.get('http://localhost:3001/api/product/view').then((result) => {
                console.log(result.data)
                setproduct(result.data)
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [])

    const addToCart = (id) => {
        let token = localStorage.getItem("token")
        if (!token) {
            navigate('/login')
        } else {
            axios.post('http://localhost:3001/api/cart/add', { id: id },
                { headers: { "Authorization": "Bearer " + token } }).then((result) => {
                    console.log(result.data)
                    if (result) {
                        handleClick()
                    }
                }).catch((err) => {
                    console.log(err);
                    if (err.response.data.loginStatus == false) {
                        alert("Login expired!!  please login again")
                    }
                })
        }
    }

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Product added to cart✅"
                action={action}
                sx={style}
            />
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 d-flex justify-content-center"><h3>Best Deals</h3></div>
                    <div className="col-sm-9"></div>
                    <div className="col-sm-1"><a href="#">view all</a></div>
                </div>
                <div className="row mt-3">
                    {product.map((item) => <div className="col-lg-3 col-sm-4 col">
                        <div className="card mb-3" style={{ maxWidth: 340, border: "none" }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={`/images/${item.productImg}`} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h6 className="card-title" id='itemName'>{item.productName}</h6>
                                        <p className="card-text" id="price">
                                            ₹{item.price}/-
                                        </p>
                                        <p className="card-text" id='stock'>
                                            In the Stock ({item.stock})
                                        </p>
                                        <button onClick={() => { addToCart(item._id) }} type="button" className="btn btn-outline-info">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    )
}
