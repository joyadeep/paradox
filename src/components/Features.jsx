import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import original from "../assets/original.jpg";
import workCulture from "../assets/work culture.png";
import earth from "../assets/earth.png";
import planting from "../assets/1542298796.jpg";

export const Features = () => {
  const imgs = [
    {
      id: 1,
      imgurl: workCulture,
    },
    {
      id: 2,
      imgurl: "",
    },
    {
      id: 3,
      imgurl: planting,
    },
    {
      id: 4,
      imgurl: earth,
    },
  ];
  return (
    <Box sx={{ mb: 2 }}>
      <Box
        sx={{
          background: ` linear-gradient(
            rgba(255, 255, 255, 0.5), 
            rgba(255, 255, 255, 0.5)
          ), url(${original}) `,
          height: "300px",
          width: "100%",
          backgroundSize: "fit",
          mb: 2,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight={"bold"}
          pt={3}
          letterSpacing="-1px"
        >
          Building the future
        </Typography>
      </Box>
      <Box sx={{ width: "80%", mx: "auto" }}>
        <ImageList cols={2} >
          {imgs.map((item) => (
            <Box key={item.id}>
              {item.id === 2 ? (
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',pl:2}}>
                <Typography variant='h2' fontWeight={'bold'}>Features</Typography>
                <Typography variant='h2' fontWeight={'bold'}><span style={{color:'orange'}}>Ought</span> to</Typography>
                <Typography variant='h2' fontWeight={'bold'}>Partake</Typography>
                </Box>
              ) : (
                <ImageListItem>
                  <img
                    src={item.imgurl}
                    height={400}
                    style={{ borderRadius: "7px" }}
                  />
                </ImageListItem>
              )}
            </Box>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};
