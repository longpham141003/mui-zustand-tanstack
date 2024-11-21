import { createTheme } from '@mui/material/styles';
import lightTheme from './light';
import darkTheme from './dark';
import MuiButtonOverrides from './component/Button';
import MuiInputLabelOverrides from './component/InputlLable';
import MuiOutlinedInputOverrides from './component/OutlinedInput';
import MuiProductCardOverrides from './component/Card';

const theme = createTheme({
  colorSchemes: {
    light: lightTheme,
    dark: darkTheme,
  },
  components: {
    MuiButton: MuiButtonOverrides, // Correct usage here
    MuiInputLabel: {
      styleOverrides: MuiInputLabelOverrides,
    },
    MuiOutlinedInput: {
      styleOverrides: MuiOutlinedInputOverrides,
    },
    MuiCard: MuiProductCardOverrides,
  },
});

export default theme;
