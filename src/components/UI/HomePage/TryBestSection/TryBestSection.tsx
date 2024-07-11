"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import banner from "../../../../../public/assets/the-best-img.webp";

import { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const TryBestSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        mt: { xs: 5, md: 15 },
        mb: { xs: 2, md: 5 },
      }}
    >
      <Grid container spacing={20}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              width: { xs: "100%", md: "700px" },
              top: { xs: 0, md: "-20px" },
              left: { xs: 0, md: "-100px" },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                flex: 1,
                position: "relative",
                width: { xs: "100%", md: "500px" },
                height: { xs: "auto", md: "auto" },
                top: { xs: 0, md: "-20px" },

                mb: { xs: 4, md: 0 },
              }}
            >
              <Image
                width={350}
                height={350}
                alt="group"
                src={banner}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              width: { xs: "100%", md: "650px" },
              top: { xs: "-120px", md: "-20px" },
              textAlign: { xs: "left", md: "left" },
            }}
          >
            <Typography
              color="#132361"
              sx={{
                fontSize: { xs: "2rem", md: "3.5rem" },
                fontWeight: { xs: 800, md: 800 },
                variant: { xs: "h3", md: "h1" },
                lineHeight: { xs: "1.2", md: "1.2" },
              }}
              component="h1"
            >
              Try Best
              <span style={{ color: "#f66a1d" }}> One-On-One</span> Learning On
              Hoco
            </Typography>
            <Typography
              color="#646464"
              sx={{
                mt: 2,
                fontSize: { xs: "1.00rem", md: "1.00rem" },
              }}
              variant="body1"
              component="p"
            >
              Hoco is a standards-based grade-appropriate curriculum with
              thousands of inte ractive lessons in math, language arts, social
              studies, science, and more.
            </Typography>
            <Button
              sx={{
                my: 3,
                py: 1.5,
                backgroundColor: "#CDD4FB",
                color: "#132361",
                fontWeight: 600,
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#132361",
                  color: "#fff",
                },
              }}
            >
              Explore Classes <ArrowRightAltIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TryBestSection;
