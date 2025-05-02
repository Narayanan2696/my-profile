// src/components/Experience.jsx
import { Box, Typography, Stack, Chip, Link } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';

const experiences = [
  {
    company: "FedEx | India",
    link: "https://www.fedex.com/en-in/home.html",
    title: "Full Stack Developer Senior II",
    period: "07/2024 - Present",
    description: [
      "Pushed clearance data to FedEx global tracking site, improving integration efficiency by 95%.",
      "Optimized FiT product performance by 2X through query optimization, database partitioning, and Java Stream API.",
      "Implemented gRPC services in Java Spring Boot."
    ]
  },
  {
    company: "Yubi (formerly CredAvenue) | India",
    link: "https://www.go-yubi.com/",
    title: "Senior Software Engineer",
    period: "01/2021 - 06/2024",
    description: [
      "Designed low-code frameworks reducing integration efforts by 75%, leading to 3X revenue growth.",
      "Architected micro-services using Java Spring Boot for building loanOS.",
      "Enhanced performance 4X by using Redis, Temporal, and CockroachDB.",
      "Built AWS Lambda functions in Node.js and mentored team members."
    ]
  },
  {
    company: "Foxsense Innovation | India",
    link: "https://www.linkedin.com/company/foxsense-innovation/",
    title: "Product Hacker",
    period: "05/2020 - 12/2020",
    description: [
      "Developed RESTful APIs in Node.js Express and Python Flask for NoSQL and PostgreSQL databases."
    ]
  },
  {
    company: "WeInvest | India",
    link: "https://www.weinvest.net/",
    title: "Software Engineer",
    period: "05/2019 - 01/2020",
    description: [
      "Implemented Wealth Management Platform using Ruby on Rails with PostgreSQL."
    ]
  }
];

const Experience = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>
        Experience
      </Typography>
      <Stack spacing={3}>
        {experiences.map((exp, idx) => (
          <Box key={idx} sx={{ bgcolor: '#e8e8e8', p: 2, borderRadius: 2 }}>
            <Typography variant="h6" fontWeight={600} color="primary.dark">
              {exp.title}
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              <Link href={exp.link} target="_blank" rel="noopener" underline="hover" color="inherit">
                {exp.company}
              </Link>
            </Typography>
            <Chip
              icon={<CalendarMonth sx={{ color: '#1e3a8a' }} />}
              label={exp.period}
              variant="outlined"
              sx={{ mt: 1, mb: 1, borderColor: '#1e3a8a', color: '#1e3a8a' }}
            />
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              {exp.description.map((point, i) => (
                <li key={i} style={{ marginBottom: '0.4rem' }}>
                  <Typography variant="body2">{point}</Typography>
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Experience;
