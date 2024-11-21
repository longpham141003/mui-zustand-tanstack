import { create } from 'zustand';

interface CategoryState {
  selectedCategory: string | null; 
  setSelectedCategory: (categoryId: string | null) => void; 
}

const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategory: null,
  setSelectedCategory: (categoryId) => set({ selectedCategory: categoryId }), 
}));

export default useCategoryStore;
