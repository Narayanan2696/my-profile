import { Box, Typography, Grid, Card, CardMedia, Chip, Stack } from '@mui/material';

const projects = [
  {
    title: 'Performance Optimization - Resource Tool',
    techStack: [
      { label: 'Ruby on Rails', icon: '/icons8-ruby-on-rails-24.png', link: 'https://rubyonrails.org/' },
    ],
    description: 'Enhanced API performance through advanced query optimizations, including eager loading and counter caches to minimize database calls and improve response times.'
  },
  {
    title: 'Incident Tracker - Python & React.js',
    techStack: [
      { label: 'Python', icon: '/icons8-python.svg', link: 'https://flask.palletsprojects.com/' },
      { label: 'React.js', icon: '/icons8-react-js.svg', link: 'https://reactjs.org/' },
    ],
    description: 'Optimized backend APIs serving dynamic data to frontend components. Improved frontend component alignment and ensured reactive UI updates with seamless data binding.'
  }
];

const FreelancingProjects = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, width: '100%' }}>
      <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>
        Freelancing Projects
      </Typography>
      <Stack spacing={3}>
        {projects.map((project, idx) => (
          <Box key={idx} sx={{ bgcolor: '#e8e8e8', p: 2, borderRadius: 2, width: '100%', transition: 'background-color 0.3s', '&:hover': { bgcolor: '#d0d0d0' } }}>
            <Typography variant="h6" fontWeight={600} color="primary.dark">
              {project.title}
            </Typography>
            <Typography variant="body2">{project.description}</Typography>
            <Stack direction="row" spacing={1} sx={{ my: 1 }}>
              {project.techStack.map((tech, i) => (
                <Chip
                  key={i}
                  avatar={<Box component="img" src={tech.icon} alt={tech.label} sx={{ width: 24, height: 24, objectFit: 'contain' }} />}
                  label={tech.label}
                  clickable
                  sx={{
                    bgcolor: '#e8e8e8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'black',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.05)' }
                  }}
                />
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom color="primary" fontWeight={600}>
          Client Feedback
        </Typography>
        <Grid container spacing={2}>
          {[1].map((placeholder) => (
            <Grid item xs={12} sm={6} md={4} key={placeholder}>
              <Card sx={{ bgcolor: '#ffffff', borderRadius: 2, height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CardMedia
                  component="img"
                  image="/LinkedIn_recommendation.png"
                  alt="Feedback Screenshot"
                  sx={{ objectFit: 'contain', maxHeight: '100%', width: '100%' }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FreelancingProjects;
