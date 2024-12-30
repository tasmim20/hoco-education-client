"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Container,
  Grid,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Google,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";
import Image from "next/image";
import bgImage from "../../../../../public/assets/backgorund4.png";

const instructors = [
  {
    name: "Daziy Millar",
    title: "PHP Expert",
    img: "https://owly.wpenginepowered.com/wp-content/uploads/2019/02/home-testmonial-1.jpg",
  },
  {
    name: "Rosy Janner",
    title: "WordPress Ninja",
    img: "https://owly.wpenginepowered.com/wp-content/uploads/2019/02/home-testmonial-4.jpg",
  },
  {
    name: "David Lee",
    title: "Web Developer",
    img: "https://owly.wpenginepowered.com/wp-content/uploads/2019/02/home-testmonial-6.jpg",
  },
  {
    name: "Mike Hussy",
    title: "Android Programmer",
    img: "https://owly.wpenginepowered.com/wp-content/uploads/2019/02/student-1.jpg",
  },
  {
    name: "Jane Doe",
    title: "React Developer",
    img: "https://owly.wpenginepowered.com/wp-content/uploads/2019/02/home-img-cap-2.jpg",
  },
  {
    name: "John Smith",
    title: "UX Designer",
    img: "https://owly.wpenginepowered.com/wp-content/uploads/2019/02/home-testmonial-5.jpg",
  },
];

const SkilledInstructors: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % instructors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? instructors.length - 1 : prevIndex - 1
    );
  };

  // Automatically slide 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Ensure the visible instructors wrap around properly
  const visibleInstructors = [...instructors, ...instructors].slice(
    currentIndex,
    currentIndex + 4
  );

  return (
    <div>
      <Box
        sx={{
          backgroundAttachment: "fixed",
          position: "relative",
          height: "100vh",
          width: "100%",
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <Container>
          <Typography
            color="#132361"
            sx={{
              textAlign: "center",
              fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
              fontWeight: { xs: 800, md: 800 },
              lineHeight: { xs: "1", md: "1.2" },
              mt: 5,
              mb: 5,
            }}
            component="h1"
          >
            Our Skilled <span style={{ color: "#ffC53A" }}>Instructors</span>
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {visibleInstructors.map((instructor, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card>
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      width: "100%",
                      height: { md: "250px", xs: "200px", sm: "200px" },
                      paddingTop: "90%",
                      transition: "transform 0.5s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Image
                      layout="fill"
                      objectFit="cover"
                      alt="image"
                      src={instructor.img}
                      style={{
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      "&:hover": {
                        color: "#1976d2",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ transition: "color 0.3s ease" }}
                    >
                      {instructor.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {instructor.title}
                    </Typography>
                    <Box
                      sx={{
                        mt: 1,
                        display: "flex",
                        justifyContent: "center",
                        gap: 1,
                      }}
                    >
                      <IconButton color="primary">
                        <Facebook />
                      </IconButton>
                      <IconButton color="primary">
                        <Twitter />
                      </IconButton>
                      <IconButton color="primary">
                        <LinkedIn />
                      </IconButton>
                      <IconButton color="primary">
                        <Google />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Navigation Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
              gap: 2,
            }}
          >
            <IconButton onClick={handlePrev}>
              <ArrowBack />
            </IconButton>
            <IconButton onClick={handleNext}>
              <ArrowForward />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default SkilledInstructors;
