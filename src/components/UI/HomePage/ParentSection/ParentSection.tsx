"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import banner from "../../../../../public/assets/information-img.webp";

import { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ParentSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        my: { xs: 8, md: 10 },
      }}
    >
      <Grid container spacing={20}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              width: { xs: "100%", md: "700px" },

              left: { xs: 0, md: "-50px" },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                flex: 1,
                position: "relative",
                width: { xs: "100%", md: "500px" },
                height: { xs: "auto", md: "auto" },

                mb: { xs: "-130px", md: 0 },
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

              textAlign: { xs: "left", md: "left" },
            }}
          >
            <Typography
              color="#132361"
              sx={{
                fontSize: { xs: "2rem", md: "3.5rem" },
                fontWeight: { xs: 800, md: 800 },

                variant: { xs: "h3", md: "h1" },
                lineHeight: { xs: "1", md: "1" },
              }}
              component="h1"
            >
              Prospective Parent
              <span style={{ color: "#ffC53A" }}> Information</span> Event Hoco
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
              Join us for a live presentation and question and answer session to
              find out more about homeschooling with Hoco.
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
              To book your place at our next event on Wednesday 4th May 2022 at
              11am please click the button below and complete our short form. we
              will notify you shortly through a email confirmation.
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
              Book Your Place <ArrowRightAltIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ParentSection;
