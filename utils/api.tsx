import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const getAllProducts = async (): Promise<Product[]> => {
  return fetchData("http://localhost:3001/products");
}
export const getAllCategories = async (): Promise<Product[]> => {
  return fetchData("http://localhost:3001/categories");
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
