// theme/OutlinedInput.ts
import { Theme } from '@mui/material/styles';

const MuiOutlinedInputOverrides = {
  root: ({ theme }: { theme: Theme }) => ({
    color: theme.palette.primary.main,
    fontSize: '0.875rem',
    '&.Mui-focused': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover': {
      borderWidth: '1px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: `${theme.palette.primary.light}`,
      borderWidth: '1px',
      transition: 'border-color 0.3s ease',
    },
  }),
};

export default MuiOutlinedInputOverrides;
