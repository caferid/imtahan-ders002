import React, { useEffect, useState } from 'react'
import "./index.scss"
import axios from "axios"
const Prodcut = () => {
    const [product, setProduct] = useState([])
    async function axioData(){
        const response= await axios.get("http://localhost:3000/pro")
        setProduct(response.data.data)
    }
    useEffect(() => {
    axioData()
    }, [])
    console.log(product)
  return (
    <div className='container'>
        
    {product && product.map((item)=>(
        <div key={item._id}>
            <div className='ad'>
                ad:
                {item.name}
            </div>
            <div className='info'>
                info:
                {item.info}
            </div>

            <div className='price'>
                price:
                {item.price}
            </div>
            <br />
        </div>
    ))}
    </div>
  )
}

export default Prodcut
