import { useColorScheme, Box, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  type Mode = 'light' | 'dark' | 'system' | null;

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedMode = event.target.value as Mode;
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Chế độ</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="demo-select-small"
        value={mode || 'system'}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon sx={{ fontSize: '16px' }} /> 
            <Typography variant="caption">Light</Typography> 
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeIcon sx={{ fontSize: '16px' }} />
            <Typography variant="caption">Dark</Typography>
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon sx={{ fontSize: '16px' }} />
            <Typography variant="caption">System</Typography>
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default ModeSelect;
