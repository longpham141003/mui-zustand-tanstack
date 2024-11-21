import { SxProps, Theme } from '@mui/system';

// Style cho Button
export const buttonSx: SxProps<Theme> = {
  backgroundColor: (theme) => theme.palette.primary.main,
  color: 'white',
  '&:hover': { backgroundColor: (theme) => theme.palette.primary.dark },
  fontSize: '0.7rem',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
};

// Style cho MenuItem
export const menuItemSx: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '0.8rem',
};

// Style cho Icon
export const iconSx: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
};
