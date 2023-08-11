import { Box, Typography } from '@mui/material';
import { Mainbar } from '@src/layout/Navbar/components/Mainbar';

export const Navbar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography>Logo</Typography>
      </Box>
      <Mainbar />
    </Box>
  );
};
