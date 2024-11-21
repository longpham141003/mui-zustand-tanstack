import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Avatar,
  Rating,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Product {
  id: number;
  image: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    image: "https://via.placeholder.com/80",
    name: "GESPO Black & Teal Blue Colorblocked Round Neck Half Sleeves",
    rating: 2,
    reviews: 2,
    price: 399,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/80",
    name: "VNEED Cotton Blend Straight Kurta with Pant | Women",
    rating: 5,
    reviews: 5,
    price: 50000,
  },
];

const WishList: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", padding: "20px" }}>
      {/* Phần tiêu đề căn trái */}
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h5" gutterBottom>
          My List
        </Typography>
        <Typography variant="subtitle1">
          There are <span style={{ color: "#28a745", fontWeight: "bold" }}>{products.length}</span> products in your Wishlist
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            {/* Hàng tiêu đề với màu nền */}
            <TableRow sx={{ backgroundColor: "#f1f1f1" }}>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{
                  borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar src={product.image} alt={product.name} sx={{ width: 60, height: 60, marginRight: "15px" }} />
                    <Box>
                      {/* Tên sản phẩm nhỏ hơn */}
                      <Typography variant="body2" sx={{ fontWeight: "bold", maxWidth: "300px" }}>
                        {product.name}
                      </Typography>
                      {/* Đánh giá sản phẩm */}
                      <Box display="flex" alignItems="center">
                        <Rating value={product.rating} readOnly size="small" />
                        <Typography variant="caption" sx={{ marginLeft: "8px" }}>
                          ({product.reviews})
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </TableCell>
                {/* Giá tiền nhỏ hơn */}
                <TableCell>
                  <Typography variant="body2">Rs: {product.price}</Typography>
                </TableCell>
                <TableCell>
                  <IconButton aria-label="delete">
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default WishList;
