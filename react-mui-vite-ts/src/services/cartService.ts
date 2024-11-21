import axios from 'axios';
import { CartProduct } from '../types/cart.types';

const API_URL = 'http://localhost:3000/api/carts';

export const addProductToCart = async (userId: string, productId: string, quantity: number) => {
  try {
    const response = await axios.post(API_URL, {
      user: userId,
      products: [{ product: productId, quantity }],
    });
    return response.data;
  } catch (error) {
    console.error('Error adding product to cart:', error);
    throw error;
  }
};

export const fetchCart = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};
