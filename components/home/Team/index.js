import React from 'react';
import MemberItem from './MemberItem';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import MediaSlider from './MediaSlider';
import AppCard from '../AppCard';
import { heroPhotoList } from '../../Constant/Photoslider';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 2,

  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Team = () => {
  // const { messages } = useIntl();
  return (
    <AppCard
      title='vvhsdch'
      titleStyle={{ fontWeight: 'bold', fontSize: { xs: 18, md: 20 } }}
    >
      <MediaSlider>
        <Slider {...settings}>
          {heroPhotoList.map((member) => {
            return (
              <Box key={member.id} sx={{ px: 2.5 }}>
                <MemberItem member={member} />
              </Box>
            );
          })}
        </Slider>
      </MediaSlider>
    </AppCard>
  );
};

export default Team;

Team.propTypes = {
  team: PropTypes.array,
};
