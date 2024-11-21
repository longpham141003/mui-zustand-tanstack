
import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  // Data mẫu
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'VNEED Women Embroidered Rayon Kurta Pant Set | Kur...',
      price: 450,
      quantity: 2,
      image: 'https://via.placeholder.com/100', // Ảnh mẫu
    },
  ]);

  // Tăng số lượng
  const handleIncreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Giảm số lượng
  const handleDecreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Xóa sản phẩm
  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        Your Cart
      </Typography>
      <Typography variant="body1" color="text.secondary" >
        There are {cartItems.length} products in your cart
      </Typography>
      <Grid container spacing={3}>
        {/* Phần giỏ hàng */}
        <Grid item xs={12} md={8}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Unit Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Subtotal</TableCell>
                  <TableCell>Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: 60, height: 60, borderRadius: 4 }}
                        />
                        <Typography variant="body1">{item.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>Rs: {item.price}</TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <IconButton
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          -
                        </IconButton>
                        <Typography>{item.quantity}</Typography>
                        <IconButton
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </IconButton>
                      </Stack>
                    </TableCell>
                    <TableCell>Rs. {item.price * item.quantity}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleRemoveItem(item.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            color="success"
            sx={{ mt: 10 }}
            startIcon={<>&larr;</>}
          >
            Continue Shopping
          </Button>
        </Grid>

        {/* Phần thanh toán */}
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Subtotal
              </Typography>
              <Typography variant="h5" gutterBottom>
                ₹{subtotal.toFixed(2)}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" gutterBottom>
                Shipping: Free
              </Typography>
              <Typography variant="body2" gutterBottom>
                Estimate for: United Kingdom
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Total: ₹{subtotal.toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{ mt: 2 }}
              >
                Proceed To CheckOut
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
