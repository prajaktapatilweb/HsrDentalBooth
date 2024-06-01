import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { orange } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactsIcon from '@mui/icons-material/Contacts';
import AppScrollbar from './AppScrollbar';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import Image from 'next/image';
import { Link } from '@mui/material';

const AppThemeSetting = () => {
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [isColorSettingOpen, setColorSettingOpen] = useState(false);

  const contactno2 = "+919702955057";

  return (
    <Box
      sx={{
        position: 'fixed',
        right: 0,
        top: { xs: 85, xl: 125 },
        zIndex: 1110,
        
      }}
      className='customizerOption'
    >
       <Box
        sx={{
          borderRadius: '30px 0 0 30px',
          mb: 1,
          backgroundColor: orange[500],
          '&:hover': {
            backgroundColor: orange[700],
          },
          '& button': {
            borderRadius: '30px 0 0 30px',

            '&:focus': {
              borderRadius: '30px 0 0 30px',
            },
          },
        }}
      >
        <IconButton >
        <Link
                href={`https://wa.me/${contactno2}`}
                target="_blank"
                className="footermenu"
               
              >
          <WhatsAppIcon
            sx={{
              animation: 'rotation 2s infinite linear',
              color: 'white',
            
            }}

          >
        
            </WhatsAppIcon>
            </Link>
        </IconButton>
      </Box> 

      <Box
        sx={{
          borderRadius: '30px 0 0 30px',
          backgroundColor: orange[500],
          '&:hover': {
            backgroundColor: orange[700],
          },
          '& button': {
            borderRadius: '30px 0 0 30px',

            '&:focus': {
              borderRadius: '30px 0 0 30px',
            },
          },
        }}
      >
        <IconButton>
        <Link
                href={`tel:${contactno2}`}
                target="_blank"
                className="footermenu"
              >
          <CallTwoToneIcon sx={{
            color: 'white',
          }}
          />
        </Link>
        </IconButton>
      </Box>
      <Drawer
        anchor='right'
        sx={{
          '& .MuiBackdrop-root': {
            background: 'transparent',

          },
        }}
        // className={layoutType === LayoutType.BOXED ? 'boxed-drawer' : ''}
        open={isSettingOpen}
        onClose={() => setSettingOpen(false)}
      >
        {/* <AppScrollbar
          sx={{
            width: { xs: 300, md: 360, xl: 400 },
          }}
        > */}
          <Box
            sx={{
              padding: { xs: '20px', xl: '28px 22px' },
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box component='h3' mb={0.5} fontSize={18}>
              hfdkggfhdh
              {/* <IntlMessages id='customizer.customiseSidebar' /> */}
            </Box>
            <Box component='p' mb={0} color='text.secondary'>
              vbhfdkjgjf
              {/* <IntlMessages id='customizer.customiseSidebarText' /> */}
            </Box>
          </Box>
          <Box
            sx={{
              padding: { xs: '20px', xl: '28px 22px' },
            }}
          />
        {/* </AppScrollbar> */}
      </Drawer>
      <Drawer
        anchor='right'
        open={isColorSettingOpen}
        onClose={() => setColorSettingOpen(false)}
        sx={{
          '& .MuiBackdrop-root': {
            background: 'transparent',
          },
        }}
        // className={layoutType === LayoutType.BOXED ? 'boxed-drawer' : ''}
      >
        {/* <AppScrollbar
          sx={{
            width: { xs: 300, md: 360, xl: 400 },
          }}
        > */}
          <Box
            sx={{
              padding: { xs: '20px', xl: '28px 22px' },
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box component='h3' mb={0.5} fontSize={18}>
              Contact Us
            </Box>
            <Box component='p' mb={0} color='text.secondary' sx={{ mt: 5 }}>
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
                                    href="https://www.facebook.com/dranujdynamicdentalcare/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="facebook"
                                >
                                    <FacebookIcon />{" "}
                                </a>
                            </IconButton>
                           
                            <IconButton aria-label="instagram">
                                <a
                                    href="https://www.instagram.com/dranuj6344/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="instagram"
                                >
                                    <InstagramIcon
                                        sx={{  Width: 30, Height: 30 }}
                                    ></InstagramIcon>
                                </a>
                            </IconButton>
                            <IconButton aria-label="linkedin">
                                <a
                                    href="https://jsdl.in/DT-43QAIIEQQYA"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="linkedin"
                                >
                                     <Image src="/images/jd.png" width={20} height={20} ></Image>

                                      
                                      
                                </a>
                            </IconButton>
                            <IconButton aria-label="youtube">
                                <a
                                    href="https://www.youtube.com/channel/UCaHUj0eP9LiEK5zL7QrNbNw"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="youtube"
                                >
                                    <YouTubeIcon ></YouTubeIcon>
                                </a>
                            </IconButton>
                        </Box>
            </Box>
          </Box>
          <Box
            sx={{
              padding: { xs: '20px', xl: '28px 22px' },
            }}
          >
          </Box>
        {/* </AppScrollbar> */}
      </Drawer>
    </Box>
  );
};

export default AppThemeSetting;
