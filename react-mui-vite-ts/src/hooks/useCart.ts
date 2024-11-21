import { useEffect } from 'react';
import useCartStore from '../store/cartStore';

const useCart = (userId: string) => {
  const { products, totalAmount, isLoading, error, fetchCart, addProduct } = useCartStore();

  useEffect(() => {
    if (userId) {
      fetchCart(userId);
    }
  }, [userId, fetchCart]);

  return {
    products,
    totalAmount,
    isLoading,
    error,
    addProduct,
  };
};

export default useCart;
