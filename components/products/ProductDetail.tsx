"use client";

import React, { useEffect, useState } from "react";
import { getProductDetail } from "../../utils/api";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ProductCard from "../Home/ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const ProductDetail = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [showBadge, setShowBadge] = useState(false);

  const pathname = usePathname().split("/");
  const productId = Number(pathname.slice(-1).toString());
  useEffect(() => {
    const fetchProductDetail = async () => {
      const result = await getProductDetail(productId);
      setProduct(result);
    };
    fetchProductDetail();
  }, [productId]);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setShowBadge(false);
    }
  };

  const incrementQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      setShowBadge(false);
    } else {
      setShowBadge(true);
      setTimeout(() => {
        setShowBadge(false);
      }, 2000);
    }
  };

  const getLocalStorage = () => {
    localStorage.getItem("lastViewed");
  };
  return (
    <div className="container mx-auto py-10">
      <div className="flex">
        <div className="w-2/4 p-4">
          <Image
            src={product?.image}
            alt={product?.name}
            width={600}
            height={1200}
          />
        </div>
        <div className="border-l border-black h-1000"></div>
        <div className="w-2/4 p-4">
          <p className="mb-4 font-sans text-5xl">{product?.name}</p>
          <p className="mb-4 font-sans text-base text-gray-600">
            {product?.type}
          </p>
          <p className="text-xl mb-16">{product?.description}</p>
          <p className="font-bold text-xl mb-16">{product?.price}$</p>
          <p className="text-xl">Quantity</p>

          <div className="flex items-center mb-4">
            <button
              className="bg-gray-300 py-2 ps-2 rounded-tl-md rounded-bl-md"
              onClick={decrementQuantity}
            >
              -
            </button>
            <input
              type="number"
              className="px-4 py-2 text-center bg-gray-300"
              value={quantity}
              min={1}
              max={10}
              readOnly
            />

            <button
              className="bg-gray-300 py-2 pe-2 rounded-tr-md rounded-br-md"
              onClick={incrementQuantity}
            >
              +
            </button>
            {showBadge && (
              <span className="ml-2 bg-red-500 text-white p-2 rounded">
                Bu üründen en fazla 10 adet alabilirsiniz.
              </span>
            )}
          </div>
          <div className="border-b border-black w-100 "></div>

          <div className="flex mt-4">
            <div>
              <button className="px-6 py-2 mr-12 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                Add to cart
              </button>
            </div>
            <div>
              <button className="px-6 py-2 mr-12 d-flex transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                <span>Wishlist</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {getLocalStorage.length !== 0
        ? getLocalStorage.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : ""}

      {/* {getLocalStorage?.map(
            (      product: { id: React.Key; }) => (
        <ProductCard key={product.id} product={product}/>
      )
    )} */}
    </div>
  );
};

export default ProductDetail;
