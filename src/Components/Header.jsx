import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home"className='text-light fw-bolder'>
          <i class="fa-solid fa-cart-shopping fa-bounce"></i>
            Yours Cart
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
