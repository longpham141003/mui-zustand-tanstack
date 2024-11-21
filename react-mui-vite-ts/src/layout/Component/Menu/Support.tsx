import HeadsetIcon from '@mui/icons-material/Headset';
import { Box, Typography } from '@mui/material';

function Support() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <HeadsetIcon sx={{ fontSize: 30 }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}>
          0383086343
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
          Trung tâm hỗ trợ 24/7
        </Typography>
      </Box>
    </Box>
  );
}

export default Support;
