import React, { useState } from "react";
import { Box, Typography, Slider, Rating } from "@mui/material"; 
import { useTheme } from "@mui/material/styles";

const PriceRatingFilter: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [rating, setRating] = useState<number>(0);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPriceRange(newValue as [number, number]); 
    }
  };

  const handleRatingChange = (event: React.ChangeEvent<unknown>, newValue: number | null) => {
    setRating(newValue || 0);
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "20px",
        width: "255px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Filter by Price */}
      <Typography
        sx={{
          marginBottom: "8px",
          fontWeight: "bold",
        }}
      >
        Filter by Price
      </Typography>
      <Box sx={{ marginBottom: "16px" }}>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `$${value}`}
          min={0}
          max={500}
          step={10}
          sx={{
            "& .MuiSlider-rail": {
              backgroundColor: "#ddd",
            },
            "& .MuiSlider-thumb": {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 1 }}>
          <Typography variant="body2">Min: ${priceRange[0]}</Typography>
          <Typography variant="body2">Max: ${priceRange[1]}</Typography>
        </Box>
      </Box>

      {/* Filter by Ratings */}
      <Typography
        sx={{
          marginBottom: "8px",
          fontWeight: "bold",
        }}
      >
        Filter by Ratings
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Rating
          name="rating-filter"
          value={rating}
          onChange={handleRatingChange}
          precision={0.5}
        />
        <Typography variant="body2" sx={{ marginLeft: "8px" }}>
          {rating} Stars
        </Typography>
      </Box>
    </Box>
    
  );
};

export default PriceRatingFilter;
