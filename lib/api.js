import axios from 'axios';


export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products; 
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; 
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching product details:', error);
    return null; 
  }
};
