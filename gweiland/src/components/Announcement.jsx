import * as React from 'react';
import Box from '@mui/material/Box';

export default function Announcement() {
  return (
    <div style={{ width: '100%', color:'#e1c200', backgroundColor:'#e1c200'}}>
      <Box
        component="span"
        sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            p: 1.5,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#e1c200' : '#e1c200'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            fontSize: 'smaller',
            fontWeight: '700',
        }}
      >
          VISIT US ON TIKTOK @BRAVALAND.COM
      </Box>
    </div>
  );
}