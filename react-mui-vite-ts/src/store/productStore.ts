import { create } from 'zustand'
import { fetchProducts } from '../services/productService';
import { Product } from '../types/product.types';

interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

const useProductStore = create<ProductState>((set) => ({
  products: [],
  isLoading: false,
  error: null,
  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const products = await fetchProducts();
      set({ products });
    } catch (error) {
      set({ error: 'Lỗi khi tải sản phẩm' });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useProductStore;
