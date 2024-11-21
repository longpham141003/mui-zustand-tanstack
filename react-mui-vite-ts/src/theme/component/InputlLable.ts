// theme/InputLabel.ts
import { Theme } from '@mui/material/styles';

const MuiInputLabelOverrides = {
  root: ({ theme }: { theme: Theme }) => ({
    color: theme.palette.primary.main,
    fontSize: '0.875rem',
  }),
};

export default MuiInputLabelOverrides;
