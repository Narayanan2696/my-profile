// src/components/Hero.jsx
import { Box, Typography, Avatar, Stack } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: '#1e3a8a',
        color: 'white',
        py: 6,
        px: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 2,
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
      }}
    >
      <Avatar
        alt="Narayanan Venkataraman"
        src="/profile.jpg" // Place a photo named profile.jpg in public folder
        sx={{ width: 120, height: 120, border: '3px solid white' }}
      />
      <Stack alignItems="flex-start" spacing={1}>
        <Typography variant="h4" fontWeight={700}>
          Narayanan Venkataraman
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Senior Software Engineer | Full Stack Developer
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600 }}>
          Passionate about building scalable backend services and product architecture. Experienced in Java, Node.js, Ruby on Rails, and modern database technologies.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Hero;
