import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import { data } from "./feature.data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Fadeupside from "../Animations/Fadeupside";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import StarIcon from "@mui/icons-material/Star";
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import Countdown from "./Countdown";
import typography from "../../config/theme/typography";
import Drgallery from "./Drgallery";
import Heading from "./Heading";
import { headList1 } from "../Constant/titlefile";


const explist = [
    'Experienced team of professionals dedicated to improving and maintaining your oral health.',
    'Comprehensive range of services, including preventive dentistry, root canal treatment, and dental implants.',
    'Utilization of the latest advancements in dental technology for precise diagnoses and efficient treatments.',
    'Warm and welcoming environment ensuring patient comfort and relaxation throughout their dental journey.',
    'Specialization in children\'s dentistry for a positive dental experience for young patients.',
    'Skilled dental surgeon providing advanced dental treatments to address diverse oral health needs.',

];
const Clinicinfo = () => {
    const text = "Dynamic Dental Care - Best dentist in Thane";
    const letters = Array.from(text);
    // const words = text.split(" ");

    const containers = {
        hidden: { opacity: 0.5 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.07 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",

                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring",

                damping: 12,
                stiffness: 100,
            },
        },
    };

    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    // para fadeup
    const Variants = {
        offscreen: {
            y: 50
        },
        onscreen: {
            y: 10,
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <>

            {/* <!-- ======= About Us Section ======= --> */}
                <section id="about" class="about" style={{ background: 'white' }}>
                    <Container>
<Heading data={headList1}></Heading>
                        <Grid container spacing={3} >
                            <Grid item xs={12} md={6}>
                                {/* <Drgallery/> */}
                                <Image
                                    src="/images/clinicphoto.jpeg"
                                    height={100}
                                    width={100}
                                    layout="responsive"
                                    objectFit="cover"
                                    alt="dr-akshays-dentavenue-dental-clinic-chembur-mumbai"
                                />
                                {/* <img src="/images/dr-akshays-dentavenue-dental-clinic-chembur-mumbai.webp" class="img-fluid" alt="" /> */}
                            </Grid>
                            <Grid item xs={12} md={6} textAlign='justify' sx={{}}>
                                <p class="fst-italic" style={{marginTop:4,marginBottom:0}}>
                                Welcome to HSR Dental Booth, the best dental clinic in HSR Layout, Bengaluru. As the premier dental clinic in HSR, we pride ourselves on maintaining high-quality standards while investing in the latest technology, education, and training. Led by Dr. Jalpa Tank, an expert Endodontist, our team offers a wide range of services, including General and Cosmetic Dentistry, Oral Surgery, Periodontics, Endodontics, Orthodontics, and Implantology, ensuring top-notch patient care and predictable, exceptional results.
<br/>
If you are looking for the best dentist in HSR Layout, our dental clinic stands out for its commitment to excellence. We go above and beyond to ensure that dentistry is practiced with the most modern materials and techniques. Trust HSR Dental Booth, under the expert guidance of Dr. Jalpa Tank, as your preferred dentist in HSR Layout and experience unparalleled dental care at the best dental clinic HSR Layout has to offer.

                                </p>
                                <Grid container spacing={2} >
                                    {data.map(({ title, description, icon }, index) => (
                                        <Grid key={String(index)} item xs={12} md={6}>
                                            <Box
                                                sx={{
                                                    px: 2,
                                                    py: 1.5,
                                                    boxShadow: 1,
                                                    borderRadius: 4,
                                                    border: "1px solid #E0E0E0",
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                 <Grid container spacing={2} alignItems='center' justifyContent='center' textAlign='center'>
                                                    <Grid  item xs={12} md={12}>
                                                <Typography
                                                        variant="h6"
                                                        sx={{
                                                            fontSize: "1rem",
                                                            color: "primary.dark",
                                                            textAlign:'left'
                                                        }}
                                                    >
                                                        {title}
                                                    </Typography>
                                                    </Grid>
                                                    <Grid  item xs={12} md={2}>
                                                <Box
                                                    sx={{
                                                        // mx: 1,
                                                        // background: "primary.light",
                                                        backgroundColor: "primary.main",
                                                        borderRadius: "50%",
                                                        height: 36,
                                                        width: 36,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        color: "primary.contrastText",
                                                        "& svg": {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                >
                                                    {icon}
                                                </Box>
                                                </Grid>
                                                <Grid  item xs={12} md={10}>
                                                <Box
                                                    // sx={{ display: "flex", flex: 1, flexDirection: "column" }}
                                                >
                                                    
                                                    <Typography
                                                        // sx={{ lineHeight: 1.3, color: "text.secondary" }}
                                                        sx={{ lineHeight: 1.3, color: "#000000",textAlign:'left' }}
                                                        variant="subtitle1"
                                                    >
                                                        {description}
                                                    </Typography>
                                                </Box>
                                                </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                                {/* <List>
                                    {explist.map((item, i) => (
                                        <ListItem
                                            key={item}
                                        >
                                            <FileDownloadDoneIcon sx={{ fontSize: 18, marginRight: 1, color: 'primary.main' }} />
                                            {item}
                                        </ListItem>
                                    ))}
                                </List> */}

                                
                            </Grid>
                        </Grid>

                    </Container>
                </section>
        </>
    );
};
export default Clinicinfo;
