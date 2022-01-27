import React, { useRef, useState } from 'react';
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { getUsers, loginUser } from '../config/myServices';
import Navbars from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Login() {
    const [data,setData]=useState([])
    const email=useRef(null)
    const pass=useRef(null)
    const navigate=useNavigate()

    const check=()=>{
   const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(axios.get(`http://localhost:8899/api/users/getusers`));
    }, 300);
  });
  myPromise.then((res)=>{
      let i=0;
      console.log(res.data)
      while(i<res.data.length){
        if(email.current.value==res.data[i].email && pass.current.value==res.data[i].pass){
            alert("success")
            navigate('/menu')
            loginUser({id:res.data[i]._id,email:res.data[i].email,name:res.data[i].name}).then(res=>{
                console.log(res.data+" dsts")
                   localStorage.setItem("_token",res.data);
                  // navigate('/menu')
            })
            console.log("login id "+res.data[i]._id)
            break;
        }
        else{
            i++;
            if(i==res.data.length){
                alert("no match")
                break;
            }
        }
    }
  }) 
 
    }

    const myStyle={
        backgroundImage:"url('https://cdn.pixabay.com/photo/2020/03/21/02/26/pizza-4952509__340.jpg')",
        backgroundRepeat:'no-repeat',
        backgroundSize:"1500px 549px",
        height:"549px",
        color:"white",
        opacity:"0.9"
      }
    return (
        <div>
            <Navbars/>
            <div style={myStyle}>
            <Form className="px-5" style={{width:"500px",paddingTop:"150px"}}>
            <h1 >Login here</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={email}/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={pass}/>
                </Form.Group>
                <Button onClick ={check}variant="primary" type="button">
                    Submit
                </Button>
            </Form>
            </div>
        </div>
    )
}

export default Login
