import Products from "../components/Home/Products";
import Category from "../components/Home/Category";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Category />
      <Products />
      <Footer />
    </div>
  );
}
