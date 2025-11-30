import React from 'react'
import { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { Button,Card,Container,Row,Col } from 'react-bootstrap';
import "./Product.css"

const Cart = () => {
  const { cart,increaseQty,decreaseQty } = useContext(CartContext)
  return (
    <div>
      <Container>
        {cart.length === 0 ? (<h1 className='text-center mt-5' >Your Cart is Empty</h1>) : (
          <>
        <h1 className='head text-center'>Your Cart</h1>
        <Row className='g-4'>
          {
            cart.map(item => (
          <Col xs={12} md={6} xl={3} lg={3}>
          <Card key={item.id} className='h-100 d-flex  align-items-center pt-4'>
              <Card.Img variant="top" src={item.image} className='cardImg' />
              <Card.Body >
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.price}
                </Card.Text>
               <Button size="sm" onClick={()=>decreaseQty(item.id)}>-</Button>
              <span className='mx-2'>{item.qty}</span>
               <Button size="sm" onClick={()=>increaseQty(item.id)}>+</Button>
              </Card.Body>
            </Card>
          </Col>
            )
          )
          }    
        </Row>
        </>
        )}
       
      </Container>
      
    </div>
  )
}

export default Cart