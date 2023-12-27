"use client";

import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const clickFonk = ({ product }) => {
    localStorage.setItem("LastViewedProduct", JSON.stringify(product));
  };

  return (
    <div onClick={clickFonk}>
      <Link href={`products/${product.id}`} className="no-underline">
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
                <span className="text-sm">KARGO BEDAVA</span>
              </div>
            )}
          </div>
          <div className="card-body">
            <h2 className="card-title line-clamp-1">{product?.name} </h2>
            <p className="line-clamp-4">{product?.description}</p>
            <div className="card-actions flex justify-center justify-around items-end">
              <p>{product?.price}$</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
