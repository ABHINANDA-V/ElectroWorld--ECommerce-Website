import React, { createContext, useState } from 'react'

export const CartContext = createContext();
export const CartProvider = ({ children }) =>
         {
            const [cart,setCart] = useState([]);

          //Add item to cart
          const addToCart = (product) =>
                {
                  const existing = cart.find(item => item.id === product.id);

                  if(existing)
                  {
                    setCart(
                        cart.map(item => item.id === product.id ? {...item,qty:item.qty + 1 } : item ) 
                    );
                  }
                    else 
                    {
                      setCart([...cart,{...product,qty:1}]);
                    }          
                };

          //Increase Quantity
          const increaseQty = (id) =>
          {
            setCart(
                cart.map(item => item.id === id ? {...item,qty:item.qty + 1} : item)
            )
          }
          //Decrease Quantity
          const decreaseQty = (id) =>
          {
            const item = cart.find(item => item.id === id);

                if(item.qty === 1)
                {
                  setCart(cart.filter(item => item.id !== id));
                }
                else
                {
             setCart(
                  cart.map(item => item.id === id ? {...item,qty:item.qty - 1} :item )
             )
          }
        }

        //Total items for navbar badge
        const cartCount = cart.reduce((total,item) => total + item.qty,0);

  return (
    <CartContext.Provider value={{ cart,addToCart,increaseQty,decreaseQty,cartCount }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext