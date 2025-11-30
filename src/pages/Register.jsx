import React, { useState } from 'react'
import { Container,Row,Col,Card,Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Register.css"

const Register = () => {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("")
    const [error,setError] = useState({});
    const [existsMsg,setExistsMsg] = useState("")
    
    const handleSubmit = (e)=>
    {
        e.preventDefault();

        let errors = {};

        if(!name.trim())
        {
            errors.name = "Name is required";
        }
        if(!email.trim())
        {
            errors.email = "Email is required";
        }
        else if(!/\S+@\S+\.\S+/.test(email))
        {
            errors.email = "Invalid Email ID"
        }
        if(!password.trim())
        {
            errors.password = "Password is required"
        }
        else if(password.length < 6)
        {
            errors.password = "Password must be atleast 6 characters"
        }
        else if(!/\d/.test(password))
        {
            errors.password = "Password must contain  atleast one character"
        }
        if(!phone.trim())
        {
            errors.phone = "Phone Number is required"
        }
        else if(!/^[0-9]{10}$/.test(phone))
        {
            errors.phone = "Invalid phonenumber"
        }
        setError(errors);
        if(Object.keys(errors).length !== 0 ) return;
        const userData = {name,email,password,phone};

        let users = JSON.parse(localStorage.getItem("userDataa")) || [];

        const userExist = users.some((user) => user.email === email)
        if(userExist)
        {
            setExistsMsg("User Already Exists");
            alert(existsMsg);
            return;
        }
        users.push(userData);
        localStorage.setItem("userDataa",JSON.stringify(users));
        alert("Successfully Registred");
        navigate("/login")

    }
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Container>
            <Row className='w-100 justify-content-center'>
                <Col xs={10} sm={8} md={6} lg={4} xl={3} style={{width:"600px"}}>
            <Card className='p-4 shadow-lg justify-content-center' >
                <h3 className='text-center mb-4'>SIGN UP</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control type="name" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)} value={name} />
                </Form.Group>
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
                    <Form.Control type="text" placeholder="Enter Your Phone number" onChange={(e)=>setPhone(e.target.value)} value={phone} />
                </Form.Group>
                  <p className='paraError'>{error.phone}</p>
                <Form.Group className="mb-3">
                   <Button type='submit' className='w-100'>REGISTER</Button>
                </Form.Group>
                 <Form.Group className="mb-3">
                   <Link to={"login"}>Login</Link>
                </Form.Group>
                
                </Form>
            </Card>
            </Col>
            </Row>
        </Container>

    </div>
  )
}

export default Register