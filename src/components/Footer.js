import React from 'react'
import {Box,Typography} from '@mui/material'; 
import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <Box mt='40px' bgcolor='#fff3f4' display='flex' justifyContent='center' alignItems='center' >
        <Typography variant='h7' pb='40px' mt='20px' pt='25px'>
          <img src={Logo} style= {{width: '30px', height: '25px'}}/>
        </Typography>
        <Typography pl='10px' fontSize='1rem' fontWeight={500} color='#000'>
         © 2022 Amit-Kumar
        </Typography>
    </Box>
  )
}

export default Footer