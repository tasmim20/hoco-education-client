"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import banner from "../../../../../public/assets/information-img.webp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ParentSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        my: 3,
      }}
    >
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              width: "100%",
              maxWidth: { xs: "100%", md: "700px" },
            }}
          >
            <Image
              width={350}
              height={200}
              alt="group"
              src={banner}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              flex: 1,
              width: "100%",
              textAlign: "left",
            }}
          >
            <Typography
              color="#132361"
              sx={{
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                fontWeight: 800,
                lineHeight: 1.2,
              }}
              component="h1"
            >
              Prospective Parent <br />
              <span style={{ color: "#FFC53A" }}> Information</span> Event Hoco
            </Typography>
            <Typography
              color="#646464"
              sx={{
                mt: 2,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
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
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
              }}
              variant="body1"
              component="p"
            >
              To book your place at our next event on Wednesday 4th May 2022 at
              11am, please click the button below and complete our short form.
              We will notify you shortly through an email confirmation.
            </Typography>
            <Button
              sx={{
                mt: 3,
                py: 1,
                px: 3,
                backgroundColor: "#CDD4FB",
                color: "#132361",
                fontWeight: 600,
                boxShadow: "none",
                fontSize: { xs: "0.8rem", sm: "1rem" },
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
