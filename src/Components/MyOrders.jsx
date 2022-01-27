import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbars2 from './Navbar2'
import { Table } from 'react-bootstrap'
import { getOrder } from '../config/myServices'

function MyOrders() {
    const [login, setLogin] = useState()
    const [table, setTable] = useState([])
    const [user, setUsers] = useState([])
    useEffect(() => {
        const loginPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(axios.get(`http://localhost:8899/api/users/getorder`));
            }, 300);
        });
        loginPromise.then((res) => {
            console.log(res.data)
            setTable(res.data[0].orders)
            setLogin(res.data[0].totalPrice)
            
        })
    }, [])
    return (
        <div>
            <Navbars2 />
            <h1 className="text-center">Orders</h1>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th style={{width:"30%"}}>Sr No</th>
                        <th>Pizza Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                  {
                            table != undefined &&
                            table.map((ele, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.Price}</td>
                                </tr>
                            )}
                    
                  

                </tbody>

                <div id="hey">

                </div>
            </Table>
            {setTimeout(() =>
                 document.getElementById('hey').innerHTML= ` <h1>Total price is ${login}</h1>`
                , 300)}
        </div>
    )
}

export default MyOrders
