// src/components/Skills.jsx
import { Grid, Typography, Box, Rating, Paper } from '@mui/material';

const skills = [
  { name: 'Java Spring Boot', level: 5 },
  { name: 'Ruby on Rails', level: 4 },
  { name: 'Node.js Express', level: 4 },
  { name: 'JavaScript', level: 5 },
  { name: 'Python', level: 4 },
  { name: 'PostgreSQL', level: 4 },
  { name: 'MongoDB', level: 3 },
  { name: 'Redis', level: 4 },
  { name: 'gRPC', level: 3 },
  { name: 'Temporal', level: 3 },
  { name: 'Data Structures', level: 5 },
  { name: 'Object Oriented Programming', level: 5 },
  { name: 'Team Leadership', level: 4 },
  { name: 'Agile', level: 4 }
];

const Skills = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={2} sx={{ p: 2, borderRadius: 2, bgcolor: '#e8e8e8' }}>
              <Typography variant="subtitle1" fontWeight={500}>{skill.name}</Typography>
              <Rating value={skill.level} readOnly precision={1} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
