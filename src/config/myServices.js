import axios from 'axios'
import {mainUrl} from './mainUrl';
export function addUser(data){
    console.log("im add")
    return axios.post(`${mainUrl}/users/adduser`,data);
}
export function loginUser(data){
    return axios.post(`${mainUrl}/users/loginuser`,data);
}

export function getUsers(){
    console.log("im get")
    return axios.get(`${mainUrl}/users/getusers`);
}
export function emailMe(){
    console.log("im email")
    return axios.get(`${mainUrl}/users/emailme`);
}
export function loggedIn(){
    console.log("im login")
    return axios.get(`${mainUrl}/users/loggedin`);
}
export function getMenu(){
    return axios.get(`${mainUrl}/users/getmenu`,{
        headers:{"authorization":`Bearer ${localStorage.getItem('_token')}`}
    });
}
export function addQuan(data){
    console.log("in update axios")
    return axios.put(`${mainUrl}/users/addquan`,data);
}
export function updateOrders(data){
    console.log("in update axios")
    return axios.put(`${mainUrl}/users/updateorders`,data);
}
export function deletepro(data){
    console.log("in update axios")
    return axios.put(`${mainUrl}/users/deletepro`,data);
}
export function updateUSer(data){
    console.log("update total")
    return axios.put(`${mainUrl}/users/updateuser`,data);
}
export function updateCard(data){
    console.log("in card")
    return axios.put(`${mainUrl}/users/updatecard`,data);
}
export function orderData(data){
    console.log("in card")
    return axios.post(`${mainUrl}/users/orderdata`,data);
}
export function getOrder(data){
    console.log("in card")
    return axios.get(`${mainUrl}/users/getorder`);
}
export function checkOut(data){
    console.log("in check")
    return axios.put(`${mainUrl}/users/checkout`,data);
}
export function getCount(data){
    console.log("in check")
    return axios.get(`${mainUrl}/users/getcount`);
}


