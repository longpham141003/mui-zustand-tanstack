import React, { useState} from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ProductList from "../../components/ProductList/ProductList";
import { useCategoryQuery } from "../../hooks/useCategories";
import useCategoryStore from "../../store/category.store"; // Import store

function PopularProducts() {
  const theme = useTheme();
  const { data: categories, isLoading: isCategoriesLoading, error: categoriesError } = useCategoryQuery();
  const { selectedCategory, setSelectedCategory } = useCategoryStore(); // Sử dụng Zustand store
  const [value, setValue] = useState(0); // Tab đang chọn

  // Lọc các sản phẩm theo danh mục
  const filteredProducts = products.filter((product) => 
    !selectedCategory || product.category === selectedCategory
  );

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const categoryId = categories?.[newValue]?.id || null;
    setSelectedCategory(categoryId); // Lưu lại danh mục được chọn vào store
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
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            sx={{ width: "auto" }}
          >
            {isCategoriesLoading && <Tab label="Loading..." />}
            {categoriesError && <Tab label="Error loading categories" />}
            {categories && categories.map((category) => (
              <Tab key={category.id} label={category.name} />
            ))}
          </Tabs>
        </Box>
      </Box>

      {/* Hiển thị sản phẩm theo danh mục đã chọn */}
      {isCategoriesLoading ? (
        <Typography>Loading categories...</Typography>
      ) : categoriesError ? (
        <Typography color="error">Error loading categories</Typography>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </Box>
  );
}

export default PopularProducts;
