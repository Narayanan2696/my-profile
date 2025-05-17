import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const Hero = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'lg'));

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: { xs: '300px', md: '400px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: isSmallScreen ? 'center' : 'flex-end',
        bgcolor: '#1e3a8a',
        color: 'white',
        px: 2,
      }}
    >
      {/* Background profile image */}
      <Box
        component="img"
        src="/IMG-3208.jpg" // Place your profile.jpg in public folder
        alt="Narayanan Venkataraman"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '80%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          offset: '400px',
          opacity: 0.5,
          transition: 'opacity 0.5s ease',
          zIndex: 0,
          '&:hover': {
            opacity: 0.2,
          },
        }}
      />

      {/* Text Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: isSmallScreen ? 'right' : 'left',
          maxWidth: { xs: '100%', md: '600px' },
          mt: isSmallScreen ? 'auto' : 0,
          mb: isSmallScreen ? 2 : 0,
        }}
      >
        <Typography variant={isSmallScreen ? 'h5' : 'h3'} fontWeight={700}>
          Narayanan Venkataraman
        </Typography>
        <Typography variant={isSmallScreen ? 'subtitle1' : 'h5'} sx={{ opacity: 0.9 }}>
          Full Stack Developer
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Passionate about building scalable and robust products.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
