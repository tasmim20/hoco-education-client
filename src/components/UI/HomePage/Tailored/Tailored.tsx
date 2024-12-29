"use client";
import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

const cards = [
  {
    title: "Any Kid, Any Interest",
    description:
      "Hoco engages and inspires learning a wide variety of classes and subjects so  learners can dive deeper into it.",
    image: "/assets/tailored-1.webp",
  },
  {
    title: "Small & Social",
    description:
      "Hoco engages and inspires learning a wide variety of classes and subjects so learners can dive deeper into it.",
    image: "/assets/tailored-2.webp",
  },
  {
    title: "Top Educators",
    description:
      "Hoco engages and inspires learning a wide variety of classes and subjects so  learners can dive deeper into it.",
    image: "/assets/tailored-3.webp",
  },
];

const Tailored = () => {
  return (
    <Stack sx={{ backgroundColor: "#f9f9fc" }}>
      <Typography
        color="#132361"
        sx={{
          textAlign: "center",
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: { xs: 800, md: 800 },

          variant: { xs: "h3", md: "h1" },
          lineHeight: { xs: "1", md: "1" },
          mt: 8,
          mb: 2,
        }}
        component="h1"
      >
        Learning That’s
        <span style={{ color: "#ffC53A" }}> Tailored</span> To Them
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  transition: "transform 0.2s",
                  boxShadow: "none",
                  textAlign: "center",
                  mx: "10px",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "#ffff",
                  },
                }}
              >
                <Box sx={{ p: "30px" }}>
                  <Image
                    height={400}
                    width={400}
                    src={card.image}
                    alt={card.title}
                  />
                </Box>

                <CardContent>
                  <Typography
                    sx={{
                      color: "#132361",
                      fontSize: "1.7rem",
                      fontWeight: "600",
                    }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "gray",
                      fontSize: "1rem",
                      mb: 3,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default Tailored;
