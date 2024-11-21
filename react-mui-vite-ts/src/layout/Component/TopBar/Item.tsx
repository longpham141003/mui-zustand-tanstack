import { Badge, Box, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const IconWithBadge = ({ Icon, label, badgeCount, sx }: { Icon: React.ElementType, label: string, badgeCount: number, sx?: object }) => (
  <Box sx={{ display: 'flex', cursor: 'pointer', ...sx }}>
    <Badge badgeContent={badgeCount} color="primary">
      <Icon sx={{ color: "primary.main" }} color="action" />
    </Badge>
    <Typography sx={{ fontSize: '0.8rem', marginLeft: 0.3, pt: 0.6 }}>
      {label}
    </Typography>
  </Box>
);

function Item() {
  return (
    <Box sx={{ display: 'flex', mr: 3 }}>
      <IconWithBadge
        Icon={HelpOutlineIcon}
        label="Support"
        badgeCount={0}
      />
      <IconWithBadge
        Icon={FavoriteBorderIcon}
        label="Wishlist"
        badgeCount={4}
        sx={{ marginLeft: 2 }}
      />
      <IconWithBadge
        Icon={ShoppingCartIcon}
        label="Cart"
        badgeCount={4}
        sx={{ marginLeft: 2 }}
      />
    </Box>
  );
}

export default Item;
