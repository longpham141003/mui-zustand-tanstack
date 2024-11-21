import axios from 'axios';
import { Category } from '../types/category.types';

interface CategoryResponse {
  categories: Category[]; 
}

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<CategoryResponse>('http://localhost:3000/api/categories'); 
    console.log('API Response:', response);
    if (response.data && response.data.categories && Array.isArray(response.data.categories) && response.data.categories.length > 0) {
      return response.data.categories; 
    } else {
      throw new Error('Categories data is empty or invalid format');
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  } finally {
    console.log('');
  }
};
