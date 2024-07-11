"use client";
import { Box, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import { useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import partner1 from "../../../../../public/assets/partner-1.webp";
import partner2 from "../../../../../public/assets/partner-2.webp";
import partner3 from "../../../../../public/assets/partner-3.webp";
import partner4 from "../../../../../public/assets/partner-4.webp";
import partner5 from "../../../../../public/assets/partner-5.webp";
import partner6 from "../../../../../public/assets/partner-6.webp";

const Partner = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="  max-w-7xl  mx-auto space-y-6  ">
      <Stack
        sx={{
          backgroundColor: "#f9f9fc",
          position: "relative",
          py: 10,
          my: 10,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1,
          }}
        >
          <IconButton onClick={() => sliderRef.current?.slickPrev()}>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton onClick={() => sliderRef.current?.slickNext()}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        <Slider ref={sliderRef} {...settings}>
          {[
            partner1,
            partner2,
            partner3,
            partner4,
            partner5,
            partner6,
            partner1,
            partner2,
          ].map((partner, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "160px",
                mx: "auto",
                px: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                alt={`partner-${index + 1}`}
                src={partner}
                width={170}
                height={170}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          ))}
        </Slider>
      </Stack>
    </div>
  );
};

export default Partner;
