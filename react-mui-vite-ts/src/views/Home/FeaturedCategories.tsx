import { Avatar, Typography, Box, ButtonBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function FeaturedCategories() {
  const theme = useTheme();
  const categories = [
    { imgSrc: "./assets/image/fashion.jpg", text: "Fashion" },
    { imgSrc: "./assets/image/electronics.jpg", text: "Electronics" },
    { imgSrc: "./assets/image/bag.jpg", text: "Bags" },
    { imgSrc: "./assets/image/foot.jpg", text: "Footwear" },
    { imgSrc: "./assets/image/gro.jpg", text: "Groceries" },
    { imgSrc: "./assets/image/beauty.jpg", text: "Beauty" },
    { imgSrc: "./assets/image/well.jpg", text: "Wellness" },
    { imgSrc: "./assets/image/jw.jpg", text: "Jewellery" },
  ];

  return (
    <Box>
      <Typography
        variant="h6"
        component="h2"
        sx={{ fontWeight: "bold", py: 3, color: theme.palette.primary.main }}
      >
        Featured Categories
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={10} px={8}>
        {categories.map((item, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <ButtonBase
              sx={{
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s ease",
                },
                borderRadius: "50%",
              }}
            >
              <Avatar
                alt={item.text}
                src={item.imgSrc}
                sx={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  boxShadow: 3,
                }}
              />
            </ButtonBase>
            <Typography
              variant="body1"
              mt={1}
              sx={{ fontWeight: 600, fontSize: "0.875rem" }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FeaturedCategories;
