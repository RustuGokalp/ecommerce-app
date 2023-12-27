import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number
}

export const getAllProducts = async (): Promise<Product[]> => {
  return fetchData("http://localhost:3001/products");
}
export const getAllCategories = async (): Promise<Product[]> => {
  return fetchData("http://localhost:3001/categories");
}
export const getProductDetail = async (id: number): Promise<Product[]> => {
  return fetchData(`http://localhost:3001/products/${id}`);
}
const fetchData = async (url:string)=> {
  try{
    const response = await axios.get(url)
    return response.data
  }
  catch(err){
    console.log('Hata algılandı, apiyi kontrol et', err);
  }
}
