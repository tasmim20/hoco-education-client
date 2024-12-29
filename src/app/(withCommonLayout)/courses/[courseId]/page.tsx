"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogContent,
  CardContent,
  Card,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import toast from "react-hot-toast";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AvaliableTimes from "./AvaliableTimes";

const CourseDetailPage = (props: any) => {
  const [course, setCourse] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | false>("panel1");


  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(
          `https://hoco-education-server.vercel.app/api/v1/courses/${props.params.courseId}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch course");
        }
        const courseData = await res.json();
        setCourse(courseData);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchCourse();
  }, [props.params.courseId]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBookmarkClick = () => {
    toast.success("Successfully Added in Bookmark!");
  };

  if (!course) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            color: "#132361",
          }}
        >
          <CircularProgress sx={{ color: "#132361" }} />
        </Box>
      </Container>
    );
  }

  return (
    <Container sx={{ my: "70px" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              textAlign: { xs: "left", md: "left" },
            }}
          >
            <Typography
              color="#132361"
              sx={{
                fontSize: { xs: "2rem", md: "2rem" },
                fontWeight: 800,
                lineHeight: "1.2",
              }}
              component="h1"
            >
              {course.courseName}
            </Typography>
            <Typography
              color="#646464"
              sx={{
                mt: 2,
                fontSize: { xs: "1rem", md: "1rem" },
              }}
              variant="body1"
              component="p"
            >
              {course.courseDetails}
            </Typography>
            <Box>
              <Typography mt="15px" fontWeight="bold">
                A course by
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography
                  sx={{
                    backgroundColor: "#132361",
                    color: "#fff",
                    borderRadius: "50px",
                    width: "50px",
                    height: "50px",
                    textAlign: "center",
                    pt: "10px",
                    mr: "10px",
                  }}
                >
                  {" "}
                  H
                </Typography>
                <Typography
                  sx={{
                    color: "#132361",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  hocoHibo
                </Typography>
              </Box>
            </Box>
            <Box color="#fcb900" display="flex" sx={{ mt: "10px" }}>
              <StarBorderPurple500OutlinedIcon fontSize="small" />
              <StarBorderPurple500OutlinedIcon fontSize="small" />
              <StarBorderPurple500OutlinedIcon fontSize="small" />
              <StarBorderPurple500OutlinedIcon fontSize="small" />
              <StarBorderPurple500OutlinedIcon fontSize="small" />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item sm={12} xs={12} md={4}>
                  <Card
                    sx={{
                      textAlign: "center",
                      backgroundColor: "#f9f9fc",
                      boxShadow: "none",
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{
                          color: "gray",

                          fontSize: "1rem",
                        }}
                      >
                        Ages
                      </Typography>
                      <Typography
                        sx={{
                          color: "#132361",
                          fontWeight: 700,
                          fontSize: "1.5rem",
                        }}
                      >
                        14-18
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={4}>
                  <Card
                    sx={{
                      textAlign: "center",
                      backgroundColor: "#f9f9fc",
                      boxShadow: "none",
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{
                          color: "gray",

                          fontSize: "1rem",
                        }}
                      >
                        Duration
                      </Typography>
                      <Typography
                        sx={{
                          color: "#132361",
                          fontWeight: 700,
                          fontSize: "1.5rem",
                        }}
                      >
                        {course.courseDuration}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={4}>
                  <Card
                    sx={{
                      textAlign: "center",
                      backgroundColor: "#f9f9fc",
                      boxShadow: "none",
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{
                          color: "gray",

                          fontSize: "1rem",
                        }}
                      >
                        Pricing
                      </Typography>
                      <Typography
                        sx={{
                          color: "#132361",
                          fontWeight: 700,
                          fontSize: "1.5rem",
                        }}
                      >
                        ${course.coursePrice}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
            <Button
              sx={{
                my: 3,
                mr: 2,
                py: 1.5,
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
              See Class Schedule
              <ArrowRightAltIcon />
            </Button>
            <Button
              onClick={handleBookmarkClick}
              sx={{
                my: 3,
                py: 1.5,
                mr: 2,
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
              <BookmarkBorderIcon />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={course.coursePhoto} // Replace with your image URL
              alt="course image"
              sx={{
                width: "100%",
                height: "400px",
                borderRadius: "8px",
                mb: "50px",
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
                width: "80px",
                height: "80px",
                cursor: "pointer",
                "&:hover::before": {
                  content: '""',
                  position: "absolute",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  border: "2px solid rgba(255, 255, 255, 0.5)",
                  animation: "wave 1.5s infinite",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "2px solid rgba(255, 255, 255, 0.5)",
                  animation: "wave 1.5s infinite",
                },
              }}
            >
              <PlayCircleOutlineIcon
                sx={{
                  color: "#fff",
                  fontSize: "40px",
                  zIndex: 1,
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent
          sx={{
            position: "relative",
            padding: 0,
            "&:first-of-type": {
              padding: 0,
            },
          }}
        >
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/7HUW_aukApo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>

      <Grid container spacing={2}>
        <AvaliableTimes/>
      </Grid>

      <Box sx={{ marginTop: "50px" }}>
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
          Description
        </Typography>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
            backgroundColor: "#f9f9fc",
            fontWeight: 600,
            boxShadow: "none",
            mb: 2,
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: expanded === "panel1" ? "#fff" : "#132361",
                }}
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              backgroundColor: expanded === "panel1" ? "#132361" : "inherit",
              color: expanded === "panel1" ? "#fff" : "#132361",
              "&:hover": {
                backgroundColor: expanded === "panel1" ? "#132361" : "#f9f9fc",
              },
            }}
          >
            <Typography
              color={expanded === "panel1" ? "#fff" : "#132361"}
              sx={{
                fontWeight: "bold",
                variant: { xs: "h5", md: "h5" },
              }}
              component="h1"
            >
              Class Experience
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Braintrain is proprietary curriculum is designed to help learners
              improve their 21st Century and higher-order thinking skills over
              time. Each week, learners are challenged. We are perfect for
              learners who may not be fully challenged at school, are being
              homeschooled or those interested in direct training in 21st
              Century thinking skills. It is our goal to bring gifted style
              education to everyone using tools such as problem based learning,
              creative challenges and debate.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{
            backgroundColor: "#f9f9fc",
            fontWeight: 600,
            boxShadow: "none",
            mb: 2,
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: expanded === "panel2" ? "#fff" : "#132361",
                }}
              />
            }
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{
              backgroundColor: expanded === "panel2" ? "#132361" : "inherit",
              color: expanded === "panel2" ? "#fff" : "#132361",
              "&:hover": {
                backgroundColor: expanded === "panel2" ? "#132361" : "#f9f9fc",
              },
            }}
          >
            <Typography
              color={expanded === "panel2" ? "#fff" : "#132361"}
              sx={{
                fontWeight: "bold",
                variant: { xs: "h5", md: "h5" },
              }}
              component="h1"
            >
              Supply List
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Braintrain is proprietary curriculum is designed to help learners
              improve their 21st Century and higher-order thinking skills over
              time. Each week, learners are challenged. We are perfect for
              learners who may not be fully challenged at school, are being
              homeschooled or those interested in direct training in 21st
              Century thinking skills. It is our goal to bring gifted style
              education to everyone using tools such as problem based learning,
              creative challenges and debate.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{
            backgroundColor: "#f9f9fc",
            fontWeight: 600,
            boxShadow: "none",
            mb: 2,
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: expanded === "panel3" ? "#fff" : "#132361",
                }}
              />
            }
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{
              backgroundColor: expanded === "panel3" ? "#132361" : "inherit",
              color: expanded === "panel3" ? "#fff" : "#132361",
              "&:hover": {
                backgroundColor: expanded === "panel3" ? "#132361" : "#f9f9fc",
              },
            }}
          >
            <Typography
              color={expanded === "panel3" ? "#fff" : "#132361"}
              sx={{
                fontWeight: "bold",
                variant: { xs: "h5", md: "h5" },
              }}
              component="h1"
            >
              Learning Goals
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Braintrain is proprietary curriculum is designed to help learners
              improve their 21st Century and higher-order thinking skills over
              time. Each week, learners are challenged. We are perfect for
              learners who may not be fully challenged at school, are being
              homeschooled or those interested in direct training in 21st
              Century thinking skills. It is our goal to bring gifted style
              education to everyone using tools such as problem based learning,
              creative challenges and debate.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <style>
        {`
          @keyframes wave {
            0% {
              transform: scale(0.5);
              opacity: 1;
            }
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default CourseDetailPage;

