import React from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
import QuantityBtn from './QuantityBtn';
import { CartContext } from "./CartContext"
import { useContext } from "react"

export default function Checkout() {

let {cartItems} = useContext(CartContext)
/*
let cartItem = 
{
  "cartItems":
  [
    
    {
      "id" :5, 
      "name": "Blueberry", 
      "price" : 10, 
      "image" : "blueberry.jpg", 
      "description": "Great Frish and Sweet Blueberry 50g",
      "quantity":3
    },
    {
      "id" :6, 
    "name": "White cabbage", 
    "price" : 100, 
    "image" : "white_cabbage.jpg", 
    "description": "Fuck the Cabbage !!!",
    "quantity":5
    }
    
  ]
}
*/
let cartEmpty = cartItems.length <=0 ? true : false
let grandTotal = cartItems.reduce((total,product)=>{
              return total += product.price*product.quantity
            },0)
const freeShippingPrice = 99
  return (<div>
      <Title mainTitle={'Checkout'} />
      {
        cartEmpty && 
        <div>
          <p>Cart is empty</p>
          <Link to="/">Back to shop</Link>
        </div>
      }
      {
        !cartEmpty && 
        <div>
          <div id="cartSection">
            {/*product List*/}
            {
              cartItems.map(product=>(
                  <div key={product.id}>
                    <img src={process.env.PUBLIC_URL+'/img/'+ product.image}/>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>{product.price}<br/></p>
                    Qty : {product.quantity}
                    <QuantityBtn productInfo={product} />
                  </div>
              ))
            }

          </div>
          <div id="checkOutSection">
              {/*Total */}
              <div>Total : </div>
              <div>${grandTotal}</div>
              {
                /* Free shipping*/
                grandTotal >= freeShippingPrice ?
                <div>Free shipping : </div> :
                <div>Over${freeShippingPrice} Get Free shipping<br/>
                Still need ${freeShippingPrice - grandTotal} </div>
              }
          </div>
        </div>
      }
  </div>
  );
}
