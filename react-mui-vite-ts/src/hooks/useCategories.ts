// src/hooks/useCategories.ts
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../services/category.service';
import { Category } from '../types/category.types';

export const useCategoryQuery = () => {
  return useQuery<Category[], Error>({
    queryKey: ['categories'], 
    queryFn: fetchCategories, 
    staleTime: 300000,  
  });
};
