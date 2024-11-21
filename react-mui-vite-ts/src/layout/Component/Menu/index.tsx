import Box from "@mui/material/Box";
import CategoryButton from "./CategoryButton/CategoryButton";
import NavBar from "./NavBar";
import Support from "./Support";

function Menu() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <CategoryButton/>
        <NavBar/>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5}}>
        <Support/>
      </Box>
    </>
  );
}

export default Menu;
