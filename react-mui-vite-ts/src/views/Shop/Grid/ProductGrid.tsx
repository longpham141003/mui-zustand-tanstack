import React from "react";
import { Box } from "@mui/material";
import ProductList from "../../../components/ProductList/ProductList";

interface Product {
  id: number;
  name: string;
  category: string;
  rating: number;
  inStock: boolean;
  currentPrice: number;
  oldPrice?: number;
}

const products: Product[] = [
  { id: 1, name: "Product 1", category: "Fashion", rating: 4.5, inStock: true, currentPrice: 100, oldPrice: 120 },
  { id: 2, name: "Product 2", category: "Fashion", rating: 3.8, inStock: false, currentPrice: 200 },
  { id: 3, name: "Product 3", category: "Electronics", rating: 4.0, inStock: true, currentPrice: 300, oldPrice: 350 },
  { id: 4, name: "Product 4", category: "Electronics", rating: 3.5, inStock: true, currentPrice: 150 },
  { id: 5, name: "Product 5", category: "Books", rating: 4.7, inStock: true, currentPrice: 25 },
  { id: 6, name: "Product 6", category: "Fashion", rating: 4.2, inStock: true, currentPrice: 50, oldPrice: 60 },
  { id: 7, name: "Product 7", category: "Home", rating: 4.8, inStock: true, currentPrice: 120 },
  { id: 8, name: "Product 8", category: "Books", rating: 4.3, inStock: false, currentPrice: 15 },
  { id: 9, name: "Product 9", category: "Sports", rating: 4.1, inStock: true, currentPrice: 80 },
  { id: 10, name: "Product 10", category: "Home", rating: 3.9, inStock: true, currentPrice: 90, oldPrice: 110 },
];

const ProductGrid: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {products.map((product) => (
          <Box key={product.id} sx={{ flex: "1 1 calc(25% - 16px)", maxWidth: "calc(25% - 16px)" }}>
            <ProductList products={[product]} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductGrid;
