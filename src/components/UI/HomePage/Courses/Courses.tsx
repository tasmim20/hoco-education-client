import { Box, Grid, Button, Stack, Typography, Container } from "@mui/material";
import CourseCard from "@/components/CourseCard/CourseCard";
import { Course } from "@/types";

import Link from "next/link";

const CoursePage = async () => {
  const res = await fetch(
    "https://hoco-education-server.vercel.app/api/v1/courses",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const courses: Course[] = await res.json();

  return (
    <Stack
      sx={{
        flexGrow: 1,

        mx: 5,
      }}
    >
      <Typography
        color="#132361"
        sx={{
          textAlign: "center",
          fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
          fontWeight: 800,

          variant: { xs: "h3", md: "h2" },
          lineHeight: { xs: "1", md: "1" },
          mt: 5,
          mb: 4,
        }}
        component="h1"
      >
        Home Education Courses From <br />
        <span style={{ color: "#ffC53A" }}> Primary</span> To{" "}
        <span style={{ color: "#ffC53A" }}> A levels</span>
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {courses.slice(0, 4).map((course) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={course._id}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px", // Decreased distance between cards
              }}
            >
              <CourseCard course={course} key={course._id} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5px",
        }}
      >
        <Link href="/courses">
          <Button
            sx={{
              mb: 6,
              py: 1,
              backgroundColor: "#132361",
              color: "#fff",
              fontWeight: 600,
              boxShadow: "none",
              transition: "background-color 0.3s, color 0.3s",
            }}
          >
            View All Courses
          </Button>
        </Link>
      </Box>
    </Stack>
  );
};

export default CoursePage;
