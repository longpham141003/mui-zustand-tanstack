import { CSSObject } from '@mui/system';
import { Theme } from '@mui/material/styles';

const MuiProductCardOverrides = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: `0 4px 8px ${theme.palette.primary.main}`, // Sử dụng theme.palette.primary.main với độ trong suốt (80)
        borderColor: theme.palette.primary.main, // Sử dụng theme.palette.primary.main cho border
      },
    } as CSSObject),
  },
};

export default MuiProductCardOverrides;
