import React, { useRef,useState,useEffect } from 'react'
import Navbars2 from './Navbar2';
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router';
import { updateCard } from '../config/myServices';
import axios from 'axios';
import { checkOut,emailMe } from '../config/myServices';

function Checkout() {
    const[log,setLog]=useState()
    const[val,setVal]=useState()
    const navigate=useNavigate()
    const cardNumber=useRef(null)
    const Expiry=useRef(null)
    const name=useRef(null)
    const cvv=useRef(null)

    
    const success=()=>{
       
            const loginPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(axios.get(`http://localhost:8899/api/users/loggedin`));
                }, 300);
            });
            loginPromise.then((res)=>{
                // console.log(res.data)
                setLog(res.data)
               let data=[{cardNumber:cardNumber.current.value,Expiry:Expiry.current.value,name:name.current.vale,cvv:cvv.current.value}]
              updateCard({id:res.data,details:data})
             
              checkOut({id:res.data,data:[],totalPrice:0})
              emailMe().then((res)=>console.log(res.data))
              navigate('/success')
            })
            
          
        
    }
    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(axios.get(`http://localhost:8899/api/users/getusers`));
            }, 400);
        });
        const loginPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(axios.get(`http://localhost:8899/api/users/loggedin`));
            }, 300);
        });
        loginPromise.then((res)=>{
            // console.log(res.data)
            setLog(res.data)
        }).catch((err)=>{
            console.log("err")
        })
        myPromise.then((res)=>{
                const result = res.data;
                // console.log(log)
                const users = result.filter(result => result._id == log)
                // console.log(result[0])
                setVal(result[0].totalPrice)
        }).catch((err)=>{
            console.log("can you wait?",err.message)
        })
      
    }, [])
    return (
        <div>
            <Navbars2 />
            <h1>lets checkout</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Card Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Card Number" ref={cardNumber}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control type="number" placeholder="Expiry Date" ref={Expiry} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name on card</Form.Label>
                    <Form.Control type="text" placeholder="Name on card" ref={name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter cvv</Form.Label>
                    <Form.Control type="number" placeholder="Enter cvv" ref={cvv}/>
                </Form.Group>
                <Button onClick={success} variant="primary" type="button">
                    Submit
                </Button>
                    
                    
            </Form>
            <div id="hey">

            </div>

                 `<h1>Total Price is {val}</h1>`
             
        </div>
    )
}

export default Checkout
