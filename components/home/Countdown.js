import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Card, Typography } from "@mui/material";
import CountUp from "react-countup";

export default function Countdown() {
    var Details = [
        // {
        //     numbers: "2000",
        //     title: "Happy Patients"

        // },
        {
            numbers: "4000",
            title: "Crown & Bridges",
        },
        {
            numbers: "3000",
            title: "Dental Implants",
        },

        {
            numbers: "3000",
            title: " Root Canal",
        },
        {
            numbers: "500",
            title: "Braces and Aligners",
        },
    ];

    return (
        <div>
            <Box>
                <Grid container spacing={2} sx={{ my: 5, height: '100%' }}>
                    {Details.map((item, i) => (
                        <Grid item xs={12} sm={12} md={3} key={i} alignItems='center' justifyContent='center' textAlign='center'>
                            <Card sx={{
                                background: '#e1e8f0',
                                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                                border: '1px solid #ffffff36',
                                p: 3,
                                
                                
                                mx: { xs: 7, sm: 7, md: 1 }
                                // background: #00000038;

                            }}>
                                <Typography
                                    sx={{
                                        color: "primary.dark",
                                        // mb: { xs: 1, md: 2 },
                                        fontSize: { xs: 34, md: 40 },
                                        fontWeight: "bold",
                                        fontFamily: "Open Sans, sans-serif"
                                    }}
                                >
                                    <CountUp end={item.numbers} duration={5} start={200} />+
                                </Typography>
                                <Typography color="primary.main" variant="h5">
                                    {item.title}
                                </Typography>
                            </Card>

                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}
