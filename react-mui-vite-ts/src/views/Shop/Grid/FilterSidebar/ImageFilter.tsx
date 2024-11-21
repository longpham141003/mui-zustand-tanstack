import React from "react";
import { Box, ButtonBase } from "@mui/material";

const ImageFilter: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
      <ButtonBase
        sx={{
          width: "120px",
          height: "80px",
          overflow: "hidden",
          borderRadius: "8px",
          border: "1px solid #ddd",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => alert("First image clicked!")}
      >
        <img
          src="https://via.placeholder.com/120x80"
          alt="First"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ButtonBase>
      <ButtonBase
        sx={{
          width: "120px",
          height: "80px",
          overflow: "hidden",
          borderRadius: "8px",
          border: "1px solid #ddd",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => alert("Second image clicked!")}
      >
        <img
          src="https://via.placeholder.com/120x80"
          alt="Second"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ButtonBase>
    </Box>
  );
};

export default ImageFilter;
