import axios from 'axios';
import { Product } from '../types/product.types';

interface ProductResponse {
  products: Product[];
}

// Hàm gọi API để lấy danh sách sản phẩm
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<ProductResponse>('http://localhost:3000/api/products'); 
    console.log('API Response:', response);
    if (response.data && response.data.products && Array.isArray(response.data.products) && response.data.products.length > 0) {
      return response.data.products; 
    } else {
      throw new Error('Sản phẩm không có hoặc dữ liệu sai định dạng');
    }
  } catch (error) {
    console.error('Lỗi khi lấy sản phẩm:', error);
    return [];
  }
};
