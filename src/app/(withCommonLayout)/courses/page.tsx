import { Box, Grid } from "@mui/material";
import CourseCard from "@/components/CourseCard/CourseCard";
import { Course } from "@/types";

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
    <Box
      sx={{
        flexGrow: 1,

        my: "50px",
      }}
    >
      <Grid container spacing={2}>
        {courses.map((course) => (
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
    </Box>
  );
};

export default CoursePage;
