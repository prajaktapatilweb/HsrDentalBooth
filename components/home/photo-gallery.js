import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme, styled } from "@mui/material/styles";
import { IconButton, useMediaQuery } from "@mui/material";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import { data } from "./photo-gallery.data";
import PhotoCardItem from "../course/photo-card-item";
import Heading from "./Heading";
import { headList1 } from "../Constant/titlefile";
const SliderArrow = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton
      sx={{
        backgroundColor: "background.paper",
        color: "primary.main",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        },
        bottom: { xs: "-70px !important", md: "-28px !important" },
        left: "unset !important",
        right: type === "prev" ? "60px !important" : "0 !important",
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === "next" ? (
        <IconArrowForward sx={{ fontSize: 22 }} />
      ) : (
        <IconArrowBack sx={{ fontSize: 22 }} />
      )}
    </IconButton>
  );
};
const StyledDots = styled("ul")(({ theme }) => ({
  "&.slick-dots": {
    position: "absolute",
    left: 0,
    bottom: -30,
    paddingLeft: theme.spacing(1),
    textAlign: "center",
    "& li": {
      marginRight: theme.spacing(0),
      "&.slick-active>div": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));
const Photogallery = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const sliderConfig = {
    infinite: true,
    autoplay: true,
    adaptiveheight: false,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box
        sx={{
          height: 15,
          width: 15,
          backgroundColor: "divider",
          display: "flex",
          borderRadius: 4,
        }}
      />
    ),
  };
  return (
    <Box
      id="gallery"
      sx={{
        py: { xs: 7, md: 7 },
        backgroundColor: "primary.light",
      }}
    >
      <Container maxWidth="lg">
          <Heading data={headList1}></Heading>


        <Slider {...sliderConfig}>
          {/* {data.map((item) => (<PhotoCardItem key={String(item.id)} item={item} />))} */}
          {[...Array(7)].slice(0).map((e, i) => (
            <PhotoCardItem key={i} item={i + 1} />
          ))}
        </Slider>
      </Container>

    </Box>
  );
};
export default Photogallery;
