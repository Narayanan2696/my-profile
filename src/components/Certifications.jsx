// src/components/Certifications.jsx
import { Box, Typography, Stack } from '@mui/material';

const certifications = [
  "SAFe Agile for Teams",
  "GetGoing - Introduction to Golang",
  "Java Masterclass - Workshop"
];

const Certifications = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>
        Certifications
      </Typography>
      <Stack spacing={1} sx={{ bgcolor: '#e8e8e8', p: 2, borderRadius: 2 }}>
        {certifications.map((cert, idx) => (
          <Typography variant="body1" key={idx}>• {cert}</Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default Certifications;
