import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Image } from "@chakra-ui/react";

const Carouselimage = [
  {
    image:
      "https://clubrunner.blob.core.windows.net/00000008602/Images/Kayako/2017-carousel/Take-Action-Alt5.jpg",
    id: 1,
  },
  {
    image:
      "https://clubrunner.blob.core.windows.net/00000008602/Images/Kayako/2017-carousel/Take-Action-Alt2.jpg",
    id: 2,
  },
  {
    image:
      "https://clubrunner.blob.core.windows.net/00000008602/Images/Kayako/2017-carousel/Partner-With-us-Alt1.jpg",
    id: 3,
  },
];

export const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    // cssEase: "linear",
    // nextArrow: <ArrowRightIcon />,
    // prevArrow: <ArrowLeftIcon />,
    // centerMode: true,
    // centerPadding: "60px",
  };
  return (
    <Box>
      <Slider {...settings}>
        {Carouselimage.map((item) => (
          <Box key={item.id}>
            <Image src={item.image} alt={item.id} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
