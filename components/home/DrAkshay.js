import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import StarIcon from "@mui/icons-material/Star";
import { StyledButton } from "../styled-button";
import { motion } from "framer-motion";
import { Card, Link } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

const DrAkshay = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };
  const Lists = motion(List);
  const ListItems = motion(ListItem);
  const explist = [
    "10+ Years of experience",
    "Experienced Prosthodontist",
    "Government Dental College Alumni",
    "Comprehensive Treatment Solutions",
    "Specialized in Implants and FMR",
    "Former Assistant Professor",
  ];
  return (
    <Box sx={{ py: { xs: 7, md: 5 }, backgroundColor: "background.paper" }}>
      <Container>
        <div class="section-title">
        <h2>Meet Our Team of Expert Dentists</h2>
<p>Leaders in Dental Excellence</p>
         
        </div>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >

            
              <Grid item xs={12} sm={4}>
                <Box sx={{p:3}}>
                <Image
                  src="/images/dr/drs6.jpg"
                  alt="Avatar"
                  width={300}
                  height={300}
                  // layout="responsive"
                  style={{
                    width: '100%', height: '100%',
                     boxShadow:
                      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                  }}
                />
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box sx={{ px: 1 }}>
               
                  < Typography 
                  component="h1"
                    sx={{
                      fontWeight: 700,
                      marginBottom: "5px",
                      fontSize: "30px",
                      color:"primary.dark",
                    }}
                  >
                    
                    Dr. Anuj Mishra
                  </Typography>
                  <span
                    style={{
                      fontSize: "18px",

                      fontWeight: 500,
                    }}
                  >
                    Dental Surgeon and Implantologist
                    <br></br>
                    Experience: 10+ Years
                  </span>

                  {/* {messages['dashboard.analytics.eddieMassy']} */}
                  <Typography
                    sx={{
                      color: "text.primary",
                      lineHeight: 1.5,
                      marginBottom: 2.5,
                      fontSize: 17,
                      textAlign: "justify",
                      mt: 2

                    }}
                  >
                    Dr. Anuj Mishra brings over a decade of expertise in
                    transforming smiles and restoring oral health. As a
                    dedicated dental surgeon and implantologist, he specializes
                    in a range of advanced treatments, including Full Mouth
                    Rehabilitation, Smile Designing, Dental Implants, Complete &
                    Partial Dentures, Laminated & Veneers, Root Canal, Crown &
                    Bridges, and various other dental procedures. With a
                    commitment to excellence and a patient-centric approach, Dr.
                    Anuj ensures each individual receives personalized care and
                    achieves optimal oral wellness.

                  </Typography>
                </Box>
              </Grid>
            {/* </Card> */}


           
              <Grid item xs={12} sm={8} order={{xs:1,md:0}}>
                <Box sx={{ px: 1 }}>
                < Typography 
                  component="h1"
                    sx={{
                      fontWeight: 700,
                      marginBottom: "5px",
                      fontSize: "30px",
                      color:"primary.dark",
                    }}
                  >
                    {" "}
                    Dr. Shweta Mishra
                  </Typography>
                  <span
                    style={{
                      fontSize: "18px",

                      fontWeight: 500,
                    }}
                  >
                    Dental Surgeon

                    <br></br>
                    Experience: 8+ Years
                  </span>

                  {/* {messages['dashboard.analytics.eddieMassy']} */}
                  <Typography
                    sx={{
                      color: "text.primary",
                      lineHeight: 1.5,
                      marginBottom: 2.5,
                      fontSize: 17,
                      textAlign: "justify",
                      mt: 2

                    }}
                  >
                    Meet Dr. Shweta Mishra, a skilled Dental Surgeon with over eight years of experience in delivering exceptional dental care. Specializing in Root Canal, Crown & Bridges, Cosmetic Dentistry, and a range of other dental treatments, Dr. Shweta is dedicated to enhancing smiles and restoring dental function. Her compassionate approach and commitment to patient comfort ensure that each individual receives personalized care tailored to their unique needs. Trust Dr. Shweta for top-notch dental solutions and a brighter, healthier smile.



                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} order={{xs:0,md:1}}>
              <Box sx={{p:3}}>

                <Image
                  src="/images/dr/shweta.jpeg"
                  alt="Avatar"
                  width={300}
                  height={300}
                  // layout="responsive"
                  style={{
                    width: '100%', height: '100%',
                     boxShadow:
                      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                  }}
                />
                </Box>
              </Grid>
            </Grid>
            {/* </Card> */}


        <br></br>
        <br></br>
        {/* <Grid
          container
          spacing={7}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="flip-card"
              sx={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
            >
              {/* <div class="flip-card"> *
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  {/* <CardMedia
                    component="img"
                    height="100%"
                    image="/images/dr/dr013.jpg"
                    alt="green iguana"
                  /> *
                  <img
                    src="/images/dr/dr013.jpg"
                    alt="Avatar"
                    style={{ width: "100%", height: "400px" }}
                  />
                  {/* <CardContent> *
                  <Typography gutterBottom variant="h5" component="div">
                    <h4
                      style={{
                        fontWeight: 700,
                        marginBottom: "5px",
                        fontSize: "18px",
                        color: "#555555",
                      }}
                    >
                      {" "}
                      Dr. Anuj Mishra
                    </h4>
                    <span>Dental Surgeon and Implantologist</span>
                    <br></br>
                    Experience: 10+ Years
                  </Typography>

                  {/* </CardContent> *
                </div>
                <div class="flip-card-back" style={{ padding: 15 }}>
                  <h4
                    style={{
                      fontWeight: "400",
                      textAlign: "justify",
                    }}
                  >
                    Dr. Anuj Mishra brings over a decade of expertise in
                    transforming smiles and restoring oral health. As a
                    dedicated dental surgeon and implantologist, he specializes
                    in a range of advanced treatments, including Full Mouth
                    Rehabilitation, Smile Designing, Dental Implants, Complete &
                    Partial Dentures, Laminated & Veneers, Root Canal, Crown &
                    Bridges, and various other dental procedures. With a
                    commitment to excellence and a patient-centric approach, Dr.
                    Anuj ensures each individual receives personalized care and
                    achieves optimal oral wellness.
                  </h4>
                </div>
              </div>
              {/* </div> *
            </Card>
            {/* <Card sx={{ background: '#f0fafa', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' }}>
              {/* <CardActionArea> *
              <CardMedia
                component="img"
                height="100%"
                image="/images/dr/dr013.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h4 style={{
                    fontWeight: 700,
                    marginBottom: '5px',
                    fontSize: '18px',
                    color: '#555555'
                  }}>  Dr. Anuj Mishra</h4>
                  {/* <span>Chief Medical Officer</span> *
                </Typography>

              </CardContent>
              {/* </CardActionArea> *
            </Card> *
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="flip-card"
              sx={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
            >
              {/* <div class="flip-card"> *
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  {/* <CardMedia
                    component="img"
                    height="100%"
                    image="/images/dr/dr013.jpg"
                    alt="green iguana"
                  /> *
                  <img
                    src="/images/dr/dr02.jpg"
                    alt="Avatar"
                    style={{ width: "100%", height: "400px" }}
                  />
                  {/* <CardContent> *
                  <Typography gutterBottom variant="h5" component="div">
                    <h4
                      style={{
                        fontWeight: 700,
                        marginBottom: "5px",
                        fontSize: "18px",
                        color: "#555555",
                      }}
                    >
                      {" "}
                      Dr. Shweta Mishra
                    </h4>
                    <span>Dental Surgeon</span>
                    <br></br>
                    Experience: 8+ Years
                  </Typography>

                  {/* </CardContent> *
                </div>
                <div class="flip-card-back" style={{ padding: 15 }}>
                  <h4
                    style={{
                      fontWeight: "400",
                      textAlign: "justify",
                    }}
                  >
                    Meet Dr. Shweta Mishra, a skilled Dental Surgeon with over eight years of experience in delivering exceptional dental care. Specializing in Root Canal, Crown & Bridges, Cosmetic Dentistry, and a range of other dental treatments, Dr. Shweta is dedicated to enhancing smiles and restoring dental function. Her compassionate approach and commitment to patient comfort ensure that each individual receives personalized care tailored to their unique needs. Trust Dr. Shweta for top-notch dental solutions and a brighter, healthier smile.


                  </h4>
                </div>
              </div>
              {/* </div> *
            </Card>

            {/*           
            <List sx={{ mt: -2, mb: 2 }}>
              {explist.map((item, i) => (
                <ListItem
                  key={item}
                >
                  <FileDownloadDoneIcon sx={{ fontSize: 18, marginRight: 1, color: '#49caeb' }} />
                  {item}
                </ListItem>
              ))}
            </List> *
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  );
};
export default DrAkshay;
