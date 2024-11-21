import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Box, Breadcrumbs, useTheme  } from '@mui/material';

interface BreadcrumbProps {
  separator?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ separator = '›' }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const theme = useTheme();
  return (
    <Box sx={{ px: 4,paddingTop:'20px',  borderRadius: '8px' }}>
      <Breadcrumbs separator={separator} aria-label="breadcrumb">
        <Link to="/" style={{ textDecoration: 'none', color: theme.palette.primary.main, }}>
          Home
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const label = value.charAt(0).toUpperCase() + value.slice(1); 
          return (
            <Link key={to} to={to} style={{ textDecoration: 'none', color: theme.palette.primary.main, }}>
              {label}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
