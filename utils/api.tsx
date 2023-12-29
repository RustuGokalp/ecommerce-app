import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}
interface Brand {
  id: number;
  name: string;
  slug: string;
}
interface Category {
  id: number;
  name: string;
  slug: string;
}
//env'e bağlanacak
export const getAllProducts = async (): Promise<Product[]> => {
  return fetchData("http://localhost:3001/products");
};
export const getProductDetail = async (id: number): Promise<Product[]> => {
  return fetchData(`http://localhost:3001/products/${id}`);
};
export const getAllCategories = async (): Promise<Category[]> => {
  return fetchData("http://localhost:3001/categories");
};
export const getAllBrands = async (): Promise<Brand[]> => {
  return fetchData(`http://localhost:3001/brands`);
};

const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.log("Hata algılandı, apiyi kontrol et", err);
  }
};
