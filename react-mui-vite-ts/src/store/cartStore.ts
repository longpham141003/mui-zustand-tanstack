import create from 'zustand';
import { addProductToCart, fetchCart } from '../services/cartService';
import { CartProduct } from '../types/cart.types';

interface CartState {
  products: CartProduct[];
  totalAmount: number;
  isLoading: boolean;
  error: string | null;
  fetchCart: (userId: string) => void;
  addProduct: (userId: string, productId: string, quantity: number) => void;
}

const useCartStore = create<CartState>((set) => ({
  products: [],
  totalAmount: 0,
  isLoading: false,
  error: null,
  fetchCart: async (userId) => {
    set({ isLoading: true, error: null });
    try {
      const cartData = await fetchCart(userId);
      set({ products: cartData.products, totalAmount: cartData.totalAmount });
    } catch (error) {
      set({ error: 'Lỗi khi lấy giỏ hàng' });
    } finally {
      set({ isLoading: false });
    }
  },
  addProduct: async (userId, productId, quantity) => {
    set({ isLoading: true, error: null });
    try {
      const cartData = await addProductToCart(userId, productId, quantity);
      set({ products: cartData.cart.products, totalAmount: cartData.cart.totalAmount });
    } catch (error) {
      set({ error: 'Lỗi khi thêm sản phẩm vào giỏ hàng' });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useCartStore;
