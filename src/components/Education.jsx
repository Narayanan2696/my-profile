// src/components/Education.jsx
import { Box, Typography } from '@mui/material';

const Education = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>
        Education
      </Typography>
      <Box sx={{ bgcolor: '#e8e8e8', p: 2, borderRadius: 2 }}>
        <Typography variant="h6" fontWeight={600} color="primary.dark">
          M.Sc. Software Systems
        </Typography>
        <Typography variant="subtitle1" fontWeight={500}>
          PSG College of Technology, India — 07/2019
        </Typography>
      </Box>
    </Box>
  );
};

export default Education;
