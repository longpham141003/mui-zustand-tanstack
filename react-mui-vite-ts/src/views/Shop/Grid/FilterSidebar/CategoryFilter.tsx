import React from "react";
import { Box, Typography, IconButton } from "@mui/material"; 
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DevicesIcon from "@mui/icons-material/Devices";
import HandbagIcon from "@mui/icons-material/Work"; 
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const CategoryFilter: React.FC = () => {
  const categories = [
    { name: "Fashion", icon: <ShoppingBagIcon /> },
    { name: "Electronics", icon: <DevicesIcon /> },
    { name: "Bags", icon: <HandbagIcon /> },
    { name: "Footwear", icon: <SportsSoccerIcon /> },
  ];

  return (
    <Box
      sx={{
        height: "370px",
        width: "255px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "16px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        overflowY: "auto", 
      }}
    >
      <Typography
        sx={{
          marginBottom: "12px",
          fontWeight: "bold",
          borderBottom: "2px solid #35ac75", 
          paddingBottom: "8px",
        }}
      >
        Category
      </Typography>

      <Box>
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px",
              marginBottom: "12px",
              cursor: "pointer",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <IconButton size="small" sx={{ color: "#1976d2" }}>
              {category.icon}
            </IconButton>
            <Typography variant="body2" sx={{ marginLeft: "8px" }}>
              {category.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryFilter;
