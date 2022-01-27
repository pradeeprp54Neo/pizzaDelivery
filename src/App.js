import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Menu from './Components/Menu';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Success from './Components/Success';
import MyOrders from './Components/MyOrders';
import Profile from './Components/Profile';

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/register" element={<SignUp/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/dashboard" element={<Dashboard/>}></Route>
       <Route path="/menu" element={<Menu/>}></Route>
       <Route path="/cart" element={<Cart/>}></Route>
       <Route path="/checkout" element={<Checkout/>}></Route>
       <Route path="/success" element={<Success/>}></Route>
       <Route path="/myorders" element={<MyOrders/>}></Route>
       <Route path="/profile" element={<Profile/>}></Route>
     </Routes>

    </>
  );
}

export default App;
