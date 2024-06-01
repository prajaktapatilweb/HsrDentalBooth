import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Heading({ data }) {
    return (
        <div>
            <Box>
                {data.map((item) => (
                    <Box sx={{textAlign:'center'}}>
                        <Typography variant='p' sx={{color:'primary.dark'}}>
                            {item.title}
                        </Typography>
                        <Typography variant="h1" sx={{color:'primary.dark',pb:3}}>
                            {item.subtitle}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </div>
    )
}
