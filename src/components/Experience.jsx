// src/components/Experience.jsx
import {
  Box,
  Typography,
  Stack,
  Chip,
  Link,
  Grid,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slide,
} from '@mui/material';
import { CalendarMonth, ExpandMore } from '@mui/icons-material';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import { useState } from 'react';

const experiences = [
  {
    company: "FedEx | India",
    link: "https://www.fedex.com/en-in/home.html",
    title: "Full Stack Developer Senior II",
    period: "07/2024 - Present",
    description: [
      "Developed and integrated clearance data with FedEx's global tracking site, improving customer visibility and reducing manual integration time by 95%.",
      "Doubled the performance of the FiT product by optimizing database queries, partitioning tables, and leveraging Java Stream APIs for memory-efficient operations.",
      "Introduced gRPC in Java Spring Boot to improve communication between internal microservices."
    ],
    techStack: [
      { label: 'Java Spring Boot', icon: <CodeIcon />, color: '#6db33f', link: 'https://spring.io/projects/spring-boot' },
      { label: 'gRPC', icon: <CodeIcon />, color: '#0087c9', link: 'https://grpc.io/' }
    ]
  },
  {
    company: "Yubi (formerly CredAvenue) | India",
    link: "https://www.go-yubi.com/",
    title: "Senior Software Engineer",
    period: "01/2021 - 06/2024",
    description: [
      "Designed a low-code framework using Ruby on Rails 6.2, implemented as a Rails Engine to simplify external API integrations.",
      "Configured the framework to execute APIs in specified sequences and retry failed executions through scheduled rake tasks.",
      "Built gateway APIs in Node.js deployed on AWS Lambda to expose Yubi APIs externally.",
      "Architected core services in Java Spring Boot to develop loanOS, including a configuration service in Java 21 Spring Boot 3 and a repayment service handling amortization logic.",
      "Enhanced loanOS performance using Redis caching, Temporal workflows, and CockroachDB for high availability.",
      "Led integration deliveries, performed product requirement analysis, and ensured timely implementation with hands-on mentoring and quality feedback."
    ],
    techStack: [
      { label: 'CockroachDB', icon: <StorageIcon />, color: '#5a2b84', link: 'https://www.cockroachlabs.com/' },
      { label: 'Temporal', icon: <CodeIcon />, color: '#14213d', link: 'https://temporal.io/' },
      { label: 'Ruby on Rails', icon: <CodeIcon />, color: '#cc0000', link: 'https://rubyonrails.org/' },
      { label: 'Java Spring Boot', icon: <CodeIcon />, color: '#6db33f', link: 'https://spring.io/projects/spring-boot' },
      { label: 'Node.js', icon: <CodeIcon />, color: '#339933', link: 'https://nodejs.org/' },
      { label: 'PostgreSQL', icon: <StorageIcon />, color: '#336791', link: 'https://www.postgresql.org/' },
      { label: 'AWS', icon: <CloudIcon />, color: '#ff9900', link: 'https://aws.amazon.com/' }
    ]
  },
  {
    company: "Foxsense Innovation | India",
    link: "https://www.linkedin.com/company/foxsense-innovation/",
    title: "Product Hacker",
    period: "05/2020 - 12/2020",
    description: [
      "Built RESTful APIs using Node.js Express and integrated React.js with MongoDB for a B2B procurement platform for a client in Las Vegas.",
      "Designed and implemented features from product display to order management, including Stripe-based payment gateway and a role-based login approval system.",
      "Integrated a real-time chat system into the platform UI.",
      "Acted as a founding engineer, managing the full SDLC—from requirements gathering and architecture design to implementation and testing.",
      "Developed APIs in Python Flask for DineX, a contactless dining app, with PostgreSQL for data storage.",
      "Implemented QR code generation and menu listing APIs."
    ],
    techStack: [
      { label: 'Node.js', icon: <CodeIcon />, color: '#339933', link: 'https://nodejs.org/' },
      { label: 'React.js', icon: <CodeIcon />, color: '#61dafb', link: 'https://reactjs.org/' },
      { label: 'MongoDB', icon: <StorageIcon />, color: '#47A248', link: 'https://www.mongodb.com/' },
      { label: 'Stripe', icon: <CodeIcon />, color: '#635bff', link: 'https://stripe.com/' },
      { label: 'Python Flask', icon: <CodeIcon />, color: '#000000', link: 'https://flask.palletsprojects.com/' },
      { label: 'PostgreSQL', icon: <StorageIcon />, color: '#336791', link: 'https://www.postgresql.org/' }
    ]
  },
  {
    company: "WeInvest | India",
    link: "https://www.weinvest.net/",
    title: "Software Engineer",
    period: "05/2019 - 01/2020",
    description: [
      "Built and integrated a Wealth Management Platform using Ruby on Rails 5.1 with PostgreSQL for data management.",
      "Led the end-to-end integration with a Thai banking partner and relocated to Thailand for two months to ensure on-site delivery."
    ],
    techStack: [
      { label: 'Ruby on Rails', icon: <CodeIcon />, color: '#cc0000', link: 'https://rubyonrails.org/' },
      { label: 'PostgreSQL', icon: <StorageIcon />, color: '#336791', link: 'https://www.postgresql.org/' }
    ]
  }
];

const Experience = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>
        Experience
      </Typography>
      <Stack spacing={3}>
        {experiences.map((exp, idx) => (
          <Accordion
            key={idx}
            expanded={expanded === idx}
            onChange={handleChange(idx)}
            sx={{
              bgcolor: '#e8e8e8',
              transition: 'background-color 0.3s',
              '&:hover': { bgcolor: '#d0d0d0', cursor: 'pointer' },
              borderRadius: 2
            }}
            TransitionProps={{ unmountOnExit: true }}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ flexGrow: 1 }}>
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
                  sx={{ mt: 1, borderColor: '#1e3a8a', color: '#1e3a8a' }}
                />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Slide direction="up" in={expanded === idx} mountOnEnter unmountOnExit>
                <Box>
                  <Stack spacing={1}>
                    {exp.description.map((point, i) => (
                      <Typography
                        variant="body2"
                        key={i}
                        sx={{
                          pl: 1.5,
                          borderLeft: '3px solid #1e3a8a',
                          paddingLeft: '12px'
                        }}
                      >
                        {point}
                      </Typography>
                    ))}
                  </Stack>
                  {exp.techStack && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" color="primary">Technologies Used:</Typography>
                      <Grid container spacing={1} sx={{ mt: 1 }}>
                        {exp.techStack.map((tech, tIdx) => (
                          <Grid item key={tIdx}>
                            <Tooltip title={tech.label} arrow>
                              <Link href={tech.link} target="_blank" rel="noopener" underline="none">
                                <Chip
                                  icon={tech.icon}
                                  label={tech.label}
                                  clickable
                                  sx={{
                                    bgcolor: tech.color,
                                    color: '#fff',
                                    transition: 'transform 0.2s',
                                    '&:hover': { transform: 'scale(1.05)' }
                                  }}
                                />
                              </Link>
                            </Tooltip>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}
                </Box>
              </Slide>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Box>
  );
};

export default Experience;
