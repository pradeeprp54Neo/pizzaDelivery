import React from 'react'
import Navbars2 from './Navbar2'

function Success() {
    return (
        <div>
            <Navbars2/>
            <div class="jumbotron">
            <h1>Order has been Placed Successfully</h1>
  <p class="lead">You will receive notification in your mail with order details</p>
  <hr class="my-4"/>
  <p>Go and order Some more</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="/menu" role="button">Go</a>
  </p>
</div>
        </div>
    )
}

export default Success
