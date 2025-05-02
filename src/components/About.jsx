// src/components/About.jsx
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>
        About Me
      </Typography>
      <Box sx={{ bgcolor: '#e8e8e8', p: 2, borderRadius: 2 }}>
        <Typography variant="body1">
          Highly motivated and creative self-learner with almost 6 years of experience; prioritize continuous learning,
          stakeholder satisfaction, and strong problem-solving skills. A driven software professional committed to adding
          value to any team.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
