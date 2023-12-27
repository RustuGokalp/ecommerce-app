import Products from "../components/Home/Products";
import Category from "../components/Home/Category";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <Category />
      <Products />
    </div>
  );
}
