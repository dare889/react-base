import React, { useContext ,useState } from 'react';
import { CartContext } from './CartContext';

export default function QuantityBtn({productInfo}) {
    const {cartItems, setCartItems} = useContext(CartContext)

    //There is no product in the shopping cart
    let productIndexInCart = cartItems.findIndex((element)=>{
        return element.id === productInfo.id
    })

    //findIndex()
    //If the product is found in the shopping cart => return index position 0, 1, 2, 3.....
    //The product has not been added to the past cart => return -1


    let [numInCart,setNumInCart] = useState(
        (productIndexInCart===-1) ? 0 : cartItems[productIndexInCart].quantity
    )

    //let [numInCart, setNumInCart] = useState(0)
    //const handleAdd = () => {setNumInCart(numInCart+1)}
    //const handleSubtract = () => {setNumInCart(numInCart-1)}
    const handleAdd = ()=>{

        if(productIndexInCart===-1)
        {
            //The shopping cart itself does not have it, 
            //add a new element (object) to the cartItems array
            setCartItems(
                [{
                    id : productInfo.id,
                    name:productInfo.name,
                    image:productInfo.image,
                    price:productInfo.price,
                    description:productInfo.description,
                    quantity:1
                },
                ...cartItems]
            )
        }
        else
        {
            //The shopping cart has this product, just add a quantity
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity++
            setCartItems(newCartArray)
        }

        setNumInCart(numInCart+1)
    }

    const handleSubtract = ()=>{

        if(cartItems[productIndexInCart].quantity===1)
        {
            //If there is only one item left in the shopping cart，remove object
            let newCartArray = [...cartItems]
            newCartArray.splice(productIndexInCart,1)
            setCartItems(newCartArray)
        }
        else
        {
            //just reduce quantity
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity--
            setCartItems(newCartArray)
        }

        setNumInCart(numInCart-1)
    }


  return (
    <div>
        {   
            (numInCart === 0) ? 
            <div onClick={handleAdd}>Put {productInfo.name} in to Cart.</div> :
            <div>
                <span onClick={handleSubtract}>-</span>
                {numInCart}
                <span onClick={handleAdd}>+</span>
            </div>
        }
    </div>
  )
}
