// src/components/Contact.jsx
import { Box, Typography, Link, Tooltip, Stack } from '@mui/material';
import { Phone, Email, GitHub, LinkedIn } from '@mui/icons-material';

const contactItems = [
  {
    icon: <Phone sx={{ color: '#1e3a8a' }} />, tooltip: 'Phone',
    text: '+91-8248993533'
  },
  {
    icon: <Email sx={{ color: '#1e3a8a' }} />, tooltip: 'Email',
    text: 'vnarayanan2696@gmail.com',
    link: 'mailto:vnarayanan2696@gmail.com'
  },
  {
    icon: <GitHub sx={{ color: '#1e3a8a' }} />, tooltip: 'GitHub',
    text: 'Narayanan2696',
    link: 'https://github.com/Narayanan2696'
  },
  {
    icon: <LinkedIn sx={{ color: '#1e3a8a' }} />, tooltip: 'LinkedIn',
    text: 'narayanan-v',
    link: 'https://www.linkedin.com/in/narayanan-v/'
  }
];

const Contact = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>
        Contact
      </Typography>
      <Stack spacing={2}>
        {contactItems.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Tooltip title={item.tooltip} arrow>
              <span>{item.icon}</span>
            </Tooltip>
            {item.link ? (
              <Link href={item.link} target="_blank" rel="noopener" underline="hover" color="inherit">
                {item.text}
              </Link>
            ) : (
              <Typography variant="body1">{item.text}</Typography>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Contact;