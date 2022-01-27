import React from 'react'
import { Container } from 'react-bootstrap'
import Navbars from './Navbar'

function Home() {
  const myStyle={
    backgroundImage:"url('https://cdn.pixabay.com/photo/2020/02/02/05/59/pizza-4812083__340.jpg')",
    backgroundRepeat:'no-repeat',
    backgroundSize:"1500px 555px",
    height:"555px",
    color:"white"
  
  }
    return (
        <>
        <Navbars/>
        <Container fluid style={myStyle}>
        <div class="jumbotron pt-5"style={{width:"500px",marginLeft:"700px"}} >
        <h1 class="display-4 ">Hello, Everyone!</h1>
        <p class="lead">Welcome to our Pizza Shop</p>
        <hr class="my-4"/>
        <p>Grab 2 pizzas and get one free (sale)</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="/login" role="button">Sign in here</a>
        </p>
      </div>
      </Container>
      </>
    )
}

export default Home
