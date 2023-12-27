import { lazy } from "react";

const ProductDetails = lazy(
  () => import("../../../components/products/ProductDetail")
);

const page = () => {
  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default page;
