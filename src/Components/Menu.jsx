import React, { useState, useEffect} from 'react'
import Navbars2 from './Navbar2';
import axios from 'axios';
import {Card, Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { addQuan, getMenu } from '../config/myServices';
import jwtToken from 'jwt-decode';

function Menu() {
    const [data,setData]=useState([])
    const [login,setLogin]=useState([])
 
    let totalArray=[];
    let arr=[];
    useEffect(() => {
       
      if(localStorage.getItem('_token')!=undefined){
        let token=localStorage.getItem('_token');
        let decode=jwtToken(token);
            console.log(decode)
            getMenu().then((res)=>{
              setData(res.data)
              console.log(res.data)
              arr.push(res.data[0])
            })
        }
    }, [])

    
    const addProduct=(index)=>{
      let sum=0;
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(axios.get(`http://localhost:8899/api/users/getmenu`));
            }, 300);
          });
        const loginPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(axios.get(`http://localhost:8899/api/users/loggedin`));
            }, 300);
          });
          loginPromise.then((res)=>{
            setLogin(res.data)
          })
  
          myPromise.then((res)=>{
            console.log(res.data[index])
            arr.push(res.data[index])
            console.log(arr)
            totalArray.push(res.data[index].Price)
            for(let i=0;i<totalArray.length;i++){
              sum=sum+totalArray[i]
            }
            console.log("i m sum",sum)
            console.log(res.data[index].Price)
            console.log(login+" loginss")
            addQuan({id:login,orders:arr,totalPrice:sum})
          })
          // arr.push(res.data[index])
    }
    return (
        <div>
            <Navbars2/>
            <Container fluid>
        {
            data.map((pizza,index)=>
            <Card className="mx-3 my-3" style={{ width: '18rem' ,display:"inline-block"}}>
            <Card.Img variant="top" width="300px" height="250px" src={pizza.path} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Text>
               {pizza.Price}
              </Card.Text>
              <Button onClick={()=>addProduct(index)} variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
            )
        }
        </Container>
        </div>
    )
}

export default Menu
