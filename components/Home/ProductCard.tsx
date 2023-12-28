"use client";

import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const clickFonk = ({ product }) => {
    localStorage.setItem("LastViewedProduct", JSON.stringify(product));
  };

  return (
    <div>
      <Link
        href={`products/${product.id}`}
        className="no-underline"
        onClick={clickFonk}
      >
        <div className="card w-96 bg-base-100 shadow-xl relative">
          <div className="flex justify-center pt-3">
            <Image
              src={product?.image}
              alt={product?.name}
              width={150}
              height={150}
              className="h-48"
            />
            {product?.free_shipping && (
              <div className="absolute top-0 right-0 bg-neutral-400 p-2 rounded-bl flex items-center">
                <Image
                  src="/free-delivery.svg"
                  alt="Free Delivery"
                  width={25}
                  height={25}
                  className="me-2"
                />
                <span className="text-sm">FREE SHIPPING</span>
              </div>
            )}
          </div>
          <div className="card-body">
            <h2 className="card-title line-clamp-1">{product?.name} </h2>
            <h2 className="text-sm text-gray-500">{product?.type}</h2>
            <span className="line-clamp-4 mb-2">{product?.description}</span>
            <div className="card-actions flex justify-center justify-around items-end">
              <p>{product?.price}$</p>
              <button className="btn btn-primary">Add To Card</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
