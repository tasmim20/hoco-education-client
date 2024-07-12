"use client";
import React from "react";
import Box from "@mui/material/Box";
import { keyframes } from "@emotion/react";
import banner from "../../../../../public/assets/banner-img-2.webp";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const HeroSection = () => {
  const theme = useTheme();
  const isLargeDevice = useMediaQuery(theme.breakpoints.up("lg"));

  // Define keyframes for image coming up animation
  const imageUpAnimation = keyframes`
    from {
      opacity: 0;
      transform: translateY(10px); /* Start below */
    }
    to {
      opacity: 1;
      transform: translateY(0); /* End at the normal position */
    }
  `;

  // Define keyframes for sun rising animation
  const sunRiseAnimation = keyframes`
    from {
      top: 100%; /* Start from the bottom */
    }
    to {
      top: 15%; /* End at the center */
    }
  `;

  return (
    <Box
      sx={{
        width: "100%",
        height: "120vh",
        backgroundColor: "#b7d8ef",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLargeDevice && (
        <Box
          sx={{
            animation: `${imageUpAnimation} 1s ease-in-out`,
            position: "absolute",
            zIndex: 1,
          }}
        >
          <Image alt="banner" width={550} height={550} src={banner} />
        </Box>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
        }}
      >
        {/* Bottom wave shapes */}
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L48,192C96,192,192,192,288,186.7C384,181,480,171,576,160C672,149,768,139,864,138.7C960,139,1056,149,1152,176C1248,203,1344,245,1392,266.7L1440,288V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V192Z"
        ></path>
        <path
          fill="#ffffff"
          fillOpacity="0.8"
          d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,170.7C672,171,768,181,864,202.7C960,224,1056,256,1152,245.3C1248,235,1344,181,1392,154.7L1440,128V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V224Z"
          transform="translate(0, -20)"
        ></path>
        <path
          fill="#ffffff"
          fillOpacity="0.6"
          d="M0,256L48,250.7C96,245,192,235,288,202.7C384,171,480,117,576,112C672,107,768,149,864,186.7C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          transform="translate(0, -40)"
        ></path>
        <path
          fill="#ffffff"
          fillOpacity="0.4"
          d="M0,288L48,266.7C96,245,192,203,288,186.7C384,171,480,181,576,197.3C672,213,768,235,864,224C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V288Z"
          transform="translate(0, -60)"
        ></path>
      </svg>
      <Grid container spacing={20}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              flex: 1,
              zIndex: 0.5,
              position: "relative",
              width: { xs: "100%", md: "650px" },
              top: { xs: "80px", md: "-70px" },
              marginLeft: { xs: "10px", md: "50px" },
              textAlign: { xs: "left", md: "left" },
            }}
          >
            <Typography
              color="#132361"
              sx={{
                fontSize: { xs: "2rem", md: "4rem" },
                fontWeight: { xs: 800, md: 800 },

                variant: { xs: "h3", md: "h1" },
              }}
              component="h1"
            >
              Empowering Student’s Knowledge With Hoco School
            </Typography>

            <Box style={{ float: "left" }} sx={{ direction: "flex" }}>
              <AvatarGroup max={4} sx={{ marginTop: "20px" }}>
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
            <Typography color="#646464" sx={{ my: 4, mx: 2 }}>
              <span
                style={{
                  fontWeight: 800,
                  color: "#132361",
                  marginRight: "3px",
                }}
              >
                12K+
              </span>
              Students have enrolled already
            </Typography>
            <Button
              sx={{
                py: 2,
                backgroundColor: "#ffc53a",
                color: "#132361",
                fontWeight: 600,
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#132361",
                },
              }}
            >
              Explore Classes <ArrowRightAltIcon />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              top: { xs: 0, md: "-40px" },
              left: { xs: 0, md: "160px" },
              mb: { xs: 4, md: 0 },
              zIndex: 0,

              marginLeft: { xs: "10px", md: 0 },
              marginRight: { xs: "10px", md: 0 },
              marginBottom: { xs: "50px", md: 0 },
              marginTop: { xs: "-50px", md: 0 },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#d4e8f6",
                padding: 2,
                borderRadius: 5,
                width: { xs: "100%", md: "70%" }, // Adjust width for small and extra small devices
                paddingBottom: "30px", // Decrease padding bottom for smaller devices
              }}
            >
              <Card sx={{ boxShadow: "none", backgroundColor: "#d4e8f6" }}>
                <CardContent>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      marginBottom: 2, // Decrease margin bottom for smaller devices
                      textAlign: "center",
                      color: "#132361",
                      fontWeight: 700,
                    }}
                  >
                    Quick Contact
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Email Address"
                      sx={{
                        backgroundColor: "#e9f3fa",
                        width: "100%", // Full width for all devices
                        borderRadius: 3,
                      }}
                      variant="outlined"
                      multiline
                      rows={2}
                    />
                    <TextField
                      id="outlined-basic2"
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={2}
                      sx={{
                        width: "100%", // Full width for all devices
                        borderRadius: 3,
                      }}
                    />
                    <Box sx={{ color: "#132361", fontWeight: 600 }}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="I agree all Terms & Conditions."
                      />
                    </Box>

                    <Button
                      fullWidth
                      sx={{
                        py: 3,
                        backgroundColor: "#132361",
                        color: "#fff",
                        fontWeight: 600,
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: "#132361",
                          color: "#fff",
                        },
                      }}
                    >
                      Contact Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* <Box
        sx={{
          width: "50px",
          height: "50px",
          backgroundColor: "#132361",
          borderRadius: "50%",
          position: "absolute",
          animation: `${sunRiseAnimation} 5s ease-in-out forwards`,
          boxShadow: "0 0 50px #132361, 0 0 100px #132361, 0 0 150px #132361",
        }}
      ></Box> */}
    </Box>
  );
};

export default HeroSection;
