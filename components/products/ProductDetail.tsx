'use client';

import React, { useEffect, useState } from 'react'
import {getProductDetail} from '../../utils/api'
import { usePathname } from 'next/navigation';
import Image from "next/image"
import ProductCard from '../Home/ProductCard';


interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number
  }

const ProductDetail = () => {
    const [product, setProduct] = useState<Product[]>([]);;
    const pathname = usePathname().split('/');
    const productId = Number(pathname.slice(-1).toString())
    useEffect(() => {
        const fetchProductDetail = async () => {
            const result = await getProductDetail(productId);
            console.log(result);
            setProduct(result);
        };
        fetchProductDetail();
      }, [productId]);
    
      const getLocalStorage = () =>{
        localStorage.getItem("lastViewed")
      }
    return (
    <div className='container mx-auto'>
        <div className="flex">
        <div className='w-2/4 p-4'>
        <Image src={product?.image} alt={product?.name} width={600} height={1200} />
        </div>
        <div className='w-2/4 p-4'>
            <p className='text-4xl mb-5'>
            {product?.name}
            </p>
            <span>
            {product?.description}
            </span>
        </div>
        </div>
        
        {getLocalStorage.length !== 0 ? (getLocalStorage.map((product: Product) => (
        <ProductCard key={product.id} product={product} />))) : ('')}



        {/* {getLocalStorage?.map(
            (      product: { id: React.Key; }) => (
        <ProductCard key={product.id} product={product}/>
      )
    )} */}
    </div>
  )
}

export default ProductDetail