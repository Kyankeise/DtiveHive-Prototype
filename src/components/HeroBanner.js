import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

// Declare a HeroBanner component that renders a Box component with the heading text and main image.
const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#5AEA9C" fontWeight="600" fontSize="40px">StriveHive</Typography>
    <Typography color="#FFFF" fontWeight={700} sx={{ fontSize: { lg: '36px', xs: '32px' } }} mb="23px" mt="30px">
      Mind and Body better together
    </Typography>
    <Typography color="#FFFF" fontSize="22px" lineHeight="35px">
      Welcome to the game
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#5AEA9C', padding: '14px', fontSize: '22px', textTransform: 'none', color: '#181B36', borderRadius: '4px' }}>Train</a>
    </Stack>
    <Typography fontWeight={600} color="#252b59" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
