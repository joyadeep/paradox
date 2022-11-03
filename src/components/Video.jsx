import { Box } from '@mui/material'
import React from 'react'

const Video = () => {
    const src='https://youtube.com/embed/dpEPNioJ1Ik?autoplay=1&mute=1&controls=0&loop=1'
  return (
    <Box sx={{width:'100%',height:'89vh',py:2,borderRadius:'9px'}}>
        <iframe
    width="100%"
    height="100%"
    src={src}
    allow='autoplay'
    title="Youtube Player"
    frameBorder="0"
    allowFullScreen
  />
    </Box>
    
  )
}

export default Video