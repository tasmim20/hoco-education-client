"use client";

import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  Divider,
  Button,
  CardMedia,
  LinearProgress,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const ClassPage = () => {
  const classDetails = {
    _id: "668a26b78ba74d6fee67f1ad",
    courseName: "Coding",
    courseCode: "cs-204",
    courseDetails: "Learn Coding, Math and Music LIVE with Expert Teachers",
    startDate: "2024-07-26",
    courseDuration: "9 months",
    coursePrice: "120",
    professorName: "Jhon Doe",
    maximumStudents: "80",
    contactNumber: "0170555555",
    coursePhoto:
      "https://themes.hibotheme.com/hoco/wp-content/uploads/2023/01/class-7-768x581.webp",
  };

  const assignments = [
    {
      title: "Homework 1",
      dueDate: "2024-07-20",
      description: "Complete exercises 1-10 on page 23.",
    },
    {
      title: "Project 1",
      dueDate: "2024-07-25",
      description: "Build a model to solve linear equations.",
    },
  ];

  const handleClickOpen = () => {
    // Handle video play click
    alert("Play video!");
  };

  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          my: "40px",
          py: "10px",
          px: "8px",
          bgcolor: "#fff",
          textAlign: "center",
        }}
      >
        <Typography fontWeight="600" variant="h5" component="h5">
          My Enroll Course {classDetails.courseName} class Details
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={classDetails.coursePhoto}
              alt={classDetails.courseName}
              sx={{
                borderRadius: "8px",
              }}
            />
            <Box
              onClick={handleClickOpen}
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#132361",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                cursor: "pointer",
                "&:hover::before": {
                  content: '""',
                  position: "absolute",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "2px solid rgba(255, 255, 255, 0.5)",
                  animation: "wave 1.5s infinite",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  border: "2px solid rgba(255, 255, 255, 0.5)",
                  animation: "wave 1.5s infinite",
                },
              }}
            >
              <PlayCircleOutlineIcon
                sx={{
                  color: "#fff",
                  fontSize: "30px",
                  zIndex: 1,
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              my: "20px",
              py: "10px",
              px: "8px",
              bgcolor: "#fff",
              textAlign: "center",
            }}
          >
            <Typography fontWeight="700" variant="h5" component="h5">
              Student Progress
            </Typography>
            <LinearProgress
              variant="determinate"
              value={70} // Assume progress is 70%
              sx={{
                height: "10px",
                borderRadius: "5px",
                mt: 2,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box sx={{ ml: { xs: 0, md: 4 } }}>
            <Typography
              color="#132361"
              sx={{
                fontSize: { xs: "2rem", md: "2rem" },
                fontWeight: 800,
                lineHeight: "1.2",
              }}
              component="h1"
            >
              {classDetails.courseName}
            </Typography>
            <Typography
              color="#646464"
              sx={{
                my: 2,
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
              variant="body1"
              component="p"
            >
              {classDetails.courseDetails}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              <span style={{ color: "#132361", fontWeight: "600" }}>
                Instructor:
              </span>{" "}
              {classDetails.professorName}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              <span style={{ color: "#132361", fontWeight: "600" }}>
                Course Code:
              </span>{" "}
              {classDetails.courseCode}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              <span style={{ color: "#132361", fontWeight: "600" }}>
                Schedule:
              </span>{" "}
              {classDetails.startDate} (Duration: {classDetails.courseDuration})
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ boxShadow: 0, bgcolor: "#f8f8f8" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Class Outline
              </Typography>
              <List>
                <ListItem>
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="body1">
                      Week 1: Introduction to Coding
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Overview of basic coding concepts
                    </Typography>
                  </Box>
                </ListItem>
                <Divider />
                <ListItem>
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="body1">
                      Week 2: Variables and Data Types
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Understanding variables and different data types
                    </Typography>
                  </Box>
                </ListItem>
                <Divider />
                <ListItem>
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="body1">
                      Week 3: Operators,Condition
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Understanding Operators and different Condition
                    </Typography>
                  </Box>
                </ListItem>
                <Divider />
                <ListItem>
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="body1">Week 4: loop</Typography>
                    <Typography variant="body2" color="textSecondary">
                      For, While, do while loop
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClassPage;
