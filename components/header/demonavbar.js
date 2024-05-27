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
import { Card, Grid, Link } from '@mui/material';
import Image from 'next/image';
import { KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
// import Link from 'next/link';

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

function ResponsiveAppBar() {
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

    return (
        <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ p: 1 }}>
                    {/* <Image src='/images/logo1.jpg' width={200} height={120} ></Image> */}
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    {/* mobile menu */}
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
                    <Image src='/images/logo1.jpg' width={150} height={100} ></Image>

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
                                            color: 'White',
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
        </AppBar >
    );
}
export default ResponsiveAppBar;