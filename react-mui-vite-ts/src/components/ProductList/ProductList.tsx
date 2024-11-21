import React from "react";
import { Box, Card, CardMedia, CardContent, Typography, Rating, IconButton } from "@mui/material";
import { Favorite, Visibility } from "@mui/icons-material";  // Import các icon cần thiết

interface Product {
  id: number;
  name: string;
  category: string;
  rating: number;
  inStock: boolean;
  currentPrice: number;
  oldPrice?: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "space-between",
      }}
    >
      {products.map((product) => (
        <Box
          key={product.id}
          sx={{
            flex: "1 1 calc(20% - 16px)",
            width: "270px",
            position: "relative",
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Thêm hiệu ứng chuyển động cho thẻ
            "&:hover": {
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Thêm bóng đổ cho thẻ khi hover
              cursor: "pointer", // Đổi con trỏ thành tay khi hover
            }, maxHeight: "470px" 
          }}
        >
          <Card sx={{ display: "flex", flexDirection: "column",}}>
            {/* CardMedia - Tấm ảnh có lớp phủ khi hover */}
            <CardMedia
              sx={{
                height: 230,
                position: "relative",  // Để lớp phủ có thể hiển thị trên ảnh
                overflow: "hidden",  // Đảm bảo các icon và lớp phủ không ra ngoài ảnh
              }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title={product.name}
            >
              {/* Lớp phủ chỉ hiển thị trên tấm ảnh khi hover */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.4)",  // Lớp phủ tối
                  opacity: 0,
                  transition: "opacity 0.3s",  // Hiệu ứng mờ dần lớp phủ khi hover
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    opacity: 1,  // Hiển thị lớp phủ khi hover
                  },
                }}
              >
                {/* Căn giữa 2 icon */}
                <Box sx={{ display: "flex", gap: 0.2 }}>
                  <IconButton sx={{ color: "white", backgroundColor: "rgba(255, 255, 255, 0.3)", "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.5)" } }}>
                    <Favorite />
                  </IconButton>
                  <IconButton sx={{ color: "white", backgroundColor: "rgba(255, 255, 255, 0.3)", "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.5)" } }}>
                    <Visibility />
                  </IconButton>
                </Box>
              </Box>
            </CardMedia>

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Danh mục: {product.category}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Rating value={product.rating} precision={0.5} sx={{ fontSize: "1.2rem" }} readOnly />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  {product.rating}
                </Typography>
              </Box>
            </CardContent>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                <Typography variant="h6" color="primary">
                  ${product.currentPrice}
                </Typography>
                {product.oldPrice && (
                  <Typography variant="body2" sx={{ textDecoration: "line-through", color: "text.secondary" }}>
                    ${product.oldPrice}
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default ProductList;
