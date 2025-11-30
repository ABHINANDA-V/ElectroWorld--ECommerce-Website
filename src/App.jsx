import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>}/>
        <Route element={<Layout/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
