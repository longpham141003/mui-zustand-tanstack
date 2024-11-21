import  { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  Chip,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';

const Detail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  const handleIncreaseQuantity = () => setQuantity(quantity + 1);
  const handleDecreaseQuantity = () =>
    quantity > 1 && setQuantity(quantity - 1);

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        {/* Hình ảnh sản phẩm */}
        <Grid item xs={12} md={6} >
          <img
            src="https://via.placeholder.com/300"
            alt="Product"
            style={{ width: '503px',height: '503px', borderRadius: 8 }}
          />
          {/* Danh sách hình ảnh nhỏ */}
          <Stack direction="row" spacing={2} mt={2}>
            <img
              src="https://via.placeholder.com/100"
              alt="Thumbnail 1"
              style={{
                width: 60,
                height: 60,
                borderRadius: 4,
                border: '2px solid green',
              }}
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Thumbnail 2"
              style={{ width: 60, height: 60, borderRadius: 4 }}
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Thumbnail 3"
              style={{ width: 60, height: 60, borderRadius: 4 }}
            />
          </Stack>
        </Grid>

        {/* Chi tiết sản phẩm */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold">
            Glowworld Women Blue Printed Cotton Kurta
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1} mt={1}>
            <Typography variant="body2">4.5</Typography>
            <StarIcon sx={{ color: 'gold', fontSize: 20 }} />
            <Typography variant="body2" color="text.secondary">
              (9 reviews)
            </Typography>
          </Stack>

          <Typography variant="h5" color="green" fontWeight="bold" mt={2}>
            Rs 460
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textDecoration: 'line-through' }}
            >
              Rs 480
            </Typography>
            <Typography variant="body1" color="orange" fontWeight="bold">
              10% Off
            </Typography>
          </Stack>

          <Typography variant="body2" color="text.secondary" mt={2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>

          {/* Chọn Size */}
          <Typography variant="body1" fontWeight="bold" mt={2}>
            Size:
          </Typography>
          <Stack direction="row" spacing={1} mt={1}>
            {['S', 'M', 'L'].map((size) => (
              <Chip
                key={size}
                label={size}
                clickable
                onClick={() => setSelectedSize(size)}
                sx={{
                  backgroundColor: selectedSize === size ? 'green' : 'white',
                  color: selectedSize === size ? 'white' : 'black',
                  border: '1px solid green',
                }}
              />
            ))}
          </Stack>

          {/* Số lượng */}
          <Stack direction="row" alignItems="center" spacing={2} mt={2}>
            <IconButton onClick={handleDecreaseQuantity}>-</IconButton>
            <Typography>{quantity}</Typography>
            <IconButton onClick={handleIncreaseQuantity}>+</IconButton>
          </Stack>

          {/* Nút Thêm vào giỏ */}
          <Stack direction="row" spacing={2} mt={3}>
            <Button
              variant="contained"
              color="success"
              startIcon={<AddShoppingCartIcon />}
            >
              Add To Cart
            </Button>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Detail;
