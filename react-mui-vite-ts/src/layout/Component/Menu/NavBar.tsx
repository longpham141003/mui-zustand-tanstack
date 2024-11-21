import { Link as RouterLink } from 'react-router-dom';  // Import Link từ react-router-dom
import { Stack, Link } from '@mui/material';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sale', label: 'Sale' },
  { href: '/best-sellers', label: 'Best Sellers' },
  { href: '/categories', label: 'Categories' },
  { href: '/gift-ideas', label: 'Gift Ideas' },
  { href: '/blog', label: 'Blog' },
  { href: '/shop', label: 'Shop' }
];

function NavBar() {
  return (
    <Stack direction="row" spacing={3} sx={{ padding: 17 }}>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          component={RouterLink}  
          to={href} 
          color="inherit"
          underline="none"
          sx={{
            fontSize: '0.9rem',
            fontWeight: 'bold',
            paddingLeft: '30px',
          }}
        >
          {label}
        </Link>
      ))}
    </Stack>
  );
}

export default NavBar;
