"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, Container, Grid } from "@mui/material";
import bgImage from "../../../../../public/assets/backgorund4.png";

const testimonials = [
  {
    name: "Tony Walker",
    role: "Lower Secondary Student",
    image:
      "https://demo-themewinter.com/turitor/wp-content/uploads/2019/11/author2.png",
    text: "I thoroughly enjoyed courses from here and hope to expand on my gained knowledge about making apps. The courses as well as the examples are well presented, easy to follow and engaging.",
  },
  {
    name: "Martin Brian",
    role: "Higher Secondary Student",
    image:
      "https://demo-themewinter.com/turitor/wp-content/uploads/2019/11/author3.png",
    text: "The courses here exceeded my expectations in many regards, especially in the depth of information supplied.I learned key principles of design that I can implement immediately.",
  },
  {
    name: "Emily Davis",
    role: "A level course student",
    image:
      "https://demo-themewinter.com/turitor/wp-content/uploads/2019/11/author2.png",
    text: "The platform was amazing. I could easily build my confidence with hands-on projects and I can implement immediately, the guidance provided throughout the learning process.",
  },
  {
    name: "John Smith",
    role: "A level course student",
    image:
      "https://demo-themewinter.com/turitor/wp-content/uploads/2019/11/author1.png",
    text: "The courses were incredibly detailed and practical. I was able to apply what I learned right away implement immediately, and it has made a big difference in my work.",
  },
];

const StudentTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <Box
      sx={{
        backgroundAttachment: "fixed",
        position: "relative",
        height: "auto",
        width: "100%",
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        mb: 5,
        pt: 4,
      }}
    >
      <Container
        sx={{
          textAlign: "center",

          mb: 6,
        }}
      >
        <Typography
          color="#132361"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
            fontWeight: { xs: 800, md: 800 },
            lineHeight: { xs: "1", md: "1.2" },
            mb: 3,
          }}
          component="h1"
        >
          Our Happy <span style={{ color: "#ffC53A" }}>Students</span>
        </Typography>

        {/* Testimonial Grid */}
        <Grid container spacing={4}>
          {visibleTestimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  textAlign: "left",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                {/* Image on Left */}
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: 100,
                    height: 100,
                    border: "4px solid #fff",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    mr: 3,
                    flexShrink: 0,
                  }}
                />

                {/* Text Content on Right */}
                <Box>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mb: 1 }}
                  >
                    {testimonial.role}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{
                      fontSize: "0.95rem",
                      textAlign: "justify",
                    }}
                  >
                    {testimonial.text}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Navigation Dots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
          }}
        >
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: currentIndex === index ? "#132361" : "#ddd",
                mx: 0.5,
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StudentTestimonial;
