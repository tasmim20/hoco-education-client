"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Stack,
  AvatarGroup,
  Avatar,
} from "@mui/material";
import Image from "next/image";
import bannerImage from "../../../../../public/assets/banner-bg.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Link from "next/link";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "400px", sm: "500px", md: "100vh" },
        backgroundImage: `url(${bannerImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
      }}
    >
      {/* Blue Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 255, 0.1)",
        }}
      />

      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", md: "3.5rem" },
                lineHeight: 1.3,

                mb: 2,
              }}
            >
              Empowering Student’s Knowledge With Hoco School
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Box style={{ float: "left" }} sx={{ direction: "flex" }}>
                <AvatarGroup max={4}>
                  <Avatar
                    alt="student"
                    src="https://themes.hibotheme.com/hoco/wp-content/uploads/2023/01/client-4.webp"
                  />
                  <Avatar
                    alt="student"
                    src="https://themes.hibotheme.com/hoco/wp-content/uploads/2023/01/client-3.webp"
                  />
                  <Avatar
                    alt="student"
                    src="https://themes.hibotheme.com/hoco/wp-content/uploads/2023/01/client-2.webp"
                  />
                  <Avatar
                    alt="student"
                    src="https://themes.hibotheme.com/hoco/wp-content/uploads/2023/01/client-1.webp"
                  />
                </AvatarGroup>
              </Box>
              <Typography sx={{ pt: 1, mx: 2, textAlign: "center" }}>
                <span
                  style={{
                    fontWeight: 800,

                    marginRight: "3px",
                  }}
                >
                  1K+
                </span>
                Students have enrolled already
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Link href="/courses">
                <Button
                  sx={{
                    py: 1,
                    backgroundColor: "#ffc53a",
                    color: "#132361",
                    fontWeight: 600,
                    boxShadow: "none",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "#ffc53a",
                    },
                  }}
                  variant="contained"
                  color="success"
                >
                  View Courses <ArrowRightAltIcon />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outlined" color="inherit">
                  Contact US
                </Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
