"use client"
import {getAllProducts} from '../../../utils/api'
import { useState , useEffect} from "react";
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number
}

const Products = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async ()=> {
      const data = await getAllProducts()
      setAllProducts(data)
    }
    fetchData()
    }, [])
  
  return <div>
    <div className='flex flex-wrap item-center gap-5 px-10'>
    {allProducts?.map(
      product => (
        <ProductCard key={product.id} product={product}/>
      )
    )}
    </div>
  </div>;
};

export default Products;
