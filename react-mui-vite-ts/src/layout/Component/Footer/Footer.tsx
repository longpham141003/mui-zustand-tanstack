import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer: React.FC = () => {
  const footerData = [
    {
      title: "logo", // Chúng ta sẽ thay "title" bằng một logo hình ảnh
      content: [
        "Address: 5171 W Campbell Ave, Kent, Utah 53127, United States",
        "Call Us: (+91) - 540-025-124553",
        "Email: sale@Nest.com",
        "Hours: 10:00 - 18:00, Mon - Sat",
      ],
    },
    {
      title: "Company",
      content: [
        "About Us",
        "Delivery Information",
        "Privacy Policy",
        "Terms & Conditions",
        "Contact Us",
        "Support Center",
        "Careers",
      ],
    },
    {
      title: "Company",
      content: [
        "Account",
        "Delivery Information",
        "Privacy Policy",
        "Terms & Conditions",
        "Contact Us",
        "Support Center",
        "Careers",
      ],
    },
    {
      title: "Corporate",
      content: [
        "About Us",
        "Delivery Information",
        "Privacy Policy",
        "Terms & Conditions",
        "Contact Us",
        "Support Center",
        "Careers",
      ],
    },
    {
      title: "Popular",
      content: [
        "About Us",
        "Delivery Information",
        "Privacy Policy",
        "Terms & Conditions",
        "Contact Us",
        "Support Center",
        "Careers",
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        padding: 4,
        borderTop: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between", // Căn đều các mục
        flexWrap: "nowrap", // Không cho các mục xuống hàng
        gap: 10, // Khoảng cách giữa các cột
      }}
    >
      {footerData.map((column, index) => (
        <Box
          key={index}
          sx={{
            flexBasis: "19%", // Chiếm 1/5 chiều rộng của dòng
            display: "flex",
            flexDirection: "column", // Đảm bảo nội dung trong mỗi cột hiển thị dọc
          }}
        >
          {column.title === "logo" ? (
            <Box sx={{ mb: 2 }}>
              <img
                src="./assets/image/tải xuống.jpg" // Đường dẫn tới logo của bạn
                alt="Logo"
                style={{ width: "100%", maxWidth: "150px", height: "auto" }}
              />
            </Box>
          ) : (
            <Typography variant="h6" fontWeight="bold" mb={2}>
              {column.title}
            </Typography>
          )}
          <Box>
            {column.content.map((item, idx) => (
              <Typography
                key={idx}
                variant="body2"
                color="text.secondary"
                sx={{
                  lineHeight: 1.8, // Tăng khoảng cách giữa các dòng
                  mb: 1, // Khoảng cách dưới mỗi dòng
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Footer;
