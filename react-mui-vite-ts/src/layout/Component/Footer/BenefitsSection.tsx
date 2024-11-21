import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { GLOBAL_PADDING } from '../../config';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex", // Sử dụng flex để căn chỉnh ảnh và nội dung
  alignItems: "center",
  gap: theme.spacing(2), // Khoảng cách giữa ảnh và nội dung
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.secondary,
}));

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Best prices & offers",
      description: "Orders $50 or more",
      image: "https://via.placeholder.com/40", // URL ảnh thay thế
    },
    {
      title: "Free delivery",
      description: "Orders $50 or more",
      image: "https://via.placeholder.com/40",
    },
    {
      title: "Great daily deal",
      description: "Orders $50 or more",
      image: "https://via.placeholder.com/40",
    },
    {
      title: "Wide assortment",
      description: "Orders $50 or more",
      image: "https://via.placeholder.com/40",
    },
    {
      title: "Easy returns",
      description: "Orders $50 or more",
      image: "https://via.placeholder.com/40",
    },
  ];

  return (
    <Box
      display="flex"
      flexWrap="wrap" // Để các mục tự xuống hàng
      justifyContent="space-between" // Khoảng cách đều giữa các mục
      my={3}
      mx={GLOBAL_PADDING}
    >
      {benefits.map((benefit, index) => (
        <Box
          key={index}
          width={{
            xs: "100%", // 1 cột trên màn hình nhỏ
            sm: "48%",  // 2 cột trên màn hình trung bình
            md: "19%",  // 4 cột trên màn hình lớn
          }}
          mb={2} // Thêm khoảng cách bên dưới mỗi mục
        >
          <Item>
            {/* Hình ảnh */}
            <Box
              component="img"
              src={benefit.image}
              alt={benefit.title}
              width={40}
              height={40}
            />
            {/* Nội dung */}
            <Box>
              <Typography fontWeight="bold">
                {benefit.title}
              </Typography>
              <Typography variant="body2">{benefit.description}</Typography>
            </Box>
          </Item>
        </Box>
      ))}
    </Box>
  );
};

export default BenefitsSection;
