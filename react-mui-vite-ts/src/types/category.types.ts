// src/types/category.types.ts
export interface Category {
  _id: string;  // Trường _id sẽ là kiểu string
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
// src/types/category.types.ts
export interface Category {
  _id: string;       // Id của category
  categoryId: string; // Mã danh mục
  name: string;      // Tên danh mục
  image: string;     // Đường dẫn hình ảnh
  createdAt: string; // Thời gian tạo
  updatedAt: string; // Thời gian cập nhật
}
