import React, { useState ,useEffect} from 'react';
import { Navbar, Container,Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { BrowserRouter,Link } from 'react-router-dom';
import axios from 'axios';
import { getCount } from '../config/myServices';

function Navbars2() {
    const[cart,setCart]=useState()
    useEffect(() => {
       getCount().then((res)=>{
           console.log(res.data[0].orders.length)
           setCart(res.data[0].orders.length)
       })
    }, [])
    const cartCount=()=>{
        getCount().then((res)=>{
            console.log(res.data[0].orders.length)
            setCart(res.data[0].orders.length)
        })
    }
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand style={{marginLeft:"-110px"}}href="#home"><Link to="/"><img src="https://cdn.pixabay.com/photo/2021/02/07/13/07/pizza-5991179__340.png" width="50px" height="50px"/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={{marginLeft:"800px"}}>
                            <Nav.Link > <Link style={{textDecoration:"none",color:"white"}} to="/menu">Menu</Link></Nav.Link>
                            <Nav.Link > <Link style={{textDecoration:"none",color:"white"}} to="/myorders">My Orders</Link></Nav.Link>
                            <Nav.Link > <Link style={{textDecoration:"none",color:"white"}} onClick={cartCount} to="/cart">Cart <span className="bg-primary text-white">{cart}</span></Link></Nav.Link>
                            <Nav.Link > <Link style={{textDecoration:"none",color:"white"}} to="/profile">Profile</Link></Nav.Link>
                            <Nav.Link > <Link style={{textDecoration:"none",color:"white"}} to="/">Logout</Link></Nav.Link>
                          
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars2
