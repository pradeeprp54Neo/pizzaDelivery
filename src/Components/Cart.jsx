import React, { useState, useEffect, useRef } from 'react'
import Navbars2 from './Navbar2';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { deletepro, deleteQuan, loginUser, orderData, updateUSer } from '../config/myServices';
import { useNavigate } from 'react-router';

function Cart() {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState()
    const [loginId, setLoginId] = useState()
    const [array, setArray] = useState([])
    const [dete, setDete] = useState([])
    const num = useRef(null);

    let t=0;
    useEffect(() => {
      
        const loginPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(axios.get(`http://localhost:8899/api/users/loggedin`));
            }, 300);
        });
        loginPromise.then((res) => {
            console.log(res.data)
            setLoginId(res.data)
        })
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(axios.get(`http://localhost:8899/api/users/getusers`));
            }, 500);
        });
        myPromise.then((res) => {
            setDete(res.data)
            setTotal(res.data[0].totalPrice)
            array.push(res.data[0].totalPrice)
            updateUSer({id:loginId,totalPrice:res.data[0].totalPrice})
             const result = res.data;
                const users = result.filter(result => result._id == loginId)
                console.log(res.data)
                    setCart(result[0].orders)
              
                
          
        }).catch((err)=>{
          
                console.log("wait",err.message)
           
        
        })

    }, [])

    // const deletePizza = (index) => {
    //     console.log(cart)
    //     cart.splice(index,1);
    //     deletepro({id:loginId,cart:cart,totalPrice:dete[index].totalPrice-cart[0].Price})
    //     const myPromise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(axios.get(`http://localhost:8899/api/users/getusers`));
    //         }, 300);
    //     });
    //     myPromise.then((res)=>{
    //         console.log(res.data)
    //     })
    // }

    let navigate = useNavigate()
    const checkout = () => {
        orderData({orders:cart,totalPrice:total})
        navigate('/checkout')
    }
    let totalArray=[];
    const totalNum=(e,index)=>{
    let p=(e.target.options[e.target.selectedIndex].text);
    array.push(cart[index].Price*p)
    console.log(array)
    
    for(let i=0;i<array.length;i++){
        t=parseInt(t+array[i])
    }
    // console.log(array)
    setTotal(t)
    console.log("t",t)
        const loginPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(axios.get(`http://localhost:8899/api/users/loggedin`));
            }, 300);
        });
        loginPromise.then((res) => {
            console.log(cart+" cart")
            updateUSer({id:res.data,totalPrice:t})
            
        })
      
    
    }
    return (
        <div>
            <Navbars2 />
            <h1 className="text-center">Tring Tring ! your Pizza Cart is Calling :)</h1>
            <Container fluid>
                
                {
                        cart.map((pizza, index) =>
                        <Card className="mx-5 my-3" style={{ width: '18rem', display: "inline-block" }}>
                            <Card.Img variant="top" width="350px" height="250px" src={pizza.path} />
                            <Card.Body>
                                <Card.Title>{pizza.name}</Card.Title>
                                <Card.Text>
                                    {pizza.Price}
                                </Card.Text>
                                <Card.Text>
                                    {/* <input type="number" ref={num} onClick={()=>{console.log(num.current.value)}} /> */}
                                    <label for="cars">Choose a car:</label>

                                    <select name="cars" id="cars" onChange={(e)=>totalNum(e,index)}>
                                        <option  selected="selected" value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </Card.Text>
                                {/* <Button onClick={() => deletePizza(index)} type="submit" variant="primary">Delete</Button> */}
                            </Card.Body>
                        </Card>

                    )
                }
                <h1>Total is {total}</h1>
               
                <Button onClick={checkout}>CheckOut</Button>
            </Container>

        </div>
    )
}

export default Cart
