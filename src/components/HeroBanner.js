import React from 'react'
import {Box,Stack, Typography,Button} from '@mui/material'
//import HeroBannerImage from "../assets/images/banner.jpg";
import fit1 from "../assets/images/fit1.jpg";
import fit2 from "../assets/images/fit2.jpg";
import fit3 from "../assets/images/fit3.jpg";

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{ lg: '110px',xs:'70px'},
        ml:{sm:'50px'}
    }} position="relative" px="20px">
        <Typography color='#FF2625'
        fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight="700"
        sx={{fontSize:{lg:'44px', xs:'40px'}
        }} mb='23px' mt='30px'>
            Seat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" fontFamily='Alegreya' lineHeight="35px" >
            Check out the most effective Exercises
        </Typography>
        <Stack>
            <a hreaf='#exercises' style={{
                marginTop:'45px',
                textDecoration:'none',
                width:'200px',
                textAlign:'center',
                background:'#FF2625',
                padding:'14px',
                fontSize: '22px',
                textTransform: 'none', 
                color: 'white', 
                borderRadius: '4px' 
                }}>
                Explore Exercises</a>
        </Stack>
        {/* <Box sx={{ 
            height:"500px",
            width:'38%',
            float:'right',
            px:'20px',
            position: 'relative',
            }}>
        </Box> */}
        <Typography 
        fontWeight={600}
        color="#ff2625"
        sx={{
            opacity: 0.1,
            display: { lg:'block',xs:'none' }
        }}
        fontSize='200px'>Exercises</Typography>
        {/* <img src={HeroBannerImage} alt="banner" className="hero-banner-img" /> */}
        <img src={fit3} alt="banner" className="fit3-img" />
        <img src={fit1} alt="banner" className="fit1-img" />
        <img src={fit2} alt="banner" className="fit2-img" />
    </Box>
  )
}

export default HeroBanner