import React, { useState } from 'react'
import { Container,Row,Col,Card,Form,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState({})

    const handleLoginSubmit = (e)=>
    {
        e.preventDefault();

        let errors = {}

        if(!email.trim())
        {
            errors.email = "Please enter the email"
        }
        if(!password.trim())
        {
            errors.password = "Please enter the password"
        }
        setError(errors);
        if(Object.keys(errors).length !== 0 ) return;

        let users = JSON.parse(localStorage.getItem("userDataa")) || [];

        const match = users.find((user) => user.email === email && user.password === password)

        if(match)
        {
            alert("Login successful");
            localStorage.setItem("loggedUser",JSON.stringify(match));
            navigate("/home")
        }
        else
        {
            alert("Invalid Credentials")
        }

    }
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ minHeight: "100vh" }}>
        <Container>
         <Row className='w-100 justify-content-center'>
            <Col xs={10} sm={8} md={6} lg={4} xl={3}  style={{width:"600px"}}>
            <Card className='p-4 justify-content-center shadow-lg'>
                <h1 className='text-center'>LOGIN</h1>
                    <Form onSubmit={handleLoginSubmit}>
                        <p className='paraError'>{error.name}</p>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        </Form.Group>
                        <p className='paraError'>{error.email}</p>
                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Enter the Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
                        </Form.Group>
                        <p className='paraError'>{error.password}</p>
                        <Form.Group className="mb-3">
                        <Button type='submit' className='w-100'>LOGIN</Button>
                        </Form.Group>
                    </Form>
            </Card>
            </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Login