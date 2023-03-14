import { useState ,useEffect} from "react";
import {useParams , Link} from "react-router-dom"
import QuantityBtn from "./QuantityBtn";
import Title from './Title';

export default function ProductDetail() {
    let params = useParams()
    let [productDetail,setProductDetail] = useState(null)

    
  useEffect(()=>{
    //component every render
    //1. No 2nd value : run component every render 
    //2. Dependency Array is empty array : Only run when first time web render  
    //3. When Dependency Array not empty : first time run web render + value changed 
    fetch(process.env.PUBLIC_URL+'/product_list.json')
      .then(response => response.json())
      .then(data => {
        let productInfo = data.find((element)=>{
            return element.id === parseInt(params.id)
        })
        setProductDetail(productInfo)
        })
    },[])  // <== Dependency Array


    return <div>
        {
            productDetail &&
            <div>
                <Title mainTitle={'Product Detail : '+productDetail.name} />
                <img src={process.env.PUBLIC_URL+'/img/'+productDetail.image} alt={productDetail.name} width="400" />
                <p>Name : {productDetail.name}</p>
                <p>Price : {productDetail.price}元</p>
                <p>Description : {productDetail.description}</p>
                <QuantityBtn productInfo={productDetail} />
            </div>
        }  
        <Link to="/">Back</Link>
    </div>;
}
