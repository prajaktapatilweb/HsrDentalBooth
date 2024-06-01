import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Card, Grid,Hidden, Link } from '@mui/material';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Image from 'next/image';
import { KeyboardArrowDown,  KeyboardArrowRight } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '../styled-button';
import HomeHero from '../home/hero';


const pages = [

    { linkID: '/#home', label: 'Home' },
    { linkID: '/#aboutus', label: 'About Us' },
    { linkID: '/#treatments', label: 'Treatments' },
    {
        label: 'Services',
        submenu: [
            { linkID: '/services/dental-implants-in-chembur', label: 'Dental Implants' },
            { linkID: '/services/root-canals-in-chembur', label: 'Root Canals', },
            { linkID: '/services/tooth-extraction-in-chembur', label: 'Tooth Extraction' },
            { linkID: '/services/teeth-braces-in-chembur ', label: 'Teeth Braces ' },
            { linkID: '/services/kids-dentist-in-chembur', label: 'Kids Dental Care' },
            { linkID: '/services/smile-designing-in-chembur', label: 'Smile Designing' },
            { linkID: '/services/teeth-whitening-in-chembur', label: 'Teeth Whitening' },
            { linkID: '/services/dental-fillings-in-chembur', label: 'Dental Fillings' },
            { linkID: '/services/crown-and-bridges-treatment-in-chembur', label: 'Crown And Bridges ' },
        ]
    },
    { linkID: '/#testimonials', label: 'Testimonials' },
    { linkID: '/#gallery', label: 'Gallery' },
    { linkID: '/#faq', label: 'FAQ' },
    { linkID: '/trainer', label: 'Training' },
    { linkID: '/#contactform', label: 'Contact' },
    { linkID: '/blog', label: 'Blog' },

];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];





function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };


function ResponsiveAppBar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [flag, setFlag] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenMobileSubMenu = () => {
        // handleCloseNavMenu()
        setFlag(!flag);
    };


    const contactno1 = "+917373736215";
    // const contactno2 = "+919702955057";

    return (
        
        <AppBar className='section-shaped'  sx={{height:'auto'}}>
      <div className='shape shape-style-u1 shape-dark'>
        <span className='span-150' />
        <span className='span-75' />
        <span className='span-50' />
        <span className='span-75' />
        <span className='span-200' />
        <span className='span-150' />
      </div>
        <section style={{
            background: '#00af89', width: '100%', padding: 0, borderRadius: 0,zIndex:1
        }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        "@media (min-width: 768px)": {
                            flexDirection: "row",
                        },
                    }}
                >
                    <Hidden mdDown>
                        <Box
                            sx={{
                                width: "100%",
                                // maxHeight: 300,
                                "@media (min-width: 768px)": {
                                    width: "70%",
                                },
                            }}
                        >
                            <IconButton aria-label="phone" style={{ color: 'white' }}>
                                {" "}
                                <CallTwoToneIcon />
                            </IconButton>
                           
                            <Link href={`tel:${contactno1}`} target="_blank">
                                <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                    +917373736215

                                </a>
                            </Link>
                          
                            <IconButton aria-label="email" style={{ color: 'white' }}>
                                <EmailTwoToneIcon />{" "}
                            </IconButton>
                            <Link 
                           href={`mailto:${' hsrdentalbooth@gmail.com'}`} target="_blank">
                                <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                hsrdentalbooth@gmail.com

                                </a>
                            </Link>
                        </Box>
                    </Hidden>
                    <Box
                        sx={{
                            width: "100%",
                            textAlign: {
                                xs: "center",
                                sm: "center",
                                md: "right",
                            },
                            // textAlign: 'right',
                            "@media (min-width: 768px)": {
                                width: "30%",
                            },
                        }}
                    >
                        <IconButton aria-label="facebook">
                            {" "}
                            <a
                                href="https://www.facebook.com/hsrdentalbooth/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="facebook"
                            >
                                <FacebookIcon sx={{ color: "white" }} />{" "}
                            </a>
                        </IconButton>
                       
                        <IconButton aria-label="instagram">
                            <a
                                href="https://www.instagram.com/hsrdentalbooth/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="instagram"
                            >
                                <InstagramIcon
                                    sx={{ color: "white", Width: 30, Height: 30 }}
                                ></InstagramIcon>
                            </a>
                        </IconButton>
                        <IconButton aria-label="linkedin">
                            <a
                                href="https://www.justdial.com/Bangalore/Hsr-Dental-Booth-Multispeciality-Dental-Clinic-Opposite-Apollo-Pharmacy-HSR-Layout/080PXX80-XX80-201030170037-N3X2_BZDET"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="linkedin"
                            >
                                 <Image src="/images/jd.png" width={20} height={20} ></Image>

                                  
                                  
                            </a>
                        </IconButton>
                        {/* <IconButton aria-label="youtube">
                            <a
                                href="https://www.youtube.com/channel/UCaHUj0eP9LiEK5zL7QrNbNw"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="youtube"
                            >
                                <YouTubeIcon sx={{ color: "white" }}></YouTubeIcon>
                            </a>
                        </IconButton> */}
                    </Box>
                </Box>
            </Container>
        </section>
       
            <Container maxWidth="xl" sx={{zIndex:1}}>
                <Toolbar disableGutters sx={{ p: 1 }}>
                   
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
                            }}
                        >
                            {pages.map((page, i) => {
                                // if (page.submenu) {
                                //     return <AccountMenu list={page.submenu} />

                                // } else {
                                return (
                                    <>
                                        <Link key={i} href={page.linkID} sx={{
                                            fontWeight: 800, letterSpacing: '.1rem', color: 'black', textDecoration: 'none', textAlign: "center"
                                        }}>
                                            < MenuItem key={page} onClick={page.submenu ? handleOpenMobileSubMenu : handleCloseNavMenu}>
                                                <Grid container direction="row" alignItems="center" >
                                                    {page.label} {page.submenu && <KeyboardArrowRight />}
                                                </Grid>

                                            </MenuItem >
                                        </Link>
                                        {page.submenu && flag && page.submenu.map(item => {
                                            return (
                                                <Card sx={{ background: '#F0F0F0', }}>

                                                    < Link key={i} href={item.linkID} sx={{

                                                        // p: 1,
                                                        fontWeight: 800,
                                                        letterSpacing: '.1rem',
                                                        color: 'black',
                                                        textDecoration: 'none',
                                                        textAlign: "center",

                                                    }}>
                                                        <MenuItem key={page} onClick={handleCloseNavMenu} >
                                                            <Typography sx={{ pl: 5, }}>{item.label}</Typography>
                                                        </MenuItem>
                                                    </Link>
                                                </Card>
                                            )
                                        })}
                                    </ >
                                )

                            }
                            )}
                        </Menu>
                    </Box>
                    <Image src='/images/logo1.jpg' width={80} height={50} ></Image>

                    {/* dekstop menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', textDecoration: "none" } }}>
                        {pages.map((page, i) => {
                            if (page.submenu) {
                                // return <AccountMenu list={page.submenu} />
                                {/* For Sub Menu  */ }
                                return <Box sx={{ flexGrow: 0 }}>
                                    <MenuItem onClick={handleOpenUserMenu}
                                    // aria-controls={open ? 'account-menu' : undefined}
                                    // aria-haspopup="true"
                                    // aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Typography sx={{
                                            // mx: 2,
                                            display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
                                            fontWeight: 700,
                                            letterSpacing: '.1rem',
                                            color: 'white',
                                            textDecoration: 'none',
                                        }} variant='h5'  >Services <KeyboardArrowDown /></Typography>
                                    </MenuItem>

                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {/* {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))} */}
                                        {page?.submenu?.map((item, i) => (
                                            < Link key={i} href={item.linkID} sx={{
                                                // mr: 2,
                                                fontWeight: 800,
                                                letterSpacing: '.1rem',
                                                color: 'black',
                                                textDecoration: 'none',
                                                textAlign: "center"
                                            }}>
                                                <MenuItem key={i} onClick={handleCloseUserMenu}>
                                                    <Typography variant='h5'>
                                                        {item.label}</Typography>
                                                </MenuItem>
                                            </Link>))}

                                    </Menu>
                                </Box>
                            } else {
                                return (
                                    <Link key={i} href={page.linkID} sx={{

                                        display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
                                        fontWeight: 700,
                                        letterSpacing: '.1rem',
                                        color: 'White',
                                        textDecoration: 'none',
                                    }}>
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography variant='h5' sx={{ fontSize: { md: 15, lg: 16, xl: 19 }, mx: { md: 0, lg: 0, xl: 2 }, }}>
                                                {page.label}</Typography>
                                        </MenuItem>
                                    </Link>)
                            }
                        }
                        )}

                    </Box>


                </Toolbar>
            </Container >

            <Grid container alignItems='center' justifyContent='center' textAlign='left' sx={{ zIndex: 1 ,position:'relative'}}>
            <Grid item xs={12} md={6} sx={{px:7}}>
                <Typography variant='p' sx={{ color: '#00af89', fontSize: 28}} >
A Reason 
              

                </Typography>
                <Typography
                  component="h2"
                  sx={{
                    // width: { md: 850 },
                    position: 'relative',
                    fontSize: { xs: 35, md: 40, lg: 45 },
                    mt:-2,
                    mb: { xs: 3, sm: 2 },
                    letterSpacing: 1,
                    fontWeight: 'bold',
                    color: 'white',
                  }}
                >
                To Smile

                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    position: 'relative',
                    color:'white',
                    mb: { xs: 3, sm: 5 },

                    // '& svg': {
                    //   position: 'absolute',
                    //   top: -7,
                    //   right: -20,
                    //   width: { xs: 22, md: 27 },
                    //   height: 'auto',
                    // },
                  }}
                >
Visit Dr. Akshay's DentAvenue, a leading dental clinic in Chembur. Our compassionate team and cutting-edge techniques are dedicated to brightening your smile and lighting up every room.
Visit Dr. Akshay's DentAvenue, a leading dental clinic in Chembur.        
                </Typography>{' '}
                
                <Box sx={{ '& button': { mr: 2 } }}>


                  <ScrollLink to="contactform" spy={true} smooth={true} offset={0} duration={350} >

                    <StyledButton  size="large"   sx={{ mb: { xs: 3, sm: 0, md: 0 },mt:3,background:'primary.light', fontSize: 17, border: "0px solid", borderRadius: 10, color: 'white' }}>
                      Watch Video
                    </StyledButton>
                  </ScrollLink>

                </Box>

</Grid>
<Grid item xs={12} md={6}>
<HomeHero/>
    </Grid>
</Grid>

        </AppBar >
    );
}
export default ResponsiveAppBar;