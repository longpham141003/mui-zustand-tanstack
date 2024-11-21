import React from "react";
import { Box } from "@mui/material";
import FilterSidebar from "./FilterSidebar/FilterSidebar";
import ProductGrid from "./ProductGrid";

const MainContent: React.FC = () => {
  return (
    <Box >
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <FilterSidebar />
        <ProductGrid />
      </Box>
    </Box>
  );
};

export default MainContent;
