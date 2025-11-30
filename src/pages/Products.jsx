import {Container,Row,Col,Card,Button} from "react-bootstrap"
import { useState,useEffect, useContext } from 'react'
import CartContext from "../context/CartContext"
import "./Product.css"

const Products = () => {
    const [products,setProducts] = useState([])
    // const [count,setCount] = useState(0)
    // const { increaseCart } = useContext(CartContext);

    const { addToCart } = useContext(CartContext)

    useEffect(()=>{
        const fetchProducts = async ()=>
                {
                    try
                    {
                        const response = await fetch("/products.json");
                        const data = await response.json();
                        setProducts(data);
                    }
                    catch(err)
                    {
                        console.log("Error Loading the products")
                        
                    }
                    
                }
                fetchProducts();
            },[])

  return (
    <div>
        <Container>
            <h1 className="head text-center">Products</h1>       
            <Row className="g-4">
                {products.map(product => (
                <Col xs={12} md={2} xl={3} lg={3}>
                <Card key={product.id} className="h-100 d-flex align-items-center pt-4">
                <Card.Img variant="top" src={product.image} className="cardImg" />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="flex-grow-1">
                    {product.description}
                    </Card.Text>
                     <Card.Text >
                     <b>Price :</b> <strong style={{color:"red"}}>{product.price}</strong>
                    </Card.Text>
                    <Button variant="primary" onClick={()=> addToCart(product)}>ADD To CART</Button>
                </Card.Body>
                </Card>
                </Col>
                ))}
            </Row>
        </Container>

    </div>
  )
}

export default Products