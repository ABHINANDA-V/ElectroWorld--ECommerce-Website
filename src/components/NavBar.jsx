import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext"
import { Navbar,Nav,Badge } from 'react-bootstrap'
import { NavLink,useNavigate } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext)

  const handleLogout = ()=>
      {
        //Remove Login data
        localStorage.removeItem("loggedUser");
        localStorage.removeItem("user");

        navigate("/login")
      }
  return (
    <div>
        <Navbar expand="lg"  className='navBar' >
     
        <Navbar.Brand href="#home" className='brand'>ElectroWorld</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navCollapse'>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/home" className='navLink'>HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/products" className='navLink'>PRODUCT</Nav.Link>
            <Nav.Link as={NavLink} to="/cart" className='navLink'><Badge bg="danger">{cartCount}</Badge>CART</Nav.Link>
             <Nav.Link onClick={handleLogout} className='navLink'>LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>
  )
}

export default NavBar