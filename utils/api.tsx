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

export const BASE_URL = "http://localhost:3001";

//env'e bağlanacak
export const getAllProducts = async (): Promise<Product[]> => {
  return fetchData(`${BASE_URL}/products`);
};
export const getProductDetail = async (id: number): Promise<Product[]> => {
  return fetchData(`${BASE_URL}/products/${id}`);
};
export const getAllCategories = async (): Promise<Category[]> => {
  return fetchData(`${BASE_URL}/categories`);
};
export const getAllBrands = async (): Promise<Brand[]> => {
  return fetchData(`${BASE_URL}/brands`);
};

const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.log("Hata algılandı, apiyi kontrol et", err);
  }
};
