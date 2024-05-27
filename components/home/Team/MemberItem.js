import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import AppCardMedia from '../AppCard/AppCardMedia';

const MemberItem = ({ member }) => {
  return (
    <AppCardMedia
      cardMedia={member.images}
      sxStyle={{
        boxShadow: '0px 6px 10px rgba(160, 165, 185, 0.1)',
        borderRadius: 1,
        border: (theme) => `solid 1px ${theme.palette.divider}`,
      }}
    >
      <Typography
        component='h5'
        sx={{
          mb: 1,
          fontWeight: 'bold',
          fontSize: { xs: 16, md: 18 },
        }}
      >
        {member.title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          color: (theme) => theme.palette.text.secondary,
        }}
      >
        {member.titlecard}
      </Typography>
    </AppCardMedia>
  );
};

export default MemberItem;

MemberItem.propTypes = {
  member: PropTypes.object,
};
