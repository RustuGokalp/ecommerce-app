"use client"
import Image from "next/image"

const ProductCard = ({product}) => {
  
  return (
    <div>
      <div >
        <Image src={product.image} alt="Product" width={50} height={50}/>
      </div>
      <div>
        {product.name}
      </div>
    </div>
  )
}

export default ProductCard