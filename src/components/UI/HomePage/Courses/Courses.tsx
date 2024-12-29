import { Box, Grid, Button, Stack, Typography } from "@mui/material";
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
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: { xs: 800, md: 800 },

          variant: { xs: "h3", md: "h2" },
          lineHeight: { xs: "1", md: "1" },
          mt: 7,
          mb: 5,
        }}
        component="h1"
      >
        Home Education Courses From <br />
        <span style={{ color: "#ffC53A" }}> Primary</span> To{" "}
        <span style={{ color: "#ffC53A" }}> A levels</span>
      </Typography>
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Link href="/courses">
          <Button
            sx={{
              mt: 1,
              mb: 6,
              py: 1.5,
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
