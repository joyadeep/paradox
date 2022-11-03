import React from 'react'
import {AppBar, Box, Stack, Toolbar, Typography} from '@mui/material'
const Header = () => {
    const navlinks=['Home','Features','Downloads','Career','Pricing']
  return (
    <AppBar elevation={0} sx={{bgcolor:'#7A7A7A'}} position="static">
        <Toolbar>
            <Box sx={{display:'flex',justifyContent:'space-between',width:'70%',mx:'auto'}}>
                {
                    navlinks.map((navitem,index)=>(
                        <Typography variant='h6' sx={{cursor:'pointer'}} key={index}>{navitem}</Typography>
                    ))
                }
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header