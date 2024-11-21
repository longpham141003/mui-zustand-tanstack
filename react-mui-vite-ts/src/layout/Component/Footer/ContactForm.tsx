import React, { useState } from 'react';
import { Box, Typography, TextField, Button, useTheme } from '@mui/material';
import { GLOBAL_PADDING } from '../../config';

const EmailContactSection: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const theme = useTheme();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Email submitted: ${email}`);
  };

  return (
    <Box sx={{mx: GLOBAL_PADDING, py: GLOBAL_PADDING, backgroundColor: theme.palette.primary.light, padding: 4 , borderRadius: "10px"}}>
      {/* Sử dụng Box thay cho Grid */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, mx: 3 }}>
        {/* Phần bên trái */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Stay home & get your daily needs from our shop
          </Typography>
          <Typography variant="body1" paragraph>
            Leave your email address to get the latest information from us.
          </Typography>

          <form onSubmit={handleSubmit}>
            {/* Căn chỉnh email và button trong 1 dòng */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TextField
                label="Your email address"
                type="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  backgroundColor: 'white', // Nền trắng cho TextField
                  flex: 1, // Chiếm hết không gian còn lại
                  borderRadius: '8px 0 0 8px', // borderRadius cho TextField
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: '0 8px 8px 0', // borderRadius cho Button
                  padding: '10px 20px', // Điều chỉnh padding để nút không quá rộng
                  backgroundColor: theme.palette.primary.dark
                }}
              >
                Gửi
              </Button>
            </Box>
          </form>
        </Box>

        {/* Phần bên phải (Ảnh) */}
        <Box sx={{ flex: 1, height: '400px', backgroundImage: 'url(/assets/image/imagecontact.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </Box>
    </Box>
  );
};

export default EmailContactSection;
