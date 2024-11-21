import React, { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import ProductList from "../../components/ProductList/ProductList";
import { useTheme } from "@mui/material/styles";

// Cập nhật dữ liệu cho các sản phẩm
function PopularProducts() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  // Dữ liệu sản phẩm cho các danh mục
  const productsTab1 = [
    { id: 1, name: "Product 1", category: "Category 1", rating: 4.5, inStock: true, currentPrice: 19.99, oldPrice: 29.99 },
    { id: 2, name: "Product 2", category: "Category 1", rating: 4.0, inStock: false, currentPrice: 15.99 },
    { id: 3, name: "Product 3", category: "Category 1", rating: 3.5, inStock: true, currentPrice: 25.99, oldPrice: 35.99 },
    { id: 4, name: "Product 4", category: "Category 1", rating: 5.0, inStock: true, currentPrice: 10.99 },
    { id: 5, name: "Product 5", category: "Category 1", rating: 4.8, inStock: true, currentPrice: 45.99, oldPrice: 55.99 },
    { id: 6, name: "Product 6", category: "Category 1", rating: 4.2, inStock: false, currentPrice: 30.99 },
    { id: 7, name: "Product 7", category: "Category 1", rating: 1.0, inStock: true, currentPrice: 50.99, oldPrice: 60.99 },
    { id: 8, name: "Product 8", category: "Category 1", rating: 4.7, inStock: true, currentPrice: 19.99 },
    { id: 9, name: "Product 9", category: "Category 1", rating: 4.2, inStock: true, currentPrice: 9.99 },
    { id: 9, name: "Product 10", category: "Category 1", rating: 4.2, inStock: true, currentPrice: 9.99 },
    
  ];

  const productsTab2 = [
    { id: 4, name: "Product 4", category: "Category 2", rating: 5.0, inStock: true, currentPrice: 10.99 },
    { id: 5, name: "Product 5", category: "Category 2", rating: 4.8, inStock: true, currentPrice: 45.99, oldPrice: 55.99 },
    { id: 6, name: "Product 6", category: "Category 2", rating: 4.2, inStock: false, currentPrice: 30.99 },
  ];

  const productsTab3 = [
    { id: 7, name: "Product 7", category: "Category 3", rating: 3.0, inStock: true, currentPrice: 50.99, oldPrice: 60.99 },
    { id: 8, name: "Product 8", category: "Category 3", rating: 4.7, inStock: true, currentPrice: 19.99 },
    { id: 9, name: "Product 9", category: "Category 3", rating: 4.2, inStock: true, currentPrice: 9.99 },
  ];

  const productsTab4 = [
    { id: 10, name: "Product 10", category: "Category 4", rating: 3.8, inStock: true, currentPrice: 13.99, oldPrice: 18.99 },
    { id: 11, name: "Product 11", category: "Category 4", rating: 4.1, inStock: false, currentPrice: 8.99 },
    { id: 12, name: "Product 12", category: "Category 4", rating: 4.3, inStock: true, currentPrice: 22.99 },
  ];

  const productsTab5 = [
    { id: 13, name: "Product 13", category: "Category 5", rating: 4.9, inStock: true, currentPrice: 75.99 },
    { id: 14, name: "Product 14", category: "Category 5", rating: 4.5, inStock: true, currentPrice: 35.99, oldPrice: 45.99 },
    { id: 15, name: "Product 15", category: "Category 5", rating: 4.8, inStock: false, currentPrice: 28.99 },
  ];

  const productsTab6 = [
    { id: 16, name: "Product 16", category: "Category 6", rating: 3.9, inStock: true, currentPrice: 18.99 },
    { id: 17, name: "Product 17", category: "Category 6", rating: 4.4, inStock: true, currentPrice: 49.99 },
    { id: 18, name: "Product 18", category: "Category 6", rating: 4.3, inStock: false, currentPrice: 12.99, oldPrice: 22.99 },
  ];

  const productsTab7 = [
    { id: 19, name: "Product 19", category: "Category 7", rating: 4.0, inStock: true, currentPrice: 39.99, oldPrice: 45.99 },
    { id: 20, name: "Product 20", category: "Category 7", rating: 4.1, inStock: true, currentPrice: 17.99 },
    { id: 21, name: "Product 21", category: "Category 7", rating: 4.6, inStock: false, currentPrice: 27.99 },
  ];

  // Danh sách các sản phẩm theo các tab
  const productsData = [
    productsTab1,
    productsTab2,
    productsTab3,
    productsTab4,
    productsTab5,
    productsTab6,
    productsTab7,
  ];

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", py: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: theme.palette.primary.main }}>
          Popular Products
        </Typography>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            sx={{ width: "auto" }}
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </Box>
      </Box>

      {/* Hiển thị sản phẩm theo tab đã chọn */}
      <ProductList products={productsData[value]} />
      
    </Box>
  );
}

export default PopularProducts;
