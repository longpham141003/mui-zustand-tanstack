import { useEffect } from 'react';
import useProductStore from '../store/productStore';

const useProducts = () => {
  const { products, isLoading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    isLoading,
    error,
  };
};

export default useProducts;
