import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { iconButtonClasses } from '@mui/material/IconButton';
import { Avatar, Card } from '@mui/material';
const CourseCardItem = ({ item }) => {
  return (<Box sx={{
    px: 1,
    py: 1,
  }}>
    <Box sx={{

      backgroundColor: 'background.paper',
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      transition: (theme) => theme.transitions.create(['box-shadow']),

      boxShadow: 2,
      [`& .${iconButtonClasses.root}`]: {
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        boxShadow: 2,
      },

    }}>


<Card sx={{ p: 3,height:'100%' }}>
                                    <Avatar alt="R" src='' sx={{ margin: 'auto', width: 60, height: 60, backgroundColor: "primary.main", padding: 5, }}><Image src={item.icons} width={50} height={50}></Image></Avatar>

                                    <Typography variant='h4' sx={{ py: 2 ,textAlign:'center',color: "primary.dark"}}> {item.title} </Typography>
                                    <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                        {item.info}
                                    </Typography>

                                </Card>
    
    </Box>
  </Box>);
};
export default CourseCardItem;
