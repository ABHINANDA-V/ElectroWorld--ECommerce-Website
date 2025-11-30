
import { Container } from "react-bootstrap"
import React, { useEffect, useState } from 'react'
import "./Home.css"


const Home = () => {
  const [user,setUser] = useState("");

    useEffect(()=>
            {
             const logged = JSON.parse(localStorage.getItem("loggedUser"));
             setUser(logged);  
            },[]);
  return (
    <div>
      <Container style={{height:"90vh"}}>
      <h1 className="homeHead">Hello <span className="span">{user?.name}</span> ,Welcome to the Gadget World!</h1>
      <p className="homePara">Welcome to our electronic gadgets online store—your trusted source for modern, high-quality, and affordable tech products. We specialize in offering a diverse selection of gadgets including smartphones, laptops, tablets, smartwatches, audio devices, gaming accessories, home appliances, and more.
        Our mission is to make technology accessible to everyone by providing the best products at competitive prices. We focus on quality, performance, and customer satisfaction. With a smooth shopping experience, secure payment methods, fast shipping, and responsive support, we make sure you enjoy the convenience of buying electronics online.
        Whether you're upgrading your device, looking for accessories, or exploring the latest trends in tech, our store has everything you need. Explore our collection today and stay ahead with smart technology!</p>
        <p className="homePara">We are an online electronics store dedicated to bringing you the latest and most innovative electronic gadgets at unbeatable prices. From powerful smartphones and sleek laptops to smartwatches, headphones, and home-tech essentials, our collection is carefully curated to meet your needs. Whether you’re a tech enthusiast or looking for everyday gadgets, we offer high-quality products, secure checkout, fast delivery, and reliable customer support. Discover top-brand gadgets and upgrade your tech lifestyle with us.</p>
        </Container>
    </div>
  )
}

export default Home