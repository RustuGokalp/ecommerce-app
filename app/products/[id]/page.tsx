import { lazy } from "react";
import Header from "../../../components/shared/Header";
import Footer from "../../../components/shared/Footer";

const ProductDetails = lazy(
  () => import("../../../components/products/ProductDetail")
);

const page = () => {
  return (
    <div>
      <Header />
      <ProductDetails />
      <Footer />
    </div>
  );
};

export default page;
