import React, { useRef } from 'react';
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Navbars from './Navbar';
import { addUser } from '../config/myServices';

function SignUp() {
    const name=useRef(null)
    const email=useRef(null)
    const phone=useRef(null)
    const pass=useRef(null)
    const cPass=useRef(null)
    const postData=()=>{
        addUser({
            name: name.current.value,email:email.current.value,phone:phone.current.value,
             pass: pass.current.value,cPass:cPass.current.value
        }).then(res=>console.log(res))
        alert("registerd successfully")
    }
    const myStyle={
        backgroundImage:"url('https://cdn.pixabay.com/photo/2015/04/28/21/20/pizza-744405__340.jpg')",
        backgroundRepeat:'no-repeat',
        backgroundSize:"1500px 625px",
        height:"625px",
        color:"white",
        opacity:"0.9"
      }
    return (
        <div style={myStyle}>
            <Navbars/>
            <Form className="mt-3" style={{width:"600px",margin:"2px auto",padding:" 0 30px"}}> 
            <h1>Sign up here</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" style={{width:"100%",marginTop:"-6px",color:"white",background:"none",border:"2px solid white"}} ref= {name}/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" style={{width:"100%",marginTop:"-6px",color:"white",background:"none",border:"2px solid white"}} ref= {email}/>
                   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" style={{width:"100%",marginTop:"-6px",color:"white",background:"none",border:"2px solid white"}}ref= {phone}/>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" style={{width:"100%",marginTop:"-6px",color:"white",background:"none",border:"2px solid white"}} ref= {pass} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" style={{width:"100%",marginTop:"-6px",color:"white",background:"none",border:"2px solid white"}} ref= {cPass} />
                </Form.Group>
               
                <Button  onClick={postData} className="btn btn-warning" type="button">
                    Submit
                </Button>
                <span>Already Registerd user? Okay then <a href="/login">Login here</a></span>
            </Form>
        </div>
    )
}

export default SignUp
