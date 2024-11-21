import React from "react";
import { Box } from "@mui/material";
import CategoryFilter from "./CategoryFilter";
import PriceRatingFilter from "./PriceRatingFilter";

const FilterSidebar: React.FC = () => {
  return (
    <Box sx={{ width: "25%" }}>
      {/* Category Filter */}
      <CategoryFilter />

      {/* Price and Rating Filter */}
      <PriceRatingFilter />
    </Box>
  );
};

export default FilterSidebar;
