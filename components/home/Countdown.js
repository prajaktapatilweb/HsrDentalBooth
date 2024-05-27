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
            numbers: "1000",
            title: "Dental Implants",
        },

        {
            numbers: "5000",
            title: " Root Canal",
        },
        {
            numbers: "500",
            title: "Smile Designing",
        },
    ];

    return (
        <div>
            <Box>
                <Grid container spacing={2} sx={{ mb: 7, height: '100%' }}>
                    {Details.map((item, i) => (
                        <Grid item xs={12} sm={12} md={3} key={i} alignItems='center' justifyContent='center' textAlign='center'>
                            <Card sx={{
                                background: 'rgba( 0, 0, 0, 0.3 )',
                                boxShadow: ' 0 10px 10px 1px #0000001f',
                                backdropFilter: 'blur( 8px )',
                                // -webkitBackdropFilter: blur( 2px );
                                // borderRadius: 3,
                                border: '1px solid #ffffff36',
                                p: 5,
                                mx: { xs: 7, sm: 7, md: 0 }
                                // background: #00000038;

                            }}>
                                <Typography
                                    sx={{
                                        color: "white",
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
