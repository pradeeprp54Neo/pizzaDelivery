import React,{useState,useEffect} from 'react'
import Navbars2 from './Navbar2';
import axios from 'axios';
import { addQuan, getMenu } from '../config/myServices';
import jwtToken from 'jwt-decode';

function Profile() {
    const[uid,setUid]=useState([])
    useEffect(() => {
       
        if(localStorage.getItem('_token')!=undefined){
          let token=localStorage.getItem('_token');
          let decode=jwtToken(token);
              console.log(decode)
              setUid(decode.uid)
          }
      }, [])
    return (
        <div>
            <Navbars2/>
            <div class="jumbotron jumbotron-fluid">
  <div class="container">
     <h1 class="display-4"> Hello {uid}</h1>
  </div>
</div>
        </div>
    )
}

export default Profile
