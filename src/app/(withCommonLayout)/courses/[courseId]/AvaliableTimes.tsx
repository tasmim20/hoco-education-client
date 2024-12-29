"use client";

import { Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/utils/token";
import { JwtPayload } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
    name?: string;
    email?: string;
    image?: string;
  }

const AvaliableTimes = () => {

  const router = useRouter();
  const handleEnrollClick = () => {
  const token = getAccessToken("accessToken");
    console.log(token);

    if (!token) {
      toast.error("You need to log in to enroll in this course.");
      router.push("/login"); 
      return;
    }
    toast.success("Congratulations, You have successfully enrolled!");
  };

  return (
    <Container>
      <Typography
        color={"#132361"}
        variant="h5"
        sx={{
          fontWeight: "700",
          fontSize: "30px",
          textAlign: "center",
          my: "28px",
        }}
        component="h1"
      >
        Available Times
      </Typography>
      <Grid container spacing={2}>
        {timeSlots.map((slot: any, index: any) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ mb: "32px" }}>
            <Card
              sx={{
                padding: 2,
                borderRadius: 2,
                boxShadow: 0,
                textAlign: "center",
                border: "1px solid #e0e0e0",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#132361",
                  "& *": {
                    color: "#fff",
                  },
                },
              }}
            >
              <CardContent>
                <Typography
                  sx={{ color: "#132361", mt: "14px" }}
                  variant="h6"
                  fontWeight="600"
                >
                  {slot.date}
                </Typography>
                <Typography variant="body1">{slot.duration}</Typography>
                <Typography variant="body1">{slot.day}</Typography>
                <Typography variant="body1">{slot.time}</Typography>
                <Button
                  onClick={handleEnrollClick}
                  sx={{
                    my: 3,
                    py: 1.5,
                    backgroundColor: "#CDD4FB",
                    color: "#132361",
                    fontWeight: 600,
                    boxShadow: "none",
                    transition: "background-color 0.3s, color 0.3s",
                    "&:hover": {
                      backgroundColor: "#fcb900",
                      "& *": {
                        color: "#fff",
                      },
                    },
                  }}
                >
                  ENROLL Now <ArrowRightAltIcon />
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AvaliableTimes;

const timeSlots = [
  {
    date: "2024-07-10",
    duration: "2 hours",
    day: "Wednesday",
    time: "10:00 AM - 12:00 PM",
  },
  {
    date: "2024-07-11",
    duration: "3 hours",
    day: "Thursday",
    time: "1:00 PM - 4:00 PM",
  },
  {
    date: "2024-07-12",
    duration: "1.5 hours",
    day: "Friday",
    time: "9:00 AM - 10:30 AM",
  },
  {
    date: "2024-07-13",
    duration: "2.5 hours",
    day: "Saturday",
    time: "2:00 PM - 4:30 PM",
  },
];
