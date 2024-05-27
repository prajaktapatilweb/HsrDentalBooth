import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { FooterSocialLinks } from "../footer";
import Link from "next/link";
import Whatsappnew from "./Whatsappnew";
import CallIcon from '@mui/icons-material/Call';
import { UpgradeRounded, WhatsApp } from "@mui/icons-material";
const Footer = () => {
  const contactno1 = "+919833389890";
  const contactno2 = "+919702955057";


  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121f38",
        py:3,
        color: "primary.contrastText",
      }}
    >
      <Container sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: { xl: 1300 } }}>
        <Grid container spacing={2} alignItems='center' justifyContent='center'>
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Image src="/images/ddclogo.jpeg" width={180} height={100} ></Image>

            
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
              Discover exceptional dental care at Dynamic Dental Care and Implant Centre, conveniently located in Airoli, Navi Mumbai, and Thane West. Led by Dr. Anuj Mishra, our dedicated team is committed to providing personalized treatments for a long-lasting, healthy smile. Whether you're in Airoli, Navi Mumbai, or Thane West, we're here for you.
              </Typography>
            
             
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Site Links
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#" className="footermenu">
                Home
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#aboutus" className="footermenu">
                About
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#treatments" className="footermenu">
                Treatments
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#testimonials" className="footermenu">
                Testimonials
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#gallery" className="footermenu">
                Gallery
              </Link>
            </Typography>
          
          

             

            {/* <FooterNavigation /> */}
          </Grid>

          {/* <Grid item xs={12} md={3}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Treatments
            </Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Root Canal</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Dental Implants</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Full Mouth Reconstruction</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Braces & Aligners</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Crown & Bridges</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Wisdom Teeth Extraction</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Dental X-Rays​</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Teeth Whitening​</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Cosmetic Dentistry</Typography>

          </Grid> */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Get In Touch
            </Typography>
          
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15076.329523138258!2d72.9939084!3d19.1478709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf5357d89b7f%3A0xed6d36e32f7534ab!2sDynamic%20Dental%20Care!5e0!3m2!1sen!2sin!4v1715864098424!5m2!1sen!2sin"  width="48%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ marginBottom: 3, marginTop: 3,marginRight:4 }}></iframe> 
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15071.132131692939!2d72.9851153!3d19.2046766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b936d2fde0c1%3A0xf5ef3c3e031df47f!2sDynamic%20Dental%20Care%20-%20Best%20dentist%20in%20thane!5e0!3m2!1sen!2sin!4v1715864246797!5m2!1sen!2sin"   width="48%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ marginBottom: 3, marginTop: 3 }}></iframe>

          

            {/* <FooterSocialLinks /> */}

          </Grid>

          <Box>
            <div style={{ position: 'fixed', right: '40px', bottom: '40px', zIndex: 996, background: 'black', borderRadius: 5 }}>
              <Link
                href={`tel:${contactno2}`}
                target="_blank"
                className="footermenu"
                style={{ textDecoration: "underline", display: "inline-block" }}
              >

                <Image src="/images/telephone.png" width={40} height={40} style={{ paddingInline: 5, paddingTop: 5 }} alt="phone" />
              </Link>
            </div>
            <div style={{ position: 'fixed', left: '40px', bottom: '40px', zIndex: 996 }}>
              <Link
                href={`https://wa.me/${contactno2}`}
                target="_blank"
                className="footermenu"
                style={{ textDecoration: "underline", display: "inline-block" }}
              >
                <Image src="/images/whatsapp.webp" width={50} height={50} />
              </Link>
            </div>
          </Box>


          {/* <Whatsappnew /> */}
          <Grid item xs={12} sx={{ textAlign: 'center' }}>

            {/* Designed by <b>Prajakta Bhushankumar Patil</b> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
