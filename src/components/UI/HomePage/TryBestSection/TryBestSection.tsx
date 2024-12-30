"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import banner from "../../../../../public/assets/the-best-img.webp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const TryBestSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        mt: { xs: 6, md: 10 },
        mb: { xs: 4, md: 6 },
        alignItems: "center",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              width: "100%",
              maxWidth: { md: "500px" },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Image
              width={500}
              height={300}
              alt="group"
              src={banner}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" }, // Center text on smaller screens
              px: { xs: 2, md: 0 }, // Add padding on smaller screens
            }}
          >
            <Typography
              color="#132361"
              sx={{
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                fontWeight: 800,
                lineHeight: { xs: "1.2", md: "1.2" },
                mb: 2,
              }}
              component="h1"
            >
              Try Best
              <span style={{ color: "#f66a1d" }}>
                {" "}
                One-On-One <br />
              </span>{" "}
              Learning On Hoco
            </Typography>
            <Typography
              color="#646464"
              sx={{
                mt: 2,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                mb: 3,
              }}
              variant="body1"
              component="p"
            >
              Hoco is a standards-based grade-appropriate curriculum with
              thousands of interactive lessons in math, language arts, social
              studies, science, and more.
            </Typography>
            <Button
              sx={{
                py: 1,
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
