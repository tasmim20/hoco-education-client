"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Container,
  CircularProgress,
  Pagination,
} from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { useGetAllCourseQuery } from "@/redux/api/courseApi";
import { Course } from "@/types";

const AllCourse = () => {
  const { data, isLoading, isError } = useGetAllCourseQuery({});
  const [currentPage, setCurrentPage] = React.useState(1);
  const coursesPerPage = 5;

  if (isLoading) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "#132361",
          }}
        >
          <CircularProgress sx={{ color: "#132361" }} />
        </Box>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography variant="h6" color="error">
            Failed to load courses.
          </Typography>
        </Box>
      </Container>
    );
  }

  // Get current courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = data.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
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
        <Typography fontWeight="700" variant="h4" component="h5">
          All Courses
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
        }}
      >
        {currentCourses &&
          currentCourses.map((course: Course) => (
            <Grid item xs={12} sm={6} md={4} key={course._id}>
              <Card sx={{ maxWidth: 420, boxShadow: 1 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={
                      course.coursePhoto ||
                      "https://themes.hibotheme.com/hoco/wp-content/uploads/2023/01/class-2.webp"
                    }
                    alt={course.courseName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {course.courseName}
                    </Typography>

                    <Box>
                      <List aria-label="course details">
                        <ListItem disableGutters>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <ListItemText primary="Date" />
                            <ListItemText
                              primary={course.startDate}
                              sx={{ textAlign: "end" }}
                            />
                          </Box>
                        </ListItem>
                        <Divider component="li" />
                        <ListItem disableGutters>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <ListItemText primary="Duration" />
                            <ListItemText
                              primary={course.courseDuration}
                              sx={{ textAlign: "end" }}
                            />
                          </Box>
                        </ListItem>
                        <Divider component="li" />
                        <ListItem disableGutters>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <ListItemText primary="Instructor" />
                            <ListItemText
                              primary={course.professorName}
                              sx={{ textAlign: "end" }}
                            />
                          </Box>
                        </ListItem>
                        <Divider component="li" />
                        <ListItem disableGutters>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <ListItemText primary="Students" />
                            <ListItemText
                              primary={course.maximumStudents}
                              sx={{ textAlign: "end" }}
                            />
                          </Box>
                        </ListItem>
                      </List>
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link href={`/courses/${course._id}`}>
                    <Button
                      size="small"
                      sx={{ bgcolor: "#132361", mb: "10px", marginLeft: "8px" }}
                    >
                      Enroll Now
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 4,
        }}
      >
        <Pagination
          count={Math.ceil(data.length / coursesPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default AllCourse;
