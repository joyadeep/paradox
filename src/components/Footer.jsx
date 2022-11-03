import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import nature from '../assets/nature.jpg'

const Footer = () => {
  return (
   <Box sx={{width:'80%',height:'90vh',mx:'auto',pb:2,mb:2}}>
    <Box
        sx={{
          background: ` url(${nature}) `,
          height: "100%",
          width: "100%",
          backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
          mb: 4,
          pt:3,
          borderRadius:2
        }}
      >
       <Box sx={{ 
        width:'60%',
        mx:'auto',
        p:4,
        textAlign:'center',
        background: 'rgba( 255, 255, 255, 0.15 )',
        backdropFilter: 'blur( 5.5px )',
        borderRadius: '10px',
       }}>
<Typography variant='h4' fontWeight={'bold'}>Every inspiration from nature </Typography>
<Typography variant='h6'>Get started using out services with 30-day free trial</Typography>
<Button variant='contained' sx={{textTransform:'none',bgcolor:'black',mt:16,px:6,fontSize:'18px','&:hover':{
    bgcolor:'#232323'
}}} disableElevation>Try it out</Button>
       </Box>
      </Box>
   </Box>
  )
}

export default Footer