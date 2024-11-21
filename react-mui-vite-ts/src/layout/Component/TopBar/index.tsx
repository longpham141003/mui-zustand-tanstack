import Box from "@mui/material/Box";
import Logo from "./Logo";
import Search from "./Search";
import Item from "./Item";
import ModeSelect from "../../../components/ModeSelect/ModeSelect";
import Login from "./Login";

function TopBar() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <Logo />
        <Search />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5}}>
        <Item />
        <ModeSelect />
        <Login />
      </Box>
    </>
  );
}

export default TopBar;
