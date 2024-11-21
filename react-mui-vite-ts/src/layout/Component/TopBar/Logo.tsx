import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Typography } from "@mui/material";

function Logo() {
  return (
    <>
      <ShoppingBagIcon  sx={{ color: "primary.main", fontSize: "2rem" }} />
      <Typography
        component="span"
        sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "primary.main" }}
      >
        SHOPLONG
      </Typography>
    </>
  );
}

export default Logo;
