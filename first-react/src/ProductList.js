import React from 'react';
import styles from './ProductList.module.css'
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import QuantityBtn from './QuantityBtn';

export default function ProductList() {

  
  /*
  let productList = [
    {"id" :1, "name": "Apple", "price" : 5, "image" : "apple.jpg", "description": "Great Frish Apple 50g"},
    {"id" :2, "name": "Orange", "price" : 3, "image" : "orange.jpg", "description": "Great Frish Orange 50g"},
    {"id" :3, "name": "Mango", "price" : 4, "image" : "mango.jpg", "description": "Great Sweet Mango 500g"},
    {"id" :4, "name": "Watermelon ", "price" : 20, "image" : "watermelon.jpg", "description": "Great Big Watermelon 100g"},
    {"id" :5, "name": "Blueberry", "price" : 10, "image" : "blueberry.jpg", "description": "Great Frish and Sweet Blueberry 50g"},
    {"id" :6, "name": "White cabbage", "price" : 100, "image" : "white_cabbage.jpg", "description": "Fuck the Cabbage !!!"}

  ];
  */
  let [productList, setProductList] = useState([])
  //let [input, setInput] = useState('')

  useEffect(()=>{
      //component every render
      //1. No 2nd value : run component every render 
      //2. Dependency Array is empty array : Only run when first time web render  
      //3. When Dependency Array not empty : first time run web render + value changed 
      fetch(process.env.PUBLIC_URL+'product_list.json')
        .then(response => response.json())
        .then(data => setProductList(data))      
  },[])  // <== Dependency Array
  
  /*
  useEffect(()=>{
    console.log(input)
  },[input])
  */
  //let product = "Fruit"
  //const [product,setProduct] = useState('Fruit')
  

  /*const handleClick = ()=>{
      setProduct('react')
      console.log(product)
  }
  */
  //const[showProduct, setShowProduct] = useState(true)
  return <div>
      {/*
      {showProduct && <button onClick={()=>{setShowProduct(false)}}>Hide Product</button>}
      {!showProduct && <button onClick={()=>{setShowProduct(true)}}>Show Product</button>}
      
      
      <input type="text" onChange={e=>setInput(e.target.value)}/>
      */  
      }
      <Title mainTitle="Please choose the product! " subTitle = "50% off"/>
      <div>Product List : </div>
      <div class="productList">
      <>
          { 
              
              //showProduct && productList.map(product=>(
              
                productList.map(product=>(
                  <React.Fragment key={product.id}>
                    <div className={styles.productBorder} key={product.id}>
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                      <Link to={'/product/'+product.id}>
                      <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt={product.name}></img>
                      </Link>
                      <p>{product.description}</p>
                      <QuantityBtn productInfo={product} />
                    </div>
                    </React.Fragment>
              ))
             
          }
      </>
      </div>
      
  </div>;
  
}
